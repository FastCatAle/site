function min(num1, num2) {
    let minNum;
    if (num1 < num2) {
        minNum = num1;
    } else {
        minNum = num2;
    }
    return minNum;
}

console.log(min(0, 10));
console.log(min(0, -10));
