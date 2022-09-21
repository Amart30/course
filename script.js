"use strict";

let numberOfFilms = +prompt('Сколько вы фильмов вы уже посмотрели?', '');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let movieName = prompt('Один из последних посмотренных фильмов', '');
let movieRate = prompt('На сколько оцените его?', '');
personalMovieDB.movies[movieName] = movieRate;

console.log(personalMovieDB);
