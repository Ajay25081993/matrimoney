import { successResponse, errorResponse } from "../helper/responseHelper.js";
import { Info, User } from "../models/Schemas.js";

export const createInfo = async (req, res) => {
  const {
    languageKnown,
    highestQualification,
    college,
    workWith,
    workAs,
    monthlyIncome,
    yearlyIncome,
    city,
    liveWithFamily,
    maritalStatus,
    hasChildren,
    diet,
    height,
    subCommunity,
    casteNoBar,
    about,
  } = req.body;
  const newInfo = {
    user_id: req.user,
    qualification: highestQualification,
    college,
    workWith,
    workAs,
    income: monthlyIncome.length ? monthlyIncome : yearlyIncome,
    languageKnown,
    city,
    liveWithFamily,
    maritalStatus,
    children: hasChildren,
    diet,
    height,
    subCommunity,
    casteMatters: casteNoBar,
    aboutMe: about,
  };
  try {
    const info = await Info.create(newInfo);
    successResponse(res, "User Info Created Successfully", [info], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
};

export const getInfo = async (req, res) => {
  try {
    const info = await Info.findOne({
      where: { user_id: req.params.user_id },
      include: [
        { model: User, as: "user", attributes: ["id", "username", "email"] },
      ],
    });

    if (!info) return successResponse(res, "Info not found", [], 200);

    successResponse(res, "User Info", [info], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
};

export const updateInfo = async (req, res) => {
  try {
    const info = await Info.findOne({ where: { user_id: req.params.user_id } });

    if (!info) return successResponse(res, "Info not found", [], 200);

    Object.assign(info, req.body);
    await info.save();

    successResponse(res, "User Info Updated", [info], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
};

export const deleteInfo = async (req, res) => {
  try {
    const info = await Info.findOne({ where: { user_id: req.params.user_id } });

    if (!info) return successResponse(res, "Info not found", [], 200);

    await info.destroy();
    successResponse(res, "User Info Deleted", [], 200);
  } catch (error) {
    console.error(error);
    errorResponse(res, "Server error", [], 500);
  }
};
