// Objects
const user = {};
user.name = 'John';
user['surname'] = 'Smith';
user.name = 'Pete';
delete user['name'];

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// Check for emptiness
const isEmpty = (obj) => {
  for (let prop in obj) {
    return false;
  }
  return true;
};
isEmpty(user); // false

// Get salaries from people
const getSalaries = (obj) => {
  let salaries = [];

  for (let prop in obj) {
    salaries.push(obj[prop]);
  }
  return salaries;
};
// Sum object properties
const sumSalaries = (obj) => {
  const salaries = getSalaries(obj);
  let sum = 0;

  for (let i = 0; i < salaries.length; i += 1) {
    sum += salaries[i];
  }
  return sum;
};

sumSalaries(salaries); // 390

// Multiply numeric property values by 2
const multiplyNumeric = (obj) => {

  for (let prop in obj) {
    if (typeof(obj[prop]) === 'number') {
      obj[prop] = obj[prop] * 2;
    }
  }
  return obj;
};
