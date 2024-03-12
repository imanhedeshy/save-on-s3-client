import * as Yup from "yup";

export const DynamicFormSchema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name is too short")
    .label("First Name"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .label("Email"),
  // The regex ensures that the password is at least 8 characters long,
  // contains at least one letter and one number. The `.min()` and `.max()` methods are
  // technically redundant because the regex already enforces a length constraint.
  // They are included here for educational purposes to show explicit length validation.
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password is too short")
    .max(20, "Password is too long")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least 8 characters, one letter, and one number"
    )
    .label("Password"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
  file: Yup.mixed()
    .required("A file is required")
    .label("File")
    .test(
      "fileSize",
      "The file is too large (maximum size is 2MB)",
      (value) => value && value.size <= 2000000 // 2MB
    )
    .test(
      "fileType",
      "Unsupported file format. Only JPEG and PNG are allowed",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
});