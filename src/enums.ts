/** Para realizar validaciones es mejor utilizar un enum que un type. 
 * Ya que permite no solo declarar un tipo sino, usar dichos valores para 
 * realizar validacoines en codigo y demas: check utils.ts*/
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

// export type Visibility = 'great' | 'good' | 'ok' | 'poor';
export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}