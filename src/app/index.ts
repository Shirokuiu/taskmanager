import { render } from './shared/utils';
import MainNav from './components/main-nav';
import MainSearch from './components/main-search';
import MainFilters from './components/main-filters';
import Board from './components/board';
import Task from './components/task';
import LoadMore from './components/load-more';
import { makeTasks } from '../data/task';

const main: HTMLElement = document.querySelector('.main') as HTMLElement;

const mainNav = new MainNav();
const mainSearch = new MainSearch();
const mainFilters = new MainFilters();

render(main.querySelector('.main__control') as HTMLElement, mainNav.getElement());
render(main, mainSearch.getElement());
render(main, mainFilters.getElement());

const initBoard = (): void => {
  const board = new Board();

  render(main, board.getElement());

  const boardElem: HTMLElement = main.querySelector('.board') as HTMLElement;

  Array(3)
    .fill('')
    .forEach(() => {
      const task = new Task(makeTasks());

      render(boardElem.querySelector('.board__tasks') as HTMLElement, task.getElement());
    });

  const loadMore = new LoadMore();

  render(boardElem, loadMore.getElement());
};

initBoard();
