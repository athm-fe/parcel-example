import main from './main';

main();

document.getElementById('root').innerHTML = 'hello word';

var a = { a: 1};
var b= {b: 2}

var c = {c: 3, ...a, ...b }
console.log(c);


async function abc(url, args) {
  const data = await 1;

  return data;
}

abc().then(data => console.log(data));
