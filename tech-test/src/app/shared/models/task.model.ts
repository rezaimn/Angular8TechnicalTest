export interface TaskModel {
  id: number;
  label: string;
  description: string;
  category: string;
  done: boolean|string|null;
}
