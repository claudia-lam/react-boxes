import { useState } from "react";
import "./NewBoxForm.css";

function NewBoxForm({ addItem }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  console.log("formData", formData);

  /** Send {name, quantity} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addItem(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
    console.log("handleChange", formData);
  }

  /** render form */
  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label className="height" htmlFor="height">
        Height:{" "}
      </label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label className="width" htmlFor="width">
        Width:
      </label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor" className="backgroundColor">
        Background Color:
      </label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        className="backgroundColor"
      />

      <button>Add a new item!</button>
    </form>
  );
}

export default NewBoxForm;
