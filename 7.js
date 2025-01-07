// Given the following object with nested objects: 
// const person = {name: ‘Alice’, address: {street: ‘123 Main St’,  
// city: ‘Los Angeles’, zip: ‘90001’}, age: 25}; 
// Use object destructuring to extract the street and city from the nested address 
// object.

const person={
    name: 'Alice',
    address:{
        street: '123 Main St',
        city: 'Los Angeles',
        zip: '90001'
        },
        age: 25
        }
        const {address:{street,city}}=person;
        console.log(street,city); 

