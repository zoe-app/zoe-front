import React, { useState } from 'react';
import { Task } from '../../interfaces';
import { CheckButton } from '..';
import { TaskContainer } from './Tasks';
import { DeleteButton } from '../Buttons/Button';
import { TitleSmall } from '../Titles/Title';

interface Props {
  task: Task;
  updateIsDone: (task: Task, setTask: (value: Task) => void) => void;
  deleteTask: (taskId: string) => void;
}

export function TaskComponent(props: Props) {
  const { task, updateIsDone, deleteTask } = props;
  const [state, setState] = useState<Task>(task);

  return (
    <TaskContainer style={{ marginBottom: 10 }}>
      <CheckButton
        type='checkbox'
        value={task.taskId}
        checked={task.isDone}
        key={task.taskId}
        onClick={() => {
          updateIsDone(state, setState);
        }}
        onChange={() => {
          return null;
        }}
      />
      <TitleSmall style={{ marginLeft: 10, marginRight: 10 }}>
        {task.text}
      </TitleSmall>
      <DeleteButton type='button' onClick={() => deleteTask(task.taskId)}>
        X
      </DeleteButton>
    </TaskContainer>
  );
}
