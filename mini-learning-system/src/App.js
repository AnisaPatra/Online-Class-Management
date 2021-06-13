import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Authentication from './containers/Singin-Signup';
import Courses  from './containers/Courses';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/auth" component={Authentication}/>
      <Route path ="/courses" component={Courses}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
