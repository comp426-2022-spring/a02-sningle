import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["number"]
const flips = args.number
var i = 0
const flip_array = [];
while (i < flips) {
    flip_array[i] = coinFlip();
    i++;
}


console.log(flip_array);
console.log(countFlips(flip_array))