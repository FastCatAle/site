function isEven(num) {
    if (num < 2) {
        return num % 2 == 0;
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-3))
