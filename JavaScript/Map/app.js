const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11];

const doubles = numbers.map(function(num){
    return num * 2;
})

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

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
});