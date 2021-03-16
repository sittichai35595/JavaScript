function add() {
    console.log(arguments);
    var sum = 0;
    for (var i = 0; i < arguments.length;i++){
        sum += arguments[i];
        }
    return sum;
}

console.log(add(3,4,7),(3,4,7,10,20));
console.log(add(3,4,7,10,20));
console.log(add(3,4,4,8));
