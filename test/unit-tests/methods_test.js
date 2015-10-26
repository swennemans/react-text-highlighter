/* eslint-disable */
import test from 'tape';

import {createHighlight, createRegEx, createHTMLString} from '../../source/methods';


test('..CreateRegex function should work properly', t => {
  t.deepEqual(createRegEx("Foo", false), /Foo/gi, 'Return a case insensitive regex');
  t.deepEqual(createRegEx("Foo", true), /Foo/g, 'Return a case sensitive regex ');
  t.deepEqual(createRegEx("  Foo  ", true), /Foo/g, 'Passed string should be trimmed ');

  t.end();
});

test('..CreateHTMLString function should work properly', t => {
  const actual = createHTMLString("Foo Bar Baz", /Foo/g, "highlight");
  const expected =  '<span className="highlight">Foo</span> Bar Baz';

  t.equal(actual, expected, 'String include highlighted className');
  t.end()
});

test('..CreateHighlight function should work properly', nest => {
  const opts = {
    caseSensitive: true,
    highlightClass: 'highlight'
  };

  nest.test('When passed one matching word, return should include three hightlighted classNames', assert => {
    const actual = createHighlight('Foo', 'Foo bar baz', opts);
    const expected = '<span className="highlight">Foo</span> bar baz';

    assert.equal(actual, expected);
    assert.end();
  });

  nest.test('When passed three matching words, return should include three highlight classNames', assert => {
    const actual = createHighlight('Foo bar baz', 'Foo bar baz', opts);
    const expected = '<span className="highlight">Foo</span> <span className="highlight">bar</span> <span className="highlight">baz</span>';

    assert.equal(actual, expected);
    assert.end();
  });

  nest.test('When passed zero matching words, return should not include highlight classNames', assert => {
    const actual = createHighlight('Foo bar baz', 'Lorem ipsum random', opts);
    const expected = 'Lorem ipsum random';

    assert.equal(actual, expected);
    assert.end();
  });

  nest.end()
});