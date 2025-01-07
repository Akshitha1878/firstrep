// Question 5: 
// Write a function updateProductInfo that extracts the id and name properties from a 
// product object and then adds new properties (discount and inStock) using the spread 
// operator. 
// Example Input: 
// const product = {id: 101, name: ‘Laptop’, price: 1000, category: 
// Example Output: 
// ‘Electronics’} 
// {id: 101, name: ‘Laptop’, discount: 10, inStock: true} 

function updateProductInfo(){
    const{id,name}=product;
    return{
        ...{id,name},
        discount:10,
        instock:true,
   

    }
    }

    const product={id: 101, name: "Laptop", price: 1000, category: "Electronics"}
    console.log(updateProductInfo(product))
