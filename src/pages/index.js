import { CharacterList } from '../components/CharacterList.js';
import { charactersContainer } from '../constants/selectors.js';

let state = {};

const nextBtn = document.createElement('button');
const prevBtn = document.createElement('button');
const btnWrapper = document.createElement('div');

nextBtn.className =
  'btn btn-outline w-24 btn-sm capitalize rounded btn-secondary';
prevBtn.className = 'btn btn-outline w-24 btn-sm capitalize rounded';
btnWrapper.className =
  'flex gap-4 z-10 cursor-pointer fixed bg-base-100 w-full flex justify-center py-4 bottom-0 bg-opacity-90 flex-row-reverse';

nextBtn.innerHTML = 'Next';
prevBtn.innerHTML = 'Previous';

nextBtn.id = 'next-btn';
prevBtn.id = 'prev-btn';
btnWrapper.id = 'btn-wrap';

nextBtn.addEventListener('click', async () => {
  await fetcher(state.nextPage);
  await mount();
});

prevBtn.addEventListener('click', async () => {
  await fetcher(state.previousPage);
  await mount();
});

async function fetcher(url) {
  const response = await fetch(url);
  const result = await response.json();

  state = result;
}

async function initialLoad() {
  await fetcher('https://api.disneyapi.dev/characters');
  await mount();
}

async function mount() {
  console.log(state);

  const isNextBtn = !!document.getElementById('next-btn');
  const isPrevBtn = !!document.getElementById('prev-btn');
  const isCharacterList = !!document.getElementById('characters-all');
  const characters = CharacterList(state.data);

  if (state.nextPage && !isNextBtn) btnWrapper.appendChild(nextBtn);
  if (state.previousPage && !isPrevBtn) btnWrapper.appendChild(prevBtn);

  if (isPrevBtn && !state.previousPage) btnWrapper.removeChild(prevBtn);
  if (isNextBtn && !state.nextPage) btnWrapper.removeChild(nextBtn);
  if (isCharacterList)
    charactersContainer.removeChild(document.getElementById('characters-all'));

  charactersContainer.appendChild(characters);
  charactersContainer.appendChild(btnWrapper);
}

initialLoad();
