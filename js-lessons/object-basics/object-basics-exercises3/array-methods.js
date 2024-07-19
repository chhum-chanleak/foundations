let numbers = [5, 3, 8, 1];

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