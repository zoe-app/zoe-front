/* eslint-disable class-methods-use-this */
import { Task } from '../../../interfaces';
import { app } from './app';

class TasksService {
  async createTask(text: string, goalId: string): Promise<Task> {
    return app.post(`/${goalId}`, { text }).then((res) => res.data);
  }

  async deleteTask(id: string): Promise<void> {
    await app.delete(`/${id}`);
  }

  async updateIsDone(id: string): Promise<void> {
    await app.put(`/${id}`);
  }

  async renameTask(newText: string, id: string): Promise<Task> {
    return app.patch(`/${id}`, { newText }).then((res) => res.data);
  }
}

const tasksService = new TasksService();
export { tasksService };
