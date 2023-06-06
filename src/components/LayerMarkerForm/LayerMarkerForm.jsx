const LayerMarkerForm = ({ handleChange, ...form }) => {
  return (
    <fieldset>
      <legend>Layer Marker</legend>
      <label htmlFor="layer-marker-color">Color</label>
      <select
        id="layer-marker-color"
        value={form.color}
        onChange={(e) => handleChange("color", e.target.value)}
      >
        <option value="">Pick a color</option>
        <option value="red" label="Red"></option>
        <option value="green" label="Green"></option>
        <option value="blue" label="Blue"></option>
      </select>
      {!!form.color && (
        <>
          <div>
            <label htmlFor="layer-marker-icon">icon (inside marker)</label>
            <select
              id="layer-marker-icon"
              value={form.icon}
              onChange={(e) => handleChange("icon", e.target.value)}
            >
              <option value="">Pick an icon</option>
              <option value="mountain" label="Mountain"></option>
              <option value="lake" label="Lake"></option>
            </select>
          </div>
          <div>
            <label htmlFor="layer-marker-icon-color">Pick an icon color</label>
            <select
              id="layer-marker-icon-color"
              value={form.iconColor}
              onChange={(e) => handleChange("iconColor", e.target.value)}
            >
              <option value="">Pick an icon color</option>
              <option value="green" label="Green"></option>
              <option value="red" label="red"></option>
            </select>
          </div>
        </>
      )}
    </fieldset>
  );
};

export default LayerMarkerForm;
