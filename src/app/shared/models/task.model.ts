export interface TaskModel {
  description: string;
  dueDate: number;
  repeatingDays: RepeatingDaysModel;
  tags: string[];
  color: string;
  isFavorite: boolean;
  isArchive: boolean;
}

export interface RepeatingDaysModel {
  Mo: boolean;
  Tu: boolean;
  We: boolean;
  Th: boolean;
  Fr: boolean;
  Sa: boolean;
  Su: boolean;
}
