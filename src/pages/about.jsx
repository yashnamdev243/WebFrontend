import React, { useMemo, useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
  Segmented,
  Button,
  Tabs,
  Timeline,
  Card,
  Collapse,
  Tag,
  Statistic,
  Row,
  Col,
  Descriptions,
  Divider,
  message,
} from "antd";
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
const MAPS_LINK = `https://maps.app.goo.gl/znzwKS4GrVBksKgh9`;

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
    orderNow: "अभी व्हाट्सएप करें",
    keywords: [
      "🕉️ नर्मदेश्वर शिवलिंग ऑनलाइन खरीदें ",
      "🌊 माँ नर्मदा पत्थर शिवलिंग ",
      "🙏 हस्तनिर्मित शिवलिंग ",
      "🏠 घर और मंदिर के लिए शिवलिंग ",
      "🪔 पूजा और ध्यान हेतु शिवलिंग ",
      "🌍 विश्वभर में डिलीवरी ",
      "✨ प्राकृतिक स्वयंभू नर्मदेश्वर शिवलिंग ",
      "🔱 नंदी, त्रिशूल और जलधारा सहित ",
      "📿 सकारात्मक ऊर्जा और समृद्धि हेतु शिवलिंग ",
      "🏔️ खरगोन, मध्यप्रदेश से ओरिजिनल ",
    ],
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
    orderNow: "WhatsApp Now",
    keywords: [
      "🕉️ Buy Narmadeshwar Shivling Online ",
      "🌊 Original Narmada Stone Shivling ",
      "🙏 Handcrafted Narmadeshwar Shivling Idol ",
      "🏠 Best Shivling for Home & Temple ",
      "🪔 Shivling for Puja & Meditation ",
      "🌍 Narmadeshwar Shivling Export Worldwide ",
      "✨ Natural Self-Manifested Shivling ",
      "🔱 Shivling with Trishul, Nandi & Jaladhara ",
      "📿 Shivling for Spiritual Energy & Prosperity ",
      "🏔️ Authentic Narmadeshwar Shivling from Khargone, MP ",
    ],
  },
};
const timelineData = [
  {
    color: "green",
    icon: <CheckCircleTwoTone twoToneColor="#52c41a" />,
    textHi: "स्व. मांगीलाल जी नामदेव — परंपरा की शुरुआत",
    textEn: "Late Mangilal Namdev — Craft begins",
  },
  {
    color: "blue",
    icon: <SafetyCertificateOutlined />,
    textHi: "अटल बिहारी वाजपेयी जी सहित संतों को शिवलिंग भेंट",
    textEn:
      "Shivlings presented to leaders & saints incl. Atal Bihari Vajpayee",
  },
  {
    color: "purple",
    icon: <ReadOutlined />,
    textHi: "दीपक जी, शिवनारायण जी और अरविंद नामदेव द्वारा परंपरा का विस्तार",
    textEn: "Tradition carried by Deepak, Shivanarayan & Arvind Namdev",
  },
  {
    color: "gold",
    icon: <GlobalOutlined />,
    textHi: "भारत से विदेश तक स्थापना",
    textEn: "Installed across India & overseas",
  },
];

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
  <section
    id={id}
    className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </section>
);

// ---------- MAIN COMPONENT ----------
export default function About() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => copy[lang], [lang]);

  const tabs = [
    {
      key: "story",
      label: lang === "hi" ? t.storyHead : t.storyHead,
      children: (
        <Row gutter={[24, 24]} className="">
          <Col xs={24} md={14}>
            <Fade>
              <Card
                bordered={false}
                className="rounded-2xl shadow-md !p-6 !bg-gradient-to-br from-white to-yellow-50 "
              >
             <p className="text-base sm:text-lg leading-relaxed text-gray-600 font-medium mb-5 tracking-wide">
                  {t.story}
                </p>
                <Divider />
                
                <Timeline
                  items={timelineData.map(
                    ({ color, icon, textHi, textEn }) => ({
                      color,
                      dot: (
                        <div className="flex items-center justify-center h-full">
                          <span style={{ fontSize: "16px", lineHeight: 0 }}>
                            {icon}
                          </span>
                        </div>
                      ),
                      children: (
                        <div className="flex items-start gap-3">
                          <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-medium tracking-wide">
                            {lang === "hi" ? textHi : textEn}{" "}
                          </p>{" "}
                        </div>
                      ),
                    })
                  )}
                />
              </Card>
            </Fade>
          </Col>
          <Col xs={24} md={10}>
            <Fade delay={0.1}>
              <Card
                bordered={false}
                className="rounded-2xl shadow-md !p-6 !bg-gradient-to-br from-white to-yellow-50 "
                cover={
                 <div className="relative h-64 sm:h-80 md:h-96 w-full group overflow-hidden rounded-t-2xl">

  {/* IMAGE */}
  <img
    src="/slide8.jpg"
    alt="Narmadeshwar Shivling artisan craft"
    className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
    onError={(e) => (e.currentTarget.style.display = "none")}
  />

  {/* Dark Luxury Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* Soft Golden Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-600/10 opacity-40" />

  {/* TEXT */}
  <div className="absolute bottom-5 left-5 text-white space-y-1 drop-shadow-xl">
    <h3 className="text-xl sm:text-2xl font-bold tracking-wide">
      {t.heroTitle}
    </h3>
    <p className="text-xs sm:text-sm opacity-90 leading-relaxed max-w-xs">
      {t.heroSubtitle}
    </p>
  </div>

  {/* Subtle Shine Effect on Hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 bg-gradient-to-r from-white/10 to-transparent" />
</div>

                }
              >
                <Row
                  gutter={16}
              className="text-center p-3 rounded-b-2xl bg-gradient-to-br from-white to-yellow-50"
                >
                  <Col span={8}>
                    <Statistic
                      title={              <span className="text-gray-700 font-semibold">
{lang === "hi" ? "पीढ़ियाँ" : "Generations"} </span>
            }
                      value={3}
                       valueStyle={{ fontSize: '22px', fontWeight: '700', color: '#FF9011' }}
                      suffix={lang === "hi" ? "+" : "+"}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title= {              <span className="text-gray-700 font-semibold">
{lang === "hi" ? "आकार" : "Sizes"} </span>
            }
                      value={24}
                       valueStyle={{ fontSize: '22px', fontWeight: '700', color: '#FF9011' }}
                      suffix={lang === "hi" ? "फीट" : "ft"}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title= {              <span className="text-gray-700 font-semibold">
{lang === "hi" ? "देश" : "Countries"} </span>
            }
                      value={15}
                       valueStyle={{ fontSize: '22px', fontWeight: '700', color: '#FF9011' }}
                      suffix={lang === "hi" ? "+" : "+"}
                    />
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
          <Row
            gutter={[16, 16]}
            className="!p-4 sm:!p-6  !bg-gradient-to-br from-white to-yellow-50 rounded-2xl"
          >
            {[
              {
                key: "ardhanarishwar",
                textHi: "अर्धनारीश्वर",
                textEn: "Ardhanarishwar",
              },
              {
                key: "janeu",
                textHi: "जनेऊ की आकृति",
                textEn: "Janeu marking",
              },
              { key: "om", textHi: "ॐ की आकृति", textEn: "Om marking" },
              { key: "trishul", textHi: "त्रिशूल", textEn: "Trishul" },
              {
                key: "ganesha",
                textHi: "गणेश जी की आकृति",
                textEn: "Ganesha pattern",
              },
              { key: "tilak", textHi: "तिलकधारी", textEn: "Tilak marking" },
            ].map((f) => (
              <Col xs={24} sm={12} md={8} key={f.key}>
                <Card
                  bordered={false}
                  className="rounded-2xl !shadow-md h-full !bg-gradient-to-tl from-white to-yellow-50  hover:!shadow-lg transition-all duration-300 hover:scale-[1.02]  !p-4 sm:!p-5"
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <ThunderboltOutlined className="!text-orange-400 text-xl sm:text-2xl" />
                    <h4 className="text-base sm:text-lg font-semibold !text-orange-400 tracking-wide">
                      {lang === "hi" ? f.textHi : f.textEn}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {lang === "hi"
                      ? "कई शिवलिंगों में ये नेचुरल पैटर्न स्वाभाविक रूप से दिखाई देते हैं।"
                      : "These natural patterns are often revealed in the stone itself."}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
          <Divider className="my-6 sm:my-8 bg-orange-200" />
          <Card
            bordered={false}
            className="rounded-2xl !shadow-md !bg-gradient-to-br from-white to-yellow-50 !p-4 sm:!p-6"
          >
         <Descriptions
  title={
    <h4 className="text-base sm:text-lg font-semibold !text-orange-400 tracking-wide px-4 pt-2">
      {lang === "hi" ? t.accessoriesHead : t.accessoriesHead}
    </h4>
  }
  bordered
  column={{ xs: 1, sm: 2, md: 3 }}
  size="middle"
  className="rounded-xl overflow-hidden shadow-sm"
  labelStyle={{
    fontWeight: 600,
    color: "#FFFFFF",
    background: "#FF9011",
    padding: "12px 20px",
  }}
  contentStyle={{
    color: "#4b5563",
    fontSize: "14px",
    padding: "12px 20px",
    background: "white",
  }}
>
  <Descriptions.Item
    label={lang === "hi" ? "देव प्रतिमाएँ" : "Deities"}
  >
    {lang === "hi"
      ? "नंदी, गणेश, पार्वती, कार्तिकेय, संपूर्ण शिव परिवार"
      : "Nandi, Ganesha, Parvati, Kartikeya, Complete Shiva Parivar"}
  </Descriptions.Item>

  <Descriptions.Item
    label={lang === "hi" ? "पूजन सामग्री" : "Puja Items"}
  >
    {lang === "hi"
      ? "नाग, त्रिशूल, जलपात्र"
      : "Naag, Trishul, Jalpatra"}
  </Descriptions.Item>

  <Descriptions.Item
    label={lang === "hi" ? "धातु" : "Metals"}
  >
    {lang === "hi" ? "तांबा, पीतल" : "Copper, Brass"}
  </Descriptions.Item>
</Descriptions>

            <p className="mt-4 sm:mt-5 text-orange-400 text-xs sm:text-sm italic border-t pt-3 sm:pt-4">
              {t.exportLine}
            </p>
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
            <Col xs={24} sm={24} md={14}>
              <Card
                className=" rounded-2xl shadow-md !p-4 sm:!p-6 !bg-gradient-to-br from-white to-yellow-50 
"
              >
                <p className="sm:mb-4 text-base sm:text-lg leading-relaxed text-gray-600 font-medium mb-5 tracking-wide">
                  {t.sizes}
                </p>
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                  {[
                    '1"',
                    '3"',
                    '6"',
                    '9"',
                    '12"',
                    '18"',
                    '24"',
                    "3ft",
                    "6ft",
                    "12ft",
                    "24ft",
                  ].map((s) => (
                    <span
                      key={s}
                      color="geekblue"
                      className="px-4 py-1.5 
            text-xs sm:text-sm 
            rounded-full 
            bg-gradient-to-r from-orange-200 to-orange-100
            text-orange-400 font-semibold
            shadow-[0_2px_6px_rgba(0,0,0,0.08)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
                  <Button
                    type="primary"
                    icon={
                      <WhatsAppOutlined className="text-lg sm:text-xl mt-0.5" />
                    }
                    size="large"
                    className="!bg-green-600 hover:!bg-green-700 rounded-xl  w-full sm:w-auto"
                    onClick={() =>
                      message.success(
                        lang === "hi"
                          ? "ऑर्डर सहायता खोली गई"
                          : "Order assistance opened"
                      )
                    }
                    href={WHATSAPP_LINK}
                    target="_blank"
                  >
                    {t.orderNow}
                  </Button>
                  <Button
                    type="primary"
                    icon={
                      <PhoneOutlined className="text-lg sm:text-xl mt-0.5" />
                    }
                    href={`tel:+91${PHONE}`}
                    size="large"
                    className="!bg-blue-600 hover:!bg-blue-700 rounded-xl w-full sm:w-auto"
                  >
                    {t.ctas.call}
                  </Button>
                  <Button
                    type="primary"
                    icon={
                      <EnvironmentOutlined className="text-lg sm:text-xl mt-0.5" />
                    }
                    href={MAPS_LINK}
                    target="_blank"
                    size="large"
                    className="!bg-red-600 hover:!bg-red-700 rounded-xl w-full sm:w-auto"
                  >
                    {t.ctas.directions}
                  </Button>
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={10}>
              <Card className="rounded-2xl shadow-sm overflow-hidden">
                <div
                  className={
                    "h-52 sm:h-64  w-full !bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center"
                  }
                >
                  {/* Replace with a size showcase image */}
                  <img
                    src="/slide8.jpg"
                    alt="Narmadeshwar Shivling sizes"
                    className="h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-6">
                  <Card size="small" className="rounded-xl !bg-indigo-50 !p-4">
                    <h5 className="font-semibold text-sm text-indigo-800">
                      {lang === "hi"
                        ? "टेंपल ग्रेड फिनिश"
                        : "Temple-grade finish"}
                    </h5>
                    <p className="text-xs mt-1 text-slate-600">
                      {lang === "hi"
                        ? "हाथों से पॉलिश व संतुलन"
                        : "Hand-polished and balanced"}
                    </p>
                  </Card>
                  <Card size="small" className="rounded-xl !bg-yellow-50 !p-4">
                    <h5 className="font-semibold text-sm text-yellow-800">
                      {lang === "hi" ? "कस्टम उत्कीर्णन" : "Custom engraving"}
                    </h5>
                    <p className="text-xs mt-1 text-slate-600">
                      {lang === "hi"
                        ? "आदेश पर उपलब्ध"
                        : "Available on request"}
                    </p>
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
            bordered={false}
            className="rounded-2xl overflow-hidden shadow-sm bg-gradient-to-br from-white to-yellow-50"
            expandIconPosition="end"
            items={t.faqs.map((f, i) => ({
              key: `${i}`,
              label: (
                <span className="text-base sm:text-lg  font-semibold !text-orange-400 transition-colors">
                  {" "}
                  {f.q}{" "}
                </span>
              ),
              children: (
                <p className="leading-7 text-orange-400 p-4 rounded-xl bg-orange-50 text-sm sm:text-base">
                  {f.a}
                </p>
              ),
            }))}
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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % copy[lang].keywords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [lang]);

  const navRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const activeTab = navRef.current?.querySelector(".ant-tabs-tab-active");
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    });

    if (navRef.current) {
      observer.observe(navRef.current, {
        attributes: true,
        subtree: true,
        attributeFilter: ["class"],
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen  bg-gradient-to-br from-[#fffdf9] to-[#f8f4f0]  text-slate-900 ">
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
                <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-yellow-500 leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
                  {t.heroTitle}
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed ">
                  {t.heroSubtitle}
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-5">
                  {/* Call Button */}
                  <Button
                    type="primary"
                    size="large"
                    icon={<PhoneOutlined style={{ fontSize: "1.25rem" }} />}
                    href={`tel:+91${PHONE}`}
                    className="!bg-gradient-to-r from-blue-600 to-blue-700 hover:!from-blue-700 hover:!to-blue-800 
               rounded-2xl !px-8 !py-5 !shadow-lg hover:!shadow-2xl 
               transform hover:scale-105 transition-all duration-300 ease-out
               flex items-center gap-2"
                  >
                    <span className="font-semibold tracking-wide">
                      {t.ctas.call}
                    </span>
                  </Button>

                  {/* WhatsApp Button */}
                  <Button
                    size="large"
                    icon={<WhatsAppOutlined style={{ fontSize: "1.25rem" }} />}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    className="!bg-gradient-to-r from-green-500 to-green-600 hover:!from-green-600 hover:!to-green-700 
               !text-white rounded-2xl !px-8 !py-5 !shadow-lg hover:!shadow-2xl 
               transform hover:scale-105 transition-all duration-300 ease-out
               flex items-center gap-2"
                  >
                    <span className="font-semibold tracking-wide">
                      {t.ctas.whatsapp}
                    </span>
                  </Button>

                  {/* Directions Button */}
                  <Button
                    size="large"
                    icon={
                      <EnvironmentOutlined style={{ fontSize: "1.25rem" }} />
                    }
                    href={MAPS_LINK}
                    target="_blank"
                    className="!bg-gradient-to-r from-red-500 to-red-600 hover:!from-red-600 hover:!to-red-700 
               !text-white rounded-2xl !px-8 !py-5 !shadow-lg hover:!shadow-2xl 
               transform hover:scale-105 transition-all duration-300 ease-out
               flex items-center gap-2"
                  >
                    <span className="font-semibold tracking-wide">
                      {t.ctas.directions}
                    </span>
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
            <div className="lg:col-span-5 w-full flex justify-center mt-10">
              <Fade delay={0.1}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/5 max-w-md w-full">
                  <img
                    src="/slide2.jpg"
                    alt="Namdev Narmadeshwar Shivling Arts workshop"
                    className="w-full h-64 sm:h-80 object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 text-white px-1">
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.7 }}
                      className="lg:text-lg text-sm font-medium tracking-wide drop-shadow text-center text-gray-200"
                    >
                      {t.keywords[index]}
                    </motion.p>
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
          className="custom-tabs"
          items={tabs.map(({ key, label, children }) => ({
            key,
            label: (
              <span className="px-6 py-2 
            text-sm md:text-base 
            font-semibold
            tracking-wide">
                {label}
              </span>
            ),
            children,
          }))}
          renderTabBar={(props, DefaultTabBar) => (
            <div
              ref={navRef}
              className="overflow-x-auto  flex w-full custom-tabs-wrapper"
            >
              <DefaultTabBar {...props} className="!flex !w-max space-x-3     
" />
            </div>
          )}
        />
      </Section>

      {/* Contact Card */}
      <Section className="py-12 lg:px-8 px-4">
        <Fade>
          <Card className="rounded-3xl shadow-lg border border-slate-100 !bg-gradient-to-br from-white to-orange-50 !p-8">
            <Row gutter={[32, 32]} align="stretch">
              {/* Left Section */}
              <Col xs={24} md={14}>
                <div className="h-full flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                  <h2 className="lg:text-3xl text-xl text-center py-2 px-10 text-white bg-gradient-to-r from-[#ffcc70] to-[#ff8c00]  mb-8">
                    {" "}
                    {t.specsHead}
                  </h2>
                  <p className="  bg-gradient-to-r from-[#ffcc70] to-[#ff8c00]  
  bg-clip-text text-transparent
 text-lg mb-6">{t.addressTitle}</p>
                  <ul className="space-y-3">
                    {t.address.map((line, i) => (
                      <li
                        key={i}
                        className="flex items-start justify-start gap-3 text-base text-orange-400"
                      >
                        <span className="  flex-shrink-0 w-3 h-3 mt-2 rounded-full 
  bg-gradient-to-r from-[#ffcc70] to-[#ff8c00]
  
"></span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>

              {/* Right Section - Action Buttons as Tiles */}
             <Col xs={24} md={10}>
  <div className="h-full flex flex-col justify-center gap-5">

    {/* CALL */}
    <a
      href={`tel:+91${PHONE}`}
      className="flex items-center gap-4 bg-gradient-to-r from-[#fff2cc] to-[#ffe4a3] hover:from-[#ffe9b5] hover:to-[#ffd98a] rounded-2xl p-5 shadow-md transition border border-[#f6d381]/50"
    >
      <div className="flex h-12 w-12 lg:text-2xl text-xl items-center justify-center rounded-xl bg-gradient-to-br from-[#ffcc70] to-[#ff8c00] text-white shadow">
        <PhoneOutlined />
      </div>
      <span className="text-lg font-semibold text-slate-900 tracking-wide">
        {t.ctas.call}
      </span>
    </a>


    {/* WHATSAPP */}
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      className="flex items-center gap-4 bg-gradient-to-r from-[#e3ffdb] to-[#c7ffbd] hover:from-[#d8ffcf] hover:to-[#b9ffae] rounded-2xl p-5 shadow-md transition border border-[#a9f796]/40"
    >
      <div className="flex h-12 w-12 lg:text-2xl text-xl items-center justify-center rounded-xl bg-green-500 text-white shadow">
        <WhatsAppOutlined />
      </div>
      <span className="text-lg font-semibold text-slate-900 tracking-wide">
        {t.ctas.whatsapp}
      </span>
    </a>


    {/* LOCATION */}
    <a
      href={MAPS_LINK}
      target="_blank"
      className="flex items-center gap-4 bg-gradient-to-r from-[#ffd4d4] to-[#ffbaba] hover:from-[#ffc6c6] hover:to-[#ffa8a8] rounded-2xl p-5 shadow-md transition border border-[#ffb3b3]/40"
    >
      <div className="flex h-12 w-12 lg:text-2xl text-xl items-center justify-center rounded-xl bg-red-500 text-white shadow">
        <EnvironmentOutlined />
      </div>
      <span className="text-lg font-semibold text-slate-900 tracking-wide">
        {t.ctas.directions}
      </span>
    </a>

  </div>
</Col>

            </Row>
          </Card>
        </Fade>
      </Section>

      
    </div>
  );
}
