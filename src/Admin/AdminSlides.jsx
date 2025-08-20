import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Upload,
  InputNumber,
  Form,
  Modal,
  Image,
  message,
  Space,
  Typography,
  Popconfirm,
} from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";

const { Title, Text } = Typography;

export default function AdminSlides() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);
  const [fileBase64, setFileBase64] = useState("");
  const [form] = Form.useForm();

  // ---- helpers ----
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const handleUpload = async (file) => {
    const base64 = await getBase64(file);
    setFileBase64(base64);
    return false; // prevent default upload
  };

  const resetForm = () => {
    form.resetFields();
    setEditingSlide(null);
    setFileBase64("");
  };

  // ---- data ----
  const fetchSlides = async () => {
    setLoading(true);
    const q = query(collection(db, "slides"), orderBy("order"));
    const snap = await getDocs(q);
    setSlides(snap.docs.map((d) => ({ key: d.id, id: d.id, ...d.data() })));
    setLoading(false);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  // ---- create / update ----
  const handleAddOrEdit = async () => {
    try {
      const values = await form.validateFields();

      if (!editingSlide && !fileBase64) {
        message.error("Please upload an image");
        return;
      }

      if (editingSlide) {
        const ref = doc(db, "slides", editingSlide.id);
        await updateDoc(ref, {
          order: values.order,
          src: fileBase64 || editingSlide.src, // keep old image if not replaced
        });
        message.success("Slide updated successfully!");
      } else {
        await addDoc(collection(db, "slides"), {
          order: values.order,
          src: fileBase64,
        });
        message.success("Slide added successfully!");
      }

      setIsModalOpen(false);
      resetForm();
      fetchSlides();
    } catch (err) {
      if (err?.errorFields) return; // form validation error already shown
      console.error(err);
      message.error("Failed to save slide");
    }
  };

  // ---- delete ----
  const handleDeleteSlide = async (id) => {
    try {
      await deleteDoc(doc(db, "slides", id));
      message.success("Slide deleted successfully!");
      fetchSlides();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete slide");
    }
  };

  const openEditModal = (record) => {
    setEditingSlide(record);
    setFileBase64("");
    form.setFieldsValue({ order: record.order });
    setIsModalOpen(true);
  };

  // ---- table ----
  const columns = [
    {
      title: "S.No",
      key: "serial",
      render: (_, __, index) => index + 1, 
      width: 80,
      align: "center",
    },  

   { title: "Order", dataIndex: "order", key: "order" ,    align: "center",
},



    {
      title: "Image",
      dataIndex: "src",
      key: "src",
      render: (src) =>(       <div className="flex justify-center">
 <Image src={src} width={100} className="rounded-md" />   </div>
    ),
    },


 

    {
      title: "Actions",
      key: "actions",
          align: "center",

      render: (_, record) => (
        <div className="flex justify-center space-x-2">
          <Button icon={<EditOutlined />} onClick={() => openEditModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this slide?"
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
            onConfirm={() => handleDeleteSlide(record.id || record.key)}
          >
            <Button danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
           <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Manage Slides
      </Title>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 mb-4">
       
      
        <Button
          type="primary"
          icon={<PictureOutlined />}
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
            
          }}
          
        >
          Add Slide
        </Button>
      </div>

      <Table
        dataSource={slides}
        columns={columns}
        loading={loading}
        rowKey="id"
      pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showTotal: (total) => (
            <p>
              Total <span className="font-semibold">{total}</span> Slides
            </p>
          ),
          className: "mx-4 custom-pagination",
          responsive: true,
          onChange: () => {
            window.scrollTo({ top: 250, behavior: "smooth" });
          },
        }}
        scroll={{ x: "max-content" }} // mobile friendly
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
        open={isModalOpen}
     
          title={
    <Title
      level={4}
      style={{
        margin: 12,
        textAlign: "center",
        backgroundColor: "#096dd9", 
        color: "#fff",
        borderRadius: 6,
        padding: 6,
      }}
    >
       {editingSlide ? "Edit Slide" : "Add Slide"}
    </Title>
  }

        onCancel={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        onOk={handleAddOrEdit}
        okText={editingSlide ? "Update" : "Create"}
okButtonProps={{
    style: {
      backgroundColor: "#096dd9",
      borderColor: "#096dd9",
      color: "#fff",
      borderRadius: 6,
      padding: "4px 20px",
    },
  }}
    cancelText="Cancel"
  bodyStyle={{ padding: "20px 24px" }}

  centered
    footer={[
    <div key="modal-footer" style={{ textAlign: "center", width: "100%" }}>
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
          color: "#fff",
          marginLeft: 8,
          borderRadius: 6,
        }}
        onClick={handleAddOrEdit}
      >
        {editingSlide ? "Update" : "Create"}
      </Button>
    </div>,
  ]}

      >
          <Space direction="vertical" style={{ width: "100%" }} size="middle">

        <Form form={form} layout="vertical">
          <Form.Item
            name="order"
        label={<Text strong>Slide Order</Text>}
            rules={[{ required: true, message: "Please enter order number" }]}
          >
            <InputNumber min={1} className="w-full"           style={{ borderRadius: 6, padding: "6px 12px" }}
/>
          </Form.Item>

      <Form.Item label={<Text strong>Slide Image</Text>}>
            <Upload
              beforeUpload={handleUpload}
              showUploadList={false}
              accept="image/*"
                            style={{ width: "100%" }}

            >
              <Button icon={<UploadOutlined />}           
>
                {editingSlide ? "Change Image" : "Select Image"}
              </Button>
            </Upload>

            {(fileBase64 || editingSlide?.src) && (
<div
            style={{
              marginTop: 16,
              textAlign: "center",
              border: "1px dashed #d9d9d9",
              padding: 12,
              borderRadius: 6,
              background: "#fafafa",
            }}
          >                <Text type="secondary" style={{ display: "block",marginBottom: 8  }}>
                  Preview
                </Text>
                <Image
                  width={140}
                  src={fileBase64 || editingSlide?.src}
              style={{ borderRadius: 6, objectFit: "cover", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
                />
              </div>
            )}
          </Form.Item>
        </Form>
          </Space>

      </Modal>
    </div>
  );
}
