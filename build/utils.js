"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date)); // Return true if string was successfuly converted to date format
};
const isWeather = (param) => {
    return Object.values(enums_1.Weather).includes(param); // Return true if param value is between enum Weather values
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param); // Return true if param value is between enum Visibility values
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        console.error('date error');
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        console.error('weather error');
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        console.error('visibility error');
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    console.log('Genetare diary method scope');
    console.log('Object:', object);
    console.log(parseComment(object.comment));
    console.log(parseDate(object.date));
    console.log(parseWeather(object.weather));
    console.log(parseVisibility(object.visibility));
    const newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    console.log('Genetare diary method scope fin');
    return newDiaryEntry;
};
exports.default = toNewDiaryEntry;
