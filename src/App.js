import './App.css'
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Home from './views/Home'

function App() {


  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/matscard" component={Home} />
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
