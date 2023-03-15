// async & await
// clear style of using promise

// 1. async -> 자동으로 Promise로 바뀜
async function fetchUser() {
    // do network request in 10 secs...
    return 'jinho';
}

const user = fetchUser();
user.then(console.log);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getA() {
    // delay 끝날 때까지 기다림
    await delay(1000);
    return 'A';
}

// function getB() {
//     return delay(3000)
//     .then(() => 'B');
// }

async function getB() {
    await delay(2000);
    return 'B';
}

// function pickAB() {
//     return getA()
//     .then(a => {
//         return getB()
//         .then(b => `${a} + ${b}`);
//     })
// }

async function pickAB() {
    // 3초 걸림
    // const a = await getA();
    // const b = await getB();
    // return `${a} + ${b}`;

    // 2초 걸림
    const aPromise = getA();
    const bPromise = getB();
    const ap = await aPromise;
    const bp = await bPromise;
    return `${ap} + ${bp}`;
}

pickAB().then(console.log);

// 3. useful Promise APIs
// all -> 모든 프로미스가 배열로 받아짐 (병렬)
function pickAll() {
    return Promise.all([getA(), getB()])
    .then(arr => arr.join(' * '));
}
pickAll().then(console.log);

// rece -> 제일 먼저 반환된 프로미스만 반환
function pickOnlyOne() {
    return Promise.race([getA(), getB()])
}
pickOnlyOne().then(console.log);