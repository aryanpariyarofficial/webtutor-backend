import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// for register the user
router.route("/register").post(singleUpload, register);

// for login the user
router.route("/login").post(login);

// for logout the user
router.route("/logout").get(logout);

// for visit my profile
router.route("/me").get(isAuthenticated, getMyProfile);
// for delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

// for change the password or update the password
router.route("/changepassword").put(isAuthenticated, changePassword);

// for update the profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// for update the profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

// for forget password
router.route("/forgetpassword").post(forgetPassword);

// for reset password
router.route("/resetpassword/:token").put(resetPassword);

// for add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// for remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// Admin Routes
router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);

// Update Role and Delete User
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizeAdmin, updateUserRole)
  .delete(isAuthenticated, authorizeAdmin, deleteUser);

export default router;
