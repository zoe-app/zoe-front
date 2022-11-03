import { Task } from './Tasks';

export interface Goal {
  progress: number;
  name: string;
  createdAt: Date;
  id: string;
  userId: string;
  tasks?: Task[];
}
