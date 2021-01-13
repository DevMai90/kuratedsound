import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home, About, Services, Contact, SignUp, NaviBar, Jumbo, Footer} from './components/';

const App = () => {
  return (
    <>
    <NaviBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </Router>
      <Footer />
    </>
  );
}

export default App;