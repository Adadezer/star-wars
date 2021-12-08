import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function InputNumerics() {
  const {
    setfilterByNumericValues,
    selectionFilter,
    setSelectionFilter,
    setData,
    dataBackup,
    optionsSelect,
    setOptionsSelect,
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
    case 'maior que': filter = dataBackup.filter((el) => (
      el[selectionFilter.column] > Number(selectionFilter.value)));
      break;

    case 'menor que': filter = dataBackup.filter((el) => (
      el[selectionFilter.column] < Number(selectionFilter.value)));
      break;

    case 'igual a': filter = dataBackup.filter((el) => (
      el[selectionFilter.column] === selectionFilter.value));
      break;

      // databackup é usado para a consulta sempre ser feita num data completo, quando o primeiro filtro é feito, ele modifica o data original com o valor filtrado (setData(filter)), e na segunda vez q é feito um novo filtro, ele tem q pegar os valores do array completo, senão a tabela sempre terá valores faltando
    default: return true;
    }
    setData(filter);

    setOptionsSelect(
      optionsSelect.filter((element) => element !== selectionFilter.column),
      // quando um filtro é feito, ele tira a option usada do select column (req.4)
    );
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ selectionFilter.column }
        onChange={ handleChange }
        name="column"
      >
        {optionsSelect.map((option, index) => (
          <option key={ index }>{ option }</option>
        ))}
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
