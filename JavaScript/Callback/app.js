// setTimeout(() => {
//     document.body.style.background = 'red';
//     setTimeout(() => {
//         document.body.style.background = 'orange';
//         setTimeout(() => {
//             document.body.style.background = 'yellow';
//         }, 1000);
//     }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);

};

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow ', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                });
            });
        });
    });
});

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        //if it work, run this:
    }, () => {
        //if it doesn't work, run this:
    });
}, () => {
    //if API is down, or request failed
});