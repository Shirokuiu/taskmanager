import { Place } from './enums';

export const getRandomInteger = (min: number = 0, max: number = 1): number => {
  const rand: number = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const createElement = (template: string) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

export const render = (
  container: HTMLElement,
  element: HTMLElement,
  place: Place = Place.Beforeend
) => {
  switch (place) {
    case Place.Afterbegin:
      container.prepend(element);
      break;
    case Place.Beforeend:
      container.append(element);
      break;
  }
};

export const unRender = (element: HTMLElement) => {
  if (element) {
    element.remove();
  }
};
