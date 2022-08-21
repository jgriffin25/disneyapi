export default function CharacterDetails({
  films,
  shortFilms,
  tvShows,
  videoGames,
  parkAttractions,
  allies,
  enemies,
  name,
  imageUrl,
}) {
  const layout = document.createElement('div');
  const headWrapper = document.createElement('div');
  const listsWrapper = document.createElement('div');

  listsWrapper.className =
    'grid grid-cols-2 gap-4 justify-content-start max-w-5xl pb-10';
  headWrapper.className =
    'flex items-end min-w-[32rem] my-4 bg-base-100 rounded shadow overflow-hidden';

  if (shortFilms.length)
    listsWrapper.appendChild(CharacterLists(shortFilms, 'short Films'));

  if (videoGames.length)
    listsWrapper.appendChild(CharacterLists(videoGames, 'video Games'));

  if (parkAttractions.length)
    listsWrapper.appendChild(
      CharacterLists(parkAttractions, 'park Attractions'),
    );

  if (films.length) listsWrapper.appendChild(CharacterLists(films, 'films'));

  if (tvShows.length)
    listsWrapper.appendChild(CharacterLists(tvShows, 'tv Shows'));

  if (allies.length) listsWrapper.appendChild(CharacterLists(allies, 'allies'));

  if (enemies.length)
    listsWrapper.appendChild(CharacterLists(enemies, 'enemies'));

  headWrapper.appendChild(CharacterImage(imageUrl));
  headWrapper.appendChild(CharacterName(name));

  layout.appendChild(headWrapper);
  layout.appendChild(listsWrapper);

  return layout;
}

function CharacterName(name) {
  const CharacterHeading = document.createElement('h1');

  CharacterHeading.innerHTML = name;
  CharacterHeading.className = 'text-4xl font-bold my-4 mx-6';

  return CharacterHeading;
}

function CharacterImage(url) {
  const imgWrapper = document.createElement('figure');
  const image = document.createElement('img');

  image.src = url;
  image.className =
    'w-full h-full object-contain object-center-top bg-black bg-gradient-to-br from-indigo-500 to-black';

  imgWrapper.className = 'rounded overflow-hidden w-fit h-52 w-52';

  imgWrapper.appendChild(image);

  return imgWrapper;
}

function CharacterLists(list, name) {
  const listWrapper = document.createElement('div');
  const listTitle = document.createElement('h2');
  const unorderedList = document.createElement('ul');

  listTitle.innerHTML = name;

  listTitle.className = 'text-xl font-bold capitalize text-secondary';
  listWrapper.className =
    'rounded shadow border p-4 w-full bg-gradient-to-br from-indigo-100 ';

  for (const index in list) {
    const listItem = document.createElement('li');
    const itemText = list[index];

    listItem.className = 'text-lg capitalize text-neutral';

    listItem.innerHTML = itemText;

    unorderedList.appendChild(listItem);
  }

  listWrapper.appendChild(listTitle);
  listWrapper.appendChild(unorderedList);

  return listWrapper;
}
