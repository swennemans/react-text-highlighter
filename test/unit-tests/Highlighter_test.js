/*eslint-disable */
import test from 'tape';
import sd from 'skin-deep';
import React from 'react';

import { Highlighter } from '../../source/Highlighter.js';
import getComponent from '../fixtures/create-react-component.js';


const setup = (hoc) => {

  const TestComponent = hoc !== undefined ? hoc(getComponent()) : getComponent();
  const tree = sd.shallowRender(React.createElement(TestComponent));
  const instance = tree.getMountedInstance();
  const vdom = tree.getRenderOutput();

  return {
    tree,
    vdom,
    instance
  };
};

test('.. Basic setup test component', (assert) => {
  const {tree, vdom } = setup();

  assert.equal(vdom.type, 'div', 'TestComponent should render');
  assert.end();
});

test('.. Basic setup high order component', (assert) => {
  assert.equal(typeof Highlighter, 'function', 'Component should be a function');
  assert.equal(typeof Highlighter(), 'function', 'Component should return a function');
  assert.end();
});


test('.. Test wrapped component', assert => {
  const {tree, vdom, instance} = setup(Highlighter);

  const actual = vdom.props;
  const expected = {highlightedText: ''};

  assert.deepEqual(actual, expected, 'Wrapped component should have highlightedText props');
  assert.end();
});
