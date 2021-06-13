import Nav from './components/Nav';
import Switch from './components/Switch';
import routes from './router/routes';

const App = () => {
  return (
    <div className="app">
      <Nav routes={routes} />
      <Switch routes={routes} redirect='/' />
    </div>
  );
};

export default App;
