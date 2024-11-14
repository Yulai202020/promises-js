const proc1 = Bun.spawn(["bun", "getPerfomanceBun.ts"]);
const proc2 = Bun.spawn(["bun", "getPerfomanceMine.ts"]);
const proc3 = Bun.spawn(["bun", "getPerfomanceNode.ts"]);

const text1 = await new Response(proc1.stdout).text();
const text2 = await new Response(proc2.stdout).text();
const text3 = await new Response(proc3.stdout).text();

// await completion
await proc1.exited;
await proc2.exited;
await proc3.exited;

console.log(text1)
console.log(text3)
console.log(text2)
