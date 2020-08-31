import { Place } from './shared/enums';
import {
  board,
  loadMore,
  mainFilters,
  mainNav,
  mainSearch,
  task,
  taskEdit,
} from './components';
import { makeTasks } from '../data/task';

const main: HTMLElement = document.querySelector('.main') as HTMLElement;

const render = (
  container: HTMLElement,
  component: string,
  place: Place = Place.Beforeend
): void => {
  container?.insertAdjacentHTML(place, component);
};

render(main.querySelector('.main__control') as HTMLElement, mainNav());
render(main, mainSearch());
render(main, mainFilters());

const initBoard = (): void => {
  render(main, board());

  const boardElem: HTMLElement = main.querySelector('.board') as HTMLElement;

  render(boardElem.querySelector('.board__tasks') as HTMLElement, taskEdit());

  Array(3)
    .fill('')
    .forEach(() => {
      render(boardElem.querySelector('.board__tasks') as HTMLElement, task(makeTasks()));
    });

  render(boardElem, loadMore());
};

initBoard();
