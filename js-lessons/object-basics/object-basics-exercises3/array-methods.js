let numbers = [5, 3, 8, 1];
let numbers2 = [5, 2, 1, -10, 8];
let techs = ["HTML", "JavaScript", "CSS"];
let john = {name: "John", surname: "Smith", age: 25, id: 1};
let pete = {name: "Pete", surname: "Hunt", age: 30, id: 2};
let mary = {name: "Mary", surname: "Key", age: 28, id: 3};
let users = [john, pete, mary];
let users2 = [john, pete, mary];
let names2 = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// Convert kebab-case to camelCase
const camelize = (str) => {
  // Convert string to lowercase then to array
  const convertedStr = str.toLowerCase().split('-');
  let capitalizedArr = [];
  console.log(convertedStr);
  // Capitalize items start from second index
  for (let i = 0; i < convertedStr.length; i +=1) {
    if (i > 0) {
      capitalizedArr.push(convertedStr[i][0].toUpperCase() + convertedStr[i].slice(1));
    } else {
      capitalizedArr.push(convertedStr[i]);
    }
  }
  return capitalizedArr.join('');
};

// Convert kebab-case to camelCase (version 2)
const camelizeV2 = (str) => {
  const convertedStr = str.toLowerCase().split('-');
  const capitalizedArr = convertedStr.map((item, index)=> {
    return (index > 0) ? item[0].toUpperCase() + item.slice(1) : item;
  });
  return capitalizedArr.join('');
}; 

// Return an array of values which are higher or equal to 'a' and lower or equal to 'b' from a certain 'array'
const filterRange = (arr, a = 1, b = 2) => {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i] >= a) && (arr[i] <= b)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// filter Range (version 2)
const filterRangeV2 = (arr, a = 1, b = 2) => {
  const filteredArr = arr.filter(item => {
    return ((item >= a) && (item <= b)) && item;
  })
  return filteredArr;
};

// Sort in decreasing order
const sortDescending = (arr) => {
  let tempArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === getMax(arr)) {
      tempArr.push(arr.splice(i, 1)[0]);
      i = -1;
    }
  }
  arr.splice(0, 0, ...tempArr);
  return arr;
};

// Sort in decreasing order (version 2)
const sortedDescending = numbers2.sort((a, b) => b - a);

// Copy and sort an array of strings
const copyAndSort = (arr) => {
  let copiedArr = arr.slice();
  const sortedArr = copiedArr.sort((a, b) => a.localeCompare(b));

  return sortedArr;
};

// Map to names
const getNames = (arr) => {
  let names = [];

  for (let i = 0; i < arr.length; i += 1) {
    names.push(arr[i].name);
  }
  return names;
};

// Map to names (version 2)
const names = users.map(user => user.name);

// Map to objects
const getFullNameIds = (arr) => {
  let fullNameIds = [];

  for (let i = 0; i < arr.length; i += 1) {
    fullNameIds.push({
      fullName: `${arr[i].name} ${arr[i].surname}`,
      id: arr[i].id
    })
  }
  return fullNameIds;
};

// Map to objects (version 2)
const fullNameIds = users.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  };
});

// Sort users by age
const sortByAge = (arr) => {
  let ages = [];
  let tempArr = [];
  // Get ages from users
  for (let i = 0; i < arr.length; i += 1) {
    ages.push(arr[i].age);
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].age === getMax(ages)) {
      tempArr.push(arr.splice(i, 1)[0]);
      ages.splice(i, 1);
      i = -1;
    }
  }
  arr.splice(0, 0, ...tempArr);
  return arr;
};

// Sort users by age (version 2)
const sortedByAge = users2.sort((a, b) => b.age - a.age);

// Get average age 
const getAverageAge = (arr) => {
  let average = 0;

  for (let i = 0; i < arr.length; i += 1) {
    average += arr[i].age;
  }
  return Math.round(average / arr.length);
};

// Get average age (version 2)
const average = Math.round(users.map(user => user.age).reduce((acc, cur) => acc + cur, 0) / users.length);

// Filter an array and return an array of unique values
const getUnique = (arr) => {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (!(filteredArr.includes(arr[i]))) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// Filter an array and return an array of unique values (version 2)
const uniqueArr = [...new Set(names2)];

// Create keyed object from array
const groupById = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push({
      [`${arr[i].id}`]: {
        ...arr[i],
      }
    });
  }
  return newArr;
};

// Create keyed object from array (version 2)
const groupByIdV2 = users.map(user => {
  return {
    [`${user.id}`]: {
      ...user,
    }
  };
});
