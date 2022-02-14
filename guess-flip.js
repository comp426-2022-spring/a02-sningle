import {coinFlip, coinFlips, countFlips, flipACoin} from "./modules/coin.mjs"
import minimist from "minimist";

const args = minimist(process.argv.slice(2))
args["call"]
const guess = args.call
const map = flipACoin(guess);
if (guess == "heads" | guess == "tails") {
    console.log("{ call: " + map.get("call") + ", flip: " + map.get("flip") + ", result: " + map.get("result") + " }")
}
