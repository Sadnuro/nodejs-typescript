
/** Una interface es un contrato que debe tener un objeto (DiaryEntry)*/
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
};

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | ' visibility'>;
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

/**
 *  Tambien es valido
    type DiaryEntry =  {
        id: number,
        date: string,
        weather: Weather,
        visibility: Visibility,
        comment: string
    }

 *  Sin embargo eso no permitiria extender interfaces
    interface SpecialDiaryEntry extends DiaryEntry {
        flightNumber: number
    }

 *  Equivalente usando type
    type SpecialDiaryEntry2 =  DiaryEntry & {
        flightNumber: number
    }

 */