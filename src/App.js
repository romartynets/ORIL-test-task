import './App.css';
import HomePage from './pages/HomePage';
import { Chart } from './components/Chart';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const App = () => {

  const historyInstance = createBrowserHistory();
  return (
    <div className="App">
      <Router history={historyInstance}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:id"  component={Chart}/>
        </Switch>
      </Router>
    </div>
    );
}

export default App;
