// setTimeout은 promise를 반환하지 않아서 async/await 가 안먹음
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

class UserStorage {
    async loginUser(id, password) {
        await sleep(2000);
        if ((id === 'jinho' && password === '12') || 
            (id === 'kim' && password === '34')) {
            return id;
        } else
            throw Error('not found');
    }

    async getRoles(user) {
        await sleep(1000);
        if (user === 'jinho')
            return { name:'jinho', role:'admin' };
        else
            throw Error('no access');
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

// loginUser가 먼저 돌고 getRoles가 돌아야되서 어떻게 할까 찾아보니
// node.js에 async.waterfall을 쓰면 promise가 순서대로 돌아가게 할 수 있는 것 같다
userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.id}, you have a ${user.role} role`))
    .catch(console.log);