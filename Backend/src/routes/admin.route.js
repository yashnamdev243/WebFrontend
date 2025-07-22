import express from "express";
import {
  adminLogin,
  adminLogout,
  adminProfile,
  blogList,
  contactUs,
  contactUsList,
  createBlog,
  deleteBlog,
  deleteContactUs,
  updateBlog,
} from "../controllers/admin.controller.js";
import { upload } from "../utils/multer.js";
import { checkJwtToken } from "../middleware/authentication.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);   //http://localhost:4000/admin/login
adminRouter.post("/logout", adminLogout);
adminRouter.get("/get-Profile", checkJwtToken, adminProfile);
adminRouter.post("/contact-us", contactUs);
adminRouter.delete("/delete-contact-us/:id", checkJwtToken, deleteContactUs);
adminRouter.get("/contact-us-list", checkJwtToken, contactUsList);
adminRouter.post("/create-blog", checkJwtToken, upload.fields([
    { name: "banner_photo", maxCount: 1 }, // Single banner photo
    { name: "images", maxCount: 10 }, // Multiple images for blogs (up to 10)
  ]), createBlog );
adminRouter.put("/update-blog/:id",checkJwtToken, upload.fields([
      { name: "banner_photo", maxCount: 1 }, // Single banner photo
    { name: "images", maxCount: 10 }, // Multiple images for blogs (up to 10)
  ]), updateBlog );
adminRouter.delete("/delete-blog/:id", checkJwtToken, deleteBlog);
adminRouter.get("/blog-list", blogList);

export default adminRouter;
