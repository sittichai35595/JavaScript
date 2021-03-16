function totalVolume(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++){
        let mulTmp = 1;
        arguments[index].forEach((element) => {
            mulTmp *= element;
        });
        sum += mulTmp;
    }
    return sum;
}

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));