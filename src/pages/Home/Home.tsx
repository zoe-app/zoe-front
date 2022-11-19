import React, { useState } from 'react';
import { CheckButton, Container, TextInput, Title } from '../../components';
import { TaskContainer } from '../../components/Tasks/Tasks';
import { Task } from '../../interfaces';

export function HomePage() {
  const [task, setTask] = useState<Task>({
    isDone: false,
    text: 'Escreva uma tarefa aqui!',
    createdAt: new Date(),
    goalId: '',
    taskId: '',
    userId: '',
  });

  return (
    <Container style={{ marginTop: '15rem' }}>
      <Title style={{ marginBottom: '1rem' }}>zoe, seu app de metas.</Title>
      <span style={{ fontSize: '1.5rem' }}>
        defina quantas <strong>metas</strong> quiser, e quantas{' '}
        <strong>tarefas</strong> quiser em cada meta.
      </span>
      <span style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        fácil assim, <strong>cumpra seus objetivos</strong>.
      </span>
      <TaskContainer style={{ marginBottom: 10 }}>
        <CheckButton
          type='checkbox'
          value={task.taskId}
          checked={task.isDone}
          key={task.taskId}
          onClick={() => {
            setTask({ ...task, isDone: !task.isDone });
          }}
          onChange={() => {
            return null;
          }}
        />
        <TextInput
          value={task.text}
          onChange={(event) => {
            setTask({ ...task, text: event.target.value });
          }}
          style={{ marginLeft: 10, marginRight: 10 }}
        />
      </TaskContainer>
    </Container>
  );
}
