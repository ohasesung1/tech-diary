import { css } from "@emotion/core";
import { mediaQuery } from 'component/layout/responsive';
import { defaultChrome } from 'styles/default/chrome';

export const markdownCss = css`
  ${defaultChrome}
  
  pre {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 4px;
    line-height: 1.5;
    overflow-x: auto;
    letter-spacing: 0px;
    ${mediaQuery.sm} {
      font-size: 0.75rem;
      padding: 0.75rem;
    }
  }

  code:not([class]) {
    font-size: 1.2rem;
    background-color: rgba(0,0,0,0.1);
    padding: 0.2rem 0.4em;
    border-radius: 3px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5rem 0 1.5rem;
  }

  iframe {
    width: 768px;
    height: 430px;
    max-width: 100%;
    background: black;
    display: block;
    margin: auto;
    border: none;
    border-radius: 4px;
    overflow: hidden;
  }

  table {
    min-width: 40%;
    max-width: 100%;
    border: 1px solid #cccccc;
    border-collapse: collapse;
    font-size: 0.875rem;
    margin: 0.8rem 0;
    thead > tr > th {
      border-bottom: 4px solid #cccccc;
    }
    th,
    td {
      word-break: break-word;
      padding: 0.5rem;
    }

    td + td,
    th + th {
      border-left: 1px solid #cccccc;
    }

    tr:nth-of-type(even) {
      background: rgb(241, 243, 245);
    }
    tr:nth-of-type(odd) {
      background: white;
    }
  }
`;
