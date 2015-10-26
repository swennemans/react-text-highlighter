
# React-Text-Highlighter

Simple High Order Component that allows you to highlight your text based on text matches.

## Why?

I needed a simple highlighter that works with React 0.14 and multiple non-connected words.

![](https://raw.githubusercontent.com/swennemans/react-text-highlighter/master/example/example.gif)

# How to use?

`npm install react-text-highlighter`;

Create a `component` and wrap it in `Highlighter`.

Quick example  using a stateless `component`:
```js
import Highlighter from 'react-text-highlighter';
...

const MyComponent = ({highlightedText}) =>
<div id="result" dangerouslySetInnerHTML={ {__html: highlightedText}}/>;

//!important
export default Highlighter(MyComponent);
```
Now you can cleanly add it like:
```
<HighLighter highlight={"Foo"} text={"Foo bar baz"} options={opts} />
```

Check the `example` dir for a simple example or run the example with: `npm run example`

## Options
You need to pass an option object with the following properties:
```
{
  caseSensitive: true //true or false
  highlightClass: 'highlighted-text' // className for your highlighted text
}
```

### dangerouslySetInnerHTML?

The component returns a HTML string which you need to set with `dangerouslysetInnerHTML`, otherwise highlighting highlighting multiple words
becomes very complex. If you **don't** trust the source of your highlighted text. Use a library like [DOMPurify](https://github.com/cure53/DOMPurify). This
allows you to:

```js
{dangerouslySetInnerHTML: __html: DOMpurify(highlightedText)}
```

## Alternatives

- [react-text-highlight](https://github.com/henriquea/react-text-highlight)
- [react-hi-text](https://github.com/rwu823/react-hi-text)

