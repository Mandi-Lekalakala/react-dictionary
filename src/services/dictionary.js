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

function hasAudio(item) {
  return item.audio;
}

export function getPhonetic(entry) {
  if (entry.phonetic) return entry.phonetic;
  const item = entry.phonetics.find(hasText);
  return item ? item.text : "";
}

export function getAudio(entry) {
  const item = entry.phonetics.find(hasAudio);
  return item ? item.audio : "";
}
