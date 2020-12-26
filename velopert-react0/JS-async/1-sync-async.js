// Synchronous
function work() {
    const start = Date.now(); // JS 내장함수 : 현재 날짜를 숫자로 반환
    for (let i, i < 1000000000; i++) {
    
    }
    const end = Date.now();
    console.log(end - start + 'ms');  // 1000ms = 1초
}

work();
console.log('다음 작업');

// Asynchronous
function work(callback) {
    setTimeout(() => {
        const start = Date.now(); 
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start)
    }, 0) // setTimeout(함수, 시간), "시간만큼 지난 후에 실행하겠다."
}
console.log('작업 시작!');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요.');
});
console.log('다음 작업');

