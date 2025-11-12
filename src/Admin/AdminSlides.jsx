
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
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  PictureOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function AdminSlides() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();

  // ---- fetch slides ----
  const fetchSlides = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/slides");
      const data = await res.json();
      setSlides(data.map((d) => ({ key: d.id, ...d })));
    } catch (err) {
      console.error(err);
      message.error("Failed to fetch slides");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const resetForm = () => {
    form.resetFields();
    setEditingSlide(null);
    setFile(null);
  };

  // ---- add / edit slide ----
  const handleAddOrEdit = async () => {
    try {
      const values = await form.validateFields();

      const formData = new FormData();
      formData.append("order", values.order);
      if (file) formData.append("image", file);

      if (editingSlide) {
        await fetch(`http://localhost:5000/api/slides/${editingSlide.id}`, {
          method: "PUT",
          body: formData,
        });
        message.success("Slide updated successfully!");
      } else {
        if (!file) {
          message.error("Please upload an image");
          return;
        }
        await fetch("http://localhost:5000/api/slides", {
          method: "POST",
          body: formData,
        });
        message.success("Slide added successfully!");
      }

      setIsModalOpen(false);
      resetForm();
      fetchSlides();
    } catch (err) {
      console.error(err);
      message.error("Failed to save slide");
    }
  };

  // ---- delete slide ----
  const handleDeleteSlide = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/slides/${id}`, { method: "DELETE" });
      message.success("Slide deleted successfully!");
      fetchSlides();
    } catch (err) {
      console.error(err);
      message.error("Failed to delete slide");
    }
  };

  const openEditModal = (record) => {
    setEditingSlide(record);
    setFile(null);
    form.setFieldsValue({ order: record.order });
    setIsModalOpen(true);
  };

  const columns = [
    { title: "S.No", key: "serial", render: (_, __, index) => index + 1, align: "center" },
    { title: "Order", dataIndex: "order", key: "order", align: "center" },
    {
      title: "Image",
      dataIndex: "src",
      key: "src",
      render: (src) => (
        <div className="flex justify-center">
          <Image src={`http://localhost:5000${src}`} width={100} />
        </div>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button icon={<EditOutlined />} onClick={() => openEditModal(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this slide?"
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
            onConfirm={() => handleDeleteSlide(record.id || record.key)}
          >
            <Button danger icon={<DeleteOutlined />}>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>Manage Slides</Title>

      <div className="flex justify-end mb-4">
        <Button
          type="primary"
          icon={<PictureOutlined />}
          onClick={() => { resetForm(); setIsModalOpen(true); }}
        >
          Add Slide
        </Button>
      </div>

      <Table
        dataSource={slides}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 5, showSizeChanger: false }}
      />

      <Modal
        open={isModalOpen}
        title={editingSlide ? "Edit Slide" : "Add Slide"}
        onCancel={() => { setIsModalOpen(false); resetForm(); }}
        onOk={handleAddOrEdit}
        okText={editingSlide ? "Update" : "Create"}
        centered
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="order"
            label={<Text strong>Slide Order</Text>}
            rules={[{ required: true, message: "Please enter order number" }]}
          >
            <InputNumber min={1} className="w-full" />
          </Form.Item>

          <Form.Item label={<Text strong>Slide Image</Text>}>
            <Upload
              beforeUpload={(file) => { setFile(file); return false; }}
              showUploadList={false}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>
                {editingSlide ? "Change Image" : "Select Image"}
              </Button>
            </Upload>

            {(file || editingSlide?.src) && (
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <Text type="secondary" style={{ display: "block", marginBottom: 8 }}>Preview</Text>
                <Image
                  width={140}
                  src={file ? URL.createObjectURL(file) : `http://localhost:5000${editingSlide.src}`}
                />
              </div>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
