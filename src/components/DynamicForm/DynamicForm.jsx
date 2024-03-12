import "./DynamicForm.scss";

import { Formik, Form } from "formik";

import { DynamicFormSchema } from "../../utils/YupSchemas";

import FormField from "../FormField/FormField";
import FileUpload from "../FileUpload/FileUpload";

export default function DynamicForm() {
  const formInitialValues = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    file: null,
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={DynamicFormSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
      validateOnBlur={true}
      validateOnChange={false}
      validateOnMount={false}
    >
      {(formik) => (
        <Form className="dynamic-form" aria-labelledby="form-heading">
          <h2 className="dynamic-form__heading">Sample Form</h2>

          <FormField
            label="First Name"
            name="firstName"
            type="text"
            id="firstName"
            aria-required="true"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            id="email"
            aria-required="true"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            id="password"
            aria-required="true"
          />
          <FormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            aria-required="true"
          />

          <FileUpload
            className="dynamic-form__file-upload"
            name="file"
            aria-required="true"
            formikProps={formik}
          />

          <button
            className="dynamic-form__submit"
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            aria-disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
