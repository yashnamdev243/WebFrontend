import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { sendEmail } from "../utils/mailer.js";
import config from "../config/config.json" assert { type: "json" };
import { MailData } from "../models/contactUs.model.js";
import { Blog } from "../models/blog.model.js";
import { getImageUrl } from "../middleware/authentication.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        status: 404,
        error: true,
        message: "Email and Password required",
      });
    }

    const data = await User.findOne({
      where: { email: email.toLowerCase(), isActive: true },
    });

    if (!data) {
      return res
        .status(401)
        .json({ status: 401, error: true, message: "Invalid Email" });
    }

    const result = bcrypt.compareSync(password, data.password);

    if (!result) {
      return res
        .status(401)
        .json({ status: 401, error: true, message: "Invalid Password" });
    }

    const token = jwt.sign(
      { userId: data.user_id },
      config.development.JWT_ADMIN_SECRET,
      { expiresIn: "24h" }
    );

    if (!token) {
      return res.status(401).json({
        status: 401,
        error: true,
        message: "Error in Generating Token",
      });
    }

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Login Successfully",
      token: token,
      data: {
        name: data.name,
        email: data.email,
        user_type: data.user_type,
      },
    });
  } catch (e) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error:${e}`,
    });
  }
};

export const adminLogout = (req, res) => {
  try {
    req.user = null;
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Logout Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const adminProfile = async (req, res) => {
  try {
    const data = await User.findOne({ where: { user_id: req.user.userId } });
    return res.status(200).json({
      message: "Profile Successfully",
      status: 200,
      error: false,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const contactUs = async (req, res) => {
  const {
    name,
    middleName,
    lastName,
    service,
    recipientEmail,
    countryCode,
    contact,
    subject,
    messageBody,
  } = req.body;

  if (
    !name ||
    // !middleName ||
    !lastName ||
    !service ||
    !recipientEmail ||
    !countryCode ||
    !contact ||
    !subject ||
    !messageBody
  ) {
    return res.status(404).json({
      status: 404,
      error: true,
      message: "All fields are required",
    });
  }

  const mailRecord = await MailData.create({
    name: name,
    middleName: middleName,
    lastName: lastName,
    service: service,
    recipientEmail: recipientEmail,
    countryCode: countryCode,
    contact: contact,
    subject: subject,
    messageBody: messageBody, // HTML or plain text body
  });

  const mailData = {
    name: name,
    middleName: middleName,
    lastName: lastName,
    recipientEmail: recipientEmail,
    countryCode: countryCode,
    contact: contact,
    service: service,
    subject: subject,
    messageBody: messageBody,
  };

  try {
    const result = await sendEmail(mailData);
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Email Sent Successfully",
      data: mailRecord,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const contactUsList = async (req, res) => {
  try {
    const data = await MailData.findAll({ order: [["id", "DESC"]] });
    return res.status(200).json({
      message: "Mail List Successfully",
      status: 200,
      error: false,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const deleteContactUs = async (req, res) => {
  try {
    const result = await MailData.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Mail Deleted Successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, description, post_type } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        status: 400,
        error: true,
        message: "All fields are required",
      });
    }

    // Process banner photo
    let bannerPhotoUrl = null;
    if (req.files?.banner_photo?.[0]) {
      bannerPhotoUrl = req.files.banner_photo[0].filename;
    }


    // Process multiple images
    let imageUrls = [];
    if (req.files?.images) {
      imageUrls = req.files.images.map((file) => file.filename);
    }
    
    const checkBannerPhoto = getImageUrl(req, bannerPhotoUrl);

    const result = await Blog.create({
      title: title,
      description: description,
      banner_photo:  getImageUrl(req, bannerPhotoUrl),
      images: imageUrls.map((url) => getImageUrl(req, url)), // Assuming images is stored as a JSON array in the database
      post_type: post_type,
    });

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Blog Created Successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, description, post_type } = req.body;

    // Process banner photo
    let bannerPhotoUrl = null;
    if (req.files?.banner_photo?.[0]) {
      bannerPhotoUrl = req.files.banner_photo[0].filename;
    }

    // Process multiple images
    let imageUrls = [];
    if (req.files?.images) {
      imageUrls = req.files.images.map((file) => file.filename);
    }

    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({
        status: 404,
        error: true,
        message: "Blog not found",
      });
    }

    // Update the blog
    const updatedBlog = await blog.update({
      title,
      description,
      post_type,
      banner_photo: bannerPhotoUrl
        ? getImageUrl(req, bannerPhotoUrl)
        : blog.banner_photo,
      images: imageUrls.length > 0 ? imageUrls : blog.images, // Append or replace based on logic
    });

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const result = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.status(200).json({
      status: 200,
      error: false,
      message: "Blog Deleted Successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};

export const blogList = async (req, res) => {
  try {
    const data = await Blog.findAll({ order: [["id", "DESC"]] });
    return res.status(200).json({
      message: "Blog List Successfully",
      status: 200,
      error: false,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: `Internal Server Error${error}`,
    });
  }
};
