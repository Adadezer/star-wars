import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetsContext from './PlanetsContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataBackup, setDataBackup] = useState([]);
  const [filteredName, setFilteredName] = useState({ filterByName: { name: '' } });

  const [filterByNumericValues, setfilterByNumericValues] = useState([]);

  const [selectionFilter, setSelectionFilter] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );

  const [optionsSelect, setOptionsSelect] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const fetchPlanets = async () => {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const responseJson = await response.json();
    setData(responseJson.results);
    setDataBackup(responseJson.results);
    // console.log(responseJson.results);
  };

  const contextValue = {
    data,
    setData,
    filteredName,
    setFilteredName,
    filterByNumericValues,
    setfilterByNumericValues,
    selectionFilter,
    setSelectionFilter,
    dataBackup,
    setDataBackup,
    optionsSelect,
    setOptionsSelect,
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
