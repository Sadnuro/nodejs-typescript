import { NewDiaryEntry} from "./types";
import { Visibility, Weather } from "./enums";

const isString = (string: any): boolean =>{
    return typeof string === 'string' || string instanceof String;
}

const isDate = (date: string):boolean => {
    return Boolean(Date.parse(date))    // Return true if string was successfuly converted to date format
}

const isWeather = (param: any):boolean => {
    return Object.values(Weather).includes(param); // Return true if param value is between enum Weather values
}
const isVisibility = (param: any):boolean => {
    return Object.values(Visibility).includes(param); // Return true if param value is between enum Visibility values
}

const parseComment = (commentFromRequest: any):string => {
    if(!isString(commentFromRequest)){
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
}
const parseDate = (dateFromRequest: any):string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
}
const parseWeather = (weatherFromRequest: any):Weather =>{
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
}

const parseVisibility = (visibilityFromRequest: any):Visibility =>{
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
}

const  toNewDiaryEntry = (object: any):NewDiaryEntry => {
    const newDiaryEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newDiaryEntry
}

export default toNewDiaryEntry;