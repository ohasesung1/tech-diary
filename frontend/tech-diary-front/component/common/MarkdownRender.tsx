import React from 'react';
import styled from '@emotion/styled';
import remark from 'remark';
import remarkSlug from 'remark-slug'
import remarkRow from 'rehype-raw';
import remarkParse from 'remark-parse';
import remarkBreaks from 'remark-breaks';
import remark2rehype from 'remark-rehype';
import remarkStringify from 'rehype-stringify';
import sanitize from 'sanitize-html';
import parse from 'html-react-parser';
import prismPlugin from 'libs/remark/prismPlugin';
import checkboxPlugin from 'libs/remark/checkboxPlugin';
import { markdownCss } from 'libs/remark/markdownTheme';
import { prismThemes } from 'libs/remark/prismTheme';

const MarkdownRenderBlock = styled.div<{ fontSize?: string }>`
  label: markdown-block;
  ${markdownCss}
  ${prismThemes['darcula']}

  & * {
    font-size: 0.935rem;
    line-height: 200%;
  }

  ${(props) => props.fontSize && `
    & * {
      font-size: ${props.fontSize};
    }
  `}
`

function fillter(html: string) {
  return sanitize(html, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5',
      'h6', 'blockquote', 'p', 'a',
      'ul', 'ol', 'nl', 'li', 'b',
      'i', 'strong', 'em', 'strike',
      'code', 'hr', 'br', 'div', 'table',
      'thead', 'caption', 'tbody', 'tr',
      'th', 'td', 'pre', 'span', 'img', 'del',
      'input'
    ],
    allowedAttributes: {
      a: ['href', 'name', 'target'],
      img: ['src'],
      input: ['type', 'checked', 'disabled'],
      iframe: ['src', 'allow', 'allowfullscreen', 'scrolling', 'class'],
      '*': ['class', 'id', 'aria-hidden'],
      span: ['style'],
    },
    allowedStyles: {
      '*': {
        color: [ // Match HEX and RGB
          /^#(0x)?[0-9a-f]+$/i,
          /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,
        ],
        'text-align': [/^left$/, /^right$/, /^center$/],
      },
    },
  });
}

type MarkdownRenderProps = {
  markdown: string;
  fontSize?: string;
};

function MarkdownRender({ markdown, fontSize }: MarkdownRenderProps) {
  const html = fillter(
    remark()
      .use(remarkParse)
      .use(remarkSlug)
      .use(prismPlugin)
      .use(checkboxPlugin)
      .use(remark2rehype, { allowDangerousHtml: true })
      .use(remarkRow)
      .use(remarkBreaks)
      .use(remarkStringify)
      .processSync(markdown)
      .toString());

  const element = parse(html);

  return (
    <MarkdownRenderBlock fontSize={fontSize}>
      {element}
    </MarkdownRenderBlock>
  );
}

export default MarkdownRender;