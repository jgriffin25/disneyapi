export function CharacterCard({ name, imageUrl, _id }) {
  const cardWrapper = document.createElement('div');
  const characterCard = document.createElement('div');
  const imageWrapper = document.createElement('figure');
  const img = document.createElement('img');
  const cardBody = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardDescription = document.createElement('p');
  const cardActions = document.createElement('div');
  const characterLink = document.createElement('a');

  //className for Styling
  cardWrapper.className = 'w-80 h-80 flex justify-center items-center ';
  characterCard.className =
    'card rounded transition-all duration-500 bg-opacity-50 h-72 flex hover:shadow-xl hover:h-80 hover:w-80 hover:outline-1 hover:outline hover:outline-indigo-400 shadow rounded w-72';
  cardBody.className = 'card-body bg-base-100 h-full w-full';
  cardTitle.className = 'card-title';
  cardActions.className = 'card-actions w-full h-full';
  characterLink.className = 'link-hover w-full text-info';
  imageWrapper.className =
    'bg-blend object-contain bg-gradient-to-br from-teal-500 bg-opacity-10 bg-base-100 overflow-hidden h-full';

  // Inner HTML
  cardTitle.innerHTML = name;
  characterLink.innerHTML = 'see more';

  // Attribute values
  img.src = imageUrl;
  img.className = 'w-full h-full object-contain';
  characterLink.href = `https://jgriffin25.github.io/disneyapi/char.html#${_id}`;

  cardActions.appendChild(characterLink);

  characterCard.appendChild(imageWrapper);
  characterCard.appendChild(cardBody);

  imageWrapper.appendChild(img);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardDescription);
  cardBody.appendChild(cardActions);
  cardWrapper.append(characterCard);
  return cardWrapper;
}
