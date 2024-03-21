// FormField.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import FormField from "./FormField";
import { Formik, Form } from "formik";
import { DynamicFormSchema } from "../../utils/YupSchemas";

describe("FormField component", () => {
  test("renders a text input with a label", () => {
    render(
      <Formik
        initialValues={{
          testName: "", // Add other initial values for all form fields here
        }}
        validationSchema={DynamicFormSchema} // Your Yup validation schema
      >
        <Form>
          <FormField
            label="Test Label"
            name="testName"
            id="testName"
            type="text"
          />
        </Form>
      </Formik>
    );

    expect(screen.getByLabelText(/Test Label/i)).toBeInTheDocument();
  });
});
