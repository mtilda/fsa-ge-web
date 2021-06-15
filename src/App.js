import Switch from './components/Switch';
import routes from './router/routes';

const App = () => {
  return (
    <div className="app">
      <Switch routes={routes} redirect='/' />
    </div>
  );
};

export default App;
