export function storage(value) {
  return localStorage.setItem(JSON.stringify(value), Date.now());
}
