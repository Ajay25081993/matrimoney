import * as Yup from "yup";

const profileValidationSchema = Yup.object().shape({
  highestQualification: Yup.string().required("Qualification is required"),
  city: Yup.string()
    .required("City name is required")
    .min(3, "City name must be at least 10 characters"),
  college: Yup.string()
    .required("College name is required")
    .min(3, "College name must be at least 3 characters"),
  workWith: Yup.string().required("Work with is required"),
  workAs: Yup.string().when("workWith", {
    is: (val) => val && val !== "Not Working",
    then: Yup.string().required("Profession is required"),
  }),
  company: Yup.string().when("workWith", {
    is: (val) => val && val !== "Not Working",
    then: Yup.string().min(2, "Company name must be at least 2 characters"),
  }),
  monthlyIncome: Yup.string(),
  yearlyIncome: Yup.string(),
});

export default profileValidationSchema;
