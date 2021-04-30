'Use strict';


const filmCount = +prompt('Сколько фильмов уже посмотрели?', '');

const personalMovieDB = {
    count: filmCount,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};

if ( filmCount <= 10){
    const message = alert('Просмотренно довольно мало фильмов');
} else if (filmCount >= 10 && filmCount.length <= 30) {
    const message = alert('Просмотренно достаточно фильмов');
} else if (filmCount > 30) {
    const message = alert('Вы киноман!');
} else {
    const message = alert('Нужно ввести число');
}





// for (let i = 0 ; i < 2; i++) {
    
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько его оцените?', '');
//           if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length <50) {
//             personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }


// console.log(personalMovieDB);

// let count = 0;

// while ( count < 2 ) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько его оцените?', '');
    
//     if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length <50) {
//         personalMovieDB.movies[a] = b;
//         count++;
// } 

// }

// console.log(personalMovieDB);

// let count = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//      b = prompt('На сколько его оцените?', '');
//      if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length <50) {
//              personalMovieDB.movies[a] = b;
//              count++;
//      } 
// } while ( count < 2 ) ;
