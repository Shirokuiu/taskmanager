export interface Task {
  description: string;
  dueDate: number;
  repeatingDays: RepeatingDays;
  tags: string[];
  color: string;
  isFavorite: boolean;
  isArchive: boolean;
}

interface RepeatingDays {
  Mo: boolean;
  Tu: boolean;
  We: boolean;
  Th: boolean;
  Fr: boolean;
  Sa: boolean;
  Su: boolean;
}
