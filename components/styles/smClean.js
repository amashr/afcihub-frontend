import { css } from 'styled-components';

const smClean = css`
  .sm,
  .sm ul,
  .sm li {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: normal;
    direction: ltr;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .sm-rtl,
  .sm-rtl ul,
  .sm-rtl li {
    direction: rtl;
    text-align: right;
  }
  .sm > li > h1,
  .sm > li > h2,
  .sm > li > h3,
  .sm > li > h4,
  .sm > li > h5,
  .sm > li > h6 {
    margin: 0;
    padding: 0;
  }
  .sm ul {
    display: none;
  }
  .sm li,
  .sm a {
    position: relative;
  }
  .sm a {
    display: block;
  }
  .sm a.disabled {
    cursor: not-allowed;
  }
  .sm:after {
    content: '\00a0';
    display: block;
    height: 0;
    font: 0px/0 serif;
    clear: both;
    visibility: hidden;
    overflow: hidden;
  }
  .sm,
  .sm *,
  .sm *:before,
  .sm *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .sm-clean {
    background: #eeeeee;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
  }
  .sm-clean a,
  .sm-clean a:hover,
  .sm-clean a:focus,
  .sm-clean a:active {
    padding: 13px 20px;
    /* make room for the toggle button (sub indicator) */
    padding-right: 58px;
    font-size: 18px;
    font-weight: normal;
    line-height: 17px;
    text-decoration: none;
  }
  .sm-clean a.disabled {
    color: #bbbbbb;
  }
  .sm-clean a span.sub-arrow {
    position: absolute;
    top: 50%;
    margin-top: -17px;
    left: auto;
    right: 4px;
    width: 34px;
    height: 34px;
    overflow: hidden;
    font: bold 16px/34px monospace !important;
    text-align: center;
    text-shadow: none;
    background: rgba(255, 255, 255, 0.5);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
  }
  .sm-clean a.highlighted span.sub-arrow:before {
    display: block;
    content: '-';
  }
  .sm-clean > li:first-child > a,
  .sm-clean > li:first-child > :not(ul) a {
    -webkit-border-radius: 5px 5px 0 0;
    -moz-border-radius: 5px 5px 0 0;
    -ms-border-radius: 5px 5px 0 0;
    -o-border-radius: 5px 5px 0 0;
    border-radius: 5px 5px 0 0;
  }
  .sm-clean > li:last-child > a,
  .sm-clean > li:last-child > *:not(ul) a,
  .sm-clean > li:last-child > ul,
  .sm-clean > li:last-child > ul > li:last-child > a,
  .sm-clean > li:last-child > ul > li:last-child > *:not(ul) a,
  .sm-clean > li:last-child > ul > li:last-child > ul,
  .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > a,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > *:not(ul)
    a,
  .sm-clean > li:last-child > ul > li:last-child > ul > li:last-child > ul,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > a,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > *:not(ul)
    a,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > a,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > *:not(ul)
    a,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul {
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    -ms-border-radius: 0 0 5px 5px;
    -o-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
  }
  .sm-clean > li:last-child > a.highlighted,
  .sm-clean > li:last-child > *:not(ul) a.highlighted,
  .sm-clean > li:last-child > ul > li:last-child > a.highlighted,
  .sm-clean > li:last-child > ul > li:last-child > *:not(ul) a.highlighted,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > a.highlighted,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > *:not(ul)
    a.highlighted,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > a.highlighted,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > *:not(ul)
    a.highlighted,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > a.highlighted,
  .sm-clean
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > ul
    > li:last-child
    > *:not(ul)
    a.highlighted {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    border-radius: 0;
  }
  .sm-clean li {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
  .sm-clean > li:first-child {
    border-top: 0;
  }
  .sm-clean ul {
    background: transparent;
  }
  .sm-clean ul a,
  .sm-clean ul a:hover,
  .sm-clean ul a:focus,
  .sm-clean ul a:active {
    font-size: 16px;
  }
  .sm-clean ul ul a,
  .sm-clean ul ul a:hover,
  .sm-clean ul ul a:focus,
  .sm-clean ul ul a:active {
    border-left: 16px solid transparent;
  }
  .sm-clean ul ul ul a,
  .sm-clean ul ul ul a:hover,
  .sm-clean ul ul ul a:focus,
  .sm-clean ul ul ul a:active {
    border-left: 24px solid transparent;
  }
  .sm-clean ul ul ul ul a,
  .sm-clean ul ul ul ul a:hover,
  .sm-clean ul ul ul ul a:focus,
  .sm-clean ul ul ul ul a:active {
    border-left: 32px solid transparent;
  }
  .sm-clean ul ul ul ul ul a,
  .sm-clean ul ul ul ul ul a:hover,
  .sm-clean ul ul ul ul ul a:focus,
  .sm-clean ul ul ul ul ul a:active {
    border-left: 40px solid transparent;
  }

  @media (min-width: 925px) {
    /* Switch to desktop layout
    -----------------------------------------------
       These transform the menu tree from
       collapsible to desktop (navbar + dropdowns)
    -----------------------------------------------*/
    /* start... (it's not recommended editing these rules) */
    .sm-clean ul {
      position: absolute;
    }

    .sm-clean li {
      float: left;
    }

    .sm-clean.sm-rtl li {
      float: right;
    }

    .sm-clean ul li,
    .sm-clean.sm-rtl ul li,
    .sm-clean.sm-vertical li {
      float: none;
    }

    .sm-clean a {
      white-space: nowrap;
    }

    .sm-clean ul a,
    .sm-clean.sm-vertical a {
      white-space: normal;
    }

    .sm-clean .sm-nowrap > li > a,
    .sm-clean .sm-nowrap > li > :not(ul) a {
      white-space: nowrap;
    }

    /* ...end */
    .sm-clean {
      padding: 0 10px;
      background: #eeeeee;
      -webkit-border-radius: 100px;
      -moz-border-radius: 100px;
      -ms-border-radius: 100px;
      -o-border-radius: 100px;
      border-radius: 100px;
    }
    .sm-clean a,
    .sm-clean a:hover,
    .sm-clean a:focus,
    .sm-clean a:active,
    .sm-clean a.highlighted {
      padding: 12px 12px;
      -webkit-border-radius: 0 !important;
      -moz-border-radius: 0 !important;
      -ms-border-radius: 0 !important;
      -o-border-radius: 0 !important;
      border-radius: 0 !important;
    }

    .sm-clean a.has-submenu {
      padding-right: 24px;
    }
    .sm-clean a span.sub-arrow {
      top: 0;
      margin-top: 3px;
      right: -3px;
      width: 34px;
      height: 34px;
      background: transparent;
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      -ms-border-radius: 0;
      -o-border-radius: 0;
      border-radius: 0;
    }
    .sm-clean a.highlighted span.sub-arrow:before {
      display: none;
    }
    .sm-clean li {
      border-top: 0;
    }
    .sm-clean > li > ul:after {
      top: -16px;
      left: 31px;
      border-width: 8px;
      border-color: transparent transparent white transparent;
    }
    .sm-clean ul {
      padding: 5px 0;
      background: white;
    }
    .sm-clean ul a,
    .sm-clean ul a:hover,
    .sm-clean ul a:focus,
    .sm-clean ul a:active,
    .sm-clean ul a.highlighted {
      border: 0 !important;
      padding: 12px;
    }
    .sm-clean ul a.disabled {
      background: white;
      color: #cccccc;
    }
    .sm-clean ul a.has-submenu {
      padding-right: 20px;
    }
    .sm-clean ul a span.sub-arrow {
      right: 28px;
      top: 0;
      margin-top: 3px;
      border: 0;
    }
    .sm-clean span.scroll-up,
    .sm-clean span.scroll-down {
      position: absolute;
      display: none;
      visibility: hidden;
      overflow: hidden;
      background: white;
      height: 20px;
    }
    .sm-clean span.scroll-up:hover,
    .sm-clean span.scroll-down:hover {
      background: #eeeeee;
    }
    .sm-clean span.scroll-up:hover span.scroll-up-arrow,
    .sm-clean span.scroll-up:hover span.scroll-down-arrow {
      border-color: transparent transparent #d23600 transparent;
    }
    .sm-clean span.scroll-down:hover span.scroll-down-arrow {
      border-color: #d23600 transparent transparent transparent;
    }
    .sm-clean span.scroll-up-arrow,
    .sm-clean span.scroll-down-arrow {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -6px;
      width: 0;
      height: 0;
      overflow: hidden;
      border-width: 6px;
      border-style: dashed dashed solid dashed;
      border-color: transparent transparent #555555 transparent;
    }
    .sm-clean span.scroll-down-arrow {
      top: 8px;
      border-style: solid dashed dashed dashed;
      border-color: #555555 transparent transparent transparent;
    }
    .sm-clean.sm-rtl a.has-submenu {
      padding-right: 12px;
      padding-left: 24px;
    }
    .sm-clean.sm-rtl a span.sub-arrow {
      right: auto;
      left: 12px;
    }
    .sm-clean.sm-rtl.sm-vertical a.has-submenu {
      padding: 10px 20px;
    }
    .sm-clean.sm-rtl.sm-vertical a span.sub-arrow {
      right: auto;
      left: 8px;
      border-style: dashed solid dashed dashed;
      border-color: transparent #555555 transparent transparent;
    }
    .sm-clean.sm-rtl > li > ul:before {
      left: auto;
      right: 30px;
    }
    .sm-clean.sm-rtl > li > ul:after {
      left: auto;
      right: 31px;
    }
    .sm-clean.sm-rtl ul a.has-submenu {
      padding: 10px 20px !important;
    }
    .sm-clean.sm-rtl ul a span.sub-arrow {
      right: auto;
      left: 8px;
      border-style: dashed solid dashed dashed;
      border-color: transparent #555555 transparent transparent;
    }
    .sm-clean.sm-vertical {
      padding: 10px 0;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      -ms-border-radius: 5px;
      -o-border-radius: 5px;
      border-radius: 5px;
    }
    .sm-clean.sm-vertical a {
      padding: 10px 20px;
    }
    .sm-clean.sm-vertical a:hover,
    .sm-clean.sm-vertical a:focus,
    .sm-clean.sm-vertical a:active,
    .sm-clean.sm-vertical a.highlighted {
      background: white;
    }
    .sm-clean.sm-vertical a.disabled {
      background: #eeeeee;
    }
    .sm-clean.sm-vertical a span.sub-arrow {
      right: 8px;
      top: 50%;
      margin-top: -5px;
      border-width: 5px;
      border-style: dashed dashed dashed solid;
      border-color: transparent transparent transparent #555555;
    }
    .sm-clean.sm-vertical > li > ul:before,
    .sm-clean.sm-vertical > li > ul:after {
      display: none;
    }
    .sm-clean.sm-vertical ul a {
      padding: 10px 20px;
    }
    .sm-clean.sm-vertical ul a:hover,
    .sm-clean.sm-vertical ul a:focus,
    .sm-clean.sm-vertical ul a:active,
    .sm-clean.sm-vertical ul a.highlighted {
      background: #eeeeee;
    }
    .sm-clean.sm-vertical ul a.disabled {
      background: white;
    }
  }
`;

export default smClean;
