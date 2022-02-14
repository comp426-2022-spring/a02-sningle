import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["number"]
const flips = args.number | 1
var i = 0
const flip_array = [];
while (i < flips) {
    flip_array[i] = coinFlip();
    i++;
}

const map = countFlips(flip_array)

console.log(flip_array);
console.log("{ tails: " + map.get("tails") + ", heads: " + map.get("heads") + " }")