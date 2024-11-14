import { getPerfomance } from "../MyFSlib";

const file = Bun.file("tmp.txt");

async function readFile_bun() {
    await file.text();
}

const bun_time = await getPerfomance(readFile_bun);
console.log("bun run time readFile_bun:",  bun_time);