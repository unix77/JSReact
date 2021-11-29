/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания



let lastMovie = ' ',
    rating = 0,
    i = 0,
    numberOfFilms = 0;

function start(){
    numberOfFilms = +prompt("How many movies have you seen ?", 'Insert number');

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many movies have you seen ?", 'Insert number');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //empty object
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms(){
    while( i < numberOfFilms ){
        lastMovie = prompt("Tell me one of the last movies you saw", '');
        rating = prompt("From 0 to 10, how much did you like it ?", 'Insert number');
        if(lastMovie.length > 50 || lastMovie == '' || 0 > rating > 10){
            console.log("Try again !");
        }
        else{
            personalMovieDB.movies[lastMovie] = rating;
            i++;
        }
    }
}

rememberMyFilms();

function detectLvl(){
    let aux = personalMovieDB.count;
    console.log(aux);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
    if(aux < 3){
        console.log("Junior cineman");
    }
    else if(5 > aux > 3){
        console.log("Medium cineman");
    }
    else if(8 > aux > 5){
        console.log("Expert cineman");
    }    
    
}

detectLvl();

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeGenres(){
    for(let i = 0; i < 2 ; i++){
        personalMovieDB.genres[i] = prompt(`Your favourite genre N ${i+1}`);
    }
}

