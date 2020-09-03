import { TaskModel } from './models';

export const getRandomInteger = (min: number = 0, max: number = 1): number => {
  const rand: number = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
};

export const makeTask = (): TaskModel => ({
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
