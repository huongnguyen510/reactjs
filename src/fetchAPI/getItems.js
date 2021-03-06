export default function callAPI() {
  return new Promise((resolve, reject) => {

    const url = 'http://localhost:3001/items'
    fetch (url, { method: "GET" })
    .then((response) => response.json())
    .then((res)      => { resolve(res); })
    .catch((error)   => { reject(error); });
  });
}