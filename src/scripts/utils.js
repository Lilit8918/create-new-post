export function getLocalStorageData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}
