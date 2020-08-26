import { css } from "@emotion/core";

export const defaultChrome = css`
/*
 * The default style sheet used to render HTML.
 *
 * Copyright (C) 2000 Lars Knoll (knoll@kde.org)
 * Copyright (C) 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011 Apple Inc. All rights reserved.
 */

a:-webkit-any-link {
    color: #0064bd;
    text-decoration: underline;
    cursor: pointer;
}

a:-webkit-any-link:active {
    color: -webkit-activelink
}

p {
  display: block;
  line-height: 1.2;
  margin: 1rem 0;
  -webkit-margin-before: 1__qem;
  -webkit-margin-after: 1__qem;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}

div {
    display: block
}

article, aside, footer, header, hgroup, main, nav, section {
    display: block
}

marquee {
    display: inline-block;
}

address {
    display: block
}

blockquote {
    display: block;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
}

figcaption {
    display: block
}

figure {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 40px;
    -webkit-margin-end: 40px;
}

q {
    display: inline
}

q:before {
    content: open-quote;
}

q:after {
    content: close-quote;
}

center {
    display: block;
    /* special centering to be able to emulate the html4/netscape behaviour */
    text-align: -webkit-center
}

hr {
    display: block;
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
    border-style: inset;
    border-width: 1px
}

map {
    display: inline
}

video {
    object-fit: contain;
}

/* heading elements */

h1 {
    display: block;
    font-size: 2em;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

:-webkit-any(article,aside,nav,section) h1 {
    font-size: 1.5em;
    -webkit-margin-before: 0.83__qem;
    -webkit-margin-after: 0.83em;
}

:-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1 {
    font-size: 1.17em;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
}

:-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1 {
    font-size: 1.00em;
    -webkit-margin-before: 1.33__qem;
    -webkit-margin-after: 1.33em;
}

:-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1 {
    font-size: .83em;
    -webkit-margin-before: 1.67__qem;
    -webkit-margin-after: 1.67em;
}

:-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) :-webkit-any(article,aside,nav,section) h1 {
    font-size: .67em;
    -webkit-margin-before: 2.33__qem;
    -webkit-margin-after: 2.33em;
}

h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h4 {
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h5 {
    display: block;
    font-size: .83em;
    -webkit-margin-before: 1.67em;
    -webkit-margin-after: 1.67em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

h6 {
    display: block;
    font-size: .67em;
    -webkit-margin-before: 2.33em;
    -webkit-margin-after: 2.33em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    font-weight: bold
}

/* lists */

ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 40px
}

ol {
    display: block;
    list-style-type: decimal;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
    -webkit-padding-start: 40px
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

ul ul, ol ul {
    list-style-type: circle
}

ol ol ul, ol ul ul, ul ol ul, ul ul ul {
    list-style-type: square
}

dd {
    display: block;
    -webkit-margin-start: 40px
}

dl {
    display: block;
    -webkit-margin-before: 1__qem;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}

dt {
    display: block
}

ol ul, ul ol, ul ul, ol ol {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0
}

/* inline elements */

u, ins {
    text-decoration: underline
}

strong, b {
    font-weight: bold
}

i, cite, em, var, address, dfn {
    font-style: italic
}

tt, code, kbd, samp {
    font-family: monospace
}

pre, xmp, plaintext, listing {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1__qem 0
}

mark {
    background-color: yellow;
    color: black
}

big {
    font-size: larger
}

small {
    font-size: smaller
}

s, strike, del {
    text-decoration: line-through
}

sub {
    vertical-align: sub;
    font-size: smaller
}

sup {
    vertical-align: super;
    font-size: smaller
}

nobr {
    white-space: nowrap
}
`;
