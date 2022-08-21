export default function paginate(nxtUrl, prevUrl, container, data) {
  const nextButtonEvent = nextButton.addEventListener('click', () => {
    fetch(nxtUrl)
      .then((response) => response.json())
      .then((result) => {
        container.innerHTML = '';
        data = {};
        data.nextPage = result.nextPage;
        data.previousPage = result.previousPage;
      });
  });

  const previousButtonEvent = previousButton.addEventListener('click', () => {
    fetch(prevUrl)
      .then((response) => response.json())
      .then((result) => {
        container.innerHTML = '';
        data = {};
        data.previousPage = result.previousPage;
        data.nextPage = result.nextPage;
      });
  });

  return { nextButtonEvent, previousButtonEvent };
}

function createButtons(container) {
  const nextButton = document.createElement('button');
  const previousButton = document.createElement('button');

  container.appChild(nextButton);
  container.appChild(previousButton);
}
