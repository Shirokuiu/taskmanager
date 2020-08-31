import { getRandomInteger } from '../app/shared/utils';
import { Task } from '../app/shared/models';

export const makeTasks = (): Task => ({
  description: ['Изучить теорию', 'Сделать домашку', 'Пройти интенсив на соточку'][
    getRandomInteger(0, 2)
  ],
  dueDate: Date.now(),
  repeatingDays: {
    Mo: false,
    Tu: false,
    We: Boolean(Math.round(Math.random())),
    Th: false,
    Fr: false,
    Sa: false,
    Su: false,
  },
  tags: ['homework', 'theory', 'practice', 'intensive', 'keks'].slice(
    0,
    getRandomInteger(1, 3)
  ),
  color: ['black', 'yellow', 'blue', 'green', 'pink'][getRandomInteger(0, 4)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
});
