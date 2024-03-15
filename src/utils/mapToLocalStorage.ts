export function saveMapToLocalStorage(map: Map<any, any>, key: string) {
  const jsonText = JSON.stringify(Array.from(map.entries()));
  localStorage.setItem(key, jsonText);
}

export function loadMapFromLocalStorage(key: string): Map<any, any> {
  const jsonText = localStorage.getItem(key);
  if (jsonText) {
    return new Map(JSON.parse(jsonText));
  }
  return new Map();
}
