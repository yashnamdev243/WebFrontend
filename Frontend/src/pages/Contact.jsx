import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input, Select, Button, Form } from "antd";

const { TextArea } = Input;
const { Option } = Select;

function Contact() {
  const listRefs = useRef([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    mobileNumber: "",
    lookingFor: "",
    subject: "",
    countryCode: "+91",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  const countryCodes = [
    { name: "Afghanistan", code: "+93" },
    { name: "Åland Islands", code: "+358" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "American Samoa", code: "+1-684" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Anguilla", code: "+1-264" },
    { name: "Antarctica", code: "+672" },
    { name: "Antigua and Barbuda", code: "+1-268" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Aruba", code: "+297" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" },
    { name: "Bahamas", code: "+1-242" },
    { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" },
    { name: "Barbados", code: "+1-246" },
    { name: "Belarus", code: "+375" },
    { name: "Belgium", code: "+32" },
    { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" },
    { name: "Bermuda", code: "+1-441" },
    { name: "Bhutan", code: "+975" },
    { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" },
    { name: "Botswana", code: "+267" },
    { name: "Brazil", code: "+55" },
    { name: "British Indian Ocean Territory", code: "+246" },
    { name: "Brunei Darussalam", code: "+673" },
    { name: "Bulgaria", code: "+359" },
    { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" },
    { name: "Cabo Verde", code: "+238" },
    { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" },
    { name: "Cayman Islands", code: "+1-345" },
    { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" },
    { name: "China", code: "+86" },
    { name: "Christmas Island", code: "+61" },
    { name: "Cocos (Keeling) Islands", code: "+61" },
    { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" },
    { name: "Congo", code: "+242" },
    { name: "Congo (Democratic Republic of the)", code: "+243" },
    { name: "Cook Islands", code: "+682" },
    { name: "Costa Rica", code: "+506" },
    { name: "Côte d'Ivoire", code: "+225" },
    { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" },
    { name: "Curaçao", code: "+599" },
    { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" },
    { name: "Denmark", code: "+45" },
    { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1-767" },
    { name: "Dominican Republic", code: "+1-809" },
    { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" },
    { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" },
    { name: "Ethiopia", code: "+251" },
    { name: "Falkland Islands (Malvinas)", code: "+500" },
    { name: "Faroe Islands", code: "+298" },
    { name: "Fiji", code: "+679" },
    { name: "Finland", code: "+358" },
    { name: "France", code: "+33" },
    { name: "French Guiana", code: "+594" },
    { name: "French Polynesia", code: "+689" },
    { name: "Gabon", code: "+241" },
    { name: "Gambia", code: "+220" },
    { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" },
    { name: "Ghana", code: "+233" },
    { name: "Gibraltar", code: "+350" },
    { name: "Greece", code: "+30" },
    { name: "Greenland", code: "+299" },
    { name: "Grenada", code: "+1-473" },
    { name: "Guadeloupe", code: "+590" },
    { name: "Guam", code: "+1-671" },
    { name: "Guatemala", code: "+502" },
    { name: "Guernsey", code: "+44-1481" },
    { name: "Guinea", code: "+224" },
    { name: "Guinea-Bissau", code: "+245" },
    { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" },
    { name: "Heard Island and McDonald Islands", code: "+672" },
    { name: "Holy See", code: "+379" },
    { name: "Honduras", code: "+504" },
    { name: "Hong Kong", code: "+852" },
    { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" },
    { name: "Iran (Islamic Republic of)", code: "+98" },
    { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" },
    { name: "Isle of Man", code: "+44-1624" },
    { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" },
    { name: "Jamaica", code: "+1-876" },
    { name: "Japan", code: "+81" },
    { name: "Jersey", code: "+44-1534" },
    { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" },
    { name: "Kiribati", code: "+686" },
    { name: "Korea (Democratic People's Republic of)", code: "+850" },
    { name: "Korea (Republic of)", code: "+82" },
    { name: "Kuwait", code: "+965" },
    { name: "Kyrgyzstan", code: "+996" },
    { name: "Lao People's Democratic Republic", code: "+856" },
    { name: "Latvia", code: "+371" },
    { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" },
    { name: "Liberia", code: "+231" },
    { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" },
    { name: "Lithuania", code: "+370" },
    { name: "Luxembourg", code: "+352" },
    { name: "Macao", code: "+853" },
    { name: "Macedonia (the former Yugoslav Republic of)", code: "+389" },
    { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" },
    { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" },
    { name: "Marshall Islands", code: "+692" },
    { name: "Martinique", code: "+596" },
    { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" },
    { name: "Mayotte", code: "+262" },
    { name: "Mexico", code: "+52" },
    { name: "Micronesia (Federated States of)", code: "+691" },
    { name: "Moldova (Republic of)", code: "+373" },
    { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" },
    { name: "Montserrat", code: "+1-664" },
    { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" },
    { name: "Myanmar", code: "+95" },
    { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" },
    { name: "Netherlands", code: "+31" },
    { name: "New Caledonia", code: "+687" },
    { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" },
    { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" },
    { name: "Niue", code: "+683" },
    { name: "Norfolk Island", code: "+672" },
    { name: "Northern Mariana Islands", code: "+1-670" },
    { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" },
    { name: "Palau", code: "+680" },
    { name: "Palestine, State of", code: "+970" },
    { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" },
    { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" },
    { name: "Pitcairn", code: "+64" },
    { name: "Poland", code: "+48" },
    { name: "Portugal", code: "+351" },
    { name: "Puerto Rico", code: "+1-787" },
    { name: "Qatar", code: "+974" },
    { name: "Réunion", code: "+262" },
    { name: "Romania", code: "+40" },
    { name: "Russian Federation", code: "+7" },
    { name: "Rwanda", code: "+250" },
    { name: "Saint Barthélemy", code: "+590" },
    { name: "Saint Helena, Ascension and Tristan da Cunha", code: "+290" },
    { name: "Saint Kitts and Nevis", code: "+1-869" },
    { name: "Saint Lucia", code: "+1-758" },
    { name: "Saint Martin (French part)", code: "+590" },
    { name: "Saint Pierre and Miquelon", code: "+508" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784" },
    { name: "Samoa", code: "+685" },
    { name: "San Marino", code: "+378" },
    { name: "Sao Tome and Principe", code: "+239" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" },
    { name: "Seychelles", code: "+248" },
    { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" },
    { name: "Sint Maarten (Dutch part)", code: "+1-721" },
    { name: "Slovakia", code: "+421" },
    { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" },
    { name: "Somalia", code: "+252" },
    { name: "South Africa", code: "+27" },
    { name: "South Georgia and the South Sandwich Islands", code: "+500" },
    { name: "South Sudan", code: "+211" },
    { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" },
    { name: "Svalbard and Jan Mayen", code: "+47" },
    { name: "Swaziland", code: "+268" },
    { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" },
    { name: "Syrian Arab Republic", code: "+963" },
    { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" },
    { name: "Tanzania, United Republic of", code: "+255" },
    { name: "Thailand", code: "+66" },
    { name: "Timor-Leste", code: "+670" },
    { name: "Togo", code: "+228" },
    { name: "Tokelau", code: "+690" },
    { name: "Tonga", code: "+676" },
    { name: "Trinidad and Tobago", code: "+1-868" },
    { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" },
    { name: "Turkmenistan", code: "+993" },
    { name: "Turks and Caicos Islands", code: "+1-649" },
    { name: "Tuvalu", code: "+688" },
    { name: "Uganda", code: "+256" },
    { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" },
    {
      name: "United Kingdom of Great Britain and Northern Ireland",
      code: "+44",
    },
    { name: "United States of America", code: "+1" },
    { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" },
    { name: "Vanuatu", code: "+678" },
    { name: "Venezuela (Bolivarian Republic of)", code: "+58" },
    { name: "Viet Nam", code: "+84" },
    { name: "Wallis and Futuna", code: "+681" },
    { name: "Western Sahara", code: "+212" },
    { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" },
    { name: "Zimbabwe", code: "+263" },
  ];

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const data = JSON.stringify({
        name: values.firstName,
        middleName: values.middleName,
        countryCode: values.countryCode,
        lastName: values.lastName,
        recipientEmail: values.email,
        contact: values.mobileNumber,
        service: values.lookingFor,
        subject: values.subject,
        messageBody: values.message,
      });

      const config = {
        method: "post",
        url: "https://bkl.gxpro.co.in/admin/contact-us",
        headers: { "Content-Type": "application/json" },
        data: data,
      };

      await toast.promise(axios(config), {
        pending: "Submitting your feedback...",
        success: "Thanks for your feedback!",
        error: "Something went wrong. Please try again later...",
      });

      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        toast.error(
          `Server error: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        toast.error("Network error - please check your connection");
      } else {
        toast.error("Request error - please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="inset-0 bg-gradient-to-b from-white to-white">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <ToastContainer autoClose={3000} />
          <section
            className="lg:w-full w-full lg:px-2 px-4 bg-gradient-to-tr from-[#fefce8] to-[#ffedd5]  grid lg:grid-cols-2 bg-cover lg:h-screen mx-auto text-white py-10 pt-20 lg:py-25 lg:pt-35 text-center"
            data-aos="fade-down"
          >
            <div className="lg:w-130 mx-auto h-fit relative flex justify-center items-center overflow-hidden">
              <img
                src="/contact.png"
                alt="Premium Image"
                className="lg:w-full w-70 mx-auto h-auto object-cover "
              />
            </div>
            <div className="flex flex-col mt-10 lg:items-end lg:pr-5 justify-center">
              <div
                className="border-b-8 shadow-2xl border-white bg-gradient-to-r from-[#e98948] to-[#4f342f] transition-all duration-300 ease-in-out lg:p-4 p-4 text-white"
                style={{ borderRadius: "15px 50px" }}
              >
                <h2 className="lg:text-5xl text-3xl lg:mt-6 mt-4 font-bold  lg:mr-[15%]">
                  Contact Us
                </h2>
                <p className="lg:text-lg text-sm lg:max-w-2xl leading-relaxed lg:mt-4 lg:pt-4 pt-3 lg:px-10 px-5 pb-8 text-left">
                  We’d love to hear from you! Have any questions or need
                  assistance? Feel free to reach out to us. Our team is here to
                  help you with any inquiries. Whether you have questions about
                  our services, need guidance on a specific issue, or simply
                  want to share your feedback, we’re always happy to assist. Our
                  customer support team is available 24/7 to ensure you get the
                  help you need. You can contact us via email, phone, or live
                  chat. We aim to respond as quickly as possible so you can
                  continue your journey without any hassle. Don't hesitate to
                  connect with us—we value your input and look forward to
                  assisting you!
                </p>
              </div>
            </div>
          </section>

          <div className="lg:max-w-[1260px] mx-auto w-full py-15 px-6 text-center">
            <h2
              className="lg:text-4xl text-2xl font-bold  text-center mb-8 text-[#04080B] relative"
              data-aos="fade-up"
            >
              Our Contact Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3  lg:p-8 gap-8 mb-8">
              {[
                {
                  icon: (
                    <FaMapMarkerAlt className="text-green-400 text-3xl lg:text-4xl mb-4 animate-pulse" />
                  ),
                  title: "Location",
                  content: (
                    <a
                      href="https://maps.app.goo.gl/t1Ewtw1vwWQ7WQ4UA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 hover:underline"
                    >
                      First Floor, 394, near Ratina Hospital PU-04, Vijay Nagar,
                      Indore, Madhya Pradesh 452010
                    </a>
                  ),
                  delay: "0",
                },
                {
                  icon: (
                    <FaPhoneAlt className="text-indigo-400 text-3xl lg:text-4xl mb-4 animate-pulse" />
                  ),
                  title: "Call Us",
                  content: (
                    <>
                      <a
                        href="tel:+919617770237"
                        className="block text-blue-800 hover:underline font-semibold"
                      >
                        +91 9617770237
                      </a>
                      <a
                        href="tel:+919691377578"
                        className="block text-blue-800 hover:underline font-semibold mt-1"
                      >
                        +91 9691377578
                      </a>
                    </>
                  ),
                  delay: "200",
                },
                {
                  icon: (
                    <FaEnvelope className="text-red-400 text-3xl lg:text-4xl mb-4 animate-pulse" />
                  ),
                  title: "Email",
                  content: [
                    <a
                      href="mailto:Info@msgmp.co.in"
                      className="text-blue-800 hover:underline font-semibold"
                    >
                      Info@msgmp.co.in
                    </a>,
                    <a
                      href="mailto:Info@gxpro.co.in"
                      className="block text-blue-800 hover:underline font-medium"
                    >
                      Info@gxpro.co.in
                    </a>,
                  ],
                  delay: "400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg transition-all duration-300 border-b-2 border-blue-900 bg-white  hover:bg-gradient-to-b from-gray-50 to-blue-100  text-black hover:shadow-2xl  transform hover:scale-[1.05]"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  {item.icon}
                  <h3 className="font-bold text-lg lg:text-xl mb-2">
                    {item.title}
                  </h3>
                  <div className="text-sm lg:text-base">{item.content}</div>
                </div>
              ))}
            </div>
          </div>

          <div className=" text-center lg:px-2 py-10 rounded-xl ">
            <h2
              className="lg:text-4xl text-2xl font-bold  text-center mb-3 text-[#04080B] relative"
              data-aos="fade-up"
            >
              Send Us a Message
            </h2>
            <p
              className="lg:text-lg text-xs mb-15 px-8 mx-auto flex text-[#04080B] justify-center"
              data-aos="fade-up"
            >
              Fill out the form below, and we'll get back to you as soon as
              possible.
            </p>

            <div
              className="grid lg:grid-cols-2 lg:gap-2 w-full rounded-2xl"
              data-aos="zoom-in"
            >
              <div className="lg:mt-15  flex justify-center">
                <img
                  src="/contact2.png"
                  alt="Contact Us"
                  className="lg:w-130 lg:h-120 w-50 mx-auto "
                  // className="lg:w-150 w-50 mx-auto animate-[bounce_5s_infinite]"
                />
              </div>

              <div className="flex justify-center items-center lg:px-10 px-5">
                <div className=" border-b-2 border-blue-900 bg-gradient-to-b from-gray-50 to-blue-100  text-black  shadow-2xl rounded-lg lg:p-6 p-4 lg:w-[550px]">
                  {/* <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2> */}
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    initialValues={{ countryCode: "+91" }}
                  >
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                          { required: true, message: "First name is required" },
                        ]}
                      >
                        <Input placeholder="First Name" />
                      </Form.Item>

                      <Form.Item label="Middle Name" name="middleName">
                        <Input placeholder="Middle Name" />
                      </Form.Item>

                      <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                          { required: true, message: "Last name is required" },
                        ]}
                      >
                        <Input placeholder="Last Name" />
                      </Form.Item>

                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          { required: true, message: "Email is required" },
                          {
                            type: "email",
                            message: "Please enter a valid email",
                          },
                        ]}
                      >
                        <Input type="email" placeholder="Your Email" />
                      </Form.Item>

                      <Form.Item
                        label="Mobile Number"
                        name="mobileNumber"
                        className="md:col-span-2"
                        rules={[
                          {
                            required: true,
                            message: "Mobile number is required",
                          },
                          {
                            pattern: /^\d+$/,
                            message: "Mobile number must be numeric",
                          },
                        ]}
                      >
                        <div className="flex space-x-2 lg:gap-35  gap-2">
                          <Form.Item
                            name="countryCode"
                            noStyle
                            rules={[
                              {
                                required: true,
                                message: "Country code is required",
                              },
                            ]}
                          >
                            <Select className="flex-1  lg:min-w-[70px] min-w-[70px] ">
                              {countryCodes.map((item, index) => (
                                <Option key={index} value={item.code}>
                                  {item.code} {item.name}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                          <Input
                            placeholder="Mobile Number"
                            className="lg:w-2/3   lg:right-32 "
                          />
                        </div>
                      </Form.Item>

                      <Form.Item label="Subject" name="subject">
                        <Input placeholder="Subject" />
                      </Form.Item>

                      <Form.Item
                        label="Looking For"
                        name="lookingFor"
                        rules={[
                          {
                            required: true,
                            message: "Please select an option",
                          },
                        ]}
                      >
                        <Select placeholder="Please select">
                          <Option
                            value="Supplier Audit & Qualification
"
                          >
                            Supplier Audit & Qualification
                          </Option>
                          <Option
                            value="QMS Consulting & Implementation
"
                          >
                            QMS Consulting & Implementation
                          </Option>
                          <Option
                            value="GMP Certification/Upgradation
"
                          >
                            GMP Certification/Upgradation
                          </Option>
                          <Option
                            value="Regulatory Services
"
                          >
                            Regulatory Services
                          </Option>
                          <Option
                            value="Technology Transfer
"
                          >
                            Technology Transfer
                          </Option>
                          <Option
                            value="Regulated Market Access
"
                          >
                            Regulated Market Access
                          </Option>
                          <Option value="Trainings">Trainings</Option>
                          <Option
                            value="Turnkey Projects Solutions
"
                          >
                            Turnkey Projects Solutions
                          </Option>
                          <Option value="Regulatory Submissions">
                            Regulatory Submissions
                          </Option>
                          <Option
                            value="Qualification & Validation
"
                          >
                            Qualification & Validation
                          </Option>
                          <Option
                            value="Engineering Design Solutions

"
                          >
                            Engineering Design Solutions
                          </Option>
                        </Select>
                      </Form.Item>
                    </div>

                    <Form.Item
                      label="Message"
                      name="message"
                      rules={[
                        { required: true, message: "Message is required" },
                      ]}
                    >
                      <TextArea rows={4} placeholder="Leave a message here" />
                    </Form.Item>

                    <Form.Item className="text-center ">
                      <Button
                        type="!primary"
                        htmlType="submit"
                        className="lg:w-20% w-10% !bg-gradient-to-r from-[#4682B4] to-[#04080B] lg:!py-5 !py-4 lg:!px-6 !text-white lg:!text-[16px] !rounded-xl hover:scale-105"
                        loading={loading}
                      >
                        Send Message
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-12 w-full max-w-[1220px] bg-gradient-to-b from-gray-100 to-blue-50 text-center rounded-xl shadow-2xl mx-auto py-10 lg:px-12 mb-10 px-4 text-[#04080B]"
            data-aos="fade-up"
          >
            <h2 className="lg:text-4xl text-2xl font-bold  mb-8 text-[#04080B] text-center">
              Our Location
            </h2>

            <div className="relative overflow-hidden rounded-lg hover:shadow-lg border-1  border-b-4 border-blue-900  ">
              <iframe
                className="w-full h-[350px] md:h-[400px] lg:h-[450px] rounded-lg border-none"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.4783322960684!2d75.89412127476221!3d22.747623226533733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8978230e46e9419d%3A0x8b4db8902986a3f0!2sMSGMP%20%7C%20GxPro%20Pharma%20Project%20Consultant!5e0!3m2!1sen!2sin!4v1743066584396!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
