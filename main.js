"use strict"


let carWeakMap = new WeakMap();


let key1 = {
  id:1
}


let car1 = {
  make: 'Honda',
  model: 'Civic'
}


let key2 = {
  id:2
}


let car2 = {
  make: 'Toyota',
  model: 'Camry'
}


carWeakMap.set(key1, car1);

carWeakMap.set(key2, car2);



carWeakMap.delete(key1);


console.log(carWeakMap);