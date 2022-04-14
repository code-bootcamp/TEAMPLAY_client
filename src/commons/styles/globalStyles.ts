import { css } from "@emotion/react";
import { breakPoints } from "./breakpoint";

export const globalStyles = css`
  @font-face {
    font-family: "GBold";
    src: url("/fonts/GmarketSansTTFBold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "GLight";
    src: url("/fonts/GmarketSansTTFLight.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "GMedium";
    src: url("/fonts/GmarketSansTTFMedium.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  * {
    font-family: "GMedium";
    font-size: 14px;
    color: #0d223a;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: bottom;
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  li,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  textarea {
    resize: none;
    box-sizing: border-box;
    outline: none;
  }
  input,
  select,
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }
  button {
    background: none;
    cursor: pointer;
    padding: 0;
  }
  #__next.projectdetalon {
    @media ${breakPoints.web} {
      width: 70%;
      position: absolute;
      right: 0;
    }
  }
`;
