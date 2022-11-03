import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <h1>Zoe Home</h1>
      <span>
        <Link to='/login'>Login</Link>
      </span>
    </div>
  );
}
