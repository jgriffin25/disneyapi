import { getCharacterById } from '../fetchers/characters.js';
import CharacterDetails from '../components/CharacterDetails.js';

const charId = window.location.hash.split('#').join('');
const mainContent = document.getElementById('main-content');

function createCharacter(character) {
  const details = CharacterDetails(character);
  console.log(character);
  mainContent.appendChild(details);
}

console.log('hello');

getCharacterById(charId).then((data) => createCharacter(data));
