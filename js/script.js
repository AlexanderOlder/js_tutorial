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

const num = 50;

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
}