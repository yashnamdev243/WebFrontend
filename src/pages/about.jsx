// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaMountain,
//   FaRoute,
//   FaCampground,
//   FaGlobe,
//   FaPlaceOfWorship,
//   FaHiking,
//   FaMapMarkedAlt,
//   FaShieldAlt,
//   FaHotel,
//   FaPrayingHands,
// } from "react-icons/fa";
// import { GiTempleGate } from "react-icons/gi";

// const About = () => {
//   const features = [
//     {
//       title: "Expert Guides",
//       desc: "Trained professionals with deep knowledge of Himalayan terrain.",
//       icon: <FaHiking />,
//     },
//     {
//       title: "Personalized Experience",
//       desc: "Customized tours to meet your needs and preferences.",
//       icon: <FaMapMarkedAlt />,
//     },
//     {
//       title: "Safety First",
//       desc: "Planned itineraries, acclimatization, and emergency support.",
//       icon: <FaShieldAlt />,
//     },
//   ];
//   const destinations = [
//     { name: "Char Dham Yatra", icon: <FaPlaceOfWorship />, id: 7 },
//     { name: "Manimahesh Kailash Yatra", icon: <FaMountain />,id: 1 },
//     { name: "Shrikhand Mahadev Trek", icon: <FaHiking />,id: 2 },
//     { name: "Kinnaur Kailash Trek", icon: <FaMapMarkedAlt />,id: 3 },
//     { name: "Adi Kailash Trek ", icon: <FaGlobe />,id: 4 },
//     { name: "Mansarovar Kailash Yatra", icon: <FaCampground />,id: 5 },
//     { name: "Kedarnath Dham", icon: <GiTempleGate />,id: 6 },
//     // { name: "Ujjain Mahakaleshwar", icon: <FaPlaceOfWorship />, },
//   ];
//   const navigate = useNavigate();

//   const [text, setText] = useState("");

// const words = [
//   "Buy Narmadeshwar Shivlings!",
//   "Handcrafted Shivlings for Your Temple!",
//   "Authentic Narmada Shivling Online!",
//   "Bring Divine Energy Home!",
//   "Shop Spiritual Shivling Collections!",
// ];

//   let index = 0;

//   // Typing Effect for Headline
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setText(words[index]);
//       index = (index + 1) % words.length;
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);


//   const handleNavigate = (id) => {
//     navigate(`/tour/${id}`);
//   };
//   return (
//     <div className="bg-gray-100 text-gray-900">
//       {/* Hero Section */}
//       <div
//         className="relative lg:h-[70vh] h-55 flex items-center justify-center bg-cover bg-center bg-no-repeat text-white text-center"
//         style={{ backgroundImage: "url('/about1.png')" }} // Ensure the image is moved here
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/30 "></div>

//         <div className="relative pb-6 z-10 animate-fadeIn">
//           <h1 className="text-2xl lg:mt-10 mt-20 pb-2 font-bold md:text-5xl text-[#ffcc70] drop-shadow-lg animate-glow">
//       Namdev Narmadeshwar Shivling Arts
//           </h1>

//           <p className="lg:mt-2 text-xs lg:text-lg max-w-2xl pb-2 mx-auto text-gray-200 animate-flicker">
//     Discover the Power of Narmadeshwar Shivlings <br /> – Handcrafted for Your Spiritual Journey.
//           </p>

//           <p className="lg:text-lg text-xs text-gray-300 text-center max-w-lg mx-auto italic animate-slideUp transition-all duration-500">
//             {text}
//           </p>

//         </div>
//       </div>

//       {/* Who We Are */}

//       <section className="relative pt-14 md:pb-6 px-6 md:px-20 bg-gradient-to-b from-blue-100 to-gray-100">
//         {/* Section Heading */}
//         {/* <h2 className="lg:text-4xl text-2xl font-bold text-center text-[#06242e]  animate-fadeIn">
//           Who <span className="text-[#2592b7]">We Are</span>
//         </h2>
//         <p className="mt-4 md:my-10 lg:text-lg text-sm text-gray-700 text-center max-w-3xl mx-auto fira-sans">
//           Welcome to{" "}
//           <span className="font-semibold text-[#0c95c3]">Namdev Narmadeshwar Shivling Arts</span>,
//           your trusted companion for divine journeys and high-altitude
//           adventures. With over{" "}
//           <span className="font-bold text-[#0c95c3]">50+ successful treks</span>
//           , we specialize in guiding spiritual seekers and thrill lovers through
//           the Himalayas.
//         </p> */}

// <h2 className="lg:text-4xl text-2xl font-bold text-center text-[#06242e] animate-fadeIn">
//   Who <span className="text-[#ffcc70]">We Are</span>
// </h2>
// <p className="mt-4 md:my-10 lg:text-lg text-sm text-gray-700 text-center max-w-3xl mx-auto fira-sans">
//   Welcome to{" "}
//   <span className="font-semibold text-[#ffcc70]">Namdev Narmadeshwar Shivling Arts</span>,
//   proudly serving the spiritual community since{" "}
//   <span className="font-bold text-[#ffcc70]">1945</span>. With over{" "}
//   <span className="font-bold text-[#ffcc70]">80 years</span> of legacy, we craft and supply
//   authentic and handcrafted religious items such as{" "}
//   <span className="font-semibold">Narmadeshwar Shivling, Jaldhara, Nandi Ji, Tortoise, Lord Ganesha, Parvati Ji, Kartik Ji, Lord Shiva, Lord Dattatreya</span>,
//   and sacred symbols including{" "}
//   <span className="font-semibold">Brass & Copper Snakes, Trishul, Jalpatra, and Shiv Parivar sets</span>.
//   Rooted in devotion, we are committed to delivering purity, tradition, and spiritual authenticity to homes and temples across India.
// </p>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
//           {/* Image Section */}
//           <div className="relative group">
//             <img
//               src="/Mission&Vision.png"
//               alt="Trekking Spiritual Hikes"
//               className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out   lg:w-[600px] lg:h-[400px] object-cover
// "
//             />

//             <div className="absolute inset-0  bg-opacity-30 rounded-lg group-hover:bg-opacity-10 transition duration-500"></div>
//           </div>

//           {/* Text Content */}
//           <div className="animate-fadeIn">
//             <h3 className="lg:text-3xl text-xl text-center md:text-left font-semibold text-[#06242e] ">
//               Our Mission <span className="text-[#0c95c3]"> &</span> Vision
//             </h3>
//             <p className="mt-6 text-gray-600 lg:text-lg text-center md:text-left text-sm leading-relaxed fira-sans">
//               We believe that every journey to the Himalayas is more than just a
//               trek—it is a
//               <span className="font-bold text-[#0c95c3]">
//                 {" "}
//                 spiritual transformation.
//               </span>
//               Our mission is to provide well-organized, safe, and fulfilling
//               experiences for travelers seeking divine blessings and adventure.
//             </p>

//             {/* Bullet Points with Icons */}
//             <ul className="py-8 space-y-3 lg:text-lg text-sm">
//               <li className="flex items-center gap-3 fira-bold">
//                 <FaHiking className="text-[#0c95c3] lg:text-xl text-lg" />{" "}
//                 Expert guidance from trained professionals
//               </li>
//               <li className="flex items-center gap-3 fira-bold">
//                 <FaHotel className="text-[#0c95c3] lg:text-xl text-lg" />{" "}
//                 Hassle-free accommodations and travel arrangements
//               </li>
//               <li className="flex items-center gap-3 fira-bold">
//                 <FaShieldAlt className="text-[#0c95c3] lg:text-xl text-lg" />{" "}
//                 Focus on safety with well-planned trekking schedules
//               </li>
//               <li className="flex items-center gap-3 fira-bold">
//                 <FaPrayingHands className="text-[#0c95c3]  lg:text-xl text-lg" />{" "}
//                 Authentic spiritual and cultural experience
//               </li>
//             </ul>

//             {/* Call-to-Action Button */}
//             {/* <div className="mt-6">
//               <button className="bg-blue-600 text-white px-5 text-xs md:text-lg py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300">
//                 Join Our Journey
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* Destinations We Cover */}

//       <section
//         className="relative py-12 bg-cover bg-center bg-gradient-to-r from-[#0cb4c3] to-[#06242e]  text-white"
//         // style={{ backgroundImage: "url('\VisionsofGrandeur.jpg')" }}
//       >
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0  bg-opacity-50"></div>

//         <div className="relative z-10 text-center text-white">
//           <h2 className="lg:text-4xl text-2xl font-bold text-center animate-fadeIn">
//             Our Destinations
//           </h2>
//           <p className="mt-4 lg:text-lg text-sm mx-6 max-w-2xl fira-sans md:mx-auto">
//             Discover sacred and breathtaking locations with our expert-led
//             expeditions.
//           </p>

//           <div className="grid md:grid-cols-4 gap-y-6 md:gap-y-10 gap-x-6 mt-10 px-10">
//             {destinations.map((destination, index) => (
//               <div
//                 key={index}
//                 className="bg-white text-gray-800 justify-items-center rounded-lg shadow-lg lg:p-6 py-4 text-center hover:shadow-2xl transform hover:scale-105 active:scale-105 transition duration-300 border-b-4 border-[#3992af] cursor-pointer"
//               >
//                 <div
//                   className="flex items-center gap-2"
//                   onClick={()=>handleNavigate(destination.id)}
//                 >
//                   <div className="text-[#0c95c3] lg:text-2xl text-xl">
//                     {destination.icon}
//                   </div>
//                   <h3 className="lg:text-xl text-sm font-semibold">
//                     {destination.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* <div className="mt-10">
//             <button className="bg-blue-600 text-white px-5  text-xs md:text-lg py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300">
//               Explore More
//             </button>
//           </div> */}
//         </div>
//       </section>

//       <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white">
//         <h2 className="lg:text-4xl text-2xl font-bold text-center text-[#06242e] mb-4 animate-fadeIn">
//           Why Choose <span className="text-[#0c95c3]">Spiritual Hikes?</span>
//         </h2>
//         <p className="text-center lg:text-lg text-sm text-gray-700 py-4 max-w-3xl mx-auto fira-sans">
//           Our commitment to safety, spiritual enrichment, and adventure makes us
//           the ideal choice for your Himalayan journey.
//         </p>

//         <div className="grid md:grid-cols-3 gap-6 mt-10">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-2 active:-translate-y-2 transition duration-300 border-l-4 border-[#3992af]  hover:blue-indigo-700"
//             >
//               <div className="text-[#0c95c3] lg:text-4xl text-2xl mb-3">
//                 {feature.icon}
//               </div>
//               <h3 className="lg:text-lg text-sm font-semibold text-[#0c95c3]">
//                 {feature.title}
//               </h3>
//               <p className="mt-2 lg:text-[16px] text-xs text-gray-700">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* <div className="text-center mt-10">
//         <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300">
//           Join Us Today
//         </button>
//       </div> */}
//       </section>

//       {/* Call to Action */}
//       <section className="py-10 md:py-18  bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70]   text-white text-center">
//         <h2 className="lg:text-4xl text-xl font-bold text-center mx-3">
//           Start Your Spiritual Journey with Namdev Narmadeshwar Shivling Arts


//         </h2>
//         <p className="py-6 lg:text-lg text-sm max-w-3xl md:mx-auto mx-5 fira-sans">
// Bring divine energy into your life with our handcrafted Narmadeshwar Shivlings and sacred stone idols.

//         </p>
//         <button
//           type="button"
//           onClick={() => {
//             navigate("/contact");
//           }}
//           className="mt-4 bg-transparent border-1 border-[#ffcc70] text-white px-4   text-xs md:text-lg py-2 rounded-full  shadow-md hover:bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] hover:text-white transition cursor-pointer fira-sans"
//         >
//           Contact Us Now
//         </button>
//       </section>
//     </div>
//   );
// };

// export default About;


import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Segmented, Button, Tabs, Timeline, Card, Collapse, Tag, Statistic, Row, Col, Descriptions, Divider, message } from "antd";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  ShoppingCartOutlined,
  CheckCircleTwoTone,
  ThunderboltOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

// ---------- CONFIG ----------
const PHONE = "9691089549";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  "नमस्ते! मुझे नर्मदेश्वर शिवलिंग के बारे में जानकारी चाहिए। / Hello! I'd like to know more about Narmadeshwar Shivlings."
)}`;
const MAPS_QUERY = encodeURIComponent(
  "Namdev Narmadeshwar Shivling Arts, Mardana, Barwaha, Khargone, 451113"
);
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

const bgGrad =
  "bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(99,102,241,0.25),transparent_70%)]";

// ---------- TEXT CONTENT (HI + EN) ----------
const copy = {
  hi: {
    seoTitle:
      "Namdev Narmadeshwar Shivling Arts | नर्मदा पत्थर के स्वयंभू नर्मदेश्वर शिवलिंग",
    seoDesc:
      "नर्मदा नदी के पवित्र पत्थर से बने नर्मदेश्वर शिवलिंग — नामदेव परिवार (मर्दाना, बड़वाह) द्वारा पीढ़ियों से हस्तनिर्मित। 1 इंच से 24 फीट तक, देश-विदेश में आपूर्ति।",
    heroTitle: "नामदेव नर्मदेश्वर शिवलिंग आर्ट",
    heroSubtitle:
      "मां नर्मदा के पत्थर से निर्मित स्वयंभू नर्मदेश्वर शिवलिंग — परंपरा, शुद्धता और आस्था का संगम।",
    ctas: { call: "कॉल करें", whatsapp: "व्हाट्सएप", directions: "दिशाएँ" },
    storyHead: "हमारी विरासत",
    story:
      "देवी अहिल्याबाई के समय से चली आ रही परंपरा में, स्वर्गीय मांगीलाल जी नामदेव ने मां नर्मदा के पत्थर से नर्मदेश्वर शिवलिंग निर्माण की शुरुआत की। उन्होंने अटल बिहारी वाजपेयी जी सहित कई बड़े संतों को नर्मदेश्वर शिवलिंग भेंट किए और इस दिव्य धरोहर को देश-विदेश तक पहुँचाया। आज वही कार्य उनके परिजनों — दीपक जी नामदेव, शिवनारायण जी नामदेव और अरविंद नामदेव — द्वारा समर्पण के साथ आगे बढ़ाया जा रहा है, और आने वाली पीढ़ियाँ भी इस सेवा से जुड़ी हुई हैं।",
    beliefHead: "नर्मदेश्वर क्यों विशिष्ट?",
    belief:
      "मां नर्मदा के पत्थर से बना शिवलिंग स्वयं सिद्ध माना जाता है — इसलिए इसे प्राण-प्रतिष्ठा की आवश्यकता नहीं मानी जाती। अनेक शिवलिंगों में प्रकृति प्रदत्त आकृतियाँ जैसे अर्धनारीश्वर, जनेऊ, ॐ, त्रिशूल, गणेश और तिलकधारी स्वरूप स्वाभाविक रूप से प्राप्त होते हैं।",
    sizesHead: "आकार और ऑर्डर",
    sizes:
      "हम 1 इंच से 24 फीट तक के नर्मदेश्वर शिवलिंग बनाते हैं। मंदिर, घर या संस्थान — आपके स्थान और विधि के अनुरूप कस्टम आकार उपलब्ध हैं।",
    accessoriesHead: "सुविधाएँ और सामग्री",
    accessories:
      "नर्मदेश्वर शिवलिंग के साथ जलधारा, नंदी जी, गणेश जी, पार्वती जी, कार्तिकेय जी और संपूर्ण शिव परिवार की प्रतिमाएँ उपलब्ध हैं। साथ ही नाग, त्रिशूल, जलपात्र आदि तांबे/पीतल के पूजन सामग्री भी प्राप्त की जा सकती है।",
    exportLine:
      "हमारे नर्मदेश्वर शिवलिंग केवल भारत ही नहीं, विदेशों में भी श्रद्धापूर्वक स्थापित किए जाते हैं।",
    specsHead: "पता और संपर्क",
    addressTitle: "कार्यस्थल / शोरूम",
    address: [
      "नाम: अरविंद नामदेव",
      "पोस्ट: मर्दाना",
      "तहसील: बड़वाह",
      "जिला: खरगोन",
      "पिन: 451113",
      `मो.: ${PHONE}`,
    ],
    faqHead: "सामान्य प्रश्न",
    faqs: [
      {
        q: "क्या नर्मदेश्वर शिवलिंग की प्राण-प्रतिष्ठा आवश्यक है?",
        a: "परंपरागत मान्यता अनुसार नर्मदा पत्थर से बना शिवलिंग स्वयं सिद्ध माना जाता है, इसलिए प्राण-प्रतिष्ठा आवश्यक नहीं मानी जाती। (स्थानीय परंपरा/गुरु की सलाह भी लें)।",
      },
      {
        q: "क्या कस्टम आकार/वजन पर ऑर्डर दे सकते हैं?",
        a: "हाँ, 1 इंच से 24 फीट तक — आपके स्थल और आवश्यकताओं के अनुसार कस्टम निर्माण किया जाता है।",
      },
      {
        q: "क्या विदेशों में शिपिंग उपलब्ध है?",
        a: "हाँ, सुरक्षित पैकेजिंग और लॉजिस्टिक्स के साथ अंतरराष्ट्रीय शिपिंग उपलब्ध है।",
      },
    ],
    orderNow: "अभी ऑर्डर करें",
  },
  en: {
    seoTitle:
      "Namdev Narmadeshwar Shivling Arts | Authentic Narmada Stone Shivlings",
    seoDesc:
      "Handcrafted Narmadeshwar Shivlings made from sacred Narmada river stone by the Namdev family (Mardana, Barwaha) for generations. Sizes from 1 inch to 24 feet. Shipping across India and worldwide.",
    heroTitle: "Namdev Narmadeshwar Shivling Arts",
    heroSubtitle:
      "Self-manifest Narmadeshwar Shivlings carved from the holy Narmada stone — heritage, purity and devotion.",
    ctas: { call: "Call", whatsapp: "WhatsApp", directions: "Directions" },
    storyHead: "Our Legacy",
    story:
      "Since the era of Devi Ahilyabai, Late Mangilal Namdev pioneered crafting Narmadeshwar Shivlings from Narmada stone. He presented these sacred Shivlings to leaders and saints including Atal Bihari Vajpayee, taking this heritage from India to the world. Today, the tradition continues with Deepak Namdev, Shivanarayan Namdev and Arvind Namdev, with the next generation proudly carrying the craft forward.",
    beliefHead: "What makes Narmadeshwar special?",
    belief:
      "Shivlings made from Narmada stone are traditionally considered self-attained (swayam-siddha), thus not requiring a formal consecration. Many naturally reveal divine markings such as Ardhanarishwar, Janeu, Om, Trishul, Ganesha and Tilak-like patterns.",
    sizesHead: "Sizes & Orders",
    sizes:
      "We craft Shivlings from 1 inch up to 24 feet. Custom sizing for homes, temples and institutions is available to suit your space and ritual needs.",
    accessoriesHead: "Accessories & Deities",
    accessories:
      "Alongside the Shivling, we provide Jaladhara, Nandi, Ganesha, Parvati, Kartikeya and the complete Shiva Parivar statues. Copper/Brass puja items like Naag, Trishul and Jalpatra are also available.",
    exportLine:
      "Our Narmadeshwar Shivlings are installed with reverence across India and overseas.",
    specsHead: "Address & Contact",
    addressTitle: "Workshop / Showroom",
    address: [
      "Name: Arvind Namdev",
      "Post: Mardana",
      "Tehsil: Barwaha",
      "District: Khargone",
      "PIN: 451113",
      `Mob.: ${PHONE}`,
    ],
    faqHead: "FAQs",
    faqs: [
      {
        q: "Do Narmadeshwar Shivlings require consecration?",
        a: "By traditional belief, Narmada-stone Shivlings are self-attained and don’t require consecration. (Follow guidance from your local tradition/guru).",
      },
      {
        q: "Can I place a custom size/weight order?",
        a: "Yes — from 1 inch to 24 feet, fully customized to your site and needs.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, with secure packaging and logistics support.",
      },
    ],
    orderNow: "Order Now",
  },
};

// ---------- SMALL UI BITS ----------
const Fade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

// ---------- MAIN COMPONENT ----------
export default function About() {
  const [lang, setLang] = useState("hi");
  const t = useMemo(() => copy[lang], [lang]);

  const tabs = [
    {
      key: "story",
      label: lang === "hi" ? t.storyHead : t.storyHead,
      children: (
        <Row gutter={[16, 16]}>
          <Col xs={24} md={14}>
            <Fade>
              <Card bordered className="rounded-2xl shadow-sm">
                <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{t.story}</p>
                <Divider />
                <Timeline
                  items={[
                    {
                      color: "green",
                      dot: <CheckCircleTwoTone twoToneColor="#52c41a" />,
                      children:
                        lang === "hi"
                          ? "स्व. मांगीलाल जी नामदेव — परंपरा की शुरुआत"
                          : "Late Mangilal Namdev — Craft begins",
                    },
                    {
                      color: "blue",
                      dot: <SafetyCertificateOutlined />,
                      children:
                        lang === "hi"
                          ? "अटल बिहारी वाजपेयी जी सहित संतों को शिवलिंग भेंट"
                          : "Shivlings presented to leaders & saints incl. Atal Bihari Vajpayee",
                    },
                    {
                      color: "purple",
                      dot: <ReadOutlined />,
                      children:
                        lang === "hi"
                          ? "दीपक जी, शिवनारायण जी और अरविंद नामदेव द्वारा परंपरा का विस्तार"
                          : "Tradition carried by Deepak, Shivanarayan & Arvind Namdev",
                    },
                    {
                      color: "gold",
                      dot: <GlobalOutlined />,
                      children:
                        lang === "hi" ? "भारत से विदेश तक स्थापना" : "Installed across India & overseas",
                    },
                  ]}
                />
              </Card>
            </Fade>
          </Col>
          <Col xs={24} md={10}>
            <Fade delay={0.1}>
              <Card
                bordered
                className="rounded-2xl shadow-sm relative overflow-hidden"
                cover={
                  <div className={`h-64 sm:h-80 md:h-96 w-full ${bgGrad} flex items-center justify-center`}>
                    {/* Replace with your image */}
                    <img
                      src="/images/narmadeshwar-hero.jpg"
                      alt="Narmadeshwar Shivling artisan craft"
                      className="h-full w-full object-cover mix-blend-multiply"
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{t.heroTitle}</h3>
                      <p className="text-sm opacity-90 max-w-xs">{t.heroSubtitle}</p>
                    </div>
                  </div>
                }
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Statistic title={lang === "hi" ? "पीढ़ियाँ" : "Generations"} value={3} suffix={lang === "hi" ? "+" : "+"} />
                  </Col>
                  <Col span={8}>
                    <Statistic title={lang === "hi" ? "आकार" : "Sizes"} value={24} suffix={lang === "hi" ? "फीट" : "ft"} />
                  </Col>
                  <Col span={8}>
                    <Statistic title={lang === "hi" ? "देश" : "Countries"} value={15} suffix={lang === "hi" ? "+" : "+"} />
                  </Col>
                </Row>
              </Card>
            </Fade>
          </Col>
        </Row>
      ),
    },
    {
      key: "craft",
      label: lang === "hi" ? "विशेषताएँ" : "Highlights",
      children: (
        <Fade>
          <Row gutter={[16, 16]}>
            {[
              { key: "ardhanarishwar", textHi: "अर्धनारीश्वर", textEn: "Ardhanarishwar" },
              { key: "janeu", textHi: "जनेऊ की आकृति", textEn: "Janeu marking" },
              { key: "om", textHi: "ॐ की आकृति", textEn: "Om marking" },
              { key: "trishul", textHi: "त्रिशूल", textEn: "Trishul" },
              { key: "ganesha", textHi: "गणेश जी की आकृति", textEn: "Ganesha pattern" },
              { key: "tilak", textHi: "तिलकधारी", textEn: "Tilak marking" },
            ].map((f) => (
              <Col xs={12} md={8} key={f.key}>
                <Card className="rounded-2xl shadow-sm h-full">
                  <div className="flex items-center gap-3">
                    <ThunderboltOutlined />
                    <h4 className="text-base font-semibold">
                      {lang === "hi" ? f.textHi : f.textEn}
                    </h4>
                  </div>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                    {lang === "hi"
                      ? "कई शिवलिंगों में ये नेचुरल पैटर्न स्वाभाविक रूप से दिखाई देते हैं।"
                      : "These natural patterns are often revealed in the stone itself."}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
          <Divider />
          <Card className="rounded-2xl shadow-sm">
            <Descriptions
              title={lang === "hi" ? t.accessoriesHead : t.accessoriesHead}
              bordered
              column={{ xs: 1, sm: 2, md: 3 }}
              size="middle"
            >
              <Descriptions.Item label={lang === "hi" ? "देव प्रतिमाएँ" : "Deities"}>
                {lang === "hi"
                  ? "नंदी, गणेश, पार्वती, कार्तिकेय, संपूर्ण शिव परिवार"
                  : "Nandi, Ganesha, Parvati, Kartikeya, Complete Shiva Parivar"}
              </Descriptions.Item>
              <Descriptions.Item label={lang === "hi" ? "पूजन सामग्री" : "Puja Items"}>
                {lang === "hi" ? "नाग, त्रिशूल, जलपात्र" : "Naag, Trishul, Jalpatra"}
              </Descriptions.Item>
              <Descriptions.Item label={lang === "hi" ? "धातु" : "Metals"}>
                {lang === "hi" ? "तांबा, पीतल" : "Copper, Brass"}
              </Descriptions.Item>
            </Descriptions>
            <p className="mt-4 text-slate-700 dark:text-slate-200">{t.exportLine}</p>
          </Card>
        </Fade>
      ),
    },
    {
      key: "sizes",
      label: lang === "hi" ? t.sizesHead : t.sizesHead,
      children: (
        <Fade>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={14}>
              <Card className="rounded-2xl shadow-sm">
                <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{t.sizes}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["1\"", "3\"", "6\"", "9\"", "12\"", "18\"", "24\"", "3ft", "6ft", "12ft", "24ft"].map((s) => (
                    <Tag key={s} color="geekblue" className="px-3 py-1 rounded-full text-sm">{s}</Tag>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    size="large"
                    onClick={() => message.success(lang === "hi" ? "ऑर्डर सहायता खोली गई" : "Order assistance opened")}
                    href={WHATSAPP_LINK}
                    target="_blank"
                  >
                    {t.orderNow}
                  </Button>
                  <Button icon={<PhoneOutlined />} href={`tel:+91${PHONE}`} size="large">
                    {t.ctas.call}
                  </Button>
                  <Button icon={<EnvironmentOutlined />} href={MAPS_LINK} target="_blank" size="large">
                    {t.ctas.directions}
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={10}>
              <Card className="rounded-2xl shadow-sm overflow-hidden">
                <div className={`h-64 w-full ${bgGrad} flex items-center justify-center`}> 
                  {/* Replace with a size showcase image */}
                  <img
                    src="/images/size-showcase.jpg"
                    alt="Narmadeshwar Shivling sizes"
                    className="h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Card size="small" className="rounded-xl">
                    <h5 className="font-semibold text-sm">{lang === "hi" ? "टेंपल ग्रेड फिनिश" : "Temple-grade finish"}</h5>
                    <p className="text-xs mt-1 text-slate-600 dark:text-slate-300">{lang === "hi" ? "हाथों से पॉलिश व संतुलन" : "Hand-polished and balanced"}</p>
                  </Card>
                  <Card size="small" className="rounded-xl">
                    <h5 className="font-semibold text-sm">{lang === "hi" ? "कस्टम उत्कीर्णन" : "Custom engraving"}</h5>
                    <p className="text-xs mt-1 text-slate-600 dark:text-slate-300">{lang === "hi" ? "आदेश पर उपलब्ध" : "Available on request"}</p>
                  </Card>
                </div>
              </Card>
            </Col>
          </Row>
        </Fade>
      ),
    },
    {
      key: "faq",
      label: lang === "hi" ? t.faqHead : t.faqHead,
      children: (
        <Fade>
          <Collapse
            accordion
            className="rounded-2xl overflow-hidden shadow-sm"
            items={t.faqs.map((f, i) => ({ key: `${i}`, label: f.q, children: <p className="leading-7">{f.a}</p> }))}
          />
        </Fade>
      ),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Namdev Narmadeshwar Shivling Arts",
    description: copy.en.seoDesc,
    url: "https://your-domain.com/about",
    image: [
      "https://your-domain.com/images/narmadeshwar-hero.jpg",
      "https://your-domain.com/images/size-showcase.jpg",
    ],
    telephone: `+91${PHONE}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mardana",
      addressLocality: "Barwaha",
      addressRegion: "Khargone",
      postalCode: "451113",
      addressCountry: "IN",
    },
    sameAs: [
      "https://maps.google.com/?q=Namdev+Narmadeshwar+Shivling+Arts+Mardana",
      WHATSAPP_LINK,
    ],
  };

  return (
    <div className="relative min-h-screen bg-white  text-slate-900 ">
      <Helmet>
        <title>{t.seoTitle}</title>
        <meta name="description" content={t.seoDesc} />
        <link rel="canonical" href="https://your-domain.com/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        {/* OpenGraph */}
        <meta property="og:title" content={t.seoTitle} />
        <meta property="og:description" content={t.seoDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/about" />
      </Helmet>

      {/* Hero */}
      {/* <div className={`relative overflow-hidden ${bgGrad}`}>
        <Section className="pt-16 pb-10 sm:pt-24 sm:pb-16">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Fade>
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm mb-4">
                  <span>About • के बारे में</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                  {t.heroTitle}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
                  {t.heroSubtitle}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button type="primary" size="large" icon={<PhoneOutlined />} href={`tel:+91${PHONE}`}>
                    {t.ctas.call}
                  </Button>
                  <Button size="large" icon={<WhatsAppOutlined />} href={WHATSAPP_LINK} target="_blank">
                    {t.ctas.whatsapp}
                  </Button>
                  <Button size="large" icon={<EnvironmentOutlined />} href={MAPS_LINK} target="_blank">
                    {t.ctas.directions}
                  </Button>
                </div>
                <div className="mt-6">
                  <Segmented
                    size="large"
                    value={lang}
                    onChange={(val) => setLang(val)}
                    options={[
                      { label: "हिंदी", value: "hi" },
                      { label: "English", value: "en" },
                    ]}
                  />
                </div>
              </Fade>
            </div>

            <div className="lg:col-span-5">
              <Fade delay={0.1}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <img
                    src="/Namdevlogo.png"
                    alt="Namdev Narmadeshwar Shivling Arts workshop"
                    className="w-full h-64 sm:h-80 object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm sm:text-base">Mardana • Barwaha • Khargone</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </Section>
      </div> */}
      <div className={`relative overflow-hidden ${bgGrad}`}>
  <Section className="pt-16 pb-14 sm:pt-24 sm:pb-20">
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-14 items-center text-center lg:text-left">
      
      {/* Left Section */}
      <div className="lg:col-span-7 flex flex-col items-center lg:items-start">
        <Fade>
          {/* Small Tag */}
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-xs sm:text-sm mb-6 bg-white/60 backdrop-blur-lg shadow-sm">
            <span className="font-semibold text-slate-700 tracking-wide">
              ✨ About • के बारे में
            </span>
          </div> */}

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            {t.heroTitle}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            {t.heroSubtitle}
          </p>

          {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-5">
  {/* Call Button */}
  <Button
    type="primary"
    size="large"
    icon={<PhoneOutlined style={{ fontSize: '1.25rem' }} />}
    href={`tel:+91${PHONE}`}
    className="!bg-gradient-to-r from-blue-600 to-blue-700 hover:!from-blue-700 hover:!to-blue-800 
               rounded-2xl !px-8 !py-5 !shadow-lg hover:!shadow-2xl 
               transform hover:scale-105 transition-all duration-300 ease-out
               flex items-center gap-2"
  >
    <span className="font-semibold tracking-wide">{t.ctas.call}</span>
  </Button>

  {/* WhatsApp Button */}
  <Button
    size="large"
    icon={<WhatsAppOutlined style={{ fontSize: '1.25rem' }} />}
    href={WHATSAPP_LINK}
    target="_blank"
    className="!bg-gradient-to-r from-green-500 to-green-600 hover:!from-green-600 hover:!to-green-700 
               !text-white rounded-2xl !px-8 !py-5 !shadow-lg hover:!shadow-2xl 
               transform hover:scale-105 transition-all duration-300 ease-out
               flex items-center gap-2"
  >
    <span className="font-semibold tracking-wide">{t.ctas.whatsapp}</span>
  </Button>

  {/* Directions Button */}
  <Button
    size="large"
    icon={<EnvironmentOutlined style={{ fontSize: '1.25rem' }} />}
    href={MAPS_LINK}
    target="_blank"
    className="!bg-gradient-to-r from-red-500 to-red-600 hover:!from-red-600 hover:!to-red-700 
               !text-white rounded-2xl !px-8 !py-5 !shadow-lg hover:!shadow-2xl 
               transform hover:scale-105 transition-all duration-300 ease-out
               flex items-center gap-2"
  >
    <span className="font-semibold tracking-wide">{t.ctas.directions}</span>
  </Button>
</div>


          {/* Language Switch */}
          <div className="mt-10">
            <Segmented
              size="large"
              value={lang}
              onChange={(val) => setLang(val)}
              options={[
                { label: "हिंदी", value: "hi" },
                { label: "English", value: "en" },
              ]}
              className="!bg-white/60 backdrop-blur-md !shadow-xl 
               rounded-full px-4 py-2 border border-slate-200/50
               transition-all duration-300 hover:shadow-2xl"
            />
          </div>
        </Fade>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:col-span-5 w-full flex justify-center">
        <Fade delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 max-w-md w-full">
            <img
              src="/Namdevlogo.png"
              alt="Namdev Narmadeshwar Shivling Arts workshop"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-1/2 lg:left-4 -translate-x-1/2 lg:translate-x-0 text-center lg:text-left text-white">
              <p className=" lg:text-2xl text-sm font-medium tracking-wide drop-shadow">
                📍 Mardana • Barwaha • Khargone
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  </Section>
</div>


      {/* Tabs Sections */}
      <Section className="pb-16">
        <Tabs
          defaultActiveKey="story"
          items={tabs.map(({ key, label, children }) => ({ key, label, children }))}
        />
      </Section>

      {/* Contact Card */}
    <Section className="py-12 lg:px-8 px-4">
  <Fade>
    <Card className="rounded-3xl shadow-lg border border-slate-100 !bg-gradient-to-br from-white to-yellow-50 !p-8">
      <Row gutter={[32, 32]} align="stretch">
        
        {/* Left Section */}
        <Col xs={24} md={14}>
         <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
 <h2 className="lg:text-3xl text-2xl font-bold text-center py-2 px-10 text-white bg-gradient-to-l from-[#2e2b06]  to-[#ffcc70] mb-8">    {t.specsHead}
  </h2>
  <p className="text-gray-600 text-lg mb-6">
    {t.addressTitle}
  </p>
  <ul className="space-y-3">
    {t.address.map((line, i) => (
      <li
        key={i}
        className="flex items-start justify-start gap-3 text-base text-yellow-700"
      >
        <span className="flex-shrink-0 w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-yellow-500 to-black"></span>
        {line}
      </li>
    ))}
  </ul>
</div>

        </Col>

        {/* Right Section - Action Buttons as Tiles */}
        <Col xs={24} md={10}>
          <div className="h-full flex flex-col justify-center gap-5">
            <a
              href={`tel:+91${PHONE}`}
              className="flex items-center gap-4 !bg-blue-50 hover:!bg-blue-100 rounded-2xl p-5 shadow-sm transition"
            >
              <div className="flex h-12 w-12 lg:text-2xl text-xl items-center justify-center rounded-xl bg-blue-600 text-white">
                <PhoneOutlined />
              </div>
              <span className="text-lg font-semibold text-slate-800">
                {t.ctas.call}
              </span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="flex items-center gap-4 !bg-green-50 hover:!bg-green-100 rounded-2xl p-5 shadow-sm transition"
            >
              <div className="flex h-12 w-12 lg:text-2xl text-xl items-center justify-center rounded-xl bg-green-500 text-white">
                <WhatsAppOutlined />
              </div>
              <span className="text-lg font-semibold text-slate-800">
                {t.ctas.whatsapp}
              </span>
            </a>

            <a
              href={MAPS_LINK}
              target="_blank"
              className="flex items-center gap-4 !bg-red-50 hover:!bg-red-100 rounded-2xl p-5 shadow-sm transition"
            >
              <div className="flex h-12 w-12 lg:text-2xl text-xl items-center justify-center rounded-xl bg-red-500 text-white">
                <EnvironmentOutlined />
              </div>
              <span className="text-lg font-semibold text-slate-800">
                {t.ctas.directions}
              </span>
            </a>
          </div>
        </Col>
      </Row>
    </Card>
  </Fade>
</Section>


      {/* <footer className="border-t py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Namdev Narmadeshwar Shivling Arts • {lang === "hi" ? "मर्दाना, बड़वाह, खरगोन" : "Mardana, Barwaha, Khargone"}
      </footer> */}
    </div>
  );
}
