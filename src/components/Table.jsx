import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data,
    setData,
    dataBackup,
    filteredName: { filterByName: { name } },
    filterByNumericValues,
    setfilterByNumericValues,
    optionsSelect,
    setOptionsSelect,
  } = useContext(PlanetsContext);

  function recolocarColumn({ target }) {
    // console.log(filterByNumericValues[target.id]);
    setOptionsSelect([...optionsSelect, filterByNumericValues[target.id].column]); // coloco a option retirada devolta nas options
    setfilterByNumericValues(
      filterByNumericValues.filter((el) => el !== filterByNumericValues[target.id]),
    ); // retiro de filterByNumericValues o filtro q foi separado (botão X)
    setData(dataBackup); // seto a tabela d volta ao valor inicial
  }

  return (
    <>
      { filterByNumericValues.length > 0 // como o array filterByNumericValues inicia vazio, se ele for maior q 0, faz a logica, senão retorna uma string, sem isso o código da erro
        ? (filterByNumericValues.map((element, index) => (
          <>
            <br />
            {/* pego a column dentro de filterByNumericValues, e mostro numa div */}
            <div key={ index } data-testid="filter">
              {`${element.column} ${element.comparison} ${element.value}`}
              <button
                className="btn btn-danger btn-sm"
                type="button"
                id={ index }
                onClick={ recolocarColumn }
              >
                X
              </button>
            </div>
          </>
        ))) : ''}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((el) => el.name.includes(name)).map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
