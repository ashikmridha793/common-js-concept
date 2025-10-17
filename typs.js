//    Strong typed Language
// int a = 5;
// string b = 'alim kaklim khalin'
// bool c - true;
// object d = {name: alim. age: 25 id: 10}
// int[] numbers = [1,2,3,4,5,6,7,8,9];
// string[] friends = ['alim', 'kaklim', 'khalin']



// javaScript is a dynamic type programing language

// primitive type
const a = 5; 
const b = 'samsu ar kopay na ekhon';
const c = true;

// non-primitive type
const ages = [45, 25, 35, 55, 65];
const students = {name: 'alim', age: 25, id: 10};

// console.log(typeof a, typeof b, typeof c, typeof ages, typeof students);

let x = 5;
let y = x;
console.log(x, y);
y = 10;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
console.log(p, q);
q.job = 'front end developer';
console.log(p, q);
