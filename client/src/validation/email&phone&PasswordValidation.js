import * as Yup from "yup";

export const contact = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .test(
      "valid-email-format",
      "Invalid email address",
      (value) => !!value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ),

  phoneNo: Yup.string()
    .required("Phone number is required")
    .test(
      "valid-phone-format",
      "Phone number must be exactly 10 digits",
      (value) => !!value && /^\d{10}$/.test(value)
    )
    .test("not-start-with-forbidden", function (value) {
      if (!value)
        return this.createError({ message: "Phone number is required" });

      const firstChar = value.charAt(0);
      const forbiddenStarts = ["0", "1", "2", "3", "4", "5"];

      if (forbiddenStarts.includes(firstChar)) {
        return this.createError({
          message: `Phone number cannot start with ${firstChar}`,
        });
      }

      return true;
    }),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot be more than 20 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[a-z]/, "Password must have at least one lowercase letter")
    .matches(/\d/, "Password must have at least one number")
    .matches(
      /[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/,
      "Password must have at least one special character"
    ),
});
