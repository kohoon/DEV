var hello = "hello";
let hello2 = "hello2";
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1 sec");
    }, 1000);
})
timeoutPromise.then(console.log);
import add from './hello';
add(1, 2);
const value = add(1, 2);
console.log(value);
