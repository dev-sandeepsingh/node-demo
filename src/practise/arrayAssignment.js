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


// Find the Largest and Smallest Element in an Array

const findSmallestAndLargestNumber = (input) => {
    let smallest = input[0];
    let largest = input[0];
    for (i = 0; i < input.length; i++) {
        if (smallest > input[i]) {
            smallest = input[i];
        }
        if (largest < input[i]) {
            largest = input[i];
        }
    }
    return { smallest, largest }
}
const arr1 = [2, 6, 4, 8, 1, 4, 3, 15, -10]
const { smallest, largest } = findSmallestAndLargestNumber(arr1);
console.log(`smallest number ${smallest} and largest number ${largest}`);

// Check if an Array is Sorted
const checkIfArraySorted = (input) => {
    let result = true;
    for (i = 1; i < input.length; i++) {
        if (input[i - 1] > input[i]) {
            console.log(input[i]);
            result = false;
            break;
        }
    }
    return result;
}
const arr2 = [1, 2, 6, 8, 15]
console.log(checkIfArraySorted(arr2));
// Remove Duplicates from an Array with set and loop
const arr3 = [1, 2, 3, 3, 4, 5, 5, 6];
console.log(new Set(arr3));
const removeDuplicate = (input) => {
    const seen = {};
    const result = [];
    for (const num of input) {
        if (!seen[num]) {
            seen[num] = true;
            result.push(num);
        }
    }
    return result;
}
console.log(removeDuplicate(arr3));


// find first non repeating number 
const arr4 = [1, 2, 1, 2,3, 4, 4, 6, 6];
const findFirstNonRepeatingNumber = (input) => {
    for (i = 0; i < input.length; i++) {
        let isUnique = true;
        for (j = 0; j < input.length; j++) {
            if (i !== j && input[i] === input[j]) {
                isUnique = false;
                break;
            }
        }
        if(isUnique){                 
            return input[i];
        }
        
        
    }
    return null;
}
console.log(findFirstNonRepeatingNumber(arr4));

