const set = new Set();
set.add(1);
set.add(true);
set.add('Sandeep');
set.add('Sandeep');
set.add({name:'sandeep'});
set.add({name:'sandeep1'});
set.add({name:'sandeep1'});

// set.forEach((v,k)=>{
//     console.log(k);
// });

console.log(set);
set.delete({name:'sandeep1'});
set.delete(1);
//console.log(set);

//convert set into array 
console.log([...set]);
