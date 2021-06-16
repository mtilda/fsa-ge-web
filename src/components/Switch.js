import { Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';

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
    <Route path='*'>
      <Redirect to='programs' />
    </Route>
  </RouterSwitch>
);

export default Switch;