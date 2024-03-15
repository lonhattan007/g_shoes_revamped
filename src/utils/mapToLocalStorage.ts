// TODO: Add utility to save and load maps to and from local storage
export function saveMapToLocalStorage(map: Map<any, any>, key: string) {
  let jsonText = JSON.stringify(Array.from(map.entries()));
  localStorage.setItem(key, jsonText);
}
