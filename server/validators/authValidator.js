import { body, param } from "express-validator";

export const registerValidator = [
  body("email").isEmail().withMessage("A valid email is required"),

  body("phoneNo")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be 10 digits"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("firstName").notEmpty().withMessage("First name is required"),

  body("lastName").notEmpty().withMessage("Last name is required"),

  body("gender").notEmpty().withMessage("Gender is required"),

  body("dob")
    .notEmpty()
    .withMessage("Date of birth is required")
    .matches(/^\d{1,2} \w+ \d{4}$/)
    .withMessage("Date of birth must be in format: xx May xxxx"),

  body("religion").notEmpty().withMessage("Religion is required"),

  body("community").notEmpty().withMessage("Community is required"),

  body("state").notEmpty().withMessage("State is required"),

  body("createdFor").notEmpty().withMessage("Created For is required"),
];

export const loginValidator = [
  body("email").notEmpty().withMessage("Username (email) is required"),
  body("password").notEmpty().withMessage("Password is required"),
];
