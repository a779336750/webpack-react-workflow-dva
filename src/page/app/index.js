import React from 'react';
import { Route, Switch, Router } from 'dva/router';
import Index from '../index';
import { hot } from 'react-hot-loader';
const routNames = {
  INDEX: '/'
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 'pop'
    };
  }
  render() {
    const history = this.props.history;
    return (
      <Router history={history}>
        <Switch>
          <Route path={routNames.MAIN} component={Index} />
        </Switch>
      </Router>
    );
  }
}
export default hot(module)(App);
