/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Goal, Task } from '../../interfaces';
import { goalsService, tasksService } from '../../service';
import { Container, RowContainer, Title } from '..';
import { TaskComponent } from '../Tasks/TaskComponent';
import { TextInput } from '../Input/TextInput';
import { Button, DeleteButton } from '../Buttons/Button';
import { TaskWrapper } from '../Tasks/Tasks';

interface Props {
  goal: Goal;
  setGoalCallback: (goals: Goal[]) => void;
  goalsList: Goal[];
}

export function GoalsComponent(props: Props) {
  const { goal, setGoalCallback, goalsList } = props;
  const [goalState, setGoal] = useState<Goal>(goal);
  const [taskText, setTaskText] = useState<string>('');
  const [progress, setProgress] = useState<number>(goal.progress);

  const updateIsDone = async (task: Task, setTask: (value: Task) => void) => {
    await tasksService.updateIsDone(task.taskId);
    setTask({ ...task, isDone: !task.isDone });

    const res = await goalsService.getGoals();
    setGoalCallback(res);

    const newGoal = await goalsService.getGoalById(task.goalId);
    setGoal(newGoal);
    setProgress(newGoal.progress);
  };

  const addNewTask = async () => {
    const newTask = await tasksService.createTask(taskText, goalState.goalId);
    setGoal({ ...goalState, tasks: [...goalState.tasks, newTask.task] });
    setProgress(newTask.progress);
    setTaskText('');
  };

  const deleteGoal = async (goalId: string) => {
    await goalsService.deleteGoal(goalId);
    const newGoalLst = goalsList.filter((x) => x.goalId !== goalId);
    setGoalCallback(newGoalLst);
  };

  const deleteTask = async (taskId: string) => {
    const deleteProgress = await tasksService.deleteTask(taskId);
    const newTaskLst = goalState.tasks.filter((x) => x.taskId !== taskId);
    setProgress(deleteProgress);
    setGoal({ ...goalState, tasks: newTaskLst });
  };

  return (
    <Container
      style={{
        marginBottom: '2rem',
        backgroundColor: 'white',
        width: '95vw',
        padding: '0px 10px 10px 10px',
        borderRadius: 10,
      }}
    >
      <RowContainer
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#83BCFF',
          width: '100%',
          padding: 10,
          marginBottom: 10,
          borderRadius: '10px 10px 0px 0px',
        }}
      >
        <RowContainer>
          <Title>{goalState.name}</Title>
          <DeleteButton
            style={{ marginLeft: 10 }}
            type='button'
            onClick={() => deleteGoal(goal.goalId)}
          >
            X
          </DeleteButton>
          <span
            style={{
              color: 'white',
              fontWeight: 600,
              marginLeft: 10,
              fontSize: '1.2rem',
            }}
          >
            Progresso: {Math.trunc(progress)}%
          </span>
        </RowContainer>
        <RowContainer>
          <TextInput
            type='text'
            placeholder='Nova tarefa'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <Button style={{ marginLeft: 10 }} type='button' onClick={addNewTask}>
            Adicionar
          </Button>
        </RowContainer>
      </RowContainer>
      <TaskWrapper>
        {goalState.tasks.map((task) => {
          return (
            <TaskComponent
              key={task.taskId}
              task={task}
              updateIsDone={updateIsDone}
              deleteTask={deleteTask}
            />
          );
        })}
      </TaskWrapper>
    </Container>
  );
}
