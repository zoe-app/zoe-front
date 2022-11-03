import { app } from './app';

/* eslint-disable class-methods-use-this */
class GoalsService {
  async getGoals() {
    const goals = await app.get('/goals').then((res) => res.data.goals);
    console.log(goals);
    return goals;
  }
}

const goalsService = new GoalsService();
export { goalsService };
