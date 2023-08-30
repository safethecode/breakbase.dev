import { globalStyle } from '@vanilla-extract/css';

const parentElement = [
  'html',
  'body',
  'div',
  'span',
  'applet',
  'object',
  'iframe',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'blockquote',
  'pre',
  'a',
  'abbr',
  'acronym',
  'address',
  'big',
  'cite',
  'code',
  'del',
  'dfn',
  'em',
  'img',
  'ins',
  'kbd',
  'q',
  's',
  'samp',
  'small',
  'strike',
  'strong',
  'sub',
  'sup',
  'tt',
  'var',
  'b',
  'u',
  'i',
  'center',
  'dl',
  'dt',
  'dd',
  'ol',
  'ul',
  'li',
  'fieldset',
  'form',
  'label',
  'legend',
  'table',
  'caption',
  'tbody',
  'tfoot',
  'thead',
  'tr',
  'th',
  'td',
  'article',
  'aside',
  'canvas',
  'details',
  'embed',
  'figure',
  'figcaption',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'output',
  'ruby',
  'section',
  'summary',
  'time',
  'mark',
  'audio',
  'video',
];

const blockElements = [
  'article',
  'aside',
  'details',
  'figcaption',
  'figure',
  'footer',
  'header',
  'hgroup',
  'menu',
  'nav',
  'section',
];

/**
 *  The global style object cannot use simple pseudo or complex selectors.
 *  This avoids unexpected results when merging with the global selector,
 *  @example e.g. ul li:first-child, a > span.
 *  @see https://vanilla-extract.style/documentation/global-api/global-style/
 */

/**
 * this is reset css for parent and block elements
 */
globalStyle(`${parentElement.join()}`, {
  padding: 0,
  margin: 0,
  border: 0,
  fontSize: '100%',
  verticalAlign: 'baseline',
});

globalStyle(`${blockElements.join()}`, {
  display: 'block',
});

/**
 * this is reset css for universal elements
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  outline: 'none',
  WebkitTapHighlightColor: 'transparent',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

/**
 * this is reset css for html and body elements
 * '--font-inter' is a custom variable applied in the globalFontsStyle file.
 * @file src/styles/globalFontsStyle.css.ts
 */
globalStyle('html, body', {
  width: '100%',
  height: '100%',
  fontFamily: `
    var(--font-inter),
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif
  `,
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: 'antialiased',
});
