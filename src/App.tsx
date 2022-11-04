import React from 'react';
import { GlobalStyles, NavBar } from './components';
import { ZoeRoutes } from './Routes';

function App() {
  return (
    <ZoeRoutes>
      <NavBar />
      <GlobalStyles />
    </ZoeRoutes>
  );
}

export default App;
