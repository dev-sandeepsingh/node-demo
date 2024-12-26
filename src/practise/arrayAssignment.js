//swap variable with declaring thir variable
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // 10,5

// reserve single  word

const word = 'Hello';

const reverseWord = word.split('').reverse().join('');
console.log(reverseWord);

// reserve multiple words without changing sequence
const secondWord = 'Hello World';
const reverseSecondWord = secondWord.split(' ').map((item) => item.split('').reverse().join('')).join(' ');
console.log(reverseSecondWord);

//reverse full word 
const fullReverseSecondWord = secondWord.split('').reverse().join('');
console.log(fullReverseSecondWord);


// compare two words
const reserveWord = (input) => {
    return input.split('').reverse().join('');
}
console.log('madam' === reserveWord('madam'));


// sorting by item name
const employee = [{
    name: 'Jagjeet',
    age: 34,
    salary: 48000,
}, {
    name: 'Sandeep',
    age: 35,
    salary: 50000,
}, {
    name: 'Aman',
    age: 32,
    salary: 40000,
}, {
    name: 'Tushar',
    age: 33,
    salary: 45000,
}]

console.log(employee.sort((a, b) => a.name.localeCompare(b.name)));// sort by name

console.log(employee.sort((a, b) => a.salary - b.salary));


const findDuplicates = (arr) => {
    const duplicates = [];
    const count = {};

    // Count occurrences of each number
    arr.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });
    console.log(count);
    // Identify duplicates
    for (const num in count) {
        if (count[num] > 1) {
            duplicates.push(Number(num)); // Convert back to a number
        }
    }

    return duplicates;
};

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 7, 3];
const duplicates = findDuplicates(numbers);
console.log(duplicates); // Output: [2, 3]
