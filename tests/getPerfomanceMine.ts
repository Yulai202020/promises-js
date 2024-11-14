import { getPerfomance } from "../MyFSlib";
import { readFile } from "../MyFSlib";
import fs from "node:fs";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const name = getRandomInt(1000) + ".txt";

fs.open( name, 'w', function (err, file) {
    if (err) throw err;
});

const bun_time = await getPerfomance(readFile, name);

console.log(bun_time)

fs.unlink(name, () => {});