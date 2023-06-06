export function setPaintProperties(map, layerId, properties) {
  for (const key in properties) {
    map.setPaintProperty(layerId, key, properties[key]);
  }
}

export function updateIconImage(map, layerId, iconImage, sdf = false) {
  if (!map.hasImage(iconImage)) {
    map.loadImage(`static/${iconImage}.png`, (error, image) => {
      map.addImage(iconImage, image, { sdf });
      updateIconImage(map, layerId, iconImage);
    });
  }
  map.setLayoutProperty(layerId, "icon-image", iconImage);
}
