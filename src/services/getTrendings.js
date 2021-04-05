import {API_KEY, API_URL} from "./settings"

export default function getTrendings() {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      return data
      });
    
}
