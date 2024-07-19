// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const parisBoulevards = ['Boulevards of Paris', 'City walls of Paris', "Boulevard de l'Hôpital", "Boulevard des Italiens", 'Boulevard de Strasbourg', 'Boulevard Raspail', 'Boulevard Auguste-Blanqui', 'Boulevard de la Zone'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

const getBornIn1500s = (arr) => {
  let birthYears = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].year >= 1500 && arr[i].year < 1600) {
      birthYears.push(arr[i]);
    }
  }
  return birthYears;
};

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => {
  return {
    first: inventor.first,
    last: inventor.last,
  };
});

const getFullNames = (arr) => {
  let fullNames = [];

  for (let i = 0; i < arr.length; i += 1) {
    fullNames.push({
      first: arr[i].first,
      last: arr[i].last
    });
  };
  return fullNames;
};

// Array.prototype.sort()
// 3. Sort the inventors by birth date, oldest to youngest
const sortedBirthDates = inventors.sort((a, b) => a.year - b.year);
// Get ages from inventors
const getAges = (arr) => {
  let ages = [];

  for (let i = 0; i < arr.length; i += 1) {
    ages.push(arr[i].passed - arr[i].year);
  }
  return ages;
};
// Get the minimum number
const getMin = (arr) => {
  let min = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (min < arr[i + 1]) {
      min = min;
    } else if (min > arr[i + 1]) {
      min = arr[i + 1];
    }
  }
  return min;
};
// Get the maximum number
const getMax = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (max > arr[i + 1]) {
      max = max;
    } else if (max < arr[i + 1]) {
      max = arr[i + 1];
    }
  }
  return max;
};

// Get date of births of inventors
const getDateOfBirths = (arr) => {
  let dateOfBirths = [];

  for (let i = 0; i < arr.length; i += 1) {
    dateOfBirths.push(arr[i].year);
  }
  return dateOfBirths;
};

// Sort the inventors by birth date, oldest to youngest
const sortDateOfBirth = (arr) => {
  let tempArr = [];
  const dateOfBirths = getDateOfBirths(arr);

  for (let i = 0; i < arr.length; i += 1) {
   if (arr[i].year === getMin(dateOfBirths)) {
    tempArr.push(arr.splice(i, 1)[0]);
    dateOfBirths.splice(i, 1);
    i = -1;
   }
  }
  arr.splice(0, 0, ...tempArr);
  return arr;
};

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sumAges = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
};
sumAges(getAges(inventors)); // 361
// Combined age of inventors
const combinedAge = getAges(inventors).reduce((acc, cur) => acc + cur, 0);

// 5. Sort the inventors by years lived
// Create a new array of inventors with ages
const getInventorsWithAge = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArr.push({
      first: arr[i].first,
      last: arr[i].last,
      age: arr[i].passed - arr[i].year,
    });
  }
  return newArr;
};

const sortOldToYoung = (arr) => {
  let tempArr = [];
  const ages = getAges(arr);

  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i].passed - arr[i].year) === getMax(ages)) {
      tempArr.push(arr.splice(i, 1)[0]);
      ages.splice(i, 1);
      i = -1;
    }
  }
  arr.splice(0, 0, ...tempArr);
  return arr;
};

const sortedAges = getInventorsWithAge(inventors).sort((a, b) => a.age - b.age);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevardsHaveDe = parisBoulevards.filter(boulevard => boulevard.includes('de'));
// Get boulevards of Paris which contain 'de' in the names
const getBoulevardsHaveDe = (arr) => {
  let boulevardsHaveDe = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].includes('de')) {
      boulevardsHaveDe.push(arr[i]);
    }
  }
  return boulevardsHaveDe;
};

// 7. sort Exercise
// Sort the people alphabetically by last name

// Convert name to an array of first name and last name
const convertToFirstLast = (arr) => {
  let firstLastArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    firstLastArr.push(arr[i].split(', '));
  }
  return firstLastArr;
};

// Flatten 2D array
const flatten2DArray = (arr) => {
  let flattenedArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    flattenedArr.push(arr[i].join(', ')); 
  }
  return flattenedArr;
};

// Sort people by last name
const sortByLastName = (arr) => {
  const convertedArr = flatten2DArray(convertToFirstLast(arr)
  .sort((a, b) => a[1].localeCompare(b[1])));
  return convertedArr;
};

const sortedLastNames = convertToFirstLast(people)
.sort((a, b) => (a[1].localeCompare(b[1])));

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// Count instances of each unique items
const getInstanceCount = (arr) => {
  const uniqueArr = [...new Set(arr)];
  let typeCount = [];

  // Create an array of objects
  for (let i = 0; i < uniqueArr.length; i += 1) {
    typeCount.push({
      type: uniqueArr[i],
      count: 0,
    });
    
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] === uniqueArr[i]) {
        typeCount[i].count += 1;
      }
    }
  }
  return typeCount;
};

// Sum the instance count
const sumCount = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i].count;
  }
  return sum;
};

// Sum the instance count V2
const totalCount = getInstanceCount(data)
.map(item => item['count'])
.reduce((acc, cur) => acc + cur, 0);

