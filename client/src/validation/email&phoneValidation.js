import * as Yup from "yup";
export const contact = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
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
});
