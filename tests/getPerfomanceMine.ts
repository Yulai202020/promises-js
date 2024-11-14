import { getPerfomance } from "../MyFSlib";
import { readFile } from "../MyFSlib";

const my_lib_time = await getPerfomance(readFile, "tmp2.txt");
console.log("mylib run time:",  my_lib_time);