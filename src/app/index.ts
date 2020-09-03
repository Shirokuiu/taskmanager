import { AppController } from './components';

const $rootContainer: HTMLElement = document.querySelector('.main') as HTMLElement;
const appController: AppController = new AppController($rootContainer);

appController.init();
