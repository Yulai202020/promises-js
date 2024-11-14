// const proc1 = Bun.spawn(["bun", "getPerfomanceBun.ts"]);
// const proc2 = Bun.spawn(["bun", "getPerfomanceMine.ts"]);
// const proc3 = Bun.spawn(["bun", "getPerfomanceNode.ts"]);

// const text2 = await new Response(proc2.stdout).text();
// const text3 = await new Response(proc3.stdout).text();

// await completion

console.log('Bun:');

for (let i = 0; i < 10; i++) {
     
    const proc = Bun.spawn(["bun", "getPerfomanceBun.ts"]);

    const text = await new Response(proc.stdout).text();
    console.log(text); 

    // count += text1;
    await proc.exited;
}

console.log('Node:');

for (let i = 0; i < 10; i++) {
     
    const proc = Bun.spawn(["bun", "getPerfomanceNode.ts"]);

    const text = await new Response(proc.stdout).text();
    console.log(text); 

    // count += text1;
    await proc.exited;
}

console.log('My lib:');

for (let i = 0; i < 10; i++) {
     
    const proc = Bun.spawn(["bun", "getPerfomanceMine.ts"]);

    const text = await new Response(proc.stdout).text();
    console.log(text); 

    // count += text1;
    await proc.exited;
}