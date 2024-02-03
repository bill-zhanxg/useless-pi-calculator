/*
    Leibniz formula for π:
    π = 4 - 4/3 + 4/5 - 4/7 + 4/9 - 4/11 + 4/13...∞
*/

let percentFinished = -1;
let denominator = 1;
let sum = 0;
const args = process.argv.slice(2);
const loopTimes = parseInt(args[0]) || 1000000000;

function afterDecimal(num) {
    if (Number.isInteger(num)) return 0;
    return num.toString().split('.')[1].length;
}

for (let i = 0; i < loopTimes; i++) {
    i % 2 === 0 ? sum += 4 / denominator : sum -= 4 / denominator;
    denominator += 2;
    const percent = Math.round(i / loopTimes * 100);
    if (percent !== percentFinished) {
        console.log(`${percent}% Complete`);
        percentFinished = percent;
    }
}

console.log(`Calculated Pi by ${afterDecimal(sum)} decimal places:`)
console.log(sum);