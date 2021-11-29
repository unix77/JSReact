/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания



let lastMovie = ' ',
    rating = 0,
    i = 0;

const personalMovieDB = {
    count: 0,
    movies: {}, //empty object
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("How many movies have you seen ?", 'Insert number');
        while( this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt("How many movies have you seen ?", 'Insert number');
        }
    },
    rememberMyFilms: function() {
        while( i < this.count ){
            lastMovie = prompt("Tell me one of the last movies you saw", '');
            rating = prompt("From 0 to 10, how much did you like it ?", 'Insert number');
            if(lastMovie.length > 50 || lastMovie == '' || 0 > rating > 10){
                console.log("Try again !");
            }
            else{
                this.movies[lastMovie] = rating;
                i++;
            }
        }    
    },
    detectLvl: function() {
        if(this.count < 3){
            console.log("Junior cineman");
        }
        else if(5 > this.count > 3){
            console.log("Medium cineman");
        }
        else if(8 > this.count > 5){
            console.log("Expert cineman");
        } 
    },
    showMyDB: () => {
        if(!this.privat){
            console.log(personalMovieDB);
        }
    },
    writeGenres: function() {
        for(let i = 0, genres; i < 1 ; i++){
            genres = prompt(`Write your favourite genres separated by a ,`, ``);
            if(genres === '' || genres ==null){
                console.log("Error inserting genres");
                i--;
            } else{
                this.genres = genres.split(`,`);
                this.genres.sort();
            } 
        }
    },
    toggleVisibleMyDB: function(){
        if(this.privat){
            this.privat = false;
        }
        else{
            this.privat = true;
        }
    }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeGenres();

personalMovieDB.detectLvl();

personalMovieDB.showMyDB();


