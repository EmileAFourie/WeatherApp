import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../App';

const ReactRouter = () => {
  const filteredRoutes = routes.filter((route) => route.path !== '/current-weather');

  return (
    <div>
      <h1>This is the directory for each page created for this project:</h1>
      <h2>Routes:</h2>
      <ul>
        {filteredRoutes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
        <li>
            If youd like to see the weather directory please go to / and then enter a city name
        </li>
      </ul>
    </div>
  );
};

export default ReactRouter;