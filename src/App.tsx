import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PageA} />
        <Route exact path="/pageb" component={PageB} />
      </Switch>
    </Router>
  );
};

export default App;
