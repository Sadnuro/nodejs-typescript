import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";
/**
 * Cadena de prioridades para imports en Typescript:
 * ".tsx", ".ts", ".node", ".js", ".json"
 */

/** Typescript infiere tipos de datos */
/** Asersion de types es obligar a typescript a asimilar el typo de dato como se le indique 
 * diaryData as Array<DiaryEntry>
 * Evitar a asersion de tipos lo maximo posible, a menos que sea necesario
*/
const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: number):NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id===id);

    if(entry !== null) {
        // Omitir atributo comment
        const {  ...restOfDiary } = entry;
        return restOfDiary;
    }
    return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map( ({id, date, weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
};
export const addDiary = (newDiaryEntry:NewDiaryEntry ):DiaryEntry => {
    const diaryEntry = {
        id: Math.max(...diaries.map(d => d.id)) +1,
        ...newDiaryEntry
    }

    diaries.push(diaryEntry);
    return diaryEntry;
};