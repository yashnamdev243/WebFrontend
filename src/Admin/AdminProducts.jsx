import { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Input,
  Upload,
  message,
  Image,
  Select,
  Typography,
  Space,
  Divider,
  Popconfirm,
  AutoComplete,
} from "antd";
import {
  AppstoreAddOutlined,
  PlusOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const { Option } = Select;
const { Title, Text } = Typography;
const { Search } = Input;

export default function AdminProducts({ galleryItems, refreshGallery }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState(""); // new category state
  const [imageBase64, setImageBase64] = useState("");
  const [uploading, setUploading] = useState(false);
  // ✅ filter + search states
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [options, setOptions] = useState([]);
  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImageBase64(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
    return false; // prevent default upload
  };
  const resetForm = () => {
    setProductName("");
    setCategory("");
    setImageBase64("");
    setEditingProduct(null);
  };
  const handleAddOrEditProduct = async () => {
    // if (!productName || !imageBase64 || !category) {
    if (!productName || !category || (!imageBase64 && !editingProduct)) {
      message.error("Please provide product name, category, and image");
      return;
    }
    setUploading(true);
    //   try {
    //     await addDoc(collection(db, "products"), {
    //       name: productName,
    //       category,
    //       image: imageBase64,
    //     });
    //     message.success("Product added successfully!");
    //     setProductName("");
    //     setCategory("");
    //     setImageBase64("");
    //     setIsModalOpen(false);
    //     refreshGallery(); // refresh the list
    //   } catch (err) {
    //     console.error(err);
    //     message.error("Failed to add product");
    //   } finally {
    //     setUploading(false);
    //   }
    // };

    try {
      if (editingProduct) {
        // Update existing product
        const productRef = doc(db, "products", editingProduct.id);
        await updateDoc(productRef, {
          name: productName.trim(),
          category,
          image: imageBase64 || editingProduct.image, // keep old image if not changed
        });
        message.success("Product updated successfully!");
      } else {
        // Add new product
        await addDoc(collection(db, "products"), {
          name: productName.trim(),
          category,
          image: imageBase64,
        });
        message.success("Product added successfully!");
      }

      resetForm();
      setIsModalOpen(false);
      refreshGallery();
    } catch (err) {
      console.error(err);
      message.error("Failed to save product");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      message.success("Product deleted successfully!");
      refreshGallery();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete product");
    }
  };
  const openEditModal = (product) => {
    setEditingProduct(product);
    setProductName(product.name);
    setCategory(product.category);
    setImageBase64(product.image);
    setIsModalOpen(true);
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" ,align: "center",},
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
      filters: [
        { text: "Narmadeshwar Shivling", value: "narmadeshwar-shivling" },
        { text: "Jaldhara", value: "jaldhara" },
        { text: "Nandi", value: "nandi" },
        { text: "Kachua", value: "kachua" },
        { text: "Lord Ganesha", value: "lord-ganesha" },
        { text: "Lord Shiva", value: "lord-shiva" },
        { text: "Shiv Parivar", value: "shiv-parivar" },
        { text: "Others", value: "others" },
      ],
      onFilter: (value, record) => record.category === value,
      render: (text) =>
        text
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text) => <Image width={80} src={text} className="rounded-md" />,
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EditOutlined />}
            type="default"
            onClick={() => openEditModal(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDeleteProduct(record.id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleSearch = (value) => {
    const trimmedValue = value.trim(); // remove leading/trailing spaces

    setSearchText(trimmedValue);

    if (!trimmedValue) {
      setOptions([]);
      return;
    }

    // match names
    const matched = galleryItems
      .filter((item) =>
        item.name.toLowerCase().includes(trimmedValue.toLowerCase())
      )
      .map((item) => item.name.trim());

    // remove duplicates using Set
    const unique = [...new Set(matched)].map((name) => ({ value: name }));

    setOptions(unique);
  };

  // 🔎 Filter products by search text
  const filteredData = galleryItems.filter((item) =>
    item.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
  );
  const formatCategoryTitle = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
        <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Manage Products
      </Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <AutoComplete
          options={options}
          style={{ flex: 1, minWidth: 200, maxWidth: 300 }}
          onSearch={handleSearch}
          onSelect={(value) => setSearchText(value)} // pick suggestion
        >
          <Input.Search
            placeholder="Search products"
            allowClear
            enterButton
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: "100%" }}
          />
        </AutoComplete>

        <Button
          type="primary"
          icon={<AppstoreAddOutlined />}
          
          // style={{
          //   minWidth: 120,
          //   backgroundColor: "#28a745", // #096dd9
          //   borderColor: "#28a745",
          //   color: "#fff",
          //   borderRadius: 6,
          //   fontWeight: 500,
          //   whiteSpace: "nowrap",
          // }}
          // onMouseEnter={(e) =>
          //   (e.currentTarget.style.backgroundColor = "#218838")
          // }
          // onMouseLeave={(e) =>
          //   (e.currentTarget.style.backgroundColor = "#28a745")
          // }
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </Button>
      </div>
      <Table
        dataSource={filteredData.map((item) => ({ key: item.id, ...item }))}
        columns={columns}
        scroll={{ x: "max-content" }}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showTotal: (total) => (
            <p>
              Total <span className="font-semibold">{total}</span> Products
            </p>
          ),
          className: "mx-4 custom-pagination",
          responsive: true,
          onChange: () => {
            window.scrollTo({ top: 250, behavior: "smooth" });
          },
        }}
        onChange={(pagination, filters, sorter) => {
          console.log("Filters applied:", filters);
        }} // Horizontal scroll for small screens
        className="custom-table"
        rowClassName={(_, index) =>
          index % 2 === 0 ? "custom-odd-row" : "custom-even-row"
        }
        components={{
          header: {
            cell: (props) => (
              <th
                {...props}
                style={{
                  backgroundColor: "#274b6b",
                  color: "white",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              />
            ),
          },
        }}
      />

      <Modal
        title={
          <Title
            level={4}
            style={{
              margin: 12,
              textAlign: "center",
              backgroundColor: "#096dd9",
              color: "#ffff",
              borderRadius: 6,
              padding: 4,
            }}
          >
            {" "}
            {editingProduct ? "Edit Product" : "Add Product"}
          </Title>
        }
        open={isModalOpen}
        //  onCancel={() => setIsModalOpen(false)}
        onCancel={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        // onOk={handleAddProduct}
        onOk={handleAddOrEditProduct}
        // okText="Create"
        okText={editingProduct ? "Update" : "Create"}
        okButtonProps={{
          style: {
            backgroundColor: "#096dd9",
            borderColor: "#096dd9",
            color: "#fff",
          },
        }}
        cancelText="Cancel"
        confirmLoading={uploading}
        centered
        bodyStyle={{ padding: "20px 24px" }}
        footer={[
          <div
            style={{ textAlign: "center", width: "100%" }}
            key="modal-footer"
          >
            {/* <Button onClick={() => setIsModalOpen(false)}>Cancel</Button> */}
            <Button
              onClick={() => {
                setIsModalOpen(false);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "#096dd9",
                borderColor: "#096dd9",
                marginLeft: 8,
                color: "#ffff",
              }}
              loading={uploading}
              //onClick={handleAddProduct}
              onClick={handleAddOrEditProduct}
            >
              {editingProduct ? "Update" : "Create"}
            </Button>
          </div>,
        ]}
      >
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          {/* Product Name */}
          <div>
            <Text strong>Product Name</Text>
            <Input
              placeholder="Enter product name"
              value={formatCategoryTitle(productName)}
              onChange={(e) => setProductName(e.target.value)}
              allowClear
            />
          </div>
          {/* Category */}
          <div>
            <Text strong>Category</Text>
            <Select
              showSearch
              placeholder="Select Category"
              value={category || undefined}
              onChange={(value) => setCategory(value)}
              style={{ width: "100%" }}
              allowClear
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.children ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            >
              <Option value="narmadeshwar-shivling">
                narmadeshwar-shivling
              </Option>
              <Option value="jaldhara">jaldhara</Option>
              <Option value="nandi">nandi</Option>
              <Option value="kachua">kachua</Option>
              <Option value="lord-ganesha">lord-ganesha</Option>
              <Option value="lord-shiva">lord-shiva</Option>
              <Option value="shiv-parivar">shiv-parivar</Option>
              <Option value="others">others</Option>
            </Select>
          </div>
          {/* Image Upload */}
          <div>
            <Text strong>Product Image{"    "}</Text>
            <Upload
              beforeUpload={handleUpload}
              showUploadList={false}
              accept="image/*"
              style={{ width: "100%" }}
            >
              <Button icon={<UploadOutlined />}>
                {" "}
                {editingProduct ? "Change Image" : "Select Image"}
              </Button>
            </Upload>

            {/* {imageBase64 && ( */}
            {(imageBase64 || editingProduct?.image) && (
              <div style={{ marginTop: 12, textAlign: "center" }}>
                <Image
                  width={120}
                  // src={imageBase64}
                  src={imageBase64 || editingProduct?.image}
                  style={{
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
            )}
          </div>
          <Divider style={{ margin: "6px 0" }} />

          <Text type="secondary" style={{ fontSize: 12 }}>
            Tip: Keep product names short and images below 500KB for better
            performance.
          </Text>
        </Space>
      </Modal>
    </div>
  );
}
