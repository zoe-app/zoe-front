import React, { useState } from 'react';
import { Task } from '../../interfaces';
import { CheckButton } from '../Buttons';
import { TaskContainer } from './Tasks';

interface Props {
  task: Task;
  updateIsDone: (task: Task, setTask: (value: Task) => void) => void;
  deleteTask: (taskId: string) => void;
}

export function TaskComponent(props: Props) {
  const { task, updateIsDone, deleteTask } = props;
  const [state, setState] = useState<Task>(task);

  return (
    <TaskContainer>
      <span>{task.text}</span>
      <CheckButton
        type='radio'
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
      <button type='button' onClick={() => deleteTask(task.taskId)}>
        Deletar tarefa
      </button>
    </TaskContainer>
  );
}
