import "./FileUpload.scss";

import { useFormikContext } from "formik";

export default function FileUpload({ name }) {
  const { setFieldValue } = useFormikContext();

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setFieldValue(name, file); // Update Formik's state with the selected file
  };

  return (
    <label className="file-upload">
      Choose File:
      <input
        className="file-upload__input"
        type="file"
        name={name}
        onChange={handleFileChange}
      />
    </label>
  );
}
