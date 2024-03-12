import "./DynamicForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import Yup from "yup";

export default function DynamicForm() {
  return (
    <Formik>
      <Form>
        <Field />
        <ErrorMessage />
      </Form>
    </Formik>
  );
}
