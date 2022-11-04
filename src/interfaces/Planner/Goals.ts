import { Task } from './Tasks';

export interface Goal {
  progress: number;
  name: string;
  createdAt: Date;
  goalId: string;
  userId: string;
  tasks: Task[];
}
