const List = require('./index.js')

let d0 = 0, d1 = 1, d2 = 2, d3 = 3, d4 = 4;

var passCount = 0;
var failCount = 0;

function pass(bool){
    if(bool){
        passCount += 1;
        return 'pass';
    } else {
        failCount += 1;
        return 'fail';
    }
}

const list = new List(d2);
console.log(pass(
    list.head.data === d2
), `new List(${d2})`);

list.add(d3);
console.log(pass(
    list.head.data === d2 
    && list.head.next.data === d3
),`list.add(${d3})`);

list.add(d1);
console.log( pass(
    list.head.data === d2 
    && list.head.next.data === d3
    && list.head.next.next.data === d1
), `list.add(${d1})`);

list.removeAt(1);
console.log( pass(
    list.head.data === d2 
    && list.head.next.data === d1
),'list.removeAt(1)');

list.add(d0);
console.log( pass(
    list.head.data === d2 
    && list.head.next.data === d1
    && list.head.next.next.data === d0
),`list.add(${d0})`);

list.add(d2);
console.log(pass(
    list.head.data === d2 
    && list.head.next.data === d1
    && list.head.next.next.data === d0
    && list.head.next.next.next.data === d2
), `list.add(${d2})`);

list.remove(d0);
console.log(pass(
    list.head.data === d2 
    && list.head.next.data === d1
    && list.head.next.next.data === d2
    && list.head.next.next.next === null
), `list.remove(${d0})`);

list.removeAt(0);
console.log(pass(
    list.head.data === d1
    && list.head.next.data === d2
    && list.head.next.next === null
),`list.removeAt(0)`);

console.log(pass(
    list.size() === 2
),'list.size()');

list.addAt(1, d0);
console.log(pass(
    list.head.data === d1
    && list.head.next.data === d0
    && list.head.next.next.data === d2
    && list.head.next.next.next === null
), `list.addAt(1, ${d0})`);

console.log( pass(
    list.size() === 3
), 'list.size()');

console.log(`Tests passed ${passCount}/${passCount+failCount}`)
