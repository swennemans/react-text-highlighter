/* eslint-disable */
import React, {Component} from 'react'


const getComponent = () => {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
    }
    render() {
      return (
          <div>{this.props.highlightedText}</div>
      );
    }
  }
}
export default getComponent;
