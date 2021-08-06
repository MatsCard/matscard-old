import '@fortawesome/fontawesome-svg-core'
import './App.css'
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.css'
import './utils/Freight Big Light.otf'
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
