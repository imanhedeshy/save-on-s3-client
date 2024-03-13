import "./FormField.scss";

import { Field, ErrorMessage } from "formik";

export default function FormField({ label, name, type, id, ...rest }) {
  return (
    <div className="form-field">
      <label className="dynamic-form__label" htmlFor={name}>
        {label}
      </label>
      <Field
        className="dynamic-form__input"
        type={type}
        id={id || name}
        name={name}
        {...rest}
      />
      <ErrorMessage
        className="dynamic-form__error-message"
        name={name}
        component="div"
        aria-live="polite"
      />
    </div>
  );
}
