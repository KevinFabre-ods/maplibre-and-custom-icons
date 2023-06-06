import React from "react";

const LayerIconForm = ({ handleChange, ...form }) => {
  return (
    <fieldset>
      <legend>Layer Icon</legend>
      <label htmlFor="layer-icon-color">Color</label>
      <select
        id="layer-icon-color"
        value={form.color}
        onChange={(e) => handleChange("color", e.target.value)}
      >
        <option value="">Pick a color</option>
        <option value="red" label="Red"></option>
        <option value="green" label="Green"></option>
        <option value="blue" label="Blue"></option>
      </select>
      <div>
        <label htmlFor="layer-icon-image">Icon</label>
        <select
          id="layer-icon-image"
          value={form.icon}
          onChange={(e) => handleChange("icon", e.target.value)}
        >
          <option value="">Pick an icon</option>
          <option value="mountain" label="Mountain"></option>
          <option value="city" label="City"></option>
          <option value="lake" label="Lake"></option>
        </select>
      </div>
      <div>
        <label htmlFor="layer-icon-halo-width">Halo width</label>
        <input
          type="number"
          id="layer-icon-halo-width"
          min={0}
          max={10}
          value={form.haloWidth}
          onChange={(e) =>
            handleChange("haloWidth", Number.parseInt(e.target.value))
          }
        />
      </div>
      {!!form.haloWidth && (
        <div>
          <label htmlFor="layer-icon-halo-color">Halo color</label>
          <select
            id="layer-icon-halo-color"
            value={form.haloColor}
            onChange={(e) => handleChange("haloColor", e.target.value)}
          >
            <option value="">Pick a color</option>
            <option value="red" label="Red"></option>
            <option value="green" label="Green"></option>
            <option value="blue" label="Blue"></option>
          </select>
        </div>
      )}
      {!!form.haloWidth && (
        <div>
          <label htmlFor="layer-icon-halo-blur">Halo blur</label>
          <input
            type="number"
            id="layer-icon-halo-blur"
            min={0}
            max={10}
            value={form.haloBlur}
            onChange={(e) =>
              handleChange("haloBlur", Number.parseInt(e.target.value))
            }
          />
        </div>
      )}
    </fieldset>
  );
};

export default LayerIconForm;
