"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
/** Para realizar validaciones es mejor utilizar un enum que un type.
 * Ya que permite no solo declarar un tipo sino, usar dichos valores para
 * realizar validacoines en codigo y demas: check utils.ts*/
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather = exports.Weather || (exports.Weather = {}));
// export type Visibility = 'great' | 'good' | 'ok' | 'poor';
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
