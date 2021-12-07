import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import InputFilter from './components/InputFilter';

function App() {
  return (
    <>
      <h1>STAR WARS</h1>

      <PlanetsProvider>
        <InputFilter />
        <Table />
      </PlanetsProvider>
    </>
  );
}

export default App;
