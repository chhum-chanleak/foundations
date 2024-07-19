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
