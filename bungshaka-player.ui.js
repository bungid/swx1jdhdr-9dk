/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
.shaka-hidden{display:none!important}.shaka-video-container{position:relative;top:0;left:0;display:flex}.shaka-video-container .material-icons-round{font-family:"Material Icons Round";font-size:24px}.shaka-video-container *{font-family:Roboto-Regular,Roboto,sans-serif,TengwarTelcontar}.shaka-video-container:fullscreen{width:100%;height:100%;background-color:#000}.shaka-video-container:fullscreen .shaka-text-container{font-size:4.4vmin}.shaka-video-container:-webkit-full-screen{width:100%;height:100%;background-color:#000}.shaka-video-container:-webkit-full-screen .shaka-text-container{font-size:4.4vmin}.shaka-video-container:-moz-full-screen{width:100%;height:100%;background-color:#000}.shaka-video-container:-moz-full-screen .shaka-text-container{font-size:4.4vmin}.shaka-video-container:-ms-fullscreen{width:100%;height:100%;background-color:#000}.shaka-video-container:-ms-fullscreen .shaka-text-container{font-size:4.4vmin}.shaka-controls-container{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;z-index:1}.shaka-video-container:not([shaka-controls=true]) .shaka-controls-container{display:none}.shaka-controls-container *{flex-shrink:0}.shaka-controls-container[casting=true] .shaka-fullscreen-button{display:none}.shaka-bottom-controls{width:96%;padding:0;padding-bottom:2.5%;z-index:1}.shaka-controls-button-panel{padding:0;margin:0;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;overflow:hidden;min-width:48px;font-size:12px;font-weight:400;font-style:normal;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;opacity:0;transition:opacity cubic-bezier(.4, 0, .6, 1) .6s}.shaka-controls-container[casting=true] .shaka-controls-button-panel,.shaka-controls-container[shown=true] .shaka-controls-button-panel{opacity:1}.shaka-controls-button-panel>*{color:#fff;height:32px;line-height:.5;margin:1px;padding:0 5px;background:0 0;border:0;cursor:pointer}.shaka-controls-button-panel .shaka-overflow-menu-only{display:none}.shaka-play-button-container{margin:0;width:100%;height:100%;flex-shrink:1;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center}.shaka-statistics-container{overflow-x:hidden;overflow-y:auto;min-width:300px;color:#fff;background-color:rgba(35 35 35 / 90%);font-size:14px;padding:5px 10px;border-radius:2px;position:absolute;z-index:2;left:15px;top:15px;opacity:0;transition:opacity cubic-bezier(.4, 0, .6, 1) .6s}.shaka-controls-container[casting=true] .shaka-statistics-container,.shaka-controls-container[shown=true] .shaka-statistics-container{opacity:1}.shaka-statistics-container div{display:flex;justify-content:space-between}.shaka-statistics-container span{color:#969696}.shaka-context-menu{background-color:rgba(35 35 35 / 90%);border-radius:2px;position:absolute;z-index:3}.shaka-context-menu button{padding:5px 10px;width:100%;display:flex;align-items:center;color:#fff;background:0 0;border:0;cursor:pointer}.shaka-context-menu button:hover{background-color:rgba(50 50 50 / 90%)}.shaka-context-menu label{padding:0 20px;align-items:flex-start;color:#fff;cursor:pointer}.shaka-context-menu .shaka-current-selection-span{align-items:flex-start;color:#fff;cursor:pointer}.shaka-scrim-container{margin:0;width:100%;height:100%;flex-shrink:1;position:absolute;left:0;right:0;top:0;bottom:0;opacity:0;transition:opacity cubic-bezier(.4, 0, .6, 1) .6s;background:linear-gradient(to top,#000 0,transparent 15%)}.shaka-controls-container[casting=true] .shaka-scrim-container,.shaka-controls-container[shown=true] .shaka-scrim-container{opacity:1}.shaka-text-container{position:absolute;left:0;right:0;top:0;bottom:0;pointer-events:none;bottom:0;width:100%;min-width:48px;transition:bottom cubic-bezier(.4, 0, .6, 1) .1s;transition-delay:0.5s;font-size:20px;line-height:1.4;color:#fff}.shaka-text-container span.shaka-text-wrapper{display:inline;background:0 0}.shaka-controls-container[shown=true]~.shaka-text-container{bottom:15%;transition-delay:0s}.shaka-spinner-container{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.shaka-video-container:not([shaka-controls=true]) .shaka-spinner-container{display:none}.shaka-spinner{position:relative;top:0;left:0;margin:0;box-sizing:border-box;padding:calc(15.6% / 2);width:0;height:0;filter:drop-shadow(0 0 2px rgba(255 255 255 / 50%))}.shaka-play-button{box-sizing:border-box;padding:calc(15% / 2);width:0;height:0;margin:0;border-radius:50%;box-shadow:rgba(0 0 0 / 10%) 0 0 20px 0;border:none;background-size:50%;background-repeat:no-repeat;background-position:center center;background-color:rgba(255 255 255 / 90%);opacity:0;transition:opacity cubic-bezier(.4, 0, .6, 1) .6s}.shaka-controls-container[casting=true] .shaka-play-button,.shaka-controls-container[shown=true] .shaka-play-button{opacity:1}.shaka-play-button[icon=play]{background-image:url("data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M8%205v14l11-7z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E")}.shaka-play-button[icon=pause]{background-image:url("data:image/svg+xml,%3Csvg%20fill%3D%22%23000000%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M6%2019h4V5H6v14zm8-14v14h4V5h-4z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E")}.shaka-current-time{font-size:14px;color:#fff;cursor:pointer}.shaka-current-time[disabled]{background-color:transparent;color:#fff;cursor:default}.shaka-controls-container button:focus,.shaka-controls-container input:focus{outline:1px solid Highlight}.shaka-controls-container button:-moz-focus-inner,.shaka-controls-container input:-moz-focus-outer{outline:0;border:0}.shaka-controls-container:not(.shaka-keyboard-navigation) button:focus,.shaka-controls-container:not(.shaka-keyboard-navigation) input:focus{outline:0}.shaka-range-container{position:relative;top:0;left:0;margin:calc((12px - 4px)/ 2) 6px;height:4px;border-radius:4px;background:#fff}.shaka-volume-bar-container{width:100px;padding:0}.shaka-range-element{-webkit-appearance:none;background:0 0;position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%;height:12px;top:calc((4px - 12px)/ 2);z-index:1}.shaka-range-element::-webkit-slider-runnable-track{width:100%;cursor:pointer;height:12px;background:0 0;color:transparent;border:none}.shaka-range-element::-webkit-slider-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.shaka-range-element::-moz-range-track{width:100%;cursor:pointer;height:12px;background:0 0;color:transparent;border:none}.shaka-range-element::-moz-range-thumb{-webkit-appearance:none;border:none;border-radius:12px;height:12px;width:12px;background:#fff}.shaka-seek-bar-container{opacity:0;transition:opacity cubic-bezier(.4, 0, .6, 1) .6s}.shaka-controls-container[casting=true] .shaka-seek-bar-container,.shaka-controls-container[shown=true] .shaka-seek-bar-container{opacity:1}.shaka-ad-markers{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;padding:0;width:100%;height:100%}/*!
 * @license
 * The SVG/CSS buffering spinner is based on http://codepen.io/jczimm/pen/vEBpoL
 * Some local modifications have been made.
 *
 * Copyright (c) 2016 by jczimm
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */.shaka-spinner-svg{position:absolute;top:0;left:0;right:0;bottom:0;animation:rotate 2s linear infinite;transform-origin:center center;width:100%;height:100%;margin:0;padding:0}.shaka-spinner-path{stroke:#202124;stroke-dasharray:20,200;stroke-dashoffset:0;animation:dash 1s ease-in-out infinite;stroke-linecap:round}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px}}.shaka-spacer{cursor:default;flex-shrink:1;flex-grow:1;margin:0}.shaka-overflow-menu,.shaka-settings-menu{overflow-x:hidden;overflow-y:auto;white-space:nowrap;background:#fff;box-shadow:0 1px 9px 0 rgba(0 0 0 / 40%);border-radius:2px;max-height:250px;min-width:180px;opacity:0;transition:opacity cubic-bezier(.4, 0, .6, 1) .6s;display:flex;flex-direction:column;position:absolute;z-index:2;right:15px;bottom:30px}.shaka-controls-container[casting=true] .shaka-overflow-menu,.shaka-controls-container[casting=true] .shaka-settings-menu,.shaka-controls-container[shown=true] .shaka-overflow-menu,.shaka-controls-container[shown=true] .shaka-settings-menu{opacity:1}.shaka-overflow-menu button,.shaka-settings-menu button{font-size:14px;background:0 0;color:#000;border:none;min-height:30px;padding:3.5px 6px;display:flex;align-items:center;cursor:pointer}.shaka-overflow-menu button:hover,.shaka-settings-menu button:hover{background:#e0e0e0}.shaka-overflow-menu button label,.shaka-settings-menu button label{cursor:pointer}.shaka-keyboard-navigation .shaka-overflow-menu button:focus,.shaka-keyboard-navigation .shaka-settings-menu button:focus{background:#e0e0e0}.shaka-overflow-menu i,.shaka-settings-menu i{padding-left:10px;padding-right:10px}.shaka-overflow-menu.shaka-low-position,.shaka-settings-menu.shaka-low-position{bottom:15px}.shaka-overflow-menu span{text-align:left}.shaka-overflow-button-label{position:relative;display:flex;flex-direction:column}.shaka-current-selection-span{color:rgba(0 0 0 / 54%)}.shaka-settings-menu span{margin-left:54px}.shaka-back-to-overflow-button span{margin-left:0}.shaka-back-to-overflow-button i{padding-right:20px}.shaka-auto-span{left:17px}.shaka-controls-container[ad-active=true]{pointer-events:none}.shaka-controls-container[ad-active=true] .shaka-bottom-controls{pointer-events:auto}.shaka-client-side-ad-container,.shaka-server-side-ad-container{position:absolute;left:0;right:0;top:0;bottom:0}.shaka-video-container[shaka-controls=true] .shaka-client-side-ad-container iframe,.shaka-video-container[shaka-controls=true] .shaka-server-side-ad-container iframe{height:90%}.shaka-server-side-ad-container{width:100%;height:100%;flex-shrink:1}.shaka-server-side-ad-container:not([ad-active=true]){pointer-events:none}.shaka-ad-controls{display:flex;flex-direction:row;z-index:1;padding-bottom:1%}.shaka-video-container:not([shaka-controls=true]) .shaka-ad-controls{display:none}.shaka-ad-controls button,.shaka-ad-controls div{color:#fff;font-size:initial}.shaka-ad-controls div:not(.shaka-skip-ad-counter){margin:1px}.shaka-ad-counter,.shaka-ad-position{display:flex;justify-content:flex-end;flex-direction:column;text-shadow:1px 1px 4px #000}.shaka-ad-controls .shaka-ad-position:not(.shaka-hidden)+.shaka-ad-counter{margin-left:.75em}.shaka-skip-ad-container{position:relative;right:calc((100% - 96%)/ 2 * -1);display:flex;flex-direction:row;margin:0}.shaka-skip-ad-button{padding:5px 15px;background:rgba(0 0 0 / 70%);border:none;cursor:pointer}.shaka-skip-ad-button:disabled{background:rgba(0 0 0 / 30%)}.shaka-skip-ad-counter{padding:5px;background:rgba(0 0 0 / 70%);margin:0}/*!
 * @license
 * The tooltip is based on https://github.com/felipefialho/css-components/
 * Local modifications have been performed.
 *
 * Copyright (c) 2017 Felipe Fialho
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */.shaka-tooltips-on{overflow:visible}.shaka-tooltips-on>[class*=shaka-tooltip]{position:relative}.shaka-tooltips-on>[class*=shaka-tooltip]:active:after,.shaka-tooltips-on>[class*=shaka-tooltip]:focus-visible:after,.shaka-tooltips-on>[class*=shaka-tooltip]:hover:after{content:attr(aria-label);font-family:Roboto-Regular,Roboto,sans-serif;line-height:calc(32px / 2);white-space:nowrap;font-size:13px;background:rgba(35 35 35 / 90%);color:#fff;border-radius:3px;padding:5px 10px;position:absolute;bottom:calc(32px + 5px);left:calc(32px / 2);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);transform:translateX(-50%)}.shaka-tooltips-on>.shaka-tooltip-status:active:after,.shaka-tooltips-on>.shaka-tooltip-status:focus-visible:after,.shaka-tooltips-on>.shaka-tooltip-status:hover:after{content:attr(aria-label) " (" attr(shaka-status) ")"}.shaka-tooltips-on button:first-child:active:after,.shaka-tooltips-on button:first-child:focus-visible:after,.shaka-tooltips-on button:first-child:hover:after{left:0;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}.shaka-tooltips-on button:last-child:active:after,.shaka-tooltips-on button:last-child:focus-visible:after,.shaka-tooltips-on button:last-child:hover:after{left:32px;-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-o-transform:translateX(-100%);transform:translateX(-100%)}@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxP.ttf) format('truetype')}@font-face{font-family:'Material Icons Round';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialiconsround/v107/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmM.otf) format('opentype')}.material-icons-round{font-family:'Material Icons Round';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}/*# sourceMappingURL=controls.css.map */