/*eslint-disable  consistent-return */
export const createRegEx = (text, caseSensitive) => {
  return new RegExp(text.trim(), caseSensitive ? 'g' : 'gi');
};

export const createHTMLString = (HTMLString, reg, highlightClass) => {
  return HTMLString.replace(reg, (str) => {return `<span className=\"${highlightClass}\">${str}</span>`;});
};

export const createHighlight = (highlight, text, options) => {
  const {caseSensitive, highlightClass} = options;
  const toHighlight = highlight.split(' ');
  let HTMLString = text;

  if (toHighlight.length > 1) {
    toHighlight.forEach((highlightElement) => {
      if (highlightElement === '' || highlightElement === '') return;

      const reg = createRegEx(highlightElement, caseSensitive);
      HTMLString = createHTMLString(HTMLString, reg, highlightClass);
    });
    return HTMLString;
  } else {
    if (highlight === '' || highlight === ' ') return;
    const reg = createRegEx(highlight, caseSensitive);
    HTMLString = createHTMLString(HTMLString, reg, highlightClass);
    return HTMLString;
  }
};
