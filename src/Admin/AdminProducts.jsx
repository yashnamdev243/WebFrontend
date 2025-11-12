
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
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { Title, Text } = Typography;

export default function AdminProducts({ galleryItems, refreshGallery }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [uploading, setUploading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [options, setOptions] = useState([]);
  const [imageFile, setImageFile] = useState(null); // ✅ actual file
  const [previewUrl, setPreviewUrl] = useState(""); // ✅ for image preview

  // ✅ handle file select
  const handleUpload = (file) => {
    setImageFile(file);
    setPreviewUrl(URL.createObjectURL(file)); // preview
    return false; // prevent default upload
  };

  const resetForm = () => {
    setProductName("");
    setCategory("");
    setImageFile(null);
    setPreviewUrl("");
    setEditingProduct(null);
  };

  // ✅ ADD / UPDATE product (using multer)
  const handleAddOrEditProduct = async () => {
    if (!productName || !category || (!imageFile && !editingProduct)) {
      message.error("Please provide product name, category, and image");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("name", productName.trim());
      formData.append("category", category);
      if (imageFile) formData.append("image", imageFile);

      const url = editingProduct
        ? `http://localhost:5000/api/products/${editingProduct.id}`
        : "http://localhost:5000/api/products";

      const method = editingProduct ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error("Upload failed");

      message.success(editingProduct ? "Product updated!" : "Product added!");
      setIsModalOpen(false);
      resetForm();
      refreshGallery();
    } catch (err) {
      console.error(err);
      message.error(err.message);
    } finally {
      setUploading(false);
    }
  };

  // ✅ DELETE product
  const handleDeleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      message.success("Product deleted successfully!");
      refreshGallery();
    } catch (err) {
      console.error(err);
      message.error(err.message);
    }
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setProductName(product.name);
    setCategory(product.category);
    setPreviewUrl(`http://localhost:5000${product.image}`); // backend serves static /uploads
    setIsModalOpen(true);
  };

  const handleSearch = (value) => {
    const trimmedValue = value.trim();
    setSearchText(trimmedValue);

    if (!trimmedValue) {
      setOptions([]);
      return;
    }

    const matched = galleryItems
      .filter((item) => item.name.toLowerCase().includes(trimmedValue.toLowerCase()))
      .map((item) => item.name.trim());

    setOptions([...new Set(matched)].map((name) => ({ value: name })));
  };

  const filteredData = galleryItems.filter((item) =>
    item.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
  );

  const formatCategoryTitle = (slug) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const columns = [
    { title: "Name", dataIndex: "name", key: "name", align: "center" },
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
      render: (text) => formatCategoryTitle(text),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text) => (
        <Image
          width={80}
          src={`http://localhost:5000${text}`}
          className="rounded-md"
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => openEditModal(record)}>
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

  return (
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Manage Products
      </Title>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 16,
        }}
      >
        <AutoComplete
          options={options}
          style={{ flex: 1, minWidth: 200, maxWidth: 300 }}
          onSearch={handleSearch}
          onSelect={(value) => setSearchText(value)}
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
          onClick={() => setIsModalOpen(true)}
        >
          Add Product
        </Button>
      </div>

      <Table
        dataSource={filteredData.map((item) => ({ key: item.id, ...item }))}
        columns={columns}
        scroll={{ x: "max-content" }}
        pagination={{ pageSize: 5, showSizeChanger: false }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "custom-odd-row" : "custom-even-row"
        }
      />

      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        footer={[
          <Button key="cancel" onClick={() => { setIsModalOpen(false); resetForm(); }}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleAddOrEditProduct} loading={uploading}>
            {editingProduct ? "Update" : "Create"}
          </Button>,
        ]}
        centered
      >
        <Space direction="vertical" style={{ width: "100%" }} size="middle">
          <div>
            <Text strong>Product Name</Text>
            <Input
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              allowClear
            />
          </div>

          <div>
            <Text strong>Category</Text>
            <Select
              showSearch
              placeholder="Select Category"
              value={category || undefined}
              onChange={setCategory}
              style={{ width: "100%" }}
              allowClear
            >
              <Option value="narmadeshwar-shivling">Narmadeshwar Shivling</Option>
              <Option value="jaldhara">Jaldhara</Option>
              <Option value="nandi">Nandi</Option>
              <Option value="kachua">Kachua</Option>
              <Option value="lord-ganesha">Lord Ganesha</Option>
              <Option value="lord-shiva">Lord Shiva</Option>
              <Option value="shiv-parivar">Shiv Parivar</Option>
              <Option value="others">Others</Option>
            </Select>
          </div>

          <div>
            <Text strong>Product Image</Text>
            <Upload beforeUpload={handleUpload} showUploadList={false} accept="image/*">
              <Button icon={<UploadOutlined />}>
                {editingProduct ? "Change Image" : "Select Image"}
              </Button>
            </Upload>

            {(previewUrl || editingProduct?.image) && (
              <div style={{ marginTop: 12, textAlign: "center" }}>
                <Image
                  width={120}
                  src={previewUrl || `http://localhost:5000${editingProduct?.image}`}
                  style={{ borderRadius: 8 }}
                />
              </div>
            )}
          </div>

          <Divider style={{ margin: "6px 0" }} />
          <Text type="secondary" style={{ fontSize: 12 }}>
            Tip: You can now upload larger images (up to 10MB) using Multer.
          </Text>
        </Space>
      </Modal>
    </div>
  );
}
