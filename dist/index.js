'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classNames = require('classnames');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var TouchFeedback = require('rmc-feedback');
var ReactDOM = require('react-dom');
var LazyLoad = require('react-lazyload');
var _ = require('lodash');
var axios = require('axios');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var classNames__default = /*#__PURE__*/ _interopDefaultLegacy(classNames);
var TouchFeedback__default = /*#__PURE__*/ _interopDefaultLegacy(TouchFeedback);
var ReactDOM__default = /*#__PURE__*/ _interopDefaultLegacy(ReactDOM);
var LazyLoad__default = /*#__PURE__*/ _interopDefaultLegacy(LazyLoad);
var ___default = /*#__PURE__*/ _interopDefaultLegacy(_);
var axios__default = /*#__PURE__*/ _interopDefaultLegacy(axios);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '*,\n*::before,\n*::after {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n\n[tabindex="-1"]:focus:not(:focus-visible) {\n  outline: 0 !important; }\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25; }\n\nhr:not([size]) {\n  height: 1px; }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2; }\n\nh1 {\n  font-size: 40px; }\n\nh2 {\n  font-size: 32px; }\n\nh3 {\n  font-size: 28px; }\n\nh4 {\n  font-size: 24px; }\n\nh5 {\n  font-size: 20px; }\n\nh6 {\n  font-size: 16px; }\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none; }\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\n\nol,\nul {\n  padding-left: 2rem; }\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\n\ndt {\n  font-weight: 700; }\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0; }\n\nblockquote {\n  margin: 0 0 1rem; }\n\nb,\nstrong {\n  font-weight: bolder; }\n\nsmall {\n  font-size: 0.875em; }\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\na {\n  color: #0d6efd;\n  text-decoration: none; }\n  a:hover {\n    color: #024dbc;\n    text-decoration: underline; }\n\na:not([href]), a:not([href]):hover {\n  color: inherit;\n  text-decoration: none; }\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em; }\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em; }\n  pre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word; }\n  a > code {\n    color: inherit; }\n\nfigure {\n  margin: 0 0 1rem; }\n\nimg {\n  vertical-align: middle; }\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle; }\n\ntable {\n  border-collapse: collapse; }\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\n\nth {\n  text-align: inherit; }\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem; }\n\nbutton {\n  border-radius: 0; }\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\nbutton,\ninput {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nselect {\n  word-wrap: normal; }\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none; }\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; }\n  button:not(:disabled),\n  [type="button"]:not(:disabled),\n  [type="reset"]:not(:disabled),\n  [type="submit"]:not(:disabled) {\n    cursor: pointer; }\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\n\ninput[type="date"],\ninput[type="time"],\ninput[type="datetime-local"],\ninput[type="month"] {\n  -webkit-appearance: textfield; }\n\ntextarea {\n  overflow: auto;\n  resize: vertical; }\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\n\nmark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n\nprogress {\n  vertical-align: baseline; }\n\n::-webkit-datetime-edit {\n  overflow: visible;\n  line-height: 0; }\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield; }\n\n::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n::-webkit-color-swatch-wrapper {\n  padding: 0; }\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\n\noutput {\n  display: inline-block; }\n\nsummary {\n  display: list-item;\n  cursor: pointer; }\n\ntemplate {\n  display: none; }\n\nmain {\n  display: block; }\n\n[hidden] {\n  display: none !important; }\n\n:focus,\na {\n  outline: none; }\n\nul,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.sn-title {\n  margin: 0;\n  padding: 16px 0 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px; }\n\n.sn-btn {\n  position: relative;\n  text-align: center;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  white-space: nowrap;\n  text-align: center;\n  background-image: none;\n  outline: 0 none;\n  border: 1px solid transparent;\n  padding: 0.155rem 0.355rem;\n  font-size: 16px;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }\n  .sn-btn.disabled, .sn-btn[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    box-shadow: none; }\n    .sn-btn.disabled > *, .sn-btn[disabled] > * {\n      pointer-events: none; }\n  .sn-btn-active {\n    background-color: #ddd; }\n  .sn-btn-block {\n    display: block;\n    width: 100%; }\n  .sn-btn-lg {\n    padding: 0.25rem 0.5rem;\n    font-size: 20px;\n    border-radius: 0.3rem; }\n  .sn-btn-sm {\n    padding: 0.12rem 0.25rem;\n    font-size: 14px;\n    border-radius: 0.2rem; }\n  .sn-btn-primary {\n    color: #fff;\n    background: #0d6efd;\n    border-color: #0d6efd; }\n    .sn-btn-primary:active {\n      background: #3385fd; }\n    .sn-btn-primary:disabled, .sn-btn-primary.disabled {\n      color: #fff;\n      background: #0d6efd;\n      border-color: #0d6efd; }\n  .sn-btn-danger {\n    color: #fff;\n    background: #dc3545;\n    border-color: #dc3545; }\n    .sn-btn-danger:active {\n      background: #e25663; }\n    .sn-btn-danger:disabled, .sn-btn-danger.disabled {\n      color: #fff;\n      background: #dc3545;\n      border-color: #dc3545; }\n  .sn-btn-default {\n    color: #212529;\n    background: #fff;\n    border-color: #ced4da; }\n    .sn-btn-default:active {\n      background: white; }\n    .sn-btn-default:disabled, .sn-btn-default.disabled {\n      color: #212529;\n      background: #fff;\n      border-color: #ced4da; }\n    .sn-btn-default.sn-btn-active {\n      background: #ddd; }\n  .sn-btn-link {\n    font-weight: 400;\n    color: #0d6efd;\n    text-decoration: none;\n    box-shadow: none; }\n    .sn-btn-link:hover {\n      color: #024dbc;\n      text-decoration: underline; }\n    .sn-btn-link:focus, .sn-btn-link.focus {\n      text-decoration: underline;\n      box-shadow: none; }\n    .sn-btn-link:disabled, .sn-btn-link.disabled {\n      color: #6c757d;\n      pointer-events: none; }\n\n.single-loading {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center; }\n  .single-loading span {\n    display: inline-block;\n    margin-top: 8px; }\n\n.sn-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.sn-image-wrap {\n  position: relative;\n  display: inline-block; }\n  .sn-image-wrap-round {\n    overflow: hidden; }\n\n.sn-image-img {\n  width: 100%;\n  height: 100%; }\n\n.sn-image-loading, .sn-image-error {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  background-color: #f7f8fa; }\n\n.sn-modal {\n  position: fixed;\n  top: 45%;\n  left: 50%;\n  width: 80vw;\n  overflow: hidden;\n  font-size: 16px;\n  background-color: #fff;\n  border-radius: 16px;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform; }\n  .sn-modal-header {\n    padding-top: 26px;\n    font-weight: 500;\n    line-height: 24px;\n    text-align: center; }\n  .sn-modal-body {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    flex: 1;\n    max-height: 60vh;\n    padding: 26px 24px;\n    overflow-y: auto;\n    font-size: 14px;\n    line-height: 20px;\n    white-space: pre-wrap;\n    text-align: center;\n    word-wrap: break-word; }\n  .sn-modal-footer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative; }\n    .sn-modal-footer > a:last-child::before {\n      content: "";\n      position: absolute;\n      background-color: #ddd;\n      display: block;\n      z-index: 1;\n      top: 0;\n      right: auto;\n      bottom: auto;\n      left: 0;\n      width: 1px;\n      height: 100%;\n      -webkit-transform-origin: 100% 50%;\n      -ms-transform-origin: 100% 50%;\n      transform-origin: 100% 50%;\n      -webkit-transform: scaleX(0.5);\n      -ms-transform: scaleX(0.5);\n      transform: scaleX(0.5); }\n    .sn-modal-footer::before {\n      content: "";\n      position: absolute;\n      background-color: #ddd;\n      display: block;\n      z-index: 1;\n      top: 0;\n      right: auto;\n      bottom: auto;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      -webkit-transform-origin: 50% 50%;\n      -ms-transform-origin: 50% 50%;\n      transform-origin: 50% 50%;\n      -webkit-transform: scaleY(0.5);\n      -ms-transform: scaleY(0.5);\n      transform: scaleY(0.5); }\n\n.sn-toast {\n  width: calc(100vw);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  transform: translateZ(1px); }\n  .sn-toast > span {\n    max-width: 50vw; }\n  .sn-toast-icon-wrap {\n    padding: 10px 0; }\n  .sn-toast-mask {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    top: 0;\n    transform: translateZ(1px); }\n  .sn-toast-nomask {\n    position: fixed;\n    max-width: 50%;\n    width: auto;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n  .sn-toast-content {\n    text-align: center;\n    min-width: 70px;\n    border-radius: 4px;\n    color: #fff;\n    background-color: rgba(58, 58, 58, 0.9);\n    padding: 6px 10px; }\n\n.sn-switch {\n  position: relative;\n  display: inline-block;\n  box-sizing: content-box;\n  width: 2em;\n  height: 1em;\n  font-size: 30px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 1em;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s; }\n  .sn-switch-active {\n    background-color: #0d6efd; }\n    .sn-switch-active .sn-switch-round {\n      transform: translateX(100%); }\n  .sn-switch-active.sn-switch-sm .sn-switch-round {\n    transform: translateX(1.2em); }\n  .sn-switch-round {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 1em;\n    height: 1em;\n    background-color: #fff;\n    border-radius: 100%;\n    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);\n    transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05), 0.3s cubic-bezier(0.3, 1.05, 0.4, 1.05); }\n  .sn-switch-sm {\n    width: 2em;\n    height: 0.8em; }\n    .sn-switch-sm .sn-switch-round {\n      height: 0.8em;\n      width: 0.8em; }\n  .sn-switch-disabled {\n    cursor: not-allowed;\n    opacity: 0.5; }\n\n.sn-input-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 16px; }\n  .sn-input-wrap-required .sn-input-label::before {\n    color: #ee0a24;\n    font-size: 14px;\n    content: "*";\n    display: inline-block; }\n  .sn-input-wrap-disabled > div:first-child {\n    color: #c8c9cc; }\n  .sn-input-wrap-disabled input {\n    color: #c8c9cc; }\n  .sn-input-wrap-readonly .sn-input-self::-moz-placeholder {\n    color: #323233; }\n  .sn-input-wrap-readonly .sn-input-self:-ms-input-placeholder {\n    color: #323233; }\n  .sn-input-wrap-readonly .sn-input-self::placeholder {\n    color: #323233; }\n  .sn-input-wrap::after {\n    position: absolute;\n    box-sizing: border-box;\n    content: " ";\n    pointer-events: none;\n    right: 16px;\n    bottom: 0;\n    left: 16px;\n    border-bottom: 1px solid #ebedf0;\n    transform: scaleY(0.5); }\n\n.sn-input-label {\n  color: #000;\n  font-size: 14px;\n  margin-left: 0;\n  margin-right: 5px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 2px 0;\n  width: 86px; }\n\n.sn-input-self {\n  font-size: 14px;\n  flex: 1;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  color: #323233;\n  line-height: inherit;\n  text-align: left;\n  background-color: transparent;\n  border: 0;\n  resize: none; }\n  .sn-input-self::-moz-placeholder {\n    color: #bbb;\n    line-height: 1.2; }\n  .sn-input-self:-ms-input-placeholder {\n    color: #bbb;\n    line-height: 1.2; }\n  .sn-input-self::placeholder {\n    color: #bbb;\n    line-height: 1.2; }\n\n.sn-uploader {\n  display: flex;\n  flex-wrap: wrap; }\n  .sn-uploader-item {\n    position: relative;\n    margin: 0 7px 7px 0;\n    cursor: pointer; }\n    .sn-uploader-item-delete {\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 14px;\n      height: 14px;\n      background-color: rgba(0, 0, 0, 0.7);\n      border-radius: 0 0 0 12px;\n      z-index: 2; }\n      .sn-uploader-item-delete-icon {\n        position: absolute;\n        top: -11px;\n        right: -5px;\n        color: #fff;\n        font-size: 16px;\n        transform: scale(0.3); }\n    .sn-uploader-item-mask {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      color: #f7f8fa;\n      background-color: rgba(50, 50, 51, 0.88);\n      font-size: 12px; }\n      .sn-uploader-item-mask > span {\n        margin-top: 4px; }\n    .sn-uploader-item-progress-wrap {\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 50%;\n      transform: translateY(-50%); }\n  .sn-uploader-button {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    width: 90px;\n    height: 90px;\n    margin: 0 8px 8px 0;\n    background-color: #f7f8fa; }\n    .sn-uploader-button-disabled {\n      opacity: 0.5; }\n  .sn-uploader-input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n    opacity: 0; }\n    .sn-uploader-input:disabled {\n      cursor: not-allowed; }\n\n.sn-breadcrmb {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center; }\n  .sn-breadcrmb-item {\n    text-decoration: none;\n    list-style: none;\n    cursor: pointer;\n    font-variant: tabular-nums;\n    font-feature-settings: "tnum";\n    color: rgba(0, 0, 0, 0.45); }\n    .sn-breadcrmb-item-separator {\n      margin: 0 8px;\n      color: rgba(0, 0, 0, 0.45); }\n    .sn-breadcrmb-item:last-child {\n      color: #0d6efd; }\n    .sn-breadcrmb-item-disabled {\n      cursor: not-allowed;\n      opacity: 0.65; }\n\n.sn-tree-select {\n  display: flex;\n  font-size: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .sn-tree-select-sidebar {\n    flex: 1;\n    width: 80px;\n    background-color: #f7f8fa;\n    overflow-y: auto; }\n    .sn-tree-select-sidebar-item {\n      position: relative;\n      display: block;\n      box-sizing: border-box;\n      padding: 20px 12px;\n      overflow: hidden;\n      color: #323233;\n      font-size: 14px;\n      line-height: 20px;\n      background-color: #f7f8fa;\n      cursor: pointer;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n       -ms-user-select: none;\n           user-select: none; }\n      .sn-tree-select-sidebar-item-active {\n        background-color: #fff; }\n        .sn-tree-select-sidebar-item-active .sn-tree-select-sidebar-item-line {\n          position: absolute;\n          top: 50%;\n          left: 0;\n          width: 4px;\n          height: 16px;\n          background-color: #0d6efd;\n          -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n          content: ""; }\n      .sn-tree-select-sidebar-item-disabled {\n        color: #c8c9cc;\n        cursor: not-allowed; }\n  .sn-tree-select-content {\n    flex: 2;\n    overflow-y: auto;\n    background-color: #fff; }\n    .sn-tree-select-content-item {\n      position: relative;\n      padding: 0 32px 0 16px;\n      font-weight: 500;\n      line-height: 48px;\n      cursor: pointer;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n      .sn-tree-select-content-item-active {\n        color: #0d6efd; }\n      .sn-tree-select-content-item-disabled {\n        color: #c8c9cc;\n        cursor: not-allowed; }\n\n.sn-badge {\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 16px;\n  padding: 0 3px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 12px;\n  font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;\n  line-height: 1.2;\n  text-align: center;\n  background-color: #dc3545;\n  border: 1px solid #fff;\n  border-radius: 999px; }\n  .sn-badge-wrap {\n    position: relative;\n    display: inline-block; }\n  .sn-badge-fixed {\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100%; }\n  .sn-badge-dot {\n    min-width: 8px;\n    height: 8px; }\n    .sn-badge-dot-large {\n      min-width: 16px;\n      height: 16px; }\n\n.sn-progress-wrap {\n  position: relative;\n  height: 4px;\n  background: #ebedf0;\n  border-radius: 4px; }\n  .sn-progress-wrap-fixed {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2000; }\n\n.sn-progress-bar {\n  position: absolute;\n  left: 0;\n  height: 100%;\n  background: #0d6efd;\n  border-radius: inherit;\n  transition: all 0.5s linear; }\n  .sn-progress-bar-pivot {\n    position: absolute;\n    top: 50%;\n    box-sizing: border-box;\n    min-width: 3.6em;\n    padding: 0 5px;\n    color: #fff;\n    font-size: 10px;\n    line-height: 1.6;\n    text-align: center;\n    word-break: keep-all;\n    background-color: #1989fa;\n    border-radius: 1em;\n    transform: translate(0, -50%); }\n';
styleInject(css_248z);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    );
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

var _excluded = ['className', 'icon'];

var Icon = function Icon(props) {
  var className = props.className,
    icon = props.icon,
    restProps = _objectWithoutProperties(props, _excluded);

  var classes = classNames__default['default']('single-icon', className);
  return /*#__PURE__*/ React__default['default'].createElement(
    reactFontawesome.FontAwesomeIcon,
    _objectSpread2(
      {
        icon: icon,
        className: classes,
      },
      restProps,
    ),
  );
};

/*
 * @Author: your name
 * @Date: 2021-05-14 23:10:58
 * @LastEditTime: 2021-05-19 22:35:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /single/src/base/loading/index.tsx
 */

fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas);

var Loading = function Loading(props) {
  var children = props.children,
    type = props.type,
    textSize = props.textSize,
    className = props.className,
    _props$textColor = props.textColor,
    textColor = _props$textColor === void 0 ? '12px' : _props$textColor,
    _props$color = props.color,
    color = _props$color === void 0 ? '#000' : _props$color,
    _props$size = props.size,
    size = _props$size === void 0 ? 'lg' : _props$size;
  var classes = classNames__default['default']('single-loading', className);
  var icon = type === 'spinner' ? 'spinner' : 'circle-notch';
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: classes,
    },
    /*#__PURE__*/ React__default['default'].createElement(Icon, {
      icon: icon,
      color: color,
      size: size,
      spin: true,
    }),
    /*#__PURE__*/ React__default['default'].createElement(
      'span',
      {
        style: {
          fontSize: textSize + 'px',
          color: textColor,
        },
      },
      children,
    ),
  );
};

Loading.defaultProps = {
  textSize: '12',
  type: 'spinner',
};

var prefixCls = 'sn';
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (typeof item.content === 'string') {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
function isFunction(val) {
  return typeof val === 'function';
}
function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isOversize(items, maxSize) {
  return toArray(items).some(function (item) {
    if (item.file) {
      if (isFunction(maxSize)) {
        return maxSize(item.file);
      }

      return item.file.size > maxSize;
    }

    return false;
  });
}
function filterFiles(items, maxSize) {
  var valid = [];
  var invalid = [];
  items.forEach(function (item) {
    if (isOversize(item, maxSize)) {
      invalid.push(item);
    }

    valid.push(item);
  });
  return {
    valid: valid,
    invalid: invalid,
  };
}

var _excluded$1 = [
  'btnType',
  'block',
  'disabled',
  'size',
  'children',
  'className',
  'href',
  'activeClassName',
];
var ButtonSize;

(function (ButtonSize) {
  ButtonSize['Large'] = 'lg';
  ButtonSize['Small'] = 'sm';
})(ButtonSize || (ButtonSize = {}));

var ButtonType;

(function (ButtonType) {
  ButtonType['Primary'] = 'primary';
  ButtonType['Default'] = 'default';
  ButtonType['Danger'] = 'danger';
  ButtonType['Link'] = 'link';
})(ButtonType || (ButtonType = {}));

var Button = function Button(props) {
  var _classNames;

  var btnType = props.btnType,
    block = props.block,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    size = props.size,
    children = props.children,
    className = props.className,
    href = props.href,
    activeClassName = props.activeClassName,
    restProps = _objectWithoutProperties(props, _excluded$1);

  var buttonPrefixCls = prefixCls + '-btn';
  var classes = classNames__default['default'](
    ''.concat(buttonPrefixCls),
    className,
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      ''.concat(buttonPrefixCls, '-').concat(btnType),
      btnType,
    ),
    _defineProperty(
      _classNames,
      ''.concat(buttonPrefixCls, '-').concat(size),
      size,
    ),
    _defineProperty(_classNames, ''.concat(buttonPrefixCls, '-block'), block),
    _defineProperty(
      _classNames,
      'disabled',
      btnType === ButtonType.Link && disabled,
    ),
    _classNames),
  );

  if (btnType === ButtonType.Link) {
    return /*#__PURE__*/ React__default['default'].createElement(
      'a',
      _objectSpread2(
        {
          className: classes,
          href: href,
        },
        restProps,
      ),
      children,
    );
  }

  return /*#__PURE__*/ React__default['default'].createElement(
    TouchFeedback__default['default'],
    {
      activeClassName: ''.concat(buttonPrefixCls, '-active'),
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'button',
      _objectSpread2(
        _objectSpread2(
          {
            className: classes,
          },
          restProps,
        ),
        {},
        {
          disabled: disabled,
        },
      ),
      children,
    ),
  ); // <button className={classes} disabled={disabled} {...restProps}>
  //   {children}
  // </button>
};

Button.defaultProps = {
  disabled: false,
  block: false,
  btnType: ButtonType.Default,
};

var IS_REACT_16 = !!ReactDOM.createPortal;
var div = document.createElement('div');
document.body.appendChild(div);

var Mask = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Mask, _React$Component);

  var _super = _createSuper(Mask);

  function Mask(props) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _super.call(this, props);
    _this.container = void 0;

    _this.maskDom = function () {
      return /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-mask'),
          onClick: _this.props.onClick,
        },
        _this.props.children,
      );
    };

    _this.getContainer = function () {
      if (!_this.container) {
        var container = document.createElement('div');
        var containerId = ''
          .concat(prefixCls, '-container-')
          .concat(new Date().getTime());
        container.setAttribute('id', containerId);
        document.body.appendChild(container);
        _this.container = container;
      }

      return _this.container;
    };

    _this.preventDefault = function (e) {
      e.preventDefault();
    };

    return _this;
  }

  _createClass(Mask, [
    {
      key: 'render',
      value: function render() {
        var visible = this.props.visible;

        if (IS_REACT_16 && visible) {
          document.body.addEventListener('touchmove', this.preventDefault, {
            passive: false,
          });
          document.body.addEventListener('scroll', this.preventDefault, {
            passive: false,
          });
          return /*#__PURE__*/ ReactDOM.createPortal(
            this.maskDom(),
            this.getContainer(),
          );
        }

        document.body.removeEventListener(
          'touchmove',
          this.preventDefault,
          false,
        );
        document.body.removeEventListener('scroll', this.preventDefault, false);
        return null;
      },
    },
  ]);

  return Mask;
})(React__default['default'].Component);

var Image = function Image(props) {
  var _useState = React.useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];

  var _useState3 = React.useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];

  var alt = props.alt,
    width = props.width,
    height = props.height,
    src = props.src,
    fit = props.fit,
    radius = props.radius,
    round = props.round,
    onLoad = props.onLoad,
    onError = props.onError,
    showLoading = props.showLoading,
    showError = props.showError,
    lazyLoad = props.lazyLoad;
  React.useEffect(function () {
    if (!src) {
      setError(true);
    }
  }, []);
  var classes = classNames__default['default'](
    ''.concat(prefixCls, '-image-wrap'),
    _defineProperty({}, ''.concat(prefixCls, '-image-wrap-round'), round),
  );
  var imgWrapStyle = {
    width: width,
    height: height,
    borderRadius: round ? '50%' : radius,
  };

  var renderPlaceholder = function renderPlaceholder() {
    if (loading && showLoading) {
      return /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-image-loading'),
        },
        /*#__PURE__*/ React__default['default'].createElement(Icon, {
          icon: 'image',
          color: '#969799',
          size: '3x',
        }),
      );
    }

    if (error && showError) {
      return /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-image-error'),
        },
        /*#__PURE__*/ React__default['default'].createElement(Icon, {
          icon: 'sad-tear',
          color: '#969799',
          size: '3x',
        }),
      );
    }
  };

  var renderImage = function renderImage() {
    if (!src || error) return;

    var handleOnload = function handleOnload(event) {
      setLoading(false);
      onLoad && onLoad(event);
    };

    var handleOnError = function handleOnError(event) {
      setError(true);
      onError && onError(event);
    };

    var attrs = {
      alt: alt,
      src: src,
      style: {
        objectFit: fit,
      },
    };

    if (lazyLoad) {
      return /*#__PURE__*/ React__default['default'].createElement(
        LazyLoad__default['default'],
        {
          scroll: true,
          offset: -20,
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'img',
          _objectSpread2(
            {
              className: ''.concat(prefixCls, '-image-img'),
              onError: handleOnError,
              onLoad: handleOnload,
            },
            attrs,
          ),
        ),
      );
    }

    return /*#__PURE__*/ React__default['default'].createElement(
      'img',
      _objectSpread2(
        {
          className: ''.concat(prefixCls, '-image-img'),
          onError: handleOnError,
          onLoad: handleOnload,
        },
        attrs,
      ),
    );
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      style: imgWrapStyle,
      className: classes,
    },
    renderPlaceholder(),
    renderImage(),
  );
};

Image.defaultProps = {
  width: '90px',
  height: '90px',
  round: false,
  fit: 'fill',
  showLoading: false,
};

// import Notification from '../../../../node_modules/rmc-notification/lib/index.js';

var Notification = require('rmc-notification').default; // console.log('Notification:', Notification);
var messageInstance = null;
var messageNeedHide;
var div$1 = document.createElement('div');
document.body.appendChild(div$1);
var ToastPrefixCls = prefixCls + '-toast';

function getMessageInstance(mask, callback) {
  var _classNames;

  var classes = classNames__default['default'](
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(ToastPrefixCls, '-mask'), mask),
    _defineProperty(_classNames, ''.concat(ToastPrefixCls, '-nomask'), !mask),
    _classNames),
  );
  Notification.newInstance(
    {
      prefixCls: ''.concat(ToastPrefixCls),
      style: {},
      transitionName: ''.concat(ToastPrefixCls, '-fade'),
      className: classes,
    },
    function (notification) {
      return callback && callback(notification);
    },
  );
}

var notic = function notic(props) {
  var content = props.content,
    mask = props.mask,
    duration = props.duration,
    _onClose = props.onClose,
    type = props.type;
  var iconTypes = {
    info: '',
    success: 'check-circle',
    fail: 'times-circle',
    loading: 'spinner',
  };
  var iconType = iconTypes[type];
  messageNeedHide = false; // 这个属性暂时没搞清楚起了什么作用

  getMessageInstance(mask, function (notification) {
    if (!notification) {
      return;
    }

    if (messageInstance) {
      messageInstance.destroy(); // 如果之前有生成过实例就先关闭当前toast

      messageInstance = null;
    }

    if (messageNeedHide) {
      notification.destroy();
      messageNeedHide = false;
      return;
    }

    messageInstance = notification;
    notification.notice({
      content: /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(ToastPrefixCls, '-content'),
          role: 'alert',
          'aria-live': 'assertive',
        },
        !!iconType &&
          /*#__PURE__*/ React__default['default'].createElement(
            'div',
            {
              className: ''.concat(ToastPrefixCls, '-icon-wrap'),
            },
            /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: iconType,
              size: '2x',
              spin: type === 'loading',
            }),
          ),
        /*#__PURE__*/ React__default['default'].createElement(
          'div',
          null,
          content,
        ),
      ),
      duration: duration,
      onClose: function onClose() {
        _onClose && _onClose();
        notification.destroy();
        notification = null;
        messageInstance = null;
      },
    });
  }); // Notification.newInstance(
  //   { prefixCls: `${ToastPrefixCls}`, style: {}, className: classes },
  //   (notification: any) => {
  //     messageInstance = notification;
  //     notification.notice({
  //       content: (
  //         <div className={`${ToastPrefixCls}-content`} role="alert" aria-live="assertive">
  //           {!!iconType && <div className={`${ToastPrefixCls}-icon-wrap`}><Icon icon="check-circle" size="lg"></Icon></div>}
  //           <div>{content}</div>
  //         </div>
  //       ),
  //       duration,
  //       onClose() {
  //         onClose && onClose();
  //         notification.destroy();
  //         notification = null;
  //         messageInstance = null;
  //       },
  //     });
  //   },
  // );
};

var Toast = {
  show: function show(content, type, mask, duration, onClose) {
    var params = {
      content: content,
      type: type,
      mask: mask,
      duration: duration,
      onClose: onClose,
    };
    return notic(params);
  },
  info: function info(content, mask, duration, onClose) {
    var params = {
      content: content,
      type: 'info',
      mask: mask,
      duration: duration,
      onClose: onClose,
    };
    return notic(params);
  },
  success: function success(content, mask, duration, onClose) {
    var params = {
      content: content,
      type: 'success',
      mask: mask,
      duration: duration,
      onClose: onClose,
    };
    return notic(params);
  },
  fail: function fail(content, mask, duration, onClose) {
    var params = {
      content: content,
      type: 'fail',
      mask: mask,
      duration: duration,
      onClose: onClose,
    };
    return notic(params);
  },
  loading: function loading(content, mask, duration, onClose) {
    var params = {
      content: content,
      type: 'loading',
      mask: mask,
      duration: duration,
      onClose: onClose,
    };
    return notic(params);
  },
  hidden: function hidden() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    } else {
      messageNeedHide = true;
    }
  },
};

var _excluded$2 = ['visible'];
var modalPrefixCls = prefixCls + '-modal'; // @ts-ignore

var Modal = function Modal(props) {
  var _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    restProps = _objectWithoutProperties(props, _excluded$2);

  var renderFooterButton = function renderFooterButton(button, i) {
    var buttonStyle = {};

    if (button.style) {
      buttonStyle = button.style;

      if (typeof buttonStyle === 'string') {
        var styleMap = {
          cancel: {},
          default: {},
          destructive: {
            color: 'red',
          },
        };
        buttonStyle = styleMap[buttonStyle] || {};
      }
    }

    var onClickFn = function onClickFn(e) {
      e.preventDefault();

      if (button.onPress) {
        button.onPress();
      }
    };

    var btnStyle = _objectSpread2(
      {
        flex: 1,
        padding: 0,
        fontSize: '18px',
        height: '50px',
        lineHeight: '50px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      buttonStyle,
    );

    return /*#__PURE__*/ React__default['default'].createElement(
      Button,
      {
        style: _objectSpread2({}, btnStyle),
        key: i,
        onClick: onClickFn,
        btnType: ButtonType.Link,
      },
      button.text || 'Button',
    );
  };

  var ModalNode = function ModalNode(props) {
    var title = props.title,
      message = props.message,
      footer = props.footer;
    return /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: ''.concat(modalPrefixCls),
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(modalPrefixCls, '-header'),
        },
        title,
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(modalPrefixCls, '-body'),
        },
        message,
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(modalPrefixCls, '-footer'),
        },
        footer === null || footer === void 0
          ? void 0
          : footer.map(function (button, i) {
              return renderFooterButton(button, i);
            }),
      ),
    );
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    Mask,
    _objectSpread2(
      {
        visible: visible,
      },
      restProps,
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      ModalNode,
      _objectSpread2({}, restProps),
    ),
  );
};

function Alert(props) {
  var title = props.title,
    message = props.message,
    footer = props.footer;
  var div = document.createElement('div');
  document.body.appendChild(div);
  var closed = false;

  function close() {
    ReactDOM__default['default'].unmountComponentAtNode(div);

    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  var footDom = '';

  if (footer) {
    var cloneFooter = ___default['default'].cloneDeep(footer);

    footDom = cloneFooter.map(function (button) {
      // tslint:disable-next-line:only-arrow-functions
      var orginPress = button.onPress || function () {};

      button.onPress = function () {
        if (closed) {
          return;
        }

        var res = orginPress();

        if (res && res.then) {
          res
            .then(function () {
              closed = true;
              close();
            })
            .catch(function () {});
        } else {
          closed = true;
          close();
        }
      };

      return button;
    });
  }

  ReactDOM__default['default'].render(
    /*#__PURE__*/ React__default['default'].createElement(Modal, {
      visible: true,
      title: title,
      message: message,
      footer: footDom,
    }),
    div,
  );
} // export default Alert
// export default function Alert({ ...props }: ModalProps<React.CSSProperties>) {
// }

Modal.alert = Alert;

var _excluded$3 = [
  'value',
  'disabled',
  'size',
  'activeColor',
  'inactiveColor',
  'onClick',
];
var SwitchPrefixCls = prefixCls + '-switch';

var Switch = function Switch(props) {
  var _classNames;

  var _props$value = props.value,
    value = _props$value === void 0 ? false : _props$value,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    size = props.size,
    activeColor = props.activeColor,
    inactiveColor = props.inactiveColor,
    onClick = props.onClick,
    restRrops = _objectWithoutProperties(props, _excluded$3);

  var checked = value;

  var handleClick = function handleClick() {
    if (disabled) return;
    checked = !value;
    props.onClick && props.onClick(checked);
  };

  var classes = classNames__default['default'](
    ''.concat(SwitchPrefixCls),
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      ''.concat(SwitchPrefixCls, '-disabled'),
      disabled,
    ),
    _defineProperty(
      _classNames,
      ''.concat(SwitchPrefixCls, '-active'),
      checked,
    ),
    _defineProperty(
      _classNames,
      ''.concat(SwitchPrefixCls, '-').concat(size),
      size,
    ),
    _classNames),
  );
  var style = {};

  if (activeColor || inactiveColor) {
    style = {
      backgroundColor: checked ? activeColor : inactiveColor,
    };
  }

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    _objectSpread2(
      {
        className: classes,
        onClick: handleClick,
        style: style,
      },
      restRrops,
    ),
    /*#__PURE__*/ React__default['default'].createElement('div', {
      className: ''.concat(SwitchPrefixCls, '-round'),
    }),
  );
};

var _excluded$4 = ['onBlur', 'onFocus', 'onChange'];

var Input = function Input(props) {
  var onBlur = props.onBlur,
    onFocus = props.onFocus,
    onChange = props.onChange,
    restProps = _objectWithoutProperties(props, _excluded$4); // console.log('restProps:', restProps);

  var inputRefs = React.useRef(null);

  var handleBlur = function handleBlur(e) {
    var value = e.target.value;
    onBlur && onBlur(value);
  };

  var handleFocus = function handleFocus(e) {
    var value = e.target.value;
    onFocus && onFocus(value);
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value.trim();
    onChange && onChange(value);
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'input',
    _objectSpread2(
      {
        ref: inputRefs,
        onChange: handleChange,
        onBlur: handleBlur,
        onFocus: handleFocus,
      },
      restProps,
    ),
  );
};

var _excluded$5 = [
  'type',
  'label',
  'required',
  'disabled',
  'readonly',
  'clearble',
  'defaultValue',
  'onChange',
  'onFocus',
  'onBlur',
  'onClear',
  'value',
];

var caculType = function caculType(type) {
  var resType = '';

  switch (type) {
    case 'phone':
      resType = 'tel';
      break;

    case 'password':
      resType = 'password';
      break;

    case 'number':
      resType = 'number';
      break;

    default:
      resType = type;
  }

  return resType;
};

var InputPrefixCls = prefixCls + '-input-wrap';

var InputItem = function InputItem(props) {
  var _classNames;

  var _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    label = props.label,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$readonly = props.readonly,
    readonly = _props$readonly === void 0 ? false : _props$readonly,
    _props$clearble = props.clearble,
    clearble = _props$clearble === void 0 ? false : _props$clearble,
    defaultValue = props.defaultValue,
    onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onClear = props.onClear,
    value = props.value,
    restProps = _objectWithoutProperties(props, _excluded$5);

  var classes = classNames__default['default'](
    ''.concat(InputPrefixCls),
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      ''.concat(InputPrefixCls, '-disabled'),
      disabled,
    ),
    _defineProperty(
      _classNames,
      ''.concat(InputPrefixCls, '-required'),
      required,
    ),
    _defineProperty(
      _classNames,
      ''.concat(InputPrefixCls, '-readonly'),
      readonly,
    ),
    _classNames),
  );

  var _useState = React.useState(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    inValue = _useState2[0],
    setValue = _useState2[1];

  React.useEffect(
    function () {
      setValue(value || '');
    },
    [props.value],
  );

  var handleChange = function handleChange(value) {
    if (type === 'phone') {
      var _value;

      value =
        (_value = value) === null || _value === void 0
          ? void 0
          : _value.replace(/\D/g, '');
    }

    setValue(value || '');
    onChange && onChange(value);
  };

  var handleFocus = function handleFocus(value) {
    onFocus && onFocus(value);
  };

  var handleBlur = function handleBlur(value) {
    onBlur && onBlur(value);
  };

  var handleClear = function handleClear() {
    setValue('');
    onClear && onClear();
  };

  var inputType = caculType(type);
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: classes,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-input-label'),
      },
      label,
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      Input,
      _objectSpread2(
        {
          className: ''.concat(prefixCls, '-input-self'),
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          readOnly: readonly,
          disabled: disabled,
          type: inputType,
          value: inValue,
        },
        restProps,
      ),
    ),
    !disabled &&
      !readonly &&
      clearble &&
      inValue &&
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-input-clear'),
        },
        /*#__PURE__*/ React__default['default'].createElement(Icon, {
          icon: 'times-circle',
          onClick: handleClear,
        }),
      ),
  );
};

var ProgressPrefixCls = prefixCls + '-progress';

var Progress = function Progress(props) {
  var children = props.children,
    percent = props.percent,
    fixed = props.fixed,
    unfilled = props.unfilled,
    color = props.color,
    trackColor = props.trackColor,
    showPivot = props.showPivot,
    pivoteText = props.pivoteText,
    textColor = props.textColor,
    pivotColor = props.pivotColor,
    inactive = props.inactive,
    wrapStyle = props.wrapStyle,
    percentStyle = props.percentStyle;
  var barRef;
  var wrapRef;
  var pivotRef;
  var wrapCls = classNames__default['default'](
    ProgressPrefixCls,
    ''.concat(ProgressPrefixCls, '-wrap'),
    _defineProperty({}, ''.concat(ProgressPrefixCls, '-wrap-fixed'), fixed),
  );
  var background = unfilled
    ? {
        background: 'transparent',
      }
    : {
        background: trackColor,
      };
  wrapStyle = _objectSpread2(_objectSpread2({}, background), wrapStyle);
  var percentCls = classNames__default['default'](
    ''.concat(ProgressPrefixCls, '-bar'),
  );
  percentStyle = _objectSpread2(
    {
      width: ''.concat(percent, '%'),
      background: inactive ? 'rgb(202, 202, 202)' : color,
    },
    percentStyle,
  );

  var renderPivot = function renderPivot() {
    if (barRef) {
      console.log('barRef.style.width:', barRef.style.width);
    }

    var text = pivoteText || ''.concat(percent, '%');
    if (!showPivot) return '';
    var style = {
      color: textColor,
      background: inactive ? 'rgb(202, 202, 202)' : pivotColor,
      left: ''.concat(pivotLeft, 'px'),
    };
    return /*#__PURE__*/ React__default['default'].createElement(
      'span',
      {
        ref: setPivotRef,
        style: style,
        className: ''.concat(ProgressPrefixCls, '-bar-pivot'),
      },
      text,
    );
  };

  var setWrapRef = function setWrapRef(el) {
    wrapRef = el;
  };

  var setBarRef = function setBarRef(el) {
    barRef = el;
  };

  var setPivotRef = function setPivotRef(el) {
    pivotRef = el;
  };

  var _useState = React.useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    pivotLeft = _useState2[0],
    setPivotLeft = _useState2[1];

  React.useEffect(function () {
    setTimeout(function () {
      if (barRef && wrapRef && pivotRef) {
        setPivotLeft(
          ((wrapRef.offsetWidth - pivotRef.offsetWidth) * +percent) / 100 ||
            barRef.offsetWidth,
        );
      }
    }, 10);
  }, []);
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      ref: setWrapRef,
      className: wrapCls,
      style: wrapStyle,
      role: 'progressbar',
      'aria-valuenow': percent,
      'aria-valuemin': 0,
      'aria-valuemax': 100,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: percentCls,
        style: percentStyle,
        ref: setBarRef,
      },
      renderPivot(),
    ),
  );
};

var ItemPrefixCls = ''.concat(prefixCls, '-uploader-item');

var UploaderPreviewItem = function UploaderPreviewItem(props) {
  var item = props.item,
    imageFit = props.imageFit,
    previewSize = props.previewSize,
    deletable = props.deletable,
    index = props.index,
    beforeDelete = props.beforeDelete,
    name = props.name,
    onDelete = props.onDelete;

  var handleDelete = function handleDelete() {
    if (beforeDelete) {
      var returnVal = beforeDelete.apply(null, [
        item,
        {
          name: name,
          index: index,
        },
      ]);

      if (isPromise(returnVal)) {
        returnVal.then(function (res) {
          if (res) {
            onDelete && onDelete();
          }
        });
      } else if (returnVal) {
        onDelete && onDelete();
      }
    } else {
      onDelete && onDelete();
    }
  };

  var renderPreview = function renderPreview() {
    if (isImageFile(item)) {
      return /*#__PURE__*/ React__default['default'].createElement(Image, {
        fit: imageFit,
        width: previewSize || '90px',
        height: previewSize || '90px',
        src: item.content || item.url || '',
      });
    }
  };

  var renderDeleteIcon = function renderDeleteIcon() {
    if (deletable) {
      return /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(ItemPrefixCls, '-delete'),
          onClick: handleDelete,
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'div',
          {
            className: ''.concat(ItemPrefixCls, '-delete-icon'),
          },
          /*#__PURE__*/ React__default['default'].createElement(Icon, {
            size: '2x',
            icon: 'times',
          }),
        ),
      );
    }
  };

  var renderStatusView = function renderStatusView() {
    var status = item.status,
      message = item.message;

    if (!status || status === 'done') {
      return;
    }

    return /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: ''.concat(ItemPrefixCls, '-mask'),
      },
      status === 'loading' &&
        /*#__PURE__*/ React__default['default'].createElement(Icon, {
          size: 'lg',
          icon: 'spinner',
          spin: true,
        }),
      status === 'failed' &&
        /*#__PURE__*/ React__default['default'].createElement(Icon, {
          size: 'lg',
          icon: 'exclamation-circle',
        }),
      /*#__PURE__*/ React__default['default'].createElement(
        'span',
        null,
        message,
      ),
    );
  };

  var renderProgress = function renderProgress() {
    var percent = item.percent,
      status = item.status;

    if (status === 'uploading') {
      return /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: ''.concat(ItemPrefixCls, '-progress-wrap'),
        },
        /*#__PURE__*/ React__default['default'].createElement(Progress, {
          percent: percent || 0,
          wrapStyle: {
            height: '8px',
          },
        }),
      );
    }
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: ItemPrefixCls,
    },
    renderPreview(),
    renderDeleteIcon(),
    renderStatusView(),
    renderProgress(),
  );
};

var uploadPrefixCls = ''.concat(prefixCls, '-uploader');

var Uploader = function Uploader(props) {
  var inputRef = React.useRef(null);
  var _props$multiple = props.multiple,
    multiple = _props$multiple === void 0 ? true : _props$multiple,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    customHeaer = props.customHeaer,
    previewSize = props.previewSize,
    _props$imageFit = props.imageFit,
    imageFit = _props$imageFit === void 0 ? 'fill' : _props$imageFit,
    maxCount = props.maxCount,
    _props$deletable = props.deletable,
    deletable = _props$deletable === void 0 ? true : _props$deletable,
    name = props.name,
    maxSize = props.maxSize,
    _props$accept = props.accept,
    accept = _props$accept === void 0 ? 'image/*' : _props$accept,
    action = props.action,
    onOversize = props.onOversize,
    onChange = props.onChange,
    beforeUpload = props.beforeUpload,
    onRemove = props.onRemove;

  var _useState = React.useState(props.fileList || []),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];

  var updateFileList = function updateFileList(updateFile, updateObj) {
    setFileList(function (prevList) {
      return prevList.map(function (file) {
        if (file.uid === updateFile.uid) {
          return _objectSpread2(_objectSpread2({}, file), updateObj);
        } else {
          return file;
        }
      });
    });
  };

  React.useEffect(function () {
    // axios
    //   .post('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => console.log(response.data));
  });

  var uploadFiles = function uploadFiles(files) {
    files.forEach(function (item) {
      post(item, files);
    });
  };

  var post = function post(item, files) {
    var _item$file;

    var result = {
      uid: Date.now() + 'upload-file',
      file: item.file,
      status: '',
      message: '',
      content: item.content,
    };
    setFileList(function (prevFileList) {
      return [].concat(_toConsumableArray(prevFileList), [result]);
    });

    if (!item.file) {
      return;
    }

    var formData = new FormData(); // @ts-ignore

    formData.append(
      (_item$file = item.file) === null || _item$file === void 0
        ? void 0
        : _item$file.name,
      item.file,
    );
    axios__default['default']
      .post(action, formData, {
        headers: _objectSpread2(
          {
            'Content-Type': 'multipart/form-data',
          },
          customHeaer,
        ),
        onUploadProgress: function onUploadProgress(e) {
          var percentage = Math.round((e.loaded * 100) / e.total) || 0;
          updateFileList(result, {
            percent: percentage,
            status: 'uploading',
          });
        },
      })
      .then(function (response) {
        onChange && onChange(item.file, files, response);
        updateFileList(result, {
          status: 'done',
        });
      })
      .catch(function (error) {
        onChange && onChange(item.file, files, error);
        console.log('上传失败', error);
        updateFileList(result, {
          status: 'failed',
          message: '上传失败',
        });
      });
  };

  var renderPreviewItem = function renderPreviewItem(item, index) {
    return /*#__PURE__*/ React__default['default'].createElement(
      UploaderPreviewItem,
      {
        key: index,
        item: item,
        imageFit: imageFit,
        index: index,
        previewSize: previewSize,
        beforeDelete: item.beforeDelete,
        deletable: deletable,
        name: name,
        onDelete: function onDelete() {
          _onDelete(item, index);
        },
      },
    );
  };

  var _onDelete = function _onDelete(item, index) {
    var files = fileList.slice(0);
    var removeFile = files.splice(index, 1);
    setFileList(files);
    onRemove && onRemove(removeFile[0]);
  };

  var renderRreviewItemList = function renderRreviewItemList() {
    return fileList.map(renderPreviewItem);
  };

  var readFileContent = function readFileContent(file) {
    return new Promise(function (resolve) {
      var reader = new FileReader();

      reader.onload = function (event) {
        resolve(event.target.result);
      };

      reader.readAsDataURL(file);
    });
  }; // After reading the picture, merge the picture into the array

  var onAfterRead = function onAfterRead(items) {
    resetInput(); // If it exceeds a specific range

    if (maxSize) {
      if (isOversize(items, maxSize)) {
        if (_.isArray(items)) {
          var _filterFiles = filterFiles(items, maxSize),
            valid = _filterFiles.valid,
            invalid = _filterFiles.invalid;

          items = valid;
          onOversize && onOversize(invalid);
        } else {
          onOversize && onOversize(toArray(items));
          return;
        }
      }
    }

    items = toArray(items);

    if (action) {
      if (!items.length) {
        return;
      }

      uploadFiles(items);
    } else {
      setFileList(
        [].concat(_toConsumableArray(fileList), _toConsumableArray(items)),
      );
    }
  }; // If the input data is not cleared, onchange will not be executed when uploading the same file

  var resetInput = function resetInput() {
    if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
      // @ts-ignore
      inputRef.current.value = '';
    }
  };

  var readFile = function readFile(files) {
    // If it's an Array
    if (Array.isArray(files)) {
      if (maxCount) {
        var remaincount = +maxCount - fileList.length;

        if (files.length > remaincount) {
          files = files.slice(0, remaincount);
        }
      }

      Promise.all(
        files.map(function (file) {
          return readFileContent(file);
        }),
      ).then(function (contents) {
        var fileList = files.map(function (file, index) {
          var result = {
            uid: Date.now() + 'upload-file',
            file: file,
            status: '',
            message: '',
          };

          if (contents[index]) {
            result.content = contents[index];
          }

          if (beforeUpload) {
            var beforeResult = beforeUpload(file);

            if (beforeResult && beforeResult instanceof Promise) {
              beforeResult
                .then(function (_) {
                  return result;
                })
                .catch(function (_) {
                  return;
                });
            } else if (beforeResult) {
              return result;
            }
          }

          return result;
        });
        onAfterRead(fileList);
      });
    } else {
      readFileContent(files).then(function (content) {
        if (maxCount) {
          var _remaincount = +maxCount - fileList.length;

          if (_remaincount <= 0) return;
        }

        var result = {
          uid: Date.now() + 'upload-file',
          file: files,
          status: '',
          message: '',
        };

        if (content) {
          result.content = content;
        }

        onAfterRead(result);
      });
    }
  };

  var handleChange = function handleChange(event) {
    var files = event.target.files;

    if (disabled || !files || !files.length) {
      return;
    }

    var file = files.length === 1 ? [files[0]] : [].slice.call(files);
    readFile(file);
  };

  var renderUpload = function renderUpload() {
    // 条件判断不满足就隐藏
    var renderInput = function renderInput() {
      return /*#__PURE__*/ React__default['default'].createElement('input', {
        ref: inputRef,
        type: 'file',
        accept: accept,
        className: ''.concat(uploadPrefixCls, '-input'),
        capture: true,
        multiple: multiple,
        disabled: disabled,
        onChange: handleChange,
      });
    };

    var btnClasses = classNames__default['default'](
      ''.concat(uploadPrefixCls, '-button'),
      _defineProperty(
        {},
        ''.concat(uploadPrefixCls, '-button-disabled'),
        disabled,
      ),
    );
    return /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: btnClasses,
      },
      /*#__PURE__*/ React__default['default'].createElement(Icon, {
        icon: 'camera',
      }),
      renderInput(),
    );
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: uploadPrefixCls,
    },
    renderRreviewItemList(),
    renderUpload(),
  );
};

var BreadcrmbContext = /*#__PURE__*/ React.createContext({
  length: 0,
});
var BreadcrmbPrefixCls = prefixCls + '-breadcrmb';

var Breadcrmb = function Breadcrmb(props) {
  var separator = props.separator,
    children = props.children,
    inactiveColor = props.inactiveColor,
    activeColor = props.activeColor,
    onSelect = props.onSelect;

  var handleSelect = function handleSelect(index) {
    onSelect && onSelect(index);
  };

  var breadcrmbContextContent = {
    length:
      (children === null || children === void 0 ? void 0 : children.length) ||
      0,
    separator: separator,
    inactiveColor: inactiveColor,
    activeColor: activeColor,
    onSelect: handleSelect,
  };
  var classes = classNames__default['default'](BreadcrmbPrefixCls);

  var renderChildren = function renderChildren() {
    return React__default['default'].Children.map(
      children,
      function (child, index) {
        var childElement = child;

        if (childElement.type.displayName === 'TabBarItem') {
          return /*#__PURE__*/ React__default['default'].cloneElement(
            childElement,
            {
              index: index,
            },
          );
        } else {
          console.error(
            'Warning: Breadcrmb has a child which is not BreadcrmbItem',
          );
        }
      },
    );
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'ul',
    {
      className: classes,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      BreadcrmbContext.Provider,
      {
        value: breadcrmbContextContent,
      },
      renderChildren(),
    ),
  );
};

Breadcrmb.defaultProps = {
  separator: '/',
};

var TabBarItemPrefixCls = prefixCls + '-breadcrmb-item';

var TabBarItem = function TabBarItem(props) {
  var index = props.index,
    disabled = props.disabled,
    children = props.children;
  var classes = classNames__default['default'](
    TabBarItemPrefixCls,
    _defineProperty({}, ''.concat(TabBarItemPrefixCls, '-disabled'), disabled),
  );
  var context = React.useContext(BreadcrmbContext);

  var handleClick = function handleClick() {
    if (disabled) return;
    context.onSelect && context.onSelect(index);
  };

  var style = {
    color:
      context.length - 1 === index
        ? context.activeColor
        : context.inactiveColor,
  };
  return /*#__PURE__*/ React__default['default'].createElement(
    'li',
    {
      className: classes,
      onClick: handleClick,
      style: style,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'span',
      {
        className: ''.concat(TabBarItemPrefixCls, '-link'),
      },
      children,
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      'span',
      {
        className: ''.concat(TabBarItemPrefixCls, '-separator'),
      },
      context.length - 1 !== index && context.separator,
    ),
  );
};

TabBarItem.displayName = 'TabBarItem';

var TreeSelectCls = prefixCls + '-tree-select';

var TreeSelectSidebar = function TreeSelectSidebar() {
  var context = React.useContext(TreeSelectContext);
  var data = context.data,
    index = context.index,
    onChangeTree = context.onChangeTree,
    activeColor = context.activeColor;

  var _useState = React.useState(index || 0),
    _useState2 = _slicedToArray(_useState, 2),
    treeIndex = _useState2[0],
    setTreeIndex = _useState2[1];

  var handleChangeTree = function handleChangeTree(item, index) {
    if (item.disabled) return;
    setTreeIndex(index);
    onChangeTree && onChangeTree(item, index);
  };

  var calcCls = function calcCls(item, index) {
    var _classNames;

    return classNames__default['default'](
      ''.concat(TreeSelectCls, '-sidebar-item'),
      ((_classNames = {}),
      _defineProperty(
        _classNames,
        ''.concat(TreeSelectCls, '-sidebar-item-active'),
        treeIndex === index,
      ),
      _defineProperty(
        _classNames,
        ''.concat(TreeSelectCls, '-sidebar-item-disabled'),
        item.disabled,
      ),
      _classNames),
    );
  };

  var itemStyle = function itemStyle(index) {
    return {
      backgroundColor: activeColor
        ? index === treeIndex
          ? activeColor
          : ''
        : '',
    };
  };

  var renderChildren = function renderChildren() {
    if (!data || !data.length) {
      console.warn('The data is not a Array or the length of the data is 0');
      return '';
    }

    return data.map(function (treeItem, index) {
      return /*#__PURE__*/ React__default['default'].createElement(
        'li',
        {
          key: index,
          onClick: handleChangeTree.bind(undefined, treeItem, index),
          className: calcCls(treeItem, index),
        },
        /*#__PURE__*/ React__default['default'].createElement('span', {
          style: itemStyle(index),
          className: ''.concat(TreeSelectCls, '-sidebar-item-line'),
        }),
        treeItem.label,
      );
    });
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'ul',
    {
      className: ''.concat(TreeSelectCls, '-sidebar'),
    },
    renderChildren(),
  );
};

TreeSelectSidebar.defaultProps = {};

var TreeSelectContentCls = prefixCls + '-tree-select-content';

var TreeSelectContent = function TreeSelectContent(props) {
  var context = React.useContext(TreeSelectContext);
  var data = context.data,
    _context$index = context.index,
    index = _context$index === void 0 ? 0 : _context$index,
    activeId = context.activeId,
    multiple = context.multiple,
    onChangeTreeItem = context.onChangeTreeItem,
    activeColor = context.activeColor,
    inactiveColor = context.inactiveColor;
  var selfData = [];

  if (data && data[index] && data[index].children) {
    selfData = data[index].children;
  }

  var _useState = React.useState(activeId),
    _useState2 = _slicedToArray(_useState, 2),
    childActiveId = _useState2[0],
    setActiveId = _useState2[1];

  var handleChangeTreeItem = function handleChangeTreeItem(item, index) {
    if (item.disabled) return;
    var v = item.value;

    if (
      childActiveId === null || childActiveId === void 0
        ? void 0
        : childActiveId.includes(v)
    ) {
      var indexPos = childActiveId.indexOf(v);

      var childActiveIdClone = ___default['default'].cloneDeep(childActiveId);

      childActiveIdClone.splice(indexPos, 1);
      setActiveId(childActiveIdClone);
      onChangeTreeItem && onChangeTreeItem(item, childActiveIdClone);
    } else {
      if (multiple) {
        var _childActiveIdClone =
          ___default['default'].cloneDeep(childActiveId);

        _childActiveIdClone === null || _childActiveIdClone === void 0
          ? void 0
          : _childActiveIdClone.push(v);
        setActiveId(_childActiveIdClone);
        onChangeTreeItem && onChangeTreeItem(item, _childActiveIdClone);
      } else {
        setActiveId([v]);
        onChangeTreeItem && onChangeTreeItem(item, v);
      }
    }
  };

  var calcCls = function calcCls(item, index) {
    var _classNames;

    var classes = classNames__default['default'](
      ''.concat(TreeSelectContentCls, '-item'),
      ((_classNames = {}),
      _defineProperty(
        _classNames,
        ''.concat(TreeSelectContentCls, '-item-active'),
        childActiveId.includes(item.value),
      ),
      _defineProperty(
        _classNames,
        ''.concat(TreeSelectContentCls, '-item-disabled'),
        item.disabled,
      ),
      _classNames),
    );
    return classes;
  };

  var itemStyle = function itemStyle(value) {
    if (activeColor || inactiveColor) {
      return {
        color: childActiveId.includes(value)
          ? activeColor
          : inactiveColor
          ? inactiveColor
          : '',
      };
    }

    return {};
  };

  var renderChildren = function renderChildren() {
    return selfData.map(function (item, index) {
      var renderIcon = function renderIcon(item) {
        return childActiveId.includes(item.value)
          ? /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: 'check',
            })
          : '';
      };

      return /*#__PURE__*/ React__default['default'].createElement(
        'li',
        {
          className: calcCls(item),
          style: itemStyle(item.value),
          onClick: handleChangeTreeItem.bind(undefined, item, index),
          key: index,
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          null,
          item.label,
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          null,
          renderIcon(item),
        ),
      );
    });
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'ul',
    {
      className: TreeSelectContentCls,
    },
    renderChildren(),
  );
};

TreeSelectContent.displayName = 'TreeSelectItem';

var TreeSelectContext = /*#__PURE__*/ React.createContext({
  multiple: false,
  data: [],
});
var TreeSelectCls$1 = prefixCls + '-tree-select';

var TreeSelect = function TreeSelect(props) {
  var data = props.data,
    onChangeTree = props.onChangeTree,
    onChangeTreeItem = props.onChangeTreeItem,
    inactiveColor = props.inactiveColor,
    activeColor = props.activeColor,
    _props$index = props.index,
    index = _props$index === void 0 ? 0 : _props$index,
    _props$activeId = props.activeId,
    activeId = _props$activeId === void 0 ? [] : _props$activeId,
    multiple = props.multiple,
    _props$height = props.height,
    height = _props$height === void 0 ? '300px' : _props$height;

  var _useState = React.useState(index || 0),
    _useState2 = _slicedToArray(_useState, 2),
    treeIndex = _useState2[0],
    setTreeIndex = _useState2[1];

  var handleChangeTreeItem = function handleChangeTreeItem(item, activeId) {
    onChangeTreeItem && onChangeTreeItem(item, activeId);
  };

  var handleChangeTree = function handleChangeTree(item, index) {
    setTreeIndex(index);
    onChangeTree && onChangeTree(item, index);
  };

  var treeSelectContent = {
    inactiveColor: inactiveColor,
    activeColor: activeColor,
    data: data,
    multiple: multiple,
    onChangeTreeItem: handleChangeTreeItem,
    onChangeTree: handleChangeTree,
    index: treeIndex,
    activeId: Array.isArray(activeId) ? activeId : [activeId],
  };
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: TreeSelectCls$1,
      style: {
        height: height,
      },
    },
    /*#__PURE__*/ React__default['default'].createElement(
      TreeSelectContext.Provider,
      {
        value: treeSelectContent,
      },
      /*#__PURE__*/ React__default['default'].createElement(
        TreeSelectSidebar,
        null,
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        TreeSelectContent,
        null,
      ),
    ),
  );
};

TreeSelect.defaultProps = {};

var _excluded$6 = [
  'children',
  'color',
  'dot',
  'max',
  'content',
  'size',
  'fixed',
  'style',
];
var BadgePrefixCls = prefixCls + '-badge';

var Badge = function Badge(props) {
  var _classNames;

  var children = props.children,
    color = props.color,
    _props$dot = props.dot,
    dot = _props$dot === void 0 ? false : _props$dot,
    _props$max = props.max,
    max = _props$max === void 0 ? 99 : _props$max,
    content = props.content,
    size = props.size,
    fixed = props.fixed,
    style = props.style,
    restProps = _objectWithoutProperties(props, _excluded$6);

  var styleObj = _objectSpread2(
    {
      backgroundColor: color,
    },
    style,
  );

  if (content) {
    content = Number(content) ? Number(content) : content;
  }

  var renderContent = function renderContent() {
    if (dot) return '';
    return typeof content === 'number' && content > max
      ? ''.concat(max, '+')
      : content;
  };

  var dotWrapCls = classNames__default['default'](
    ''.concat(BadgePrefixCls, '-wrap'),
  );
  var dotCls = classNames__default['default'](
    BadgePrefixCls,
    ((_classNames = {}),
    _defineProperty(
      _classNames,
      ''.concat(BadgePrefixCls, '-dot-large'),
      dot && size === 'lg',
    ),
    _defineProperty(
      _classNames,
      ''.concat(BadgePrefixCls, '-fixed'),
      typeof content === 'number' || fixed || dot,
    ),
    _defineProperty(_classNames, ''.concat(BadgePrefixCls, '-dot'), dot),
    _classNames),
  );
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: dotWrapCls,
    },
    children,
    (content || dot) &&
      /*#__PURE__*/ React__default['default'].createElement(
        'sup',
        _objectSpread2(
          {
            className: dotCls,
            style: _objectSpread2({}, styleObj),
          },
          restProps,
        ),
        renderContent(),
      ),
  );
};

exports.Badge = Badge;
exports.Breadcrmb = Breadcrmb;
exports.BreadcrmbItem = TabBarItem;
exports.Button = Button;
exports.Icon = Icon;
exports.Image = Image;
exports.Input = InputItem;
exports.Loading = Loading;
exports.Mask = Mask;
exports.Modal = Modal;
exports.Progress = Progress;
exports.Switch = Switch;
exports.Toast = Toast;
exports.TreeSelect = TreeSelect;
exports.Uploader = Uploader;
