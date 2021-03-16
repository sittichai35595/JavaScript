const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Number is length ? ", function(num) {
    rl.question("Number is width ? ", function(num1) {
        console.log(`${num} + ${num1} * 2 `);
        console.log(parseInt`${(num + num1) * 2} `)
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});