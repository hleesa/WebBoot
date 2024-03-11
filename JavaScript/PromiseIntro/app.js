const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure("Connection Timeout :(");
        } else {
            success(`Here is your fake date from ${url}`);
        }
    }, delay);
};

// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject("Connection Timeout :(");
//             } else {
//                 resolve(`Here is your fake date from ${url}`);
//             }
//         }, delay);
//     });
// };

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED! ", response);
//         fakeRequestCallback('bokks.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!", response);
//                 fakeRequestCallback('bokks.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req) !", response);
//                     }, function (err) {
//                         console.log("ERROR (3rd req)!", err);
//                     });
//             }, function (err) {
//                 console.log("ERROR (2nd req)!", err);
//             });
//     }, function (err) {
//         console.log("ERROR! ", err);
//     });

fakeRequestPromise('x.com/api/page1')
    .then(() => {
        console.log("IT WORK! (page1)");
        fakeRequestPromise('x.com/api/page2')
            .then(() => {
                console.log("IT WORK! (page2)");
                fakeRequestPromise('x.com/api/page3')
                    .then(() => {
                        console.log("IT WORK! (page3)");
                    })
                    .catch(() => {
                        console.log("OH NO, ERROR (page3)");
                    });
            })
            .catch(() => {
                console.log("OH NO, ERROR (page2)");
            });
    })
    .catch(() => {
        console.log("OH NO, ERROR (page1)");
    });
