const List = require('./index.js')

let d0 = 0, d1 = 1, d2 = 2, d3 = 3, d4 = 4;

const list = new List(d2)
console.log(`new List(${d2})`,(
    list.head.data === d2
    ))

list.add(d3)
console.log(`list.add(${d3})`, (
    list.head.data === d2 
    && list.head.next.data === d3
    ))

list.add(d1)
console.log(`list.add(${d1})`, (
    list.head.data === d2 
    && list.head.next.data === d3
    && list.head.next.next.data === d1
    ))

list.print()

list.remove(1)
console.log('list.remove(1)', (
    list.head.data === d2 
    && list.head.next.data === d1
    ))
list.print()