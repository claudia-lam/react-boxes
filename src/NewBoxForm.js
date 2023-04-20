import { useState } from "react";
import "./NewBoxForm.css";

/** Form for creating a new box to add to a list of boxes.
 *
 * Has state for the height, width, backgroundColor of the item; on submission,
 * sends {height, width, backgroundColor} to fn received from parent.
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  console.log("formData", formData);

  /** Send {height, width, backgroundColor} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
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

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
