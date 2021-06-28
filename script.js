  'use strict';
// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
        
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.name = 'Alex';

// ivan.say();
// //!произошло вмешательство из вне. 


// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this.userAge}`);
        
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.userAge = 30;
// ivan.name = 'Alex';

// ivan.say();
// //! сделали переменную в объекте, которую нельзя получить и изменить из вне. 
// //! зачтки инкапсуляции


// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if(typeof age ==='number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Wrong value');
            
//         }
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.getAge());


// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();
//!создали методы гет и сет, что позволило инкапсулировать данные в функции- конострукторе.

// class User {
//     constructor (name, age) {
//         this.name = name;
//         //let userAge = age;// в конструкторе такая переменная не видна 
//         this.userAge = age;
//     }
//     say() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this.userAge}`);
//     }
//     getAge() {
//         return this.userAge;
//     }
//     setAge(age) {
//         if(typeof age ==='number' && age > 0 && age < 110) {
//             this.userAge = age;
//         } else {
//             console.log('Wrong value');
//         }
//     }
// }
// const ivan = new User('Ivan', 27);
//* ivan.userAge = 99;

// ivan.say();
//! показано, что в классах используеться другой синтаксис. 
//! Мы опять "открыли" наше свойство, инкапсуля для классов работает иначе.


// class User {
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя: ${this.name}, возраст: ${this._age}`);
//     }
//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         if(typeof age ==='number' && age > 0 && age < 110) {
//             this._age = age;//*_age - обозначение свойства, которое должно быть скрыто
//         } else {
//             console.log('Wrong value');
//         }
//     }
// }
// const ivan = new User('Ivan', 27);
// console.log(ivan.age);//* запуск геттера - 27

// ivan.age = 99; //*запуск сеттера - 99
// console.log(ivan.age);
// ivan.say();
//! создали имитацию инкапсуляции. Это имитация, потому что 
//! если обратится на прямую к переменной с _age тогде инкапсуляция не сработает. 

// class User {
//     constructor (name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     #surename = 'Petrychenko';

//     say() {
//         console.log(`Имя пользователя: ${this.name} ${this.#surename}, возраст: ${this._age}`);
//     }
//     get age() {
//         return this._age;
//     }
//     set age(age) {
//         if(typeof age ==='number' && age > 0 && age < 110) {
//             this._age = age;//*_age - обозначение свойства, которое должно быть скрыто
//         } else {
//             console.log('Wrong value');
//         }
//     }
// }
// const ivan = new User('Ivan', 27);
// console.log(ivan.surename);// undefined
// console.log(ivan.#surename);// ошибка


// ivan.say();
//!новые еще не официальный синтаксис. (surename). на данный момент работает только в хроме
//! Который позволяет записать свойство в конструктор,
//! которое не будет менятсяв зависимости о аргументов, ктороые приходят в класс
//? Методы которые записаны в классах мы теперь можем задать в виде стрелочной 
//? функции, чтобы не терять контекст в некогторых случаях.
//! # - позволяет сделать свойство приватным.

class Auto{
    constructor(engine, type) {
        this._engine = engine;
        this.type = type;
    }

    #wheels = '22';

    pasport(){
        console.log(`Двигатель: ${this._engine} Колеса: ${this.#wheels}Кузов: ${this.type}`);
        
    }

    get engine() {
        return this._engine;
    } 
    set engine(celinders) {
        this._engine = celinders;
    }
}

const bmw = new Auto('v8', 'sidane');

console.log(bmw.engine);
console.log(bmw.engine = 'v6');
bmw.pasport();

//! домашка