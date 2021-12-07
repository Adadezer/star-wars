import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredName, setFilteredName] = useState({ filterByName: { name: '' } });

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
    // console.log(responseJson.results);
  };

  const contextValue = {
    data,
    setData,
    filteredName,
    setFilteredName,
  };

  useEffect(() => { fetchPlanets(); }, []);

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
