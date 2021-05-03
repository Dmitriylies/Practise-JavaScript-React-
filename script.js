'Use strict';


let filmCount;
function start() {
    filmCount = +prompt('Сколько фильмов уже посмотрели?', '')

    while (filmCount == '' || filmCount == null || isNaN(filmCount)) {
        filmCount = +prompt('Сколько фильмов уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: filmCount,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    if ( filmCount <= 10){
        const message = alert('Просмотренно довольно мало фильмов');
    } else if (filmCount >= 10 && filmCount.length <= 30) {
        const message = alert('Просмотренно достаточно фильмов');
    } else if (filmCount > 30) {
        const message = alert('Вы киноман!');
    } else {
        const message = alert('Нужно ввести число');
    }
}
rememberMyFilms();

function detectPl() {
    for (let i = 0 ; i < 2; i++) {  
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько его оцените?', '');
              if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length <50) {
                personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
//detectPl();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
        
    }
}
showMyDB ();
let g1;
function writeYourGeners () {

    for (let i = 0; i < 3; i++) {
         g1 = prompt(`Вашлюимый жанр под номером ${i + 1}`, '');
        while (g1 == '' || g1 == null || !isNaN(g1) ){
             g1 = prompt(`Вашлюимый жанр под номером ${i + 1}`, '');
        }
        personalMovieDB.genres[i] = g1;
    }
    

}
writeYourGeners ();