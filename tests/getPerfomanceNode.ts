import { getPerfomance } from "../MyFSlib";
import fs from "node:fs";

const fsPromises = fs.promises;

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const name = getRandomInt(1000) + ".txt";

fs.open( name, 'w', function (err, file) {
    if (err) throw err;
});

const node_lib_time = await getPerfomance(fsPromises.readFile, name);

console.log(node_lib_time)

fs.unlink(name, () => {});