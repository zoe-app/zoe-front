/* eslint-disable class-methods-use-this */
import { Task } from '../../../interfaces';
import { app } from './app';

class TasksService {
  async createTask(text: string, goalId: string): Promise<Task> {
    return app
      .post(
        `/${goalId}`,
        { text },
        {
          headers: {
            authToken: localStorage.getItem('AuthToken'),
          },
        },
      )
      .then((res) => res.data);
  }

  async deleteTask(id: string): Promise<void> {
    await app.delete(`/${id}`, {
      headers: {
        authToken: localStorage.getItem('AuthToken'),
      },
    });
  }

  async updateIsDone(id: string): Promise<void> {
    await app.put(`/${id}`, {
      headers: {
        authToken: localStorage.getItem('AuthToken'),
      },
    });
  }

  async renameTask(newText: string, id: string): Promise<Task> {
    return app
      .patch(
        `/${id}`,
        { newText },
        {
          headers: {
            authToken: localStorage.getItem('AuthToken'),
          },
        },
      )
      .then((res) => res.data);
  }
}

const tasksService = new TasksService();
export { tasksService };
