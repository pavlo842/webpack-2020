async function start() {
    return await Promise.resolve('async is working');
}

start().then(console.log);

const unused = 42;

console.log(unused);

class Util {
    static date = Date.now();
}

console.log('Util - Date', Util.date);
