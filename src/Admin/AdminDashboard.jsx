import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
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
  Input,
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
} from "@ant-design/icons";
import AdminProducts from "./AdminProducts";
import AdminSlides from "./AdminSlides";
import { PictureAsPdfOutlined, StarOutlineRounded } from "@mui/icons-material";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;
const { Search } = Input;

// Dashboard Page (Stats)
function DashboardPage({
  contactCount,
  galleryCount,
  reviewCount,
  slideCount,
}) {
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
      title: "Total Product Images",
      value: galleryCount,
      icon: <PictureOutlined style={{ fontSize: 32, color: "#fff" }} />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      route: "/admin/products",
    },
    {
      title: "Total Reviews",
      value: reviewCount,
      icon: <StarOutlineRounded style={{ fontSize: 38, color: "#fff" }} />,
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
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              hoverable={!!stat.route}
            >
              <div className="flex flex-col items-center justify-center gap-3 p-4">
                {stat.icon}
                <h2 style={{ fontSize: 28, margin: 0, fontWeight: "bold" }}>
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

// Contacts Page
function ContactsPage({ contacts, loading }) {
  const [searchText, setSearchText] = useState("");
  // Filter contacts based on search
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
      render: (_, __, index) => index + 1, // serial number
      width: 80,
      align: "center",
    },
    { title: "Name", dataIndex: "name", key: "name", align: "center" },
    { title: "Contact", dataIndex: "contact", key: "contact", align: "center" },
    { title: "Message", dataIndex: "message", key: "message", align: "center" },
  ];
  return (
    <div>
      <Title level={3} style={{ textAlign: "center", marginBottom: 20 }}>
        Contact Form Submissions
      </Title>
      {/* Search Bar */}
      <div style={{ maxWidth: 400, margin: "0 auto 20px auto" }}>
        <Search
          placeholder="Search here"
          allowClear
          enterButton
          onSearch={(value) => setSearchText(value)}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>
      <Table
        dataSource={filteredContacts}
        columns={columns}
        rowKey="id"
        loading={loading}
        bordered
        scroll={{ x: "max-content" }}
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showTotal: (total) => (
            <p>
              Total <span className="font-semibold">{total}</span> Submissions
            </p>
          ),
          className: "mx-4 custom-pagination",
          responsive: true,
          onChange: () => {
            window.scrollTo({ top: 250, behavior: "smooth" });
          },
        }}
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
    </div>
  );
}

// Add this ReviewsPage component above AdminDashboard
function ReviewsPage({ reviews, loading }) {
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
        text && <Image width={80} src={text} className="rounded-md" />,
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
        loading={loading}
        bordered
        pagination={{
          pageSize: 5,
          showSizeChanger: false,
          showTotal: (total) => (
            <p>
              Total <span className="font-semibold">{total}</span> Reviews
            </p>
          ),
          className: "mx-4 custom-pagination",
          responsive: true,
          onChange: () => {
            window.scrollTo({ top: 250, behavior: "smooth" });
          },
        }}
        scroll={{ x: "max-content" }} // Horizontal scroll for small screens
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
  const [slides, setSlides] = useState([]);

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
        // Slides
        const slidesSnap = await getDocs(collection(db, "slides"));
        setSlides(
          slidesSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
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
  const fetchSlides = async () => {
    try {
      const slidesSnap = await getDocs(collection(db, "slides"));
      setSlides(slidesSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (err) {
      console.error(err);
      message.error("Failed to load slides");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
         style={{
    position: "fixed",      // 👈 keeps it fixed
    left: 0,
    top: 0,
    bottom: 0,
    height: "100vh",
    zIndex: 1000,
  }}
      >
        {/* <div
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
        </div> */}
        {/* <div
  style={{
    height: 48,
    margin: 16,
    background: "linear-gradient(135deg, #274b6b, #3f6e9c)",
    borderRadius: 8,
    textAlign: "center",
    lineHeight: "48px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    letterSpacing: "1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }}
>
  Admin Panel
</div> */}

<div
  style={{
    height: 64,
    margin: 0,
    background: "linear-gradient(135deg, #ffff, #ffff)", // ✅ gradient background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px",
  }}
>
  <img
    src="/Namdevlogo.png" // ✅ replace with your logo path
    alt="Admin Logo"
    style={{
      maxHeight: "48px",
      maxWidth: "100%",
      objectFit: "contain",
    }}
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
<Layout style={{ marginLeft: collapsed ? 80 : 200, transition: "all 0.2s" }}>
        <Header
               style={{
        position: "fixed",
        top: 0,
        left: collapsed ? 80 : 200,
        right: 0,
        height: 64,
        zIndex: 999,
        background: "#fff",
      fontSize: "20px",
        fontWeight: "bold",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              display: "flex",
      alignItems: "center",
      justifyContent: "center", // ✅ centers text
      textAlign: "center",
      padding: "0 10px",        // ✅ prevents text touching edges
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis", // ✅ prevents text breaking on mobile

      }}

        >
          Admin Panel
        </Header>
        <Content  style={{
        marginTop: 64, // 👈 makes space for fixed header
      padding: "12px",
      }}>
 <div
      style={{
        padding: 16,
        background: "#fff",
        minHeight: "calc(100vh - 64px)",
        borderRadius: 8,
      }}
    >            <Routes>
              <Route
                path="/"
                element={
                  <DashboardPage
                    contactCount={contacts.length}
                    galleryCount={galleryItems.length}
                    reviewCount={reviews.length}
                    slideCount={slides.length}
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
              <Route path="/slides" element={<AdminSlides slides={slides} />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
