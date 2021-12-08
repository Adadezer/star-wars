import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    data,
    filteredName: { filterByName: { name } },
    // filterByNumericValues: [{ column, comparison, value }],
  } = useContext(PlanetsContext);
  // console.log('filterByNumericValues:', filterByNumericValues);

  // let filter = [];
  // if (name.length > 0) {
  //   filter = data.filter((el) => el.name.includes(name));
  // }

  // switch (comparison) {
  // case comparison === 'maior que':
  //   filter = data.filter((el) => el[column] > Number(value));
  //   break;
  // case comparison === 'menor que':
  //   filter = data.filter((el) => el[column] < Number(value));
  //   break;
  // case comparison === 'igual a':
  //   filter = data.filter((el) => el[column] === Number(value));
  //   break;
  // default:
  //   filter = data.filter((el) => el.name.includes(name));
  // }

  return (
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
  );
}

export default Table;
