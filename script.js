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