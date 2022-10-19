"use srtict";

const numberOfFilms = +prompt ('Скільки фільмів ви переглянули?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останнії переглянутих фільмів?',''),
    b = prompt('На скільки оцінюєте його',''),
    c = prompt('Один з останнії переглянутих фільмів?',''),
    d = prompt('На скільки оцінюєте його','');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);

   if (4 == 9) {
    console.log('Ok!');
   } else {
    console.log('Error');
   }

   

   /* if (num < 49) {
    console.log('Error');
   } else if (num > 100) {
    console.log('Забагато');
   } else {
    console.log('Ok!');
   } */

   /* (num === 50) ? console.log('Ok!') : console.log('Error'); */

   const num = 50;
   switch (num) {
    case 49:
        console.log('Неправильно');
        break;
    case 100:
        console.log('Неправильно');
        break;
    case 50:
        console.log('Правильно!');
        break;
    default:
        console.log('Лузер! Думай краще!');
        break; 
   }
