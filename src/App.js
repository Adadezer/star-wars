import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';

function App() {
  return (
    <>
      <h1>STAR WARS</h1>

      <PlanetsProvider>
        <Table />
      </PlanetsProvider>
    </>
  );
}

export default App;
