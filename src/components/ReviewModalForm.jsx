// components/ReviewModalForm.jsx
import { useState } from "react";
import { Modal, Form, Input, Rate, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

//const LOCAL_KEY = "user_reviews";

const ReviewModalForm = ({ open, onClose, onSubmit }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
    const [hover, setHover] = useState(false);



  const handleImageSelect = (file) => {
    setFile(file);
    setPreviewImage(URL.createObjectURL(file));
    return false; // prevent automatic upload
  };

//   const handleSubmit = async (values) => {
//     const newReview = {
//       name: values.name,
//       review: values.review,
//       rating: values.rating || 5,
//       image: previewImage || "/default-avatar.jpg",
//       createdAt: new Date()

//     };
//  try {
//       const res = await fetch("http://namdevshivlingart.vercel.app/api/reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newReview),
//       });

//       if (!res.ok) throw new Error("Failed to submit review");

//       message.success("Review submitted successfully!");
//       form.resetFields();
//       setPreviewImage("");
//       onSubmit(); // refresh parent review list
//       onClose(); // close modal
//     }
//   catch (err) {
//       console.error(err);
//       message.error("Unable to save review at this time. Please try again later.");
//     }
//   };

 const handleSubmit = async (values) => {
    if (!values.name || !values.review) {
      toast.error("Name and review are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("review", values.review);
    formData.append("rating", values.rating || 5);
    if (file) formData.append("image", file);
    try {
      const res = await fetch("http://namdevshivlingart.vercel.app/api/reviews", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to submit review");
        console.log("Response:", res);
     toast.success("Thanks for your review!", {
  duration: 2000,
});

      form.resetFields();
      setFile(null);
      setPreviewImage("");
      onSubmit(); // refresh parent reviews
      onClose();  // close modal
    } catch (err) {
      console.error(err);
      toast.error("Unable to save review at this time. Please try again later.");
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
            beforeUpload={handleImageSelect}
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
    style={{ padding: 0 }}
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
           className={`!bg-gradient-to-r from-[#ffcc70] to-[#ff8c00] text-white font-bold  px-4  text-xs md:text-lg py-3 rounded-lg shadow-lg transition-all transform leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)] ${
                  hover
                    ? "scale-105 shadow-xl"
                    : "hover:scale-105 hover:shadow-lg"
                }`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
          >
             <FaPaperPlane className="inline-block mr-2 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" />  Submit Review
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewModalForm;
