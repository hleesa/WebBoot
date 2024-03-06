const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

const movies = [
    {
        title: 'Amadeus',
        score: 99,
    },
    {
        title: 'Stand By Me',
        score: 85,
    },
    {
        title: 'Paradise',
        score: 95,
    },
    {
        title: 'Alien',
        score: 90,
    },
];

// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// });

// const add =  function (x, y){
//     return x + y;
// }

const add = (x,y) =>{
    return x + y;
}

const square = num => {
    return num * num;
};

// const rollDie = () =>{
//     return Math.floor(Math.random() * 6) + 1;
// }

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
);

const add2 = (a, b) => a + b;

const isEven1 = function (num) {  //regular function expression
    return num % 2 === 0;
};

const isEven2 = (num) => { //arrow function with parens around param
    return num % 2 === 0;
};

const isEven3 = num => { //no parens around param
    return num % 2 === 0;
};

const isEven4 = num => ( // implicit return
    num % 2 === 0
);

const isEven5 = num => num % 2 === 0;



