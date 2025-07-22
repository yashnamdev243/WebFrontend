import { createTransport } from "nodemailer";
import config from "../config/config.json" assert { type: "json" };
import dotenv from "dotenv";
dotenv.config();

// if (!process.env.GMAILUSER || !process.env.GMAILPASS) {
//   throw new Error("Missing Gmail credentials in environment variables");
// }

const transporter = createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: config.development.GMAILUSER,
    pass: config.development.GMAILPASS,
  },
});

const createEmailTemplate = (data) => {
  return {
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .email-container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              border: 1px solid #ddd;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .email-header {
              background: linear-gradient(to right, #4682B4, #04080B);
              color: #fff;
              padding: 20px;
              text-align: center;
              font-size: 24px;
            }
            .email-body {
              padding: 20px;
              background-color: #f9f9f9;
            }
            .email-body table {
              width: 100%;
              border-collapse: collapse;
            }
            .email-body table td {
              padding: 10px;
              vertical-align: top;
            }
            .email-body table td:first-child {
              font-weight: bold;
              color: #555;
              width: 30%;
            }
            .email-body table td:last-child {
              color: #000;
            }
            .email-footer {
              text-align: center;
              padding: 10px;
              background-color: #f1f1f1;
              font-size: 14px;
              color: #555;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              ${data.subject}
            </div>
            <div class="email-body">
              <table>
                <tr>
                  <td>Name:</td>
                  <td>${data.name} ${data.middleName || ""} ${
      data.lastName
    }</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>${data.recipientEmail}</td>
                </tr>
                <tr>
                  <td>Contact:</td>
                  <td>${data.countryCode} ${data.contact}</td>
                </tr>
                <tr>
                  <td>Subject:</td>
                  <td>${data.subject}</td>
                </tr>
                <tr>
                  <td>Service:</td>
                  <td>${data.service}</td>
                </tr>
                <tr>
                  <td>Message:</td>
                  <td>${data.messageBody}</td>
                </tr>
              </table>
            </div>
            
          </div>
        </body>
      </html>
    `,
  };
};

export async function sendEmail(data) {
  try {
    const { html } = createEmailTemplate(data);

    const mailOptions = {
      from: `"MsGmp Inquiry mail" <ptushal53@gmail.com>`,
      to: "yashnamdev1606@gmail.com",
      subject: "New Enquiry On MsGmp.com",
      html: html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
    return;
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
