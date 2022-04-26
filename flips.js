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
if (flips == null) {
    flip_array[i] = coinFlip();
    if (flip_array[i] == "heads") {
        console.log(flip_array);
        console.log("{ 'heads': 1 }")
    } else {
        console.log(flip_array);
        console.log("{ 'tails': 1 }")
    }
} else {
    const map = countFlips(flip_array)

    console.log(flip_array);
    console.log("{ 'tails': '" + map.get("tails") + "' 'heads': '" + map.get("heads") + "' }")
}

