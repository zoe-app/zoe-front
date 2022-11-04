import { Goal } from '../../../interfaces';
import { app } from './app';

/* eslint-disable class-methods-use-this */
class GoalsService {
  async getGoals(): Promise<Goal[]> {
    const goals = await app.get('/goals').then((res) => res.data.goals);
    return goals;
  }

  async createGoal(name: string): Promise<Goal> {
    return app.post('/create', { name }).then((res) => res.data.goal);
  }

  async deleteGoal(id: string): Promise<void> {
    await app.delete(`/${id}`);
  }

  async getGoalById(goalId: string): Promise<Goal> {
    return app.get(`/goals/${goalId}`).then((res) => res.data.goal);
  }
}

const goalsService = new GoalsService();
export { goalsService };
