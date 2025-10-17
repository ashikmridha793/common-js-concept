// print5();
console.log(print10)
print10();

for(let i = 0; i <= 5; i++){
      console.log(i);
}
console.log('the value of outside i is', i)

function print5(){
      console.log('inside print5',5);
}
var print10 = function(){
      console.log('inside pint10' ,10)
}