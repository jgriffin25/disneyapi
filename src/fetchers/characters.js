import { apiUrl } from '../constants/api-urls.js';

export async function fetchAllCharacters(url) {
  const response = await fetch(apiUrl + '/characters');
  const result = await response.json();
  return result;
}

export async function getCharacterById(id) {
  const response = await fetch(apiUrl + `/characters/${id}`);
  const character = await response.json();
  return character;
}
