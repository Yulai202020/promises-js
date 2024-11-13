import { getTime } from "./MyFSlib";
import { mkdir, rmdir, readDir } from "./MyFSlib";

getTime(mkdir, "tmp").then((time) => {
    console.log(time);
    readDir(".").then((files) => {
        console.log(files);
        getTime(rmdir, "tmp").then((time) => {
            console.log(time);
        }).catch((err) => {});
    })
}).catch((err) => {});

