import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputNumerics() {
  const {
    setfilterByNumericValues,
    selectionFilter,
    setSelectionFilter,
  } = useContext(PlanetsContext);

  function handleChange({ target }) {
    const { name, value } = target;
    setSelectionFilter({ ...selectionFilter,
      [name]: value,
    });
  }

  function filterButton() {
    setfilterByNumericValues([selectionFilter]);
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
