export async function fetchGeoJson(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}
