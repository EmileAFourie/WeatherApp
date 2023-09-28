import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/CurrentWeather';
import RoutesPage from './pages/ReactRouter';

const NotFound = () => <h1>404 Error: Page Not Found</h1>;

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/current-weather', name: 'Current Weather', component: Weather },
  { path: '/react-routes', name: 'React Routes', component: RoutesPage },
];

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="/routes" element={<RoutesPage routes={routes} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export { routes };
export default App;
