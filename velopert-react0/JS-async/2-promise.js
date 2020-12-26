// Promise 이전 콜백지옥
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1; // +1 증가
        console.log(increased);
        if (callback) {
            callback(increased)
        }
    }, 1000) // 1초 뒤에 함수 실행
}

increaseAndPrint(0, n=> {
    increaseAndPrint(n, n=>{
        increaseAndPrint(n, n=> {
            increaseAndPrint(n, n=> {
                increaseAndPrint(n, n=> {
                    console.log('작업 끝!');
                })
            })
        })
    })
});

// Promise
const myPromise = new Promise((resolve, reject) => { // 성공: resolve, 실패: reject
    setTimeout( () => {
        // resolve('result');
        reject(new Error());
    }, 1000)
});

myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
})


function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log((value));
            resolve(value);
        }, 1000);
    })
}