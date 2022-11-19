import { Goal } from './Goals';

export interface Task {
  taskId: string;
  createdAt: Date;
  text: string;
  isDone: boolean;
  userId: string;
  goalId: string;
}

export interface UpdateDto {
  task: Task;
  goal: Goal;
}

export interface CreateTaskDto {
  task: Task;
  progress: number;
}
