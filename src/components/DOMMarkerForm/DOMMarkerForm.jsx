import React from "react";

const DOMMarkerForm = ({ handleChange, ...form }) => {
  return (
    <fieldset>
      <legend>DOM Marker</legend>
      <label htmlFor="marker-color">Color</label>
      <select
        id="marker-color"
        value={form.color}
        onChange={(e) => handleChange("color", e.target.value)}
      >
        <option value="">Pick a color</option>
        <option value="red" label="Red"></option>
        <option value="green" label="Green"></option>
        <option value="blue" label="Blue"></option>
      </select>
      <div>
        <label htmlFor="marker-scale">Scale</label>
        <input
          type="number"
          value={form.scale}
          min={1}
          max={3}
          onChange={(e) =>
            handleChange("scale", Number.parseInt(e.target.value))
          }
        />
      </div>
    </fieldset>
  );
};

export default DOMMarkerForm;
