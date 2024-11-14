import fs from "node:fs";
import { getPerfomance } from "../MyFSlib";

const fsPromises = fs.promises;

const node_lib_time =  await getPerfomance(fsPromises.readFile, "tmp1.txt");
console.log("node lib run time:",  node_lib_time);