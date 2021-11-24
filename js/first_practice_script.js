/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let lastMovieA = '',
    ratingA = 0,
    lastMovieB = '',
    ratingB = 0;
    
    

//1
// "+" transforms the string from prompt, to a nunber
let numberOfFilms = +prompt("How many movies have you seen ?", 'Insert number');

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //empty object
    actors: {},
    genres: [],
    privat: false,
};

//3
lastMovieA = prompt("Tell me one of the last movies you have seen ?", 'Insert movie');
ratingA = prompt("From 0 to 10, how much did you like it ?", 'Insert numebr');

lastMovieB = prompt("Tell me one of the last movies you have seen ?", 'Insert movie');
ratingB = prompt("From 0 to 10, how much did you like it ?", 'Insert numebr');

personalMovieDB.movies[lastMovieA] = ratingA;
personalMovieDB.movies[lastMovieB] = ratingB;

console.log(personalMovieDB);