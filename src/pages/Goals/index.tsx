import React, { useEffect, useState } from 'react';
import { Goal } from '../../interfaces';
import { goalsService } from '../../service';

export function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const getGoals = async () => {
    const res = await goalsService.getGoals();
    setGoals(res);
  };

  useEffect(() => {
    getGoals();
  }, []);

  return (
    <div>
      <h1>Metas</h1>
      {goals.map((goal) => {
        return <span>{goal.name}</span>;
      })}
    </div>
  );
}
