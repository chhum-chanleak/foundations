// Object constructor
let user = new Object();
// Object literal
let user2 = {
  name: 'John', 
  age: 30
};

// Get property values of the object:
console.log(user2.name);
console.log(user2.age);

// Set a property isAdmin: true and add it to user2
user2.isAdmin = true;
console.log(user2.isAdmin);

// Remove the property 'age' from user2
delete user2.age;
console.log(user2.age);

// Multi-word property name must be in quotes
let user3 = {
  name: 'John3',
  age: '33',
  'likes birds': true,
};

console.log(user3['likes birds']);

// Using brackets for multi-word property name
let user4 = {};
// Set
user4['likes cats'] = true;
// Get
console.log(user['likes cats']);
// Remove
delete user['likes cats'];

// Access by variable
let user5 = {
  name: 'John5',
  age: 30,
};
let key = prompt('What do you want to know about the user? : ', 'name');

console.log(user5[key]);

// Computed properties
let fruit = prompt('Which fruit to buy?', "apple");
let bag = {
  [fruit]: 5,
};

console.log(bag.apple);
console.log(bag.banana);

let fruit2 = prompt('Which fruit to buy?', "apple");
let bag2 = {};

bag2[fruit2] = 6;

console.log(bag2[fruit2]);

// More complex expressions inside square brackets
let fruit3 = 'apple';
let bag3 = {
  [`${fruit3}Computers`]: 10,
};

console.log(bag3[`${fruit3}Computers`]);
console.log(bag3.appleComputers);

// Property value shorthand
const makeUser = (name, age) => {
  return {
    name, // same as name: name
    age, // same as age: age
  };
};

let user6 = makeUser('John6', 36);
console.log(`${user6.name} ${user6.age}`);

// Property names limitations
// These properties are all right
let obj = {
  for: 2,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return);

let obj2 = {
  0: 'test',
};

console.log(obj2[0]);
console.log(obj2['0']);

// a special property named __proto__. We can’t set it to a non-object value:
obj2.__proto__ = 2;
console.log(obj2.__proto__); // // [object Object] - the value is an object, didn't work as intended

// Property existence test, “in” operator
let user7 = {};
console.log(user7.noSuchProperty === undefined); // true
// Using operator 'in' to check whether a certain property exist inside an object
console.log('0' in user7); // false

// The 'for...in' loop
let user8 = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user8) {
  console.log(key);
  console.log(user8[key]);
}

// All integer properties are sorted
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  console.log(code) // 1, 41, 44, 49
}




