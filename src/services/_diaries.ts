import { DiaryEntry } from "../types";
import { Visibility, Weather } from "../enums";
export const diaryEntries: Array<DiaryEntry> = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": Weather.Rainy,
        "visibility": Visibility.Poor,
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2018-01-01",
        "weather": Weather.Sunny,
        "visibility": Visibility.Good,
        "comment": "Everithing went better than expected, I'm learning much"
    },
    {
        "id": 3,
        "date": "2019-01-01",
        "weather": Weather.Windy,
        "visibility": Visibility.Good,
        "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        "id": 4,
        "date": "2020-01-01",
        "weather": Weather.Cloudy,
        "visibility": Visibility.Good,
        "comment": "I almost failed the landing but I survived"
    }
]