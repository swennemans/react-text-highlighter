import React, {Component} from 'react';
import Highlighter from '../lib/';

/* Create a (stateless) component with highlightedText prop (that is passed from HOC) */
const TextComponent = ({highlightedText}) => <div dangerouslySetInnerHTML={ {__html: highlightedText }} />;
/* Wrap TextComponent in Highlighter for Highlight functionalities */
const HighlightedTextComponent = Highlighter(TextComponent);


const opts = {
  caseSensitive: true,
  highlightClass: 'highlighted-text'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: ''
    };
  }
  handleChange = (event) => {
    this.setState({
      highlight: event.target.value
    })
  };
  render() {
    return (
        <div>
          <input type="text" onChange={this.handleChange}></input>
          <HighlightedTextComponent highlight={this.state.highlight} text={"Foo bar baz"} options={opts} />
        </div>
  );
  }
}
export default App ;
