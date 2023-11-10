import { Router } from "express";
// import controllers
import {
  saveUserInfo,
  getUserInfo,
  saveAchievements,
  getAchievements,
} from "../../controllers/Usercontroller.js";

const userRouter = Router();

userRouter.route("/").post(saveUserInfo);
userRouter.route("/:id").get(getUserInfo);
userRouter.route("/achievement/:id").post(saveAchievements);
userRouter.route("/achievement/:id").get(getAchievements);

export { userRouter };
