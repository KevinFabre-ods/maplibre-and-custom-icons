import React from "react";

function LayerCircleForm({ handleChange, ...form }) {
  return (
    <fieldset>
      <legend>
        Layer circle (
        <a
          href="https://maplibre.org/maplibre-style-spec/layers/#circle"
          target="_blank"
          rel="noopener noreferrer"
        >
          From MapLibre circle layer
        </a>
        )
      </legend>
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
        <label htmlFor="circle-opacity">Opacity</label>
        <input
          id="circle-opacity"
          type="number"
          value={form.opacity}
          onChange={(e) =>
            handleChange("opacity", Number.parseFloat(e.target.value))
          }
          step={0.1}
          min={0}
          max={1}
        ></input>
      </div>
      <div>
        <label htmlFor="circle-blur">Blur</label>
        <input
          type="number"
          id="circle-blur"
          min={0}
          step={0.2}
          value={form.blur}
          onChange={(e) =>
            handleChange("blur", Number.parseFloat(e.target.value))
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
      <div>
        <label htmlFor="circle-pitch-alignment">Pitch alignment</label>
        <select
          id="circle-pitch-alignment"
          value={form.pitchAlignment}
          onChange={(e) => handleChange("pitchAlignment", e.target.value)}
        >
          <option value="map" label="Map"></option>
          <option value="viewport" label="Viewport"></option>
        </select>
      </div>
      <div>
        <label htmlFor="circle-pitch-scale">Pitch scale</label>
        <select
          id="circle-pitch-scale"
          value={form.pitchScale}
          onChange={(e) => handleChange("pitchScale", e.target.value)}
        >
          <option value="map" label="Map"></option>
          <option value="viewport" label="Viewport"></option>
        </select>
      </div>
      {!!form.strokeWidth && (
        <>
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
          <div>
            <label htmlFor="circle-stroke-opacity">Stroke opacity</label>
            <input
              id="circle-stroke-opacity"
              type="number"
              value={form.strokeOpacity}
              onChange={(e) =>
                handleChange("strokeOpacity", Number.parseFloat(e.target.value))
              }
              step={0.1}
              min={0}
              max={1}
            ></input>
          </div>
        </>
      )}
    </fieldset>
  );
}

export default LayerCircleForm;
