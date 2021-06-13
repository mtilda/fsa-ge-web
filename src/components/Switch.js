import { Switch as RouterSwitch, Route } from 'react-router-dom';

const Switch = ({ routes }) => (
  <RouterSwitch>
    {routes.map(({ key, path, exact, Component }) => (
      <Route
        key={key}
        path={path}
        exact={exact}
      >
        <Component />
      </Route>
    ))}
  </RouterSwitch>
);

export default Switch;