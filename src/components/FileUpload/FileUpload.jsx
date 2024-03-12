import "./FileUpload.scss";

export default function FileUpload() {
  return (
    <label className="file-upload">
      Choose File:
      <input className="file-upload__input" type="file" />
    </label>
  );
}
