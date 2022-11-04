import React, { useEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { GoalsComponent } from '../../components/Goals/Goals';
import { GoalList } from '../../components/Goals/GoalsList';
import { Title } from '../../components/Titles';
import { Goal } from '../../interfaces';
import { goalsService } from '../../service';

export function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [goalText, setGoalText] = useState<string>('');

  const getGoals = async () => {
    const res = await goalsService.getGoals();
    setGoals(res);
  };

  useEffect(() => {
    getGoals();
  }, []);

  const addNewGoal = async () => {
    const newGoal = await goalsService.createGoal(goalText);
    console.log(newGoal);
    setGoals([...goals, newGoal]);
    setGoalText('');
  };

  return (
    <Container>
      <Title>Metas</Title>
      <input
        type='text'
        placeholder='Nova meta'
        value={goalText}
        onChange={(e) => setGoalText(e.target.value)}
      />
      <button type='button' onClick={addNewGoal}>
        Adicionar
      </button>
      {goals.map((goal) => {
        return (
          <GoalList key={goal.goalId}>
            <GoalsComponent
              goal={goal}
              goalsList={goals}
              setGoalCallback={setGoals}
              key={goal.goalId + goal.userId}
            />
          </GoalList>
        );
      })}
    </Container>
  );
}
