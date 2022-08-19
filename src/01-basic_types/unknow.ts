let x: unknown;
// the safe any, when u don't know what the tybe will be use unknown
x = 100;
x = 'eriusu';
x = '800'
x = 900;

const y = 10;

if(typeof x === 'number') console.log(x + y)
