import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["number"]
const flips = args.number
var i = 0
const flip_array = [];
while (i < flips) {
    flip_array.push(coinFlip());
    i++;
}

const arr = coinFlips(flips)
console.log(arr)
console.log(countFlips(arr))

