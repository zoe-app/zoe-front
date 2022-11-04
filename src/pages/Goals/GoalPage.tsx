import React, { useEffect, useState } from 'react';
import {
  Container,
  GoalsComponent,
  GoalList,
  RowContainer,
  TextInput,
  Button,
} from '../../components';
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
    <Container style={{ marginTop: '2rem' }}>
      <RowContainer
        style={{
          marginBottom: '2rem',
          justifyContent: 'space-between',
          width: '97%',
        }}
      >
        <TextInput
          type='text'
          placeholder='Nova meta'
          style={{ width: '100%' }}
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
        />
        <Button style={{ marginLeft: 10 }} type='button' onClick={addNewGoal}>
          Adicionar
        </Button>
      </RowContainer>
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
