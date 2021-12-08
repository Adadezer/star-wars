import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import InputNumerics from './components/InputNumerics';

function App() {
  return (
    <>
      <h1>STAR WARS</h1>

      <PlanetsProvider>
        <InputFilter />
        <br />
        <br />
        <InputNumerics />
        <Table />
      </PlanetsProvider>
    </>
  );
}

export default App;
