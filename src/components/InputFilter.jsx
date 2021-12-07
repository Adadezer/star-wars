import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function InputFilter() {
  const { filteredName, setFilteredName } = useContext(PlanetsContext);

  function handleChange({ target }) {
    const { value } = target;

    setFilteredName({ filterByName: { name: value } });
  }

  return (
    <label htmlFor="nameFilter">
      Digite o nome:
      <input
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        value={ filteredName.filterByName.name }
        id="nameFilter"
      />
    </label>
  );
}

export default InputFilter;
