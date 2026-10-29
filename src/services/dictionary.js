import axios from "axios";

// documentation: https://dictionaryapi.dev/
const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function handleResponse(response) {
  return response.data[0];
}

export function getWord(term) {
  const apiUrl = `${BASE_URL}${encodeURIComponent(term)}`;
  return axios.get(apiUrl).then(handleResponse);
}

function hasText(item) {
  return item.text;
}

export function getPhonetic(entry) {
  if (entry.phonetic) return entry.phonetic;
  const item = entry.phonetics.find(hasText);
  return item ? item.text : "";
}
