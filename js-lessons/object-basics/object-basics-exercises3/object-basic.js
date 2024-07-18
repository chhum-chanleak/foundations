// Object literal
const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log('Meow!');
  }
}
const catName = cat['name'];

cat.greeting(); // 'Meow';
cat['color'] = 'black';

// Object literal(2)
const bandInfo = {
  name: 'The Beatles',
  nationality: 'English',
  genre: 'Rock',
  member: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
  formed: 1960,
  split: 'Unknown',
  album: [
    {
      name: 'Please Please Me',
      release: 1963
    },
    {
      name: 'With The Beatles',
      release: 1963
    },
  ],
};

// Object literal(3)
const cat2 = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}
const cat3 = {
  name : 'Moon',
  breed : 'Tabby',
  color : 'Mixed',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}