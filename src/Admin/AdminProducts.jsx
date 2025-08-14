// import { useState } from "react";
// import { Table, Button, Modal, Input, Upload, message, Image } from "antd";
// import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../firebase";

// export default function AdminProducts({ galleryItems, refreshGallery }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [productName, setProductName] = useState("");
//   const [imageBase64, setImageBase64] = useState("");
//   const [uploading, setUploading] = useState(false);

//   const handleUpload = (file) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImageBase64(reader.result); // This is the Base64 string
//     };
//     reader.readAsDataURL(file);
//     return false; // prevent default upload
//   };

//   const handleAddProduct = async () => {
//     if (!productName || !imageBase64) {
//       message.error("Please provide product name and image");
//       return;
//     }
//     setUploading(true);
//     try {
//       await addDoc(collection(db, "products"), {
//         title: productName,
//         image: imageBase64
//       });
//       message.success("Product added successfully!");
//       setProductName("");
//       setImageBase64("");
//       setIsModalOpen(false);
//       refreshGallery(); // refresh the list in dashboard
//     } catch (err) {
//       console.error(err);
//       message.error("Failed to add product");
//     } finally {
//       setUploading(false);
//     }
//   };

//   const columns = [
//     { title: "Name", dataIndex: "title", key: "title" },
//     {
//       title: "Image",
//       dataIndex: "image",
//       key: "image",
//       render: (text) => <Image width={80} src={text} />
//     }
//   ];

//   return (
//     <div>
//       <Button
//         type="primary"
//         icon={<PlusOutlined />}
//         style={{ marginBottom: 16 }}
//         onClick={() => setIsModalOpen(true)}
//       >
//         Add Product
//       </Button>

//       <Table
//         dataSource={galleryItems.map((item) => ({ key: item.id, ...item }))}
//         columns={columns}
//       />

//       <Modal
//         title="Add Product"
//         open={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         onOk={handleAddProduct}
//         confirmLoading={uploading}
//       >
//         <Input
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//           style={{ marginBottom: 16 }}
//         />
//         <Upload
//           beforeUpload={handleUpload}
//           showUploadList={false}
//           accept="image/*"
//         >
//           <Button icon={<UploadOutlined />}>Select Image</Button>
//         </Upload>
//         {imageBase64 && (
//           <div style={{ marginTop: 16 }}>
//             <Image width={100} src={imageBase64} />
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }


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
} from "antd";
import {
  AppstoreAddOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const { Option } = Select;
const { Title, Text } = Typography;

export default function AdminProducts({ galleryItems, refreshGallery }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState(""); // new category state
  const [imageBase64, setImageBase64] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImageBase64(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
    return false; // prevent default upload
  };

  const handleAddProduct = async () => {
    if (!productName || !imageBase64 || !category) {
      message.error("Please provide product name, category, and image");
      return;
    }
    setUploading(true);
    try {
      await addDoc(collection(db, "products"), {
        name: productName,
        category,
        image: imageBase64,
      });
      message.success("Product added successfully!");
      setProductName("");
      setCategory("");
      setImageBase64("");
      setIsModalOpen(false);
      refreshGallery(); // refresh the list
    } catch (err) {
      console.error(err);
      message.error("Failed to add product");
    } finally {
      setUploading(false);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => <Image width={80} src={text} />,
    },
  ];
  const formatCategoryTitle = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<AppstoreAddOutlined />}
        style={{
          marginBottom: 16,
          backgroundColor: "#28a745", // green
          borderColor: "#28a745",
          color: "#fff",
          borderRadius: 6,
          fontWeight: 500,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#218838")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#28a745")
        }
        onClick={() => setIsModalOpen(true)}
      >
        Add Product
      </Button>

      <Table
        dataSource={galleryItems.map((item) => ({ key: item.id, ...item }))}
        columns={columns}
        scroll={{ x: "max-content" }} // Horizontal scroll for small screens
      />

      <Modal
        title={
          <Title
            level={4}
            style={{
              margin: 12,
              textAlign: "center",
              backgroundColor: "green",
              color: "#ffff",
              borderRadius: 6,
              padding: 4,
            }}
          >
            {" "}
            Add Product
          </Title>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddProduct}
        okText="Create"
        okButtonProps={{
          style: {
            backgroundColor: "green",
            borderColor: "green",
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
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "green",
                borderColor: "green",
                marginLeft: 8,
                color: "#ffff",
              }}
              loading={uploading}
              onClick={handleAddProduct}
            >
              Create
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
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>

            {imageBase64 && (
              <div style={{ marginTop: 12, textAlign: "center" }}>
                <Image
                  width={120}
                  src={imageBase64}
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
