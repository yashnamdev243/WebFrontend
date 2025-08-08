// components/ReviewModalForm.jsx
import { useState } from "react";
import { Modal, Form, Input, Rate, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const LOCAL_KEY = "user_reviews";

const ReviewModalForm = ({ open, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [previewImage, setPreviewImage] = useState("");
const [isModalVisible, setIsModalVisible] = useState(false);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
     const handleImageUpload = async (file) => {
    const base64 = await getBase64(file);
    setPreviewImage(base64);
    return false; // prevent Upload from uploading automatically
  };


  const handleSubmit = async (values) => {
    const newReview = {
      name: values.name,
      review: values.review,
      rating: values.rating || 5,
      image: previewImage || "/default-avatar.jpg",
    };
try {
    const stored = localStorage.getItem(LOCAL_KEY);
    const existing = stored ? JSON.parse(stored) : [];
  //  const updated = [newReview, ...existing];
      const trimmed = [newReview, ...existing].slice(0, 20);

    localStorage.setItem(LOCAL_KEY, JSON.stringify(trimmed));

    message.success("Review submitted successfully!");
    form.resetFields();
    setPreviewImage("");
    onSubmit(); // trigger parent update
    onClose(); // close modal
  }
  catch (e) {
      console.error(e);
      message.error("Unable to save review. Storage full or corrupted.");
    }
      };


  return (
    <Modal
      open={open}
      title="📝 Share Your Experience"
    //  onCancel={onClose}
    onCancel={() => {
        form.resetFields();
        setPreviewImage("");
        onClose();
      }}
      footer={null}
      centered
      
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Please enter your name" />
        </Form.Item>

        <Form.Item
          name="rating"
          label="Your Rating"
          initialValue={5}
        >
          <Rate className="text-yellow-400" />
        </Form.Item>

        <Form.Item
          name="review"
          label="Your Review"
          rules={[{ required: true, message: "Please enter a review" }]}
        >
          <Input.TextArea placeholder="Tell us about our service..." rows={4} />
        </Form.Item>

        <Form.Item name="image" label="Upload Image">
          <Upload
            // accept="image/*"
            // showUploadList={false}
            // beforeUpload={async (file) => {
            //   const base64 = await getBase64(file);
            //   form.setFieldValue("image", base64);
            //   setPreviewImage(base64);
            //   return false;
            // }}
             maxCount={1}
            beforeUpload={handleImageUpload}
            showUploadList={false}
            accept="image/*"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>

          {previewImage && (
              <div
      className="w-16 h-16 mt-3 cursor-pointer"
      onClick={() => setIsModalVisible(true)}
    >
            <img
              src={previewImage}
              alt="Preview"
              className="w-16 h-16 mt-3 rounded-full object-cover border shadow"
            />
                </div>

          )}
           <Modal
    open={isModalVisible}
    footer={null}
    onCancel={() => setIsModalVisible(false)}
    centered
    bodyStyle={{ padding: 0 }}
  >
    <img
      src={previewImage}
      alt="Full Preview"
      className="!p-4"
    />
  </Modal>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="!bg-yellow-400 !text-black font-semibold hover:!bg-yellow-500"
          >
            Submit Review
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewModalForm;
