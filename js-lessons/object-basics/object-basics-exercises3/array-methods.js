let numbers = [5, 3, 8, 1];
let numbers2 = [5, 2, 1, -10, 8];
let techs = ["HTML", "JavaScript", "CSS"];
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};
let users = [john, pete, mary];

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