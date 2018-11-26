import React from 'react';
import Main from '../main';
import { hot } from 'react-hot-loader';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      pop: 'pop'
    };
  }
  componentDidMount() {
    console.log(process.env.NODE_ENV);
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>change</button>
        <Main pop={this.state.pop} />
      </div>
    );
  }
}
export default hot(module)(Index);
