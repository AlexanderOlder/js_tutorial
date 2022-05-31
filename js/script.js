"use strict";

/* const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов", ""),
      b = prompt("На сколько оцените его", ""),
      c = prompt("Один из последних просмотренных фильмов", ""),
      d = prompt("На сколько оцените его", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Error!");
}

/* if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log ('Много!');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); */

/* const num = 50;

switch (num) {
    case 49: 
        console.log('Не верно');
        break;
    case 100:
        console.log('Не верно');
        break;
    case 51:
        console.log('Верно!');
        break;
    default:
        console.log('Не в этот раз');
        break;
} */

/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'sdgsdgsgsdg');

if (hamburger === 3 && cola && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
} */

/* let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport); */

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все довольны!');
} else {
    console.log('Мы уходим!');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); */

/* console.log(NaN || 2 || undefined);

console.log(NaN && 2 && undefined);

console.log(1 && 2 && 3);

console.log(!1 && 2 || !3);

console.log(NaN || null || !3 || undefined || 5);

console.log(NaN || null && !3 && undefined || 5);

console.log(NaN || 2 || undefined);

console.log(5 === 5 && 3 > 1 || 5); */


/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log('Done!');
} */

/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!');
} */

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}

console.log(hamburger && cola || fries === 3 && nuggets);