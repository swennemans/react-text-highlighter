# WIP almost finished.


# React-Text-Highlighter

Simple High Order Component that allows you to highlight your text based on text matches.

### Why?

I needed a simple highlighter that works with multiple words and React 0.14

### How to use?

`npm install react-text-highlighter`;

Create a simple `component` and wrap in `Highlighter`. For example using a stateless `component`:
```js
import Highlighter from 'react-text-highlighter;
...

const MyComponent = ({highlightedText}) =>
<div id="result" dangerouslySetInnerHTML={ {__html: highlightedText}}/>;

//!important
export default HighLighter(MyComponent);
```
Than you could cleanly add it in a higher level component like:
```
<HighLighter highlight={"Foo"} text={"Foo bar baz"} options={opts} />
```

### Options
You need to pass an option object with the following properties:
```
{ caseSensitive: true //true or false
  highlightClass: 'highlighted-text' // className for your highlighted text
]
```

#### dangerouslySetInnerHTML?

The component returns a HTML string which you need to set with `dangerouslysetInnerHTML`, otherwise highlighting multiple words
became very complicated. If you **don't** trust the source of your highlighted text. Use a library like [DOMPurify](https://github.com/cure53/DOMPurify). This
allows you to:

```js
{dangerouslySetInnerHTML: __html: DOMpurify(highlightedText)}
```

#### Alternatives