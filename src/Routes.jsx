import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Routes() {
  return(
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      )} /> 
    </BrowserRouter>
  );
}

export default Routes;
