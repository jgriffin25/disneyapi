import { CharacterCard } from './CharacterCard.js';

export function CharacterList(characters) {
  const unorderedList = document.createElement('ul');

  unorderedList.className = 'grid lg:grid-cols-3 gap-4 max-w-7xl';
  unorderedList.id = 'characters-all';

  for (const index in characters) {
    const character = CharacterCard(characters[index]);
    const listItem = document.createElement('li');

    listItem.appendChild(character);
    unorderedList.appendChild(listItem);
  }

  return unorderedList;
}
