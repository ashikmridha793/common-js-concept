/**
 * Truthy:
 * 1. true
 * 2. any number (positive or negative) will be truthy  other then 0
 * 3. any string is truthy other then empty string
 * 4. '0' is truthy
 * 5. empty object is truthy{}
 * 6. empty array is truthy []
 * Falsy:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */


let x = [23, 2];
console.log(x)
if (x){
      console.log('value of x is true');
}
else{
      console.log('value of x is false');
}

// optional
// check falsy
const y = '';
if (!y){
      console.log('value of y is false')
}

// check truthy
const z = '354'
if(!!z){
      console.log('value of z is true')
}
