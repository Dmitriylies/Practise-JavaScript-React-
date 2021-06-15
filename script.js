// 'use strict';

// console.log('Запрос данных....');

// const req = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         console.log('Подготовка данных....');
    
//         const product = {
//             name: 'TV',
//             price: 2000,
//         };
        
//         resolve(product);
//     }, 2000);

// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 product.status = 'order';
//                 resolve(product);
//             }, 2000); 
//     });
// }).then(product => { // аргмент продукт может иметь любое название, но он отображает приняттую информацию от прошлого шага.
//     product.modify = true;
//     return product;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Ошибка'); 
// }).finally(() => {
//     console.log('finally');
    
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
    // console.log('All'); 
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});