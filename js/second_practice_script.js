/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let lastMovie = ' ',
    rating = 0,
    i = 0,
    count = 0;

let numberOfFilms = +prompt("How many movies have you seen ?", 'Insert number');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //empty object
    actors: {},
    genres: [],
    privat: false,
};

//1
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

//alternative 
//a y b se borran de memoria una vez que el for termino
for( let i = 0 , a = 0, b = 0 ; i < numberOfFilms ; i++ ){
    a = prompt("Tell me one of the last movies you saw", '');
    b = prompt("From 0 to 10, how much did you like it ?", 'Insert number');
    if(a.length > 50 || a == '' || 0 > b > 10){
        console.log("Try again !");
    }
    else{
        personalMovieDB.movies[a] = b;
        i++;
    }

}
 count = personalMovieDB.count;

switch(count) {
    case (count < 3):
        console.log("Junior cineman");
        break;
    case (5 > count > 3):
        console.log("Medium cineman");
        break;
    case (8 > count > 5):
        console.log("Expert cineman");
        break;
}


console.log(personalMovieDB);

