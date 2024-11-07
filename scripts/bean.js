function countBs(word){
    let counter = 0;
    for (let i = 0;i <= word.length;i++){
        if (word[i] == "B"){
            counter += 1;
        }
    }
    return counter;
}

function countChar(word, char){
    let counter = 0;
    for (let i = 0;i <= word.length;i++){
        if (word[i] == char){
            counter += 1;
        }
    }
    return counter;
}

console.log(countBs("BOB"))
console.log(countChar("kakkerlak", "k"))
