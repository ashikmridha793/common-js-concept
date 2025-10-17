function kitchen(){
      let roast = 0;
      return function(){
            roast++;
            return roast;
      }
}

const firstServar = kitchen();
console.log(firstServar());
console.log(firstServar());
console.log(firstServar());
console.log(firstServar());
