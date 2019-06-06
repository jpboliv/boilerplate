export function customFetch(endpoint) {
  return fetch(endpoint)
    .then(response => response.json());
}
