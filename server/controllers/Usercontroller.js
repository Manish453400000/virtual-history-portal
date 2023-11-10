import mongoose from "mongoose";
// import asyncHandler
import { asyncHandler } from "../utils/asyncHandler.js";
// Import user models
import { User } from "../models/user.model.js";
import { Achievement } from "../models/achievements.model.js";

const saveUserInfo = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    response: user,
  });
});

const saveAchievements = asyncHandler(async (req, res) => {
  const achievements = await Achievement.create(req.body);
  res.status(200).json({
    success: true,
    response: achievements,
  });
});

const getUserInfo = asyncHandler(async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    response: user,
  });
});

const getAchievements = asyncHandler(async (req, res) => {
  const achievement = await Achievement.findOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    response: achievement,
  });
});

export { saveUserInfo, getUserInfo, saveAchievements, getAchievements };
