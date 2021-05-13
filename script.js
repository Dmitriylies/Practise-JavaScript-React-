'Use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat ) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    start: () => {
   
        personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
    
       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов уже посмотрели?', '');
        }
    },
    detectPl: () => {
        if ( personalMovieDB.count <= 10){
           console.log ('Просмотренно довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log ('Просмотренно достаточно фильмов');
        } else if (personalMovieDB.count > 30) {
            console.log ('Вы киноман!');
        } else {
            console.log('Нужно ввести число');
        }
    },
     rememberMyFilms: () => {
        for (let i = 0 ; i < 2; i++) {  
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько его оцените?', '');
                  if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50 && !isNaN(b)) {
                    personalMovieDB.movies[a] = b;
                    console.log(`Вы посмотели ${a} и поставили оценку ${b}`);
                    console.log(typeof(b));
                    
            } else {
                i--;
                console.log('Ввели что-то не правильно, давайте еще раз');
            }
        }
    },
    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);   
        }
    },
    writeYourGeners: () => {
        let favGenre;
        for (let i = 0; i < 3; i++) {
            favGenre = prompt(`Ваш люимый жанр под номером ${i + 1}`, '');
            
           while (favGenre == '' || favGenre == null || !isNaN(favGenre) ){
            favGenre = prompt(`Ваш люимый жанр под номером ${i + 1}`);
           }
           personalMovieDB.genres[i] = favGenre;
       }
       personalMovieDB.genres.forEach((item, i) =>{
        console.log(`Ваш люимый жанр под номером ${i + 1} это ${item}`);
       })
   }
};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.start();
personalMovieDB.detectPl();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB ();
personalMovieDB.writeYourGeners ();


