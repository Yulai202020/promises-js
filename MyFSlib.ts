import fs, { Stats } from "node:fs";

const fsPromises = fs.promises;

// file

export function access(filename: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.access(filename, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export function open(filename: string, type: string): Promise<string|number> {
    return new Promise((resolve, reject) => {
        fs.open(filename, type, (err, file) => {
            if (err) {
                reject(err);
            } else {
                resolve(file);
            }
        });
    });
}

export function appendFile(filename: string, text: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, text, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export function readFile(filename: string, text: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, text, (err:string, data:string) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export function writeFile(filename: string, text: string, encoding: string = 'utf-8'): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, text, encoding, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export function unlink(path: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function rename(oldpath: string, newpath: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.rename(oldpath, newpath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function stat(path: string): Promise<string|Stats> {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stat) => {
            if (err) {
                reject(err);
            } else {
                resolve(stat);
            }
        });
    })
}

export function lstat(path: string): Promise<string|Stats> {
    return new Promise((resolve, reject) => {
        fs.lstat(path, (err, stat) => {
            if (err) {
                reject(err);
            } else {
                resolve(stat);
            }
        });
    })
}

export function copyFile(src: string, dest: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.copyFile(src, dest, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function link(path: string, newPath: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.link(path, newPath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function symlink(target: string, path: string, type: string = "file"): Promise<string|void>  {
    return new Promise((resolve, reject) => {
        fs.symlink(target, path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function readlink(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readlink(path, (err, linkString) => {
            if (err) {
                reject(err);
            } else {
                resolve(linkString);
            }
        });
    })
}

// chmod chown

export function chmod(file: string, mode: number): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.chmod(file, mode, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function chown(file: string, gid: number, uid: number): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.chown(file, gid, uid, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function lchmod(file: string, mode: number): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.lchmod(file, mode, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function lchown(file: string, gid: number, uid: number): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.lchown(file, gid, uid, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

// dir

export function rmdir(dir: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.rmdir(dir, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function mkdir(dir: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export function mkdtemp(prefix: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.mkdtemp(prefix, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

export function readDir(dir: string): Promise<string|string[]> {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    })
}

export function truncate(path: string): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.truncate(path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export function utimes(path: string, atime: number, mtime: number): Promise<string|void> {
    return new Promise((resolve, reject) => {
        fs.utimes(path, atime, mtime, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
}

export async function getTime(fn: Function, ...args: any[]): Promise<number> {
    const start = performance.now();

    await fn(...args);

    const end = performance.now();
    const delta = end - start;

    return delta;
}