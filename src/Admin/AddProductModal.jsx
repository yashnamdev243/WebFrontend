// import { useState } from "react";
// import { Modal, Button, Upload, Input, message } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
// import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

// export default function AddProductModal({ visible, onClose, onAdded }) {
//   const [file, setFile] = useState(null);
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async () => {
//     if (!file || !name) {
//       message.warning("Please provide a name and select an image.");
//       return;
//     }
//     setLoading(true);
//     try {
//       const storage = getStorage();
//       const storageRef = ref(storage, `products/${file.name}`);

//       // Convert file to Base64
//       const base64 = await new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file); // converts to base64
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = (err) => reject(err);
//       });

//       // Upload Base64 string
//       await uploadString(storageRef, base64, "data_url");

//       // Get download URL
//       const url = await getDownloadURL(storageRef);

//       // Save metadata to Firestore
//       await addDoc(collection(db, "products"), {
//         name,
//         imageUrl: url,
//         createdAt: new Date()
//       });

//       message.success("Product added successfully!");
//       setFile(null);
//       setName("");
//       onAdded(); // refresh gallery in parent
//       onClose();
//     } catch (err) {
//       console.error(err);
//       message.error("Failed to upload product");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal
//       visible={visible}
//       title="Add New Product"
//       onCancel={onClose}
//       onOk={handleUpload}
//       confirmLoading={loading}
//     >
//       <Input
//         placeholder="Product Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ marginBottom: 10 }}
//       />
//       <Upload
//         beforeUpload={(file) => {
//           setFile(file);
//           return false; // prevent auto upload
//         }}
//         maxCount={1}
//       >
//         <Button icon={<UploadOutlined />}>Select Image</Button>
//       </Upload>
//     </Modal>
//   );
// }


