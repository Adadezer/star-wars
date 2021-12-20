import React from 'react';
import './App.css';
import logo from './image/Star_Wars_logo.png';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import InputFilter from './components/InputFilter';
import InputNumerics from './components/InputNumerics';

function App() {
  return (
    <>
      <div className="logoStarWarsContainer">
        <img className="logoStarWars" src={ logo } alt="logo star wars" />
      </div>
      <br />

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
