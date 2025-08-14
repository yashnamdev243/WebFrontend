import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { collection, getDocs , deleteDoc, doc, updateDoc  } from "firebase/firestore";
import { db } from "../firebase";
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
} from "antd";
import {
  MailOutlined,
  PictureOutlined,
  LogoutOutlined,
  DashboardOutlined,
  StarOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import AdminProducts from "./AdminProducts";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

// Dashboard Page (Stats)
function DashboardPage({ contactCount, galleryCount, reviewCount }) {
  return (
    <div>
      <Title level={3} style={{ textAlign: "center" }}>Dashboard</Title>
      <Row gutter={16}  justify="center" style={{ marginTop: 20 }}>
  <Col xs={24} sm={8} md={6} lg={6}>
          <Card title="Total Contacts" bordered style={{ textAlign: "center" }}>
            <h2 >{contactCount}</h2>
          </Card>
        </Col>
  <Col xs={24} sm={8} md={6} lg={6}>
          <Card title="Total Product Images" bordered style={{ textAlign: "center" }} >
            <h2>{galleryCount}</h2>
          </Card>
        </Col>
  <Col xs={24} sm={8} md={6} lg={6}>
          <Card title="Total Reviews" bordered style={{ textAlign: "center" }}>
            <h2>{reviewCount}</h2>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// Contacts Page
function ContactsPage({ contacts, loading }) {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    { title: "Message", dataIndex: "message", key: "message" },
  ];
  return (
    <div>
      <Title level={3} style={{ textAlign: "center" }}>Contact Form Submissions</Title>
      <Table
        dataSource={contacts}
        columns={columns}
        loading={loading}
        bordered
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }} // Horizontal scroll for small screens

      />
    </div>
  );
}

// Add this ReviewsPage component above AdminDashboard
function ReviewsPage({ reviews, loading }) {
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Rating", dataIndex: "rating", key: "rating" },
    { title: "Review", dataIndex: "review", key: "review" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => text && <Image width={80} src={text} />,
    },
    
  ];

  return (
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>User Reviews</Title>
      <Table
        dataSource={reviews}
        columns={columns}
        loading={loading}
        bordered
        
        scroll={{ x: "max-content" }} // Horizontal scroll for small screens

      />
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    message.success("Logged out successfully");
    navigate("/admin-login");
  };

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Contacts
        const contactSnap = await getDocs(collection(db, "contacts"));
        setContacts(
          contactSnap.docs.map((doc) => ({ key: doc.id, ...doc.data() }))
        );

        // Gallery
        const gallerySnap = await getDocs(collection(db, "products"));
        setGalleryItems(
          gallerySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (err) {
        console.error(err);
        message.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const fetchGallery = async () => {
    const gallerySnap = await getDocs(collection(db, "products"));
    setGalleryItems(
      gallerySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  // Use in useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactSnap = await getDocs(collection(db, "contacts"));
        setContacts(
          contactSnap.docs.map((doc) => ({ key: doc.id, ...doc.data() }))
        );

          await fetchReviews(); 
      } catch (err) {
        console.error(err);
        message.error("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const fetchReviews = async () => {
    try {
      const reviewsSnap = await getDocs(collection(db, "reviews"));
      setReviews(
        reviewsSnap.docs.map((doc) => ({ key: doc.id, ...doc.data() }))
      );
    } catch (err) {
      console.error(err);
      message.error("Failed to load reviews");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            lineHeight: "32px",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Admin
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

            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: handleLogout,
            },
          ]}
        />
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header
          style={{
            background: "#fff",
            paddingLeft: 20,
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",

          }}
        >
          Admin Panel
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <DashboardPage
                    contactCount={contacts.length}
                    galleryCount={galleryItems.length}
                    reviewCount={reviews.length}
                  />
                }
              />
              <Route
                path="/contacts"
                element={<ContactsPage contacts={contacts} loading={loading} />}
              />
              <Route
                path="/products"
                element={
                  <AdminProducts
                    galleryItems={galleryItems}
                    refreshGallery={fetchGallery}
                  />
                }
              />
              <Route
                path="/reviews"
                element={<ReviewsPage reviews={reviews} loading={loading} />}
              />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
