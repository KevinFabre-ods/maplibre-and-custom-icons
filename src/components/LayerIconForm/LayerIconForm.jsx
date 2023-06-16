import React from "react";

const LayerIconForm = ({ handleChange, ...form }) => {
  return (
    <fieldset>
      <legend>
        Layer Symbol to display icons (
        <a
          href="https://maplibre.org/maplibre-style-spec/layers/#symbol"
          target="_blank"
          rel="noopener noreferrer"
        >
          From MapLibre symbol layer
        </a>
        )
      </legend>

      <div>
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
      </div>

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
        <label htmlFor="layer-icon-opacity">Opacity</label>
        <input
          type="number"
          id="layer-icon-opacity"
          min={0}
          step={0.1}
          max={1}
          value={form.opacity}
          onChange={(e) =>
            handleChange("opacity", Number.parseFloat(e.target.value))
          }
        />
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
            step={0.25}
            max={5}
            value={form.haloBlur}
            onChange={(e) =>
              handleChange("haloBlur", Number.parseFloat(e.target.value))
            }
          />
        </div>
      )}
      <div>
        <label htmlFor="layer-icon-image">Overlap</label>
        <select
          id="layer-icon-overlap"
          value={form.overlap}
          onChange={(e) => handleChange("overlap", e.target.value)}
        >
          <option value="never" label="Never"></option>
          <option value="always" label="Always"></option>
          <option value="cooperative" label="Cooperative"></option>
        </select>
      </div>
      <div>
        <label htmlFor="layer-icon-rotate">Rotate</label>
        <input
          id="layer-icon-rotate"
          type="number"
          min={0}
          max={360}
          step={45}
          value={form.rotate}
          onChange={(e) =>
            handleChange("rotate", Number.parseInt(e.target.value))
          }
        ></input>
      </div>
      <div>
        <label htmlFor="layer-icon-pitch-alignment">Pitch alignment</label>
        <select
          id="layer-icon-pitch-alignment"
          value={form.pitchAlignment}
          onChange={(e) => handleChange("pitchAlignment", e.target.value)}
        >
          <option value="auto" label="Auto"></option>
          <option value="map" label="Map"></option>
          <option value="viewport" label="Viewport"></option>
        </select>
      </div>
      <fieldset>
        <legend>Text</legend>
        <div>
          <label htmlFor="layer-icon-text-color">Text color</label>
          <select
            id="layer-icon-text-color"
            value={form.textColor}
            onChange={(e) => handleChange("textColor", e.target.value)}
          >
            <option value="red" label="Red"></option>
            <option value="green" label="Green"></option>
            <option value="blue" label="Blue"></option>
            <option value="black" label="Black"></option>
          </select>
        </div>
        <div>
          <label htmlFor="layer-icon-text-size">Text opacity</label>
          <input
            id="layer-icon-text-opacity"
            type="number"
            value={form.textOpacity}
            min={0}
            max={1}
            step={0.1}
            onChange={(e) =>
              handleChange("textOpacity", Number.parseFloat(e.target.value))
            }
          ></input>
        </div>
        <div>
          <label htmlFor="layer-icon-text-size">Text size</label>
          <input
            id="layer-icon-text-size"
            type="number"
            value={form.textSize}
            min={12}
            max={32}
            step={2}
            onChange={(e) =>
              handleChange("textSize", Number.parseInt(e.target.value))
            }
          ></input>
        </div>
        <div>
          <label htmlFor="layer-icon-text-transform">Text transform</label>
          <select
            id="layer-icon-text-transform"
            value={form.textTransform}
            onChange={(e) => handleChange("textTransform", e.target.value)}
          >
            <option value="red" label="none"></option>
            <option value="uppercase" label="Uppercase"></option>
            <option value="lowercase" label="Lowercase"></option>
          </select>
        </div>
        <div>
          <label htmlFor="layer-icon-text-offset-x">Text offset x</label>
          <input
            id="layer-icon-text-offset-x"
            value={form.textOffsetX}
            type="number"
            min={0}
            step={1}
            max={20}
            onChange={(e) =>
              handleChange("textOffsetX", Number.parseInt(e.target.value))
            }
          ></input>
        </div>
        <div>
          <label htmlFor="layer-icon-text-offset-y">Text offset y</label>
          <input
            id="layer-icon-text-offset-y"
            value={form.textOffsetY}
            type="number"
            min={0}
            step={1}
            max={20}
            onChange={(e) =>
              handleChange("textOffsetY", Number.parseInt(e.target.value))
            }
          ></input>
        </div>
        <div>
          <label htmlFor="layer-icon-text-overlap">Text overlap</label>
          <select
            id="layer-icon-text-overlap"
            value={form.textOverlap}
            onChange={(e) => handleChange("textOverlap", e.target.value)}
          >
            <option value="never" label="Never"></option>
            <option value="always" label="Always"></option>
            <option value="cooperative" label="Cooperative"></option>
          </select>
        </div>
        <div>
          <label htmlFor="layer-icon-text-rotate">Text rotate</label>
          <input
            id="layer-icon-text-rotate"
            type="number"
            min={0}
            max={360}
            step={45}
            value={form.textRotate}
            onChange={(e) =>
              handleChange("textRotate", Number.parseInt(e.target.value))
            }
          ></input>
        </div>
        <div>
          <label htmlFor="layer-icon-text-anchor">Text anchor</label>
          <select
            id="layer-icon-text-anchor"
            value={form.textAnchor}
            onChange={(e) => handleChange("textAnchor", e.target.value)}
          >
            <option value="center" label="Center"></option>
            <option value="top" label="Top"></option>
            <option value="bottom" label="Bottom"></option>
            <option value="left" label="Left"></option>
            <option value="right" label="Right"></option>
          </select>
        </div>
        <div>
          <label htmlFor="layer-icon-text-anchor">Text optional</label>
          <input
            id="layer-icon-text-optional"
            type="checkbox"
            checked={form.textOptional}
            onChange={(e) => {
              handleChange("textOptional", e.target.checked);
            }}
          ></input>
        </div>
      </fieldset>
    </fieldset>
  );
};

export default LayerIconForm;
