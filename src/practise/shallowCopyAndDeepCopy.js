const Person = {
    name: 'Sandeep',
    age: 38,
    address: {
        city: 'Mohali',
        country: 'India'
    }
}

const shallowCopy = Object.assign({}, Person); // we can pass multiple objects to merge in first object and return new object
shallowCopy.name = 'Sandy';
shallowCopy.address.city = 'Chandigarh'; // this will change the city in original object as well
console.log(Person.name);
console.log(Person.address.city);
console.log(shallowCopy.name);
console.log(shallowCopy.address.city);

const deepCopy = JSON.parse(JSON.stringify(Person));
deepCopy.name = 'Jagjeet';
deepCopy.address.city = 'Patiala'; // this will not change the city in original object
console.log(Person.name);
console.log(Person.address.city);
console.log(deepCopy.name);
console.log(deepCopy.address.city);
