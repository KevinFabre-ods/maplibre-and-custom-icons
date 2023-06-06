import React from "react";

function LayerCircleForm({ handleChange, ...form }) {
  return (
    <fieldset>
      <legend>Layer circle</legend>
      <label htmlFor="circle-color">Color</label>
      <select
        id="circle-color"
        value={form.color}
        onChange={(e) => handleChange("color", e.target.value)}
      >
        <option value="">Pick a color</option>
        <option value="red" label="Red"></option>
        <option value="green" label="Green"></option>
        <option value="blue" label="Blue"></option>
      </select>
      <div>
        <label htmlFor="circle-radius">Radius</label>
        <input
          type="number"
          id="circle-radius"
          min={1}
          value={form.radius}
          onChange={(e) =>
            handleChange("radius", Number.parseInt(e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="circle-blur">Blur</label>
        <input
          type="number"
          id="circle-blur"
          min={0}
          value={form.blur}
          onChange={(e) =>
            handleChange("blur", Number.parseInt(e.target.value))
          }
        />
      </div>
      <div>
        <label htmlFor="circle-stroke-width">Stroke width</label>
        <input
          type="number"
          id="circle-stroke-width"
          min={0}
          value={form.strokeWidth}
          onChange={(e) =>
            handleChange("strokeWidth", Number.parseInt(e.target.value))
          }
        />
      </div>
      {!!form.strokeWidth && (
        <div>
          <label htmlFor="circle-stroke-color">Stroke color</label>
          <select
            id="circle-stroke-color"
            value={form.strokeColor}
            onChange={(e) => handleChange("strokeColor", e.target.value)}
          >
            <option value="">Pick a stroke color</option>
            <option value="red" label="Red"></option>
            <option value="green" label="Green"></option>
            <option value="blue" label="Blue"></option>
          </select>
        </div>
      )}
    </fieldset>
  );
}

export default LayerCircleForm;
