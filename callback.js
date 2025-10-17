function greeting(greetingHandler, name){
      greetingHandler(name)
}

// const name = 'halim mama'
// const number = [35, 45, 55, 65];
// const laptop = {price: 45000, brand: 'lenovo', color: 'silver'};

// greeting(laptop);

function greetingHandler(name){
      console.log('good morning', name)
}
greeting(greetingHandler, 'tom hanks')
greeting(greetingHandler, 'tom brady')
greeting(greetingHandler, 'tom cruise')
greeting(greetingHandler, 'tom holland')