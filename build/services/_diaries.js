"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diaryEntries = void 0;
const enums_1 = require("../enums");
exports.diaryEntries = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": enums_1.Weather.Rainy,
        "visibility": enums_1.Visibility.Poor,
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2018-01-01",
        "weather": enums_1.Weather.Sunny,
        "visibility": enums_1.Visibility.Good,
        "comment": "Everithing went better than expected, I'm learning much"
    },
    {
        "id": 3,
        "date": "2019-01-01",
        "weather": enums_1.Weather.Windy,
        "visibility": enums_1.Visibility.Good,
        "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        "id": 4,
        "date": "2020-01-01",
        "weather": enums_1.Weather.Cloudy,
        "visibility": enums_1.Visibility.Good,
        "comment": "I almost failed the landing but I survived"
    }
];
