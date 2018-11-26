import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.less';
import myImg from './images/test2.png';
import { connect } from 'dva';
@connect(
  /**
   * 将state与props连接起来
   */
  ({ test }) => ({ test }),

  /**
   * 将dispatch与props连接起来
   * @param dispatch
   * @return {{setName: (function(*=): *)}}
   */
  dispatch => {
    return {
      setName: params => dispatch({ type: 'test/setName', payload: params })
    };
  }
)
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0
    };
  }
  componentDidMount() {
    this.props.setName({ name: 'dick' });
  }
  render() {
    const { a } = this.state;
    return <div>{this.props.test.name}</div>;
  }
}
