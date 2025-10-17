/**
 *  8 ways to get undefined
 * 
 * 1. variable thay is not initialized will give you undefined
 * 2. function with no return will give undefined
 * 3. parameter that is not passed will give undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that does not exist on an object will gibe you undefined 
 * 6. accessing array element outside of the index range will give you undefined 
 * 7. deleting an element inside an array will give you undefined 
 * 8. set a value directly to undefined 
 */
let first ;

function second(a, b){
      const total = a + b;
}

const result = second();

function third(a, b, c, d){
      const total = a + b + c + d;
      // console.log(a, b, c, d);
}

third(2, 5);
// console.log(result)

function noNegative(a, b){
      if(a < 0 || b < 0){
            return
      }
      return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

const fifth  = {id: 2, name: 'abul', job: 'doctor'}
// console.log(fifth.id, fifth.salary)
const sixth = [3, 5, 8, 6, 9];
//  you should not do this . Inside use splice method
delete sixth[2];
// console.log(sixth[2], sixth[6], sixth[100]);
// console.log(sixth);


const seventh = undefined;
const eighth = null;
const data = {result: [], updated: null}

// console.log(typeof undefined);
console.log(typeof null);