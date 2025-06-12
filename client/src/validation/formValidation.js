import * as Yup from "yup";

export const userDataSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required("First Name is required.")
    .test(
      "min-chars",
      "First Name must be at least 3 characters.",
      (value) => !value || value.length >= 3
    ),
  lastName: Yup.string()
    .trim()
    .required("Last Name is required.")
    .test(
      "min-chars",
      "Last Name must be at least 2 characters.",
      (value) => !value || value.length >= 2
    ),
  dob: Yup.object().shape({
    day: Yup.string()
      .required("Day is required.")
      .test("is-valid-day", "Invalid day", (value) => {
        if (!value) return true;
        const day = parseInt(value, 10);
        return !isNaN(day) && day >= 1 && day <= 31;
      }),
    month: Yup.string()
      .required("Month is required.")
      .test("is-valid-month", "Invalid month", (value) => {
        if (!value) return true;
        const month = parseInt(value, 10);
        return !isNaN(month) && month >= 1 && month <= 12;
      }),
    year: Yup.string()
      .required("Year is required.")
      .test("is-valid-year", "Invalid year", (value) => {
        if (!value) return true;
        const year = parseInt(value, 10);
        const currentYear = new Date().getFullYear();
        return !isNaN(year) && year >= 1900 && year <= currentYear;
      })
      .test(
        "minimum-age",
        "You must be at least 20 years old.",
        function (value) {
          const { day, month } = this.parent;
          if (!value || !day || !month) return true;

          const birthDate = new Date(`${value}-${month}-${day}`);
          const today = new Date();

          const age = today.getFullYear() - birthDate.getFullYear();
          const hasHadBirthdayThisYear =
            today.getMonth() + 1 > parseInt(month) ||
            (today.getMonth() + 1 === parseInt(month) &&
              today.getDate() >= parseInt(day));

          const actualAge = hasHadBirthdayThisYear ? age : age - 1;

          return actualAge >= 20;
        }
      )
      .test(
        "is-leap-day",
        "Invalid February date for leap year",
        function (value) {
          const { day, month } = this.parent;
          const y = parseInt(value, 10);
          const d = parseInt(day, 10);
          const m = parseInt(month, 10);

          if (!value || !month || !day) return true;

          if (m === 2) {
            const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
            if (d > (isLeap ? 29 : 28)) {
              return false;
            }
          }
          return true;
        }
      ),
  }),
});
