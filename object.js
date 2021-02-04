const person = {
    first: 'Yossi',
    last: 'Israel',
    age: '38',
    books: ['tes', 'smt', 'zr']
}
// console.log(person);
//
//
// person.emailAddress = 'yossi@gmail.com';
// console.log(person);
//
// delete person.age;
// console.log(person);

// Object.freeze(person);
// person.emailAddress = 'yossi@gmail.com';


console.log(Object.keys(person));
console.log(Object.values(person));
console.table(Object.entries(person));
// console.clear();