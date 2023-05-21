!function(){"use strict";var e=wp.blocks,t=JSON.parse('{"apiVersion":"1","name":"scb/sound-cloud","title":"SoundCloud Block","description":"Embed SoundCloud Tracks","category":"widgets","keywords":["soundCloud","block","Gutenberg","soundCloud"," music player"," mp3 player"],"textdomain":"sound-cloud","attributes":{"alignment":{"type":"string","default":"center"},"align":{"type":"string","default":""},"cId":{"type":"string","default":""},"tracks":{"type":"array","default":[{"url":"https://soundcloud.com/alamincmt7418/birds-squawk","startTrack":0}]},"options":{"type":"object","default":{"isAutoPlay":true,"color":"#f50","isBuying":true,"isSharing":true,"isDownload":true,"isArtWork":true,"isPlayCount":true,"isUser":true,"isSingleActive":true,"isComments":true,"isVisual":false,"isTeaser":false,"isHideRelated":false}},"iframeStyle":{"type":"object","default":{"width":"100%","height":"170px"}},"frameBorder":{"type":"object","default":{"color":"#000","style":"solid","width":"1px"}},"frameBRadius":{"type":"object","default":{"top":"3px","bottom":"3px","left":"3px","right":"3px"}},"frameBoxShadow":{"type":"array","default":[]}},"supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"preview":true,"columns":{"desktop":1,"tablet":1,"mobile":1}}},"editorScript":"file:dist/editor.js"}'),n=wp.element;function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(e){return!!e&&!!e[G]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===K}(e)||Array.isArray(e)||!!e[L]||!!e.constructor[L]||d(e)||m(e))}function l(e,t,n){void 0===n&&(n=!1),0===c(e)?(n?Object.keys:$)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function c(e){var t=e[G];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:m(e)?3:0}function i(e,t){return 2===c(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function u(e,t){return 2===c(e)?e.get(t):e[t]}function s(e,t,n){var r=c(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return z&&e instanceof Map}function m(e){return V&&e instanceof Set}function p(e){return e.o||e.t}function b(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=q(e);delete t[G];for(var n=$(t),r=0;r<n.length;r++){var o=n[r],a=t[o];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function g(e,t){return void 0===t&&(t=!1),h(e)||o(e)||!a(e)||(c(e)>1&&(e.set=e.add=e.clear=e.delete=v),Object.freeze(e),t&&l(e,(function(e,t){return g(t,!0)}),!0)),e}function v(){r(2)}function h(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function y(e){var t=J[e];return t||r(18,e),t}function C(){return U}function R(e,t){t&&(y("Patches"),e.u=[],e.s=[],e.v=t)}function _(e){w(e),e.p.forEach(E),e.p=null}function w(e){e===U&&(U=e.l)}function P(e){return U={p:[],l:U,h:e,m:!0,_:0}}function E(e){var t=e[G];0===t.i||1===t.i?t.j():t.O=!0}function O(e,t){t._=t.p.length;var n=t.p[0],o=void 0!==e&&e!==n;return t.h.g||y("ES5").S(t,e,o),o?(n[G].P&&(_(t),r(4)),a(e)&&(e=S(t,e),t.l||A(t,e)),t.u&&y("Patches").M(n[G].t,e,t.u,t.s)):e=S(t,n,[]),_(t),t.u&&t.v(t.u,t.s),e!==H?e:void 0}function S(e,t,n){if(h(t))return t;var r=t[G];if(!r)return l(t,(function(o,a){return k(e,r,t,o,a,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return A(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=4===r.i||5===r.i?r.o=b(r.k):r.o;l(3===r.i?new Set(o):o,(function(t,a){return k(e,r,o,t,a,n)})),A(e,o,!1),n&&e.u&&y("Patches").R(r,n,e.u,e.s)}return r.o}function k(e,t,n,r,l,c){if(o(l)){var u=S(e,l,c&&t&&3!==t.i&&!i(t.D,r)?c.concat(r):void 0);if(s(n,r,u),!o(u))return;e.m=!1}if(a(l)&&!h(l)){if(!e.h.F&&e._<1)return;S(e,l),t&&t.A.l||A(e,l)}}function A(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&g(t,n)}function N(e,t){var n=e[G];return(n?p(n):e)[t]}function x(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function j(e){e.P||(e.P=!0,e.l&&j(e.l))}function B(e){e.o||(e.o=b(e.t))}function T(e,t,n){var r=d(t)?y("MapSet").N(t,n):m(t)?y("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:C(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},o=r,a=X;n&&(o=[r],a=Q);var l=Proxy.revocable(o,a),c=l.revoke,i=l.proxy;return r.k=i,r.j=c,i}(t,n):y("ES5").J(t,n);return(n?n.A:C()).p.push(r),r}function D(e){return o(e)||r(22,e),function e(t){if(!a(t))return t;var n,r=t[G],o=c(t);if(r){if(!r.P&&(r.i<4||!y("ES5").K(r)))return r.t;r.I=!0,n=I(t,o),r.I=!1}else n=I(t,o);return l(n,(function(t,o){r&&u(r.t,t)===o||s(n,t,e(o))})),3===o?new Set(n):n}(e)}function I(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return b(e)}var F,U,M="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),z="undefined"!=typeof Map,V="undefined"!=typeof Set,W="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=M?Symbol.for("immer-nothing"):((F={})["immer-nothing"]=!0,F),L=M?Symbol.for("immer-draftable"):"__$immer_draftable",G=M?Symbol.for("immer-state"):"__$immer_state",K=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),$="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,q=Object.getOwnPropertyDescriptors||function(e){var t={};return $(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},J={},X={get:function(e,t){if(t===G)return e;var n=p(e);if(!i(n,t))return function(e,t,n){var r,o=x(t,n);return o?"value"in o?o.value:null===(r=o.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!a(r)?r:r===N(e.t,t)?(B(e),e.o[t]=T(e.A.h,r,e)):r},has:function(e,t){return t in p(e)},ownKeys:function(e){return Reflect.ownKeys(p(e))},set:function(e,t,n){var r=x(p(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=N(p(e),t),a=null==o?void 0:o[G];if(a&&a.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(f(n,o)&&(void 0!==n||i(e.t,t)))return!0;B(e),j(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==N(e.t,t)||t in e.t?(e.D[t]=!1,B(e),j(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=p(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},Q={};l(X,(function(e,t){Q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Q.deleteProperty=function(e,t){return Q.set.call(this,e,t,void 0)},Q.set=function(e,t,n){return X.set.call(this,e[0],t,n,e[0])};var Y=function(){function e(e){var t=this;this.g=W,this.F=!0,this.produce=function(e,n,o){if("function"==typeof e&&"function"!=typeof n){var l=n;n=e;var c=t;return function(e){var t=this;void 0===e&&(e=l);for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return c.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(o))}))}}var i;if("function"!=typeof n&&r(6),void 0!==o&&"function"!=typeof o&&r(7),a(e)){var u=P(t),s=T(t,e,void 0),f=!0;try{i=n(s),f=!1}finally{f?_(u):w(u)}return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(e){return R(u,o),O(e,u)}),(function(e){throw _(u),e})):(R(u,o),O(i,u))}if(!e||"object"!=typeof e){if(void 0===(i=n(e))&&(i=e),i===H&&(i=void 0),t.F&&g(i,!0),o){var d=[],m=[];y("Patches").M(e,i,d,m),o(d,m)}return i}r(21,e)},this.produceWithPatches=function(e,n){if("function"==typeof e)return function(n){for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(o))}))};var r,o,a=t.produce(e,n,(function(e,t){r=e,o=t}));return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return[e,r,o]})):[a,r,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){a(e)||r(8),o(e)&&(e=D(e));var t=P(this),n=T(this,e,void 0);return n[G].C=!0,w(t),n},t.finishDraft=function(e,t){var n=(e&&e[G]).A;return R(n,t),O(void 0,n)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!W&&r(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));var a=y("Patches").$;return o(e)?a(e,t):this.produce(e,(function(e){return a(e,t)}))},e}(),Z=new Y,ee=Z.produce,te=(Z.produceWithPatches.bind(Z),Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z),Z.applyPatches.bind(Z),Z.createDraft.bind(Z),Z.finishDraft.bind(Z),ee),ne=function(e){return Object.values(e).join(" ")},re=function(){setTimeout((function(){var e=document.querySelectorAll(".components-panel__body-title button");function t(){var n=this;this.removeEventListener("click",t),e.forEach((function(e){"true"!==e.getAttribute("aria-expanded")||e.isEqualNode(n)||e.click()})),setTimeout((function(){n.addEventListener("click",t)}),500)}e.forEach((function(e){e.addEventListener("click",t)}))}),500)},oe=wp.i18n,ae=wp.blockEditor,le=wp.components,ce=[{name:"General",title:(0,oe.__)("General","sound-cloud"),className:"tab-one"},{name:"style",title:(0,oe.__)("Style","sound-cloud"),className:"tab-two"}],ie=[{name:(0,oe.__)("red","sound-cloud"),color:"#f00"},{name:(0,oe.__)("white","sound-cloud"),color:"#fff"},{name:(0,oe.__)("blue","sound-cloud"),color:"#00f"}],ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"px",label:"px",default:e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"%",label:"%",default:e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"em",label:"em",default:e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"vh",label:"vh",default:e}},me=function(e){var t=e.className,n=void 0===t?"mt20 mb5":t,r=e.children;return React.createElement("p",{className:"bPlLabel ".concat(n)},r)};function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return be(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return be(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ge=function(e){var t=e.className,r=void 0===t?"":t,o=e.label,a=void 0===o?(0,oe.__)("Color:","bplugins"):o,l=e.value,c=e.defaultColor,i=e.onChange,u=e.disableAlpha,s=pe((0,n.useState)(l),2),f=s[0],d=s[1],m=wp.data.select("core/block-editor").getSettings().colors;return React.createElement(le.PanelRow,{className:r},React.createElement(me,{className:""},a),React.createElement(le.Dropdown,{className:"bPlDropdownContainer bColor",contentClassName:"bPlDropdownPopover bColorDropdownPopover",position:"top right",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return React.createElement(React.Fragment,null,React.createElement("div",{className:"bColorButtonContainer"},React.createElement("button",{className:"bColorButton",isPrimary:!0,onClick:n,"aria-expanded":t,style:{backgroundColor:l||"transparent"}})),c&&c!=f&&React.createElement(le.Button,{className:"bPlResetVal",icon:"image-rotate",label:(0,oe.__)("Reset","bplugins"),onClick:function(){i(c),d(c)}}))},renderContent:function(e){var t=e.isOpen;e.onClose;return React.createElement(React.Fragment,null,React.createElement(le.ColorPicker,{color:l||"",disableAlpha:u||!1,onChangeComplete:function(e){i("rgba(".concat(e.rgb.r,", ").concat(e.rgb.g,", ").concat(e.rgb.b,", ").concat(e.rgb.a,")")),d(e.hex)}}),m.length&&React.createElement("div",{className:"themeColors"},m.map((function(e){var n=e.color;return React.createElement("div",{className:"bColorButtonContainer"},React.createElement("button",{className:"bColorButton",onClick:function(){i(n),d(n)},"aria-expanded":t,style:{backgroundColor:l?n:"transparent"}}))}))))}}))},ve=function(e){var t=e.className,n=e.value,r=e.onChange,o=e.options,a=e.isIcon,l=void 0!==a&&a,c=e.isTextIcon,i=void 0!==c&&c,u=e.size;return React.createElement(le.ButtonGroup,{className:"bPlBtnGroup ".concat(t||null)},Object.values(o).map((function(e){return React.createElement(le.Tooltip,{key:e.value,text:e.label,position:"top"},React.createElement(le.Button,{icon:l?null==e?void 0:e.icon:null,isPrimary:n===e.value,"aria-pressed":n===e.value,isSmall:"small"===u,isMedium:"small"!==u,onClick:function(){return r(e.value,e.def&&e.def)}},i?e.icon:l?"":e.label))})))},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"px",label:"px",default:e}},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"em",label:"em",default:e}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{value:"rem",label:"rem",default:e}},Re=React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 430.848 430.848"},React.createElement("path",{d:"M286.244,249.537l10.992-45.639c0.035-0.143,0.071-0.285,0.109-0.428c2.909-10.867,11.469-19.426,22.339-22.338 l33.347-8.936c-5.472-6.525-13.678-10.682-22.839-10.682h-9.837c-2.511-7.895-5.7-15.59-9.515-22.957l6.96-6.959 c11.622-11.623,11.622-30.535,0-42.156L296.76,68.4c-5.631-5.629-13.117-8.73-21.079-8.73c-7.961,0-15.447,3.102-21.078,8.732 l-6.96,6.959c-7.369-3.814-15.064-7.004-22.956-9.516V56.01c0-16.436-13.372-29.807-29.808-29.807h-29.758 c-16.436,0-29.808,13.371-29.808,29.807v9.836c-7.893,2.512-15.588,5.701-22.957,9.516l-6.96-6.961 c-5.631-5.629-13.117-8.73-21.078-8.73c-7.961,0-15.447,3.102-21.079,8.732L42.2,89.443c-11.622,11.621-11.622,30.533,0,42.156 l6.959,6.959c-3.815,7.367-7.004,15.063-9.515,22.957h-9.837C13.372,161.516,0,174.887,0,191.324v29.758 c0,16.436,13.372,29.807,29.808,29.807h9.837c2.511,7.895,5.7,15.588,9.515,22.957l-6.96,6.959 c-11.623,11.623-11.623,30.533,0,42.158l21.041,21.039c5.632,5.631,13.118,8.732,21.079,8.732s15.447-3.102,21.077-8.732 l6.96-6.959c7.366,3.815,15.061,7.002,22.957,9.514v9.838c0,16.436,13.372,29.809,29.808,29.809h25.809 c-2.388-5.691-3.644-11.852-3.645-18.209c-0.002-12.572,4.892-24.391,13.781-33.279L286.244,249.537z M180,286.201 c-44.112,0-80-35.887-80-79.998c0-44.113,35.888-80.002,80-80.002s80,35.889,80,80.002C260,250.314,224.112,286.201,180,286.201z"}),React.createElement("path",{d:"M425.267,218.734l-0.319-0.32c-0.939-0.941-2.189-1.428-3.541-1.469c-1.326,0-2.598,0.525-3.536,1.465l-21.596,21.596 c-3.304,3.305-7.699,5.125-12.375,5.125c-4.676,0-9.072-1.82-12.379-5.129c-3.307-3.305-5.128-7.701-5.128-12.377 c0.001-4.676,1.821-9.072,5.126-12.377l21.596-21.596c0.939-0.939,1.465-2.213,1.464-3.539c-0.001-1.328-0.53-2.6-1.47-3.537 l-0.314-0.313c-3.605-3.605-8.399-5.592-13.499-5.592c-1.665,0-3.325,0.219-4.936,0.65l-44.348,11.885 c-6.568,1.76-11.741,6.932-13.498,13.496c-0.011,0.041-0.021,0.08-0.031,0.121l-11.817,49.063l-87.667,87.666 c-6.528,6.527-10.122,15.207-10.121,24.44c0.002,9.232,3.598,17.91,10.126,24.439l2.088,2.088 c6.528,6.529,15.209,10.125,24.443,10.125h0c9.231,0,17.909-3.594,24.437-10.121l87.667-87.666l49.061-11.816 c0.041-0.01,0.082-0.022,0.122-0.031c6.563-1.758,11.735-6.928,13.497-13.496l11.883-44.352 C431.959,230.598,430.066,223.535,425.267,218.734z M257.26,368.406c-1.888,1.889-4.399,2.93-7.071,2.93 c-2.671,0-5.183-1.041-7.072-2.932c-1.887-1.885-2.928-4.397-2.928-7.068c-0.001-2.672,1.041-5.185,2.931-7.072 c1.886-1.887,4.398-2.928,7.069-2.928c2.672,0,5.184,1.041,7.072,2.93c1.887,1.885,2.928,4.396,2.928,7.068 C260.189,364.006,259.148,366.518,257.26,368.406z M316.194,305.935L274.82,347.31c-1.416,1.416-3.3,2.197-5.303,2.197 c-2.003,0-3.887-0.781-5.303-2.197c-1.417-1.416-2.197-3.299-2.197-5.303s0.78-3.887,2.197-5.303l41.374-41.375 c1.417-1.418,3.3-2.197,5.303-2.197s3.887,0.779,5.303,2.197c1.417,1.416,2.197,3.299,2.197,5.303S317.611,304.519,316.194,305.935 z"}));function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){Pe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ee(e){return function(e){if(Array.isArray(e))return ke(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Se(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||Se(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Se(e,t){if(e){if("string"==typeof e)return ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ke(e,t):void 0}}function ke(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Ae=function(e){var t=e.className,r=void 0===t?"":t,o=e.label,a=void 0===o?(0,oe.__)("Shadow","bplugins"):o,l=e.value,c=e.onChange,i=e.type,u=void 0===i?"box":i,s=e.defaults,f=void 0===s?{}:s,d=e.produce,m=Oe((0,n.useState)(0),2),p=m[0],b=m[1],g=[{hOffset:"0px",vOffset:"0px",blur:"0px",spreed:"0px",color:"#7090b0",isInset:!1}],v=(null!=l&&l.length?l:null)||(null!=f&&f.length?f:null)||g,h=function(e){var t;return(null==f||null===(t=f[p])||void 0===t?void 0:t[e])||g[0][e]},y=function(e){return React.createElement(le.Button,{icon:"image-rotate",className:"bPlResetVal",onClick:function(){return C(e,h(e))}})},C=function(e,t){var n=d(v,(function(n){n[p][e]=t}));c(n)},R=function(e){e.preventDefault(),c([].concat(Ee(v.slice(0,p)),[we({},v[p])],Ee(v.slice(p)))),b(p+1)},_=function(e){e.preventDefault(),c([].concat(Ee(v.slice(0,p)),Ee(v.slice(p+1)))),b(0===p?0:p-1)},w=v[p]||{},P=w.hOffset,E=void 0===P?"":P,O=w.vOffset,S=void 0===O?"":O,k=w.blur,A=void 0===k?"":k,N=w.spreed,x=void 0===N?"":N,j=w.color,B=void 0===j?"":j,T=w.isInset,D=void 0!==T&&T;return React.createElement(le.PanelRow,{className:"bPlDropdown ".concat(r)},React.createElement(me,{className:"mt5"},a),React.createElement(le.Dropdown,{className:"bPlDropdownContainer",contentClassName:"bPlDropdownPopover",position:"bottom right",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return React.createElement(le.Button,{icon:"edit",onClick:function(){n(),b(0)},"aria-expanded":t})},renderContent:function(){return React.createElement(React.Fragment,null,1<v.length&&React.createElement(le.PanelRow,null,React.createElement(me,{className:"mt5"},(0,oe.__)("Shadow:","bplugins")),React.createElement(ve,{value:p,onChange:function(e){return b(e)},options:v.map((function(e,t){return{label:t+1+"",value:t}}))||[{label:1,value:0}]})),null!==p&&React.createElement(React.Fragment,null,React.createElement(le.PanelRow,null,React.createElement(le.__experimentalUnitControl,{label:(0,oe.__)("Horizontal Offset:","bplugins"),labelPosition:"left",value:E,onChange:function(e){return C("hOffset",e)},units:[he(),ye(),Ce()]}),E&&E!==h("hOffset")&&y("hOffset")),React.createElement(le.PanelRow,null,React.createElement(le.__experimentalUnitControl,{label:(0,oe.__)("Vertical Offset:","bplugins"),labelPosition:"left",value:S,onChange:function(e){return C("vOffset",e)},units:[he(),ye(),Ce()]}),S&&S!==h("vOffset")&&y("vOffset")),React.createElement(le.PanelRow,null,React.createElement(le.__experimentalUnitControl,{label:(0,oe.__)("Blur:","bplugins"),labelPosition:"left",value:A,onChange:function(e){return C("blur",e)},units:[he(),ye(),Ce()]}),A&&A!==h("blur")&&y("blur")),React.createElement("small",null,(0,oe.__)("Blur cannot be negative value!","bplugins")),"box"===u&&React.createElement(le.PanelRow,null,React.createElement(le.__experimentalUnitControl,{label:(0,oe.__)("Spreed:","bplugins"),labelPosition:"left",value:x,onChange:function(e){return C("spreed",e)},units:[he(),ye(),Ce()]}),x&&x!==h("spreed")&&y("spreed")),React.createElement(ge,{label:(0,oe.__)("Color:","bplugins"),value:B,onChange:function(e){return C("color",e)},defaultColor:h("color")}),"box"===u&&React.createElement(le.ToggleControl,{label:(0,oe.__)("Shadow Inset?","bplugins"),checked:D,onChange:function(e){return C("isInset",e)}}),React.createElement(le.PanelRow,{className:"itemAction mt20"},1<(null==v?void 0:v.length)&&React.createElement(le.Button,{className:"removeItem",label:(0,oe.__)("Remove","bplugins"),onClick:_},React.createElement(le.Dashicon,{icon:"no"}),(0,oe.__)("Remove","bplugins")),React.createElement(le.Button,{className:"duplicateItem",label:(0,oe.__)("Duplicate","bplugins"),onClick:R},Re,(0,oe.__)("Duplicate","bplugins")))),React.createElement("br",null),React.createElement("div",{className:"addItem"},React.createElement(le.Button,{label:(0,oe.__)("Add New Shadow","bplugins"),onClick:function(){return c([].concat(Ee(v),[g[0]]))}},React.createElement(le.Dashicon,{icon:"plus"}),(0,oe.__)("Add New Shadow","bplugins"))))}}))},Ne=function(e){var t=e.className,n=void 0===t?"":t,r=e.label,o=void 0===r?(0,oe.__)("Color:","bplugins"):r,a=e.value,l=e.defaultColor,c=e.onChange,i=e.disableAlpha,u=wp.data.select("core/block-editor").getSettings().colors;return React.createElement(le.PanelRow,{className:n},React.createElement(me,{className:""},o),React.createElement(le.Dropdown,{className:"bPlDropdownContainer bPlColor",contentClassName:"bPlDropdownPopover bPlColorPopover",position:"top center",renderToggle:function(e){var t=e.isOpen,n=e.onToggle;return React.createElement(React.Fragment,null,React.createElement("div",{className:"bPlColorButtonContainer"},React.createElement("button",{className:"bPlColorButton",isPrimary:!0,onClick:n,"aria-expanded":t,style:{backgroundColor:a||"transparent"}})),l&&l!=a&&React.createElement(le.Button,{className:"bPlResetVal",icon:"image-rotate",label:(0,oe.__)("Reset","bplugins"),onClick:function(){return c(l)}}))},renderContent:function(e){var t=e.isOpen;e.onClose;return React.createElement(React.Fragment,null,React.createElement(le.ColorPicker,{className:"bPlColorControl",color:a||"",onChangeComplete:function(e){var t=i?"":("0"+Math.round(255*e.rgb.a).toString(16)).slice(-2);c(e.hex+t)},disableAlpha:i}),u.length&&React.createElement("div",{className:"themeColors"},u.map((function(e){var n=e.color;return React.createElement("div",{className:"bColorButtonContainer"},React.createElement("button",{className:"bColorButton",onClick:function(){c(n),setState(n)},"aria-expanded":t,style:{backgroundColor:a?n:"transparent"}}))}))))}}))};function xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Be=function(e){var t=e.attributes,n=e.setAttributes,r=e.updateTracks,o=t.options,a=t.tracks,l=t.iframeStyle,c=t.frameBorder,i=t.frameBRadius,u=t.frameBoxShadow,s=o.alignment,f=o.isAutoPlay,d=o.color,m=o.isBuying,p=o.isSharing,b=o.isDownload,g=o.isArtWork,v=o.isPlayCount,h=o.isUser,y=o.isSingleActive,C=o.isComments,R=o.isVisual,_=o.isTeaser,w=o.isHideRelated,P=l.width,E=l.height,O=function(e,r,o){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(n),!0).forEach((function(t){je(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t[e]);a[r]=o,n(je({},e,a))};return React.createElement(React.Fragment,null,React.createElement(ae.InspectorControls,{style:{marginBottom:"40px"}},React.createElement(le.TabPanel,{className:"bPlTabPanel scbTabPanel",activeClass:"activeTab",onSelect:function(){return re()},tabs:ce},(function(e){return React.createElement(React.Fragment,null,"General"==e.name&&React.createElement(React.Fragment,null,React.createElement(le.PanelBody,{className:"bPlPanelBody",title:(0,oe.__)("Sound Cloud Settings","sound-cloud"),initialOpen:!0},a.map((function(e,t){return React.createElement(React.Fragment,null,React.createElement(le.TextControl,{className:"scbCustomDesign mb20",key:t,label:(0,oe.__)("Url","sound-cloud"),labelPosition:(0,oe.__)("top","sound-cloud"),value:e.url,placeholder:(0,oe.__)("Enter Track Url","sound-cloud"),onChange:function(e){return r("url",t,e)}}),e.url.includes("sets")&&React.createElement(React.Fragment,null,React.createElement(le.__experimentalNumberControl,{key:t,className:"mb20",label:(0,oe.__)("Start Track","sound-cloud"),labelPosition:"left",value:e.startTrack,onChange:function(e){r("startTrack",t,e)}})),React.createElement("div",{className:"scbWHControl"},React.createElement(le.__experimentalUnitControl,{className:"mb20",label:(0,oe.__)("Width","sound-cloud"),labelPosition:"left",onChange:function(e){O("iframeStyle","width",e)},value:P,units:[ue(650),se(100),fe(40)],isResetValueOnUnitChange:!0}),React.createElement(le.__experimentalUnitControl,{className:"mb20",label:(0,oe.__)("Height","sound-cloud"),labelPosition:"left",onChange:function(e){O("iframeStyle","height",e)},value:E,units:[ue(400),de(50)],isResetValueOnUnitChange:!0})))}))),React.createElement(le.PanelBody,{className:"bPlPanelBody",title:(0,oe.__)("Options","sound-cloud"),initialOpen:!1},React.createElement(le.ToggleControl,{label:(0,oe.__)("Enable Auto Play ","sound-cloud"),className:"mt20",checked:f,onChange:function(e){O("options","isAutoPlay",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Single Active ","sound-cloud"),className:"mt20",checked:y,onChange:function(e){O("options","isSingleActive",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Visual Design","sound-cloud"),className:"mt20",checked:R,onChange:function(e){O("options","isVisual",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Teaser ","sound-cloud"),className:"mt20",checked:_,onChange:function(e){O("options","isTeaser",e)}})),React.createElement(le.PanelBody,{className:"bPlPanelBody",title:(0,oe.__)("Elements","sound-cloud"),initialOpen:!1},React.createElement(le.ToggleControl,{label:(0,oe.__)("Show Buying ","sound-cloud"),className:"mt20",checked:m,onChange:function(e){O("options","isBuying",e)}}),!m&&React.createElement(React.Fragment,null,React.createElement(le.ToggleControl,{label:(0,oe.__)("Show Download ","sound-cloud"),className:"mt20",checked:b,onChange:function(e){O("options","isDownload",e)}})),React.createElement(le.ToggleControl,{label:(0,oe.__)("Comments ","sound-cloud"),className:"mt20",checked:C,onChange:function(e){O("options","isComments",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Show Artwork ","sound-cloud"),className:"mt20",checked:g,onChange:function(e){O("options","isArtWork",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Show Play Count ","sound-cloud"),className:"mt20",checked:v,onChange:function(e){O("options","isPlayCount",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Show User ","sound-cloud"),className:"mt20",checked:h,onChange:function(e){O("options","isUser",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Hide Related ","sound-cloud"),className:"mt20",checked:w,onChange:function(e){O("options","isHideRelated",e)}}),React.createElement(le.ToggleControl,{label:(0,oe.__)("Show Sharing ","sound-cloud"),className:"mt20",checked:p,onChange:function(e){O("options","isSharing",e)}}))),"style"==e.name&&React.createElement(React.Fragment,null,React.createElement(le.PanelBody,{className:"bPlPanelBody scbPanelBody",title:(0,oe.__)("Sound Cloud Style","sound-cloud"),initialOpen:!0},React.createElement(Ne,{label:(0,oe.__)("Color","sound-cloud"),value:d,onChange:function(e){return O("options","color",e)},defaultColor:"#f50",disableAlpha:!0}),React.createElement(le.__experimentalBorderControl,{className:"mb20 mt10",label:(0,oe.__)("Border","sound-cloud"),value:c,onChange:function(e){return n({frameBorder:e})},colors:ie}),React.createElement(le.__experimentalBoxControl,{className:"mt20",label:(0,oe.__)("Border Radius","sound-cloud"),values:i,onChange:function(e){return n({frameBRadius:e})},units:[ue(4),se(30)],resetValues:{top:0,bottom:0,left:0,right:0}}),React.createElement(Ae,{label:(0,oe.__)("Shadow:","sound-cloud"),value:(null==u?void 0:u.shadow)||u,onChange:function(e){return n({frameBoxShadow:e})},produce:te}))))}))),React.createElement(ae.BlockControls,null,React.createElement(ae.AlignmentToolbar,{value:s,onChange:function(e){return n({alignment:e})},describedBy:(0,oe.__)("Sound Cloud Alignment"),alignmentControls:[{title:(0,oe.__)("Sound Cloud in left","sound-cloud"),align:"left",icon:"align-left"},{title:(0,oe.__)("Sound Cloud in center","sound-cloud"),align:"center",icon:"align-center"},{title:(0,oe.__)("Sound Cloud in right","sound-cloud"),align:"right",icon:"align-right"}]})))},Te=function(e){var t=e.attributes,n=e.isBackend,r=e.custom,o=void 0===r?{}:r,a=t.options,l=t.tracks,c=a.isAutoPlay,i=a.color,u=a.isBuying,s=a.isSharing,f=a.isDownload,d=a.isArtWork,m=a.isPlayCount,p=a.isUser,b=a.isSingleActive,g=a.isComments,v=a.isVisual,h=a.isTeaser,y=a.isHideRelated;return l.map((function(e,t){return React.createElement("div",{key:t,className:"mainWidget ".concat(n&&o.activeIndex===t?"scbNowEditing":""),onClick:function(){return n?o.setActiveIndex(t):null}},React.createElement("iframe",{key:t,id:"sc-widget",width:"100%",height:"100%",scrolling:"no",frameBorder:"no",allow:"autoplay",src:"https://w.soundcloud.com/player/?url=".concat(e.url,"&color=%23").concat(i.replace("#","").substr(0,6),"&auto_play=").concat(c,"&buying=").concat(u,"&sharing=").concat(s,"&download=").concat(f,"&show_artwork=").concat(d,"&show_playcount=").concat(m,"&show_user=").concat(p,"&single_active=").concat(b,"&show_comments=").concat(g,"&visual=").concat(v,"&show_teaser=").concat(h,"&hide_related=").concat(y,"&start_track=").concat(e.startTrack)}))}))},De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"box",n="";return null==e||e.map((function(r,o){var a=r.hOffset,l=void 0===a?"0px":a,c=r.vOffset,i=void 0===c?"0px":c,u=r.blur,s=void 0===u?"0px":u,f=r.spreed,d=void 0===f?"0px":f,m=r.color,p=void 0===m?"#7090b0":m,b=r.isInset,g=void 0!==b&&b?"inset":"",v="".concat(l||""," ").concat(i||""," ").concat(s||""),h=o+1>=e.length?"":", ";n+="text"===t?"".concat(v," ").concat(p||"").concat(h):"".concat(v," ").concat(d||""," ").concat(p||""," ").concat(g).concat(h)})),n||"none"},Ie=function(e){var t=e.attributes,n=e.clientId,r=t.alignment,o=t.frameBorder,a=t.frameBRadius,l=t.frameBoxShadow,c=t.iframeStyle,i=c.width,u=c.height;return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n        .wp-block-scb-sound-cloud {\n            text-align:".concat(r,";\n        }\n        #scbSoundCloud-").concat(n," .mainWidget{\n            width:").concat(i,";\n            height:").concat(u,";\n        }\n\t\t#scbSoundCloud-").concat(n," iframe{\n            border: ").concat(ne(o),";\n            border-radius: ").concat(ne(a),";\n            box-shadow: ").concat(De((null==l?void 0:l.shadow)||l),";\n        }\n        ").replace(/\s+/g," ")}})};function Fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ue(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ue(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Me=function(e){var t=e.className,r=e.attributes,o=e.setAttributes,a=e.clientId,l=e.isSelected,c=r.tracks,i=Fe((0,n.useState)(0),2),u=i[0],s=i[1];(0,n.useEffect)((function(){a&&o({cId:a.substring(0,10)})}),[a]),(0,n.useEffect)((function(){return re()}),[l]);return React.createElement(React.Fragment,null,React.createElement(Be,{attributes:r,setAttributes:o,updateTracks:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=te(c,(function(o){r?o[t][e][r]=n:o[t][e]=n}));o({tracks:a})}}),React.createElement("div",{className:t,id:"scbSoundCloud-".concat(a)},!l&&React.createElement("div",{style:{width:"100%",height:"100%",position:"absolute"}}),React.createElement(Ie,{attributes:r,clientId:a}),React.createElement(Te,{attributes:r,clientId:a,isBackend:!0,custom:{activeIndex:u,setActiveIndex:s}})))};(0,e.registerBlockType)(t,{icon:{src:"format-audio",background:"#1F75FE",foreground:"white"},edit:Me,save:function(){return null}})}();
//# sourceMappingURL=editor.js.map