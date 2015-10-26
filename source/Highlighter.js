/*eslint-disable no-unused-vars */
import React, {Component} from 'react';
import { createHighlight } from './methods';

export const Highlighter = ComposedComponent => class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      highlightedText: ''
    };
  }
  componentDidMount() {
    const {highlight, text, options} = this.props;
    const highlightedText = createHighlight(highlight, text, options);
    this.setState({highlightedText});
  }
  componentWillReceiveProps (nextProps) {
    const {highlight, text, options} = nextProps;
    const highlightedText = createHighlight(highlight, text, options);
    this.setState({highlightedText});
  }
  render () {
    return <ComposedComponent {...this.props} highlightedText={this.state.highlightedText}/>;
  }
};
