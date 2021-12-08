import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputNumerics() {
  const {
    setfilterByNumericValues,
    selectionFilter,
    setSelectionFilter,
    data,
    setData,
  } = useContext(PlanetsContext);

  function handleChange({ target }) {
    const { name, value } = target;
    setSelectionFilter({ ...selectionFilter,
      [name]: value,
    });
  }

  function filterButton() {
    setfilterByNumericValues([selectionFilter]);

    let filter = [];
    switch (selectionFilter.comparison) {
    case 'maior que': filter = data.filter((el) => (
      el[selectionFilter.column] > Number(selectionFilter.value)));
      break;

    case 'menor que': filter = data.filter((el) => (
      el[selectionFilter.column] < Number(selectionFilter.value)));
      break;

    case 'igual a': filter = data.filter((el) => (
      el[selectionFilter.column] === selectionFilter.value));
      break;

    default: return true;
    }

    // let filter = [];
    // if (comparison === 'maior que') {
    //   filter = data.filter((el) => el[column] > Number(selectionFilter.value));
    // } else if (comparison === 'menor que') {
    //   filter = data.filter((el) => el[column] < Number(selectionFilter.value));
    // } else if (comparison === 'igual a') {
    //   filter = data.filter((el) => el[column] === selectionFilter.value);
    // }

    setData(filter);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ selectionFilter.column }
        onChange={ handleChange }
        name="column"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        value={ selectionFilter.comparison }
        onChange={ handleChange }
        name="comparison"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        data-testid="value-filter"
        value={ selectionFilter.value }
        onChange={ handleChange }
        name="value"
        type="number"
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterButton }
      >
        Filtrar
      </button>
    </div>
  );
}

export default InputNumerics;
