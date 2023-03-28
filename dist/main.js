(()=>{"use strict";var e={409:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,"*{\n    margin: 0;\n    padding: 0;\n}\n\nhtml,\nbody{\n    height: 100%;\n    background-color: #a69e9e;\n}\n\n.root{\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 60px;\n}\n\n.today-weather-container{\n    flex: 1;\n    display: flex;\n    justify-content: space-between;\n}\n\n.today-weather-left-container{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.today-condition{\n    font-size: 40px;\n    font-weight: 700;\n}\n\n.today-name\n{\n    font-size: 30px;\n    font-weight: 700;\n}\n\n.today-date{\n    font-size: 20px;\n}\n\n.today-temperature{\n    font-size: 45px;\n    font-weight: 800;\n}\n\n.search-input{\n    border-radius: 10px;\n    padding: 5px;\n    font-size: 20px;\n}\n\n.search-button,\n.toggle-degree-button\n{\n    padding: 5px;\n    font-size: 20px;\n    border-radius: 10px;\n    background: none;\n    border: none;\n    background: none;\n}\n\n.search-button:hover,\n.toggle-degree-button:hover\n{\n    color: blue;\n}\n\n.today-weather-right-container{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.today-feels-like,\n.today-humidity,\n.today-wind-speed\n{\n    font-size: 20px;\n}\n\n.week-weather-container{\n    display: flex;\n    gap: 20px;\n    justify-content: space-between;\n}\n\n.week-weather-element-container{\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;  \n}\n\n.week-weather-element-name{\n    font-size: 30px;\n    font-weight: 600;\n}\n\n.week-weather-element-maxTemp{\n    font-size: 25px;\n    font-weight: 800;\n}\n\n.week-weather-element-minTemp{\n    font-size: 20px;\n}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);a&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],p=i[c]||0,h="".concat(c," ").concat(p);i[c]=p+1;var l=n(h),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==l)t[l].references++,t[l].updater(u);else{var m=r(u,a);a.byIndex=s,t.splice(s,0,{identifier:h,updater:m,references:1})}o.push(h)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var d=a(e,r),c=0;c<i.length;c++){var p=n(i[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),r=n.n(a),i=n(569),o=n.n(i),s=n(565),d=n.n(s),c=n(216),p=n.n(c),h=n(589),l=n.n(h),u=n(409),m={};m.styleTagTransform=l(),m.setAttributes=d(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),t()(u.Z,m),u.Z&&u.Z.locals&&u.Z.locals;class f{static init(){this.root=f._getElement(".root"),this.todayWeatherContainer=f._createElement("div","today-weather-container"),this.todayWeatherLeftContainer=f._createElement("div","today-weather-left-container"),this.todayWeatherRightContainer=f._createElement("div","today-weather-right-container"),this.todayWeatherContainer.append(this.todayWeatherLeftContainer),this.todayWeatherContainer.append(this.todayWeatherRightContainer),this.weekWeatherContainer=f._createElement("div","week-weather-container"),this.root.append(this.todayWeatherContainer),this.root.append(this.weekWeatherContainer)}static loadHomePage(e,t){f.clearPage(),f.init(),f.loadTodayWeather(e),f.loadWeekWeather(t)}static clearPage(){const e=f._getElement(".root");for(;void 0!==e.childNodes[0];)e.removeChild(e.childNodes[0])}static loadTodayWeather(e){console.log(e);const t=f._createElement("div","today-condition");t.textContent=e.condition;const n=f._createElement("div","today-name");n.textContent=e.name;const a=f._createElement("date","today-date");a.textContent=e.date;const r=f._createElement("div","today-temperature");r.textContent=e.temperature_c;const i=f._createElement("input","search-input");i.placeholder="Search location...";const o=f._createElement("button","search-button");o.textContent="search",this.todayWeatherLeftContainer.append(t),this.todayWeatherLeftContainer.append(n),this.todayWeatherLeftContainer.append(a),this.todayWeatherLeftContainer.append(r),this.todayWeatherLeftContainer.append(i),this.todayWeatherLeftContainer.append(o);const s=f._createElement("div","today-feels-like");s.textContent="feels like "+e.feelsLike_c;const d=f._createElement("div","today-humidity");d.textContent="humidity "+e.humidity;const c=f._createElement("div","today-wind-speed");c.textContent="wind speed "+e.windSpeed_kph;const p=f._createElement("button","toggle-degree-button");p.textContent="Display In Fehrenheit",this.todayWeatherRightContainer.append(s),this.todayWeatherRightContainer.append(d),this.todayWeatherRightContainer.append(c),this.todayWeatherRightContainer.append(p)}static loadWeekWeather(e){for(let t=0;t<7;t++){const n=f._createElement("div","week-weather-element-container"),a=f._createElement("div","week-weather-element-name");a.textContent=e.day[t].name;const r=f._createElement("div","week-weather-element-maxTemp");r.textContent=e.day[t].maxTemperature_c;const i=f._createElement("div","week-weather-element-minTemp");i.textContent=e.day[t].minTemperature_c,n.append(a,r,i),this.weekWeatherContainer.appendChild(n)}}static _getElement(e){return document.querySelector(e)}static _createElement(e,t){const n=document.createElement(e);return n.className=t,n}static bindSearchButton(e){f._getElement(".search-button").addEventListener("click",(()=>{const t=f._getElement(".search-input").value;e(t)}))}static bindToggleButton(e,t){const n=f._getElement(".toggle-degree-button"),a=f._getElement(".today-temperature"),r=f._getElement(".today-feels-like"),i=f._getElement(".today-wind-speed"),o=f._getElement(".week-weather-container");n.addEventListener("click",(()=>{if("Display In Fehrenheit"===n.textContent){n.textContent="Display In Degrees",a.textContent=e.temperature_f,r.textContent=e.feelsLike_f,i.textContent=e.windSpeed_mph;for(let e=0;e<7;e++){let n=o.childNodes[e];n.childNodes[1].textContent=t.day[e].maxTemperature_f,n.childNodes[2].textContent=t.day[e].minTemperature_f}}else{n.textContent="Display In Fehrenheit",a.textContent=e.temperature_c,r.textContent=e.feelsLike_c,i.textContent=e.windSpeed_kph;for(let e=0;e<7;e++){let n=o.childNodes[e];n.childNodes[1].textContent=t.day[e].maxTemperature_c,n.childNodes[2].textContent=t.day[e].minTemperature_c}}}))}}let _="654fa8b00f5e44f0931144140232303";async function y(e){let t=await fetch("http://api.weatherapi.com/v1\t/forecast.json?days=10&key="+_+"&q="+e,{mode:"cors"});return await t.json()}class g{constructor(e,t,n,a,r,i,o,s,d,c){this._name=e,this._temperature_c=t+" °C",this._feelsLike_c=n+" °C",this._windSpeed_kph=a+" km/h",this._humidity=r+"%",this._date=i,this._condition=o,this._temperature_f=s+" °F",this._feelsLike_f=d+" °F",this._windSpeed_mph=c+" mph",console.log(c)}set name(e){this._name=e}get name(){return this._name}set temperature_c(e){this._temperature_c=e}get temperature_c(){return this._temperature_c}set feelsLike_c(e){this._feelsLike_c=e}get feelsLike_c(){return this._feelsLike_c}set windSpeed_kph(e){this._windSpeed_kph=e}get windSpeed_kph(){return this._windSpeed_kph}set humidity(e){this._humidity=e}get humidity(){return this._humidity}set date(e){this._date=e}get date(){return this._date}set condition(e){this._condition=e}get condition(){return this._condition}set temperature_f(e){this._temperature_f=e}get temperature_f(){return this._temperature_f}set feelsLike_f(e){this._feelsLike_f=e}get feelsLike_f(){return this._feelsLike_f}set windSpeed_mph(e){this._windSpeed_mph=e}get windSpeed_mph(){return this._windSpeed_mph}static createdayWeather(e){let t=e.location.name,n=e.current.temp_c,a=e.current.feelslike_c,r=e.current.wind_kph,i=e.current.humidity,o=e.current.last_updated,s=e.current.condition.text,d=e.current.temp_f,c=e.current.feelslike_f,p=e.current.wind_mph;return console.log(p),new g(t,n,a,r,i,o,s,d,c,p)}}class x{constructor(e,t,n,a,r){this._name=e,this._minTemperature_c=t+" °C",this._maxTemperature_c=n+" °C",this._minTemperature_f=a+" °F",this._maxTemperature_f=r+" °F"}get name(){return this._name}set name(e){this._name=e}get minTemperature_c(){return this._minTemperature_c}set minTemperature_c(e){this._minTemperature_c=e}get maxTemperature_c(){return this._maxTemperature_c}set maxTemperature_c(e){this._maxTemperature_c=e}get minTemperature_f(){return this._minTemperature_f}set minTemperature_f(e){this._minTemperature_f=e}get maxTemperature_f(){return this._maxTemperature_f}set maxTemperature_f(e){this._maxTemperature_f=e}static createMiniDayWeather(e){let t=(n=e.date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(n).getDay()]);var n;let a=e.day.mintemp_c,r=e.day.maxtemp_c,i=e.day.mintemp_f,o=e.day.maxtemp_f;return new x(t,a,r,i,o)}}class v{constructor(e){this._day=[];for(let t=0;t<7;t++)this._day[t]=e[t]}get day(){return this._day}set day(e){this._day=e}static createWeekWeather(e){let t=[];for(let n=0;n<7;n++){let a=e.forecast.forecastday[n];a=x.createMiniDayWeather(a),t.push(a)}return new v(t)}}async function w(e){let t=await y(e),n=g.createdayWeather(t),a=v.createWeekWeather(t);f.loadHomePage(n,a)}!async function(){let e=await y("dekernes"),t=g.createdayWeather(e),n=v.createWeekWeather(e);console.log(e),f.loadHomePage(t,n),f.bindSearchButton(w),f.bindToggleButton(t,n)}()})()})();