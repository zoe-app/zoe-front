/* eslint-disable class-methods-use-this */
import { CreateTaskDto, Task, UpdateDto } from '../../../interfaces';
import { app } from './app';

class TasksService {
  async createTask(text: string, goalId: string): Promise<CreateTaskDto> {
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

  async deleteTask(id: string): Promise<number> {
    return app
      .delete(`/${id}`, {
        headers: {
          authToken: localStorage.getItem('AuthToken'),
        },
      })
      .then((x) => x.data.progress);
  }

  async updateIsDone(id: string): Promise<UpdateDto> {
    return app
      .put(`/${id}`, {
        headers: {
          authToken: localStorage.getItem('AuthToken'),
        },
      })
      .then((x) => x.data);
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
