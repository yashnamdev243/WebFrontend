import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  Table,
  Card,
  Row,
  Col,
  message,
  Typography,
  Layout,
  Menu,
  Image,
  Input,
  Button,
  Popconfirm,
  Modal,
  Space,
} from "antd";
import {
  MailOutlined,
  PictureOutlined,
  LogoutOutlined,
  DashboardOutlined,
  StarOutlined,
  ContactsOutlined,
  UserAddOutlined,
  FileImageOutlined,
  EyeOutlined,
  UserOutlined,
  PhoneOutlined,
  MessageOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AdminProducts from "./AdminProducts";
import AdminSlides from "./AdminSlides";
// import AddProductModal from "./AddProductModal";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;
const { Search } = Input;

// ---------------- Dashboard Overview ----------------
function DashboardPage({ contactCount, galleryCount, reviewCount, slideCount }) {
  const navigate = useNavigate();
  const stats = [
    {
      title: "Total Contacts",
      value: contactCount,
      icon: <UserAddOutlined style={{ fontSize: 32, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      route: "/admin/contacts",
    },
    {
      title: "Total Products",
      value: galleryCount,
      icon: <PictureOutlined style={{ fontSize: 32, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      route: "/admin/products",
    },
    {
      title: "Total Reviews",
      value: reviewCount,
      icon: <StarOutlined style={{ fontSize: 32, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      route: "/admin/reviews",
    },
    {
      title: "Total Slides",
      value: slideCount,
      icon: <FileImageOutlined style={{ fontSize: 32, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      route: "/admin/slides",
    },
    // {
    //   title: "Total Products Added",
    //   value: slideCount,
    //   icon: <PlusOutlined style={{ fontSize: 32, color: "#fff" }} />,
    //   gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    //   route: "/admin/productmodal",
    // },
  ];

  return (
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Dashboard Overview
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {stats.map((stat, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              bordered={false}
              onClick={() => stat.route && navigate(stat.route)}
              style={{
                textAlign: "center",
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                background: stat.gradient,
                color: "#fff",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              hoverable={!!stat.route}
            >
              <div className="flex flex-col items-center justify-center gap-3 p-4">
                {stat.icon}
                <h2 style={{ fontSize: 28, fontWeight: "bold", margin: 0 }}>
                  {stat.value}
                </h2>
                <p style={{ fontSize: 16, opacity: 0.9 }}>{stat.title}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

// ---------------- Contacts Page ----------------
function ContactsPage({ contacts, loading, onDelete }) {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const filteredContacts = contacts.filter((contact) =>
    Object.values(contact)
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: "S.No",
      key: "serial",
      render: (_, __, index) => index + 1,
      width: 70,
      align: "center",
    },
    { title: "Name", dataIndex: "name", key: "name", align: "center" },
    { title: "Contact", dataIndex: "contact", key: "contact", align: "center" },
    { title: "Message", dataIndex: "message", key: "message", align: "center" },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (_, record) => (
        <div className="flex gap-2 justify-center">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedContact(record);
              setIsModalOpen(true);
            }}
          >
            View
          </Button>
          <Popconfirm
            title="Are you sure to delete this contact?"
            onConfirm={() => onDelete(record.id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ danger: true }}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Contact Submissions
      </Title>
      <div style={{ maxWidth: 400, margin: "0 auto 20px" }}>
        <Search
          placeholder="Search here"
          allowClear
          onSearch={(v) => setSearchText(v)}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <Table
        dataSource={filteredContacts}
        columns={columns}
        rowKey="id"
        bordered
        loading={loading}
        pagination={{
          pageSize: 5,
          showTotal: (total) => `Total ${total} contacts`,
        }}
        components={{
          header: {
            cell: (props) => (
              <th
                {...props}
                style={{
                  background: "#274b6b",
                  color: "white",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              />
            ),
          },
        }}
      />

      {/* View Modal */}
      <Modal
        open={isModalOpen}
        footer={null}
        closable={false}
        centered
        onCancel={() => setIsModalOpen(false)}
      >
        {selectedContact && (
          <div className="overflow-hidden rounded-xl">
            <div className="bg-[#274b6b] text-white py-3 px-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold m-0">Contact Details</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-red-400"
              >
                <CloseOutlined />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <p>
                <UserOutlined /> <b>Name:</b> {selectedContact.name}
              </p>
              <p>
                <PhoneOutlined /> <b>Contact:</b> {selectedContact.contact}
              </p>
              <p>
                <MessageOutlined /> <b>Message:</b> {selectedContact.message}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

// ---------------- Reviews Page ----------------
function ReviewsPage({ reviews, loading }) {

    const [replyModalOpen, setReplyModalOpen] = useState(false);
const [currentReview, setCurrentReview] = useState(null);
const [replyText, setReplyText] = useState("");

  // Fetch all reviews
  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/reviews");
      const data = await res.json();
      setReviews(data);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

const openReplyModal = (review) => {
    console.log("Opening reply modal for review:", review);

  setCurrentReview(review);
  setReplyText(review.reply || "");
  setReplyModalOpen(true);
};



// const saveReply = async () => {
//     if (!replyText) {
//       message.error("Reply cannot be empty");
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:5000/api/reviews/${currentReview.id}/reply`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ reply: replyText }),
//       });
//       if (!res.ok) throw new Error("Failed to save reply");
//       message.success("Reply saved!");
//       setReplyModalOpen(false);
//       fetchReviews();
//     } catch (err) {
//       console.error(err);
//       message.error("Failed to save reply");
//     }
//   };

const saveReply = async () => {
    if (!currentReview) return;
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${currentReview.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reply: replyText }),
      });

      if (!res.ok) throw new Error("Failed to save reply");
      message.success("Reply saved successfully!");
      setReplyModalOpen(false);
      fetchReviews();
    } catch (err) {
      console.error(err);
      message.error("Unable to save reply. Try again.");
    }
  };
  const handleDeleteReview = async (id) => {
  try {
    await fetch(`http://localhost:5000/api/reviews/${id}`, { method: "DELETE" });
    message.success("Review deleted successfully!");
    fetchReviews(); // refresh table
  } catch (err) {
    console.error(err);
    message.error("Failed to delete review");
  }
};

  const columns = [
    { title: "Name", dataIndex: "name", key: "name", align: "center" },
    { title: "Rating", dataIndex: "rating", key: "rating", align: "center" },
    { title: "Review", dataIndex: "review", key: "review", align: "center" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text) =>
        text ? <Image width={80}  src={`http://localhost:5000${text}`}  className="flex justify-center" /> : "NA",
    },
  
  { title: "Reply", dataIndex: "reply", key: "reply", align: "center" },
  {
    title: "Actions",
    key: "actions",
    align: "center",
    render: (_, record) => (
      <div className="flex justify-center gap-2">
        <Button
          icon={<EditOutlined />}
          onClick={() => openReplyModal(record)}
        >
          Reply
        </Button>

        <Popconfirm
          title="Are you sure to delete this review?"
          okText="Yes"
          cancelText="No"
          okButtonProps={{ danger: true }}
          onConfirm={() => handleDeleteReview(record.id)}
        >
          <Button danger icon={<DeleteOutlined />}>Delete</Button>
        </Popconfirm>
      </div>
    ),
  },


  ];
  
  return (
    
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        User Reviews
      </Title>
      <Table
        dataSource={reviews}
        columns={columns}
        rowKey="id"
        bordered
        loading={loading}
        pagination={{
          pageSize: 5,
          showTotal: (total) => `Total ${total} reviews`,
        }}
      />
     
 <Modal
        title={`Reply to Review by ${currentReview?.name}`}
        open={replyModalOpen}
        onCancel={() => setReplyModalOpen(false)}
        onOk={saveReply}
        okText="Save Reply"
        centered
      >
        <div className="flex flex-col gap-4">
          {currentReview?.image && (
            <Image
              src={`http://localhost:5000${currentReview.image}`}
              width={120}
              alt="Review Image"
            />
          )}
          <p><strong>Rating:</strong> {currentReview?.rating} ★</p>
          <p><strong>Review:</strong> {currentReview?.review}</p>

          <Input.TextArea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply here..."
            rows={4}
          />
        </div>
      </Modal>
    </div>
    
  );
}

// ---------------- Main Admin Dashboard ----------------
export default function AdminDashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [slides, setSlides] = useState([]);
  // const [ productmodal, setProductmodal] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    message.success("Logged out successfully");
    navigate("/admin-login");
  };

  // Fetch all data
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [contactsRes, galleryRes, reviewsRes, slidesRes] =
          await Promise.all([
            fetch("http://localhost:5000/api/contacts").then((r) => r.json()),
            fetch("http://localhost:5000/api/products").then((r) => r.json()),
            fetch("http://localhost:5000/api/reviews").then((r) => r.json()),
            fetch("http://localhost:5000/api/slides").then((r) => r.json()),
            // fetch(`http://localhost:5000/api/products/${id}`).then((r) => r.json()),
          ]);
        setContacts(contactsRes);
        setGalleryItems(galleryRes);
        setReviews(reviewsRes);
        setSlides(slidesRes);
        // setProductmodal(productmodalRes);
      } catch (err) {
        console.error(err);
        message.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleDeleteContact = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/contacts/${id}`, {
        method: "DELETE",
      });
      setContacts((prev) => prev.filter((c) => c.id !== id));
      message.success("Contact deleted successfully");
    } catch (err) {
      console.error(err);
      message.error("Failed to delete contact");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ position: "fixed", left: 0, top: 0, bottom: 0 }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#001529",
          }}
        >
          <img
            src="/namdevshivling.png"
            alt="Logo"
            style={{ maxHeight: 60, maxWidth: "110%" }}
          />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => navigate(`/admin/${e.key}`)}
          items={[
            { key: "", icon: <DashboardOutlined />, label: "Dashboard" },
            { key: "contacts", icon: <ContactsOutlined />, label: "Contacts" },
            { key: "products", icon: <PictureOutlined />, label: "Products" },
            { key: "reviews", icon: <StarOutlined />, label: "Reviews" },
            { key: "slides", icon: <FileImageOutlined />, label: "Slides" },
            // { key: "productmodal", icon: <PlusOutlined />, label: "Add Product" },
            { key: "logout", icon: <LogoutOutlined />, label: "Logout", onClick: handleLogout },
          ]}
        />
      </Sider>

      {/* Main Content */}
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: "all 0.2s" }}>
        <Header
          style={{
            position: "fixed",
            top: 0,
            left: collapsed ? 80 : 200,
            right: 0,
            height: 64,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Admin Panel
        </Header>

        <Content style={{ marginTop: 64, padding: 16 }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 8,
              minHeight: "calc(100vh - 64px)",
              padding: 16,
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <DashboardPage
                    contactCount={contacts.length}
                    galleryCount={galleryItems.length}
                    reviewCount={reviews.length}
                    slideCount={slides.length}
                    // productmodal={productmodal.length}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <ContactsPage
                    contacts={contacts}
                    loading={loading}
                    onDelete={handleDeleteContact}
                  />
                }
              />
              <Route
                path="/products"
                element={
                  <AdminProducts
                    galleryItems={galleryItems}
                    refreshGallery={() => {}}
                  />
                }
              />
              <Route
                path="/reviews"
                element={<ReviewsPage reviews={reviews} loading={loading} />}
              />
              <Route
                path="/slides"
                element={<AdminSlides slides={slides} />}
              />
                {/* <Route path="/productmodal" element={<AddProductModal productmodal={productmodal} />} /> */}
            </Routes>
              

          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

