
// Create a function calculateTotal that takes an arbitrary number of numeric values 
// (using the rest operator) and returns their sum. 
// Example Input: 
// calculateTotal (10, 20, 30, 40) 
// Example Output: 
// 100

function calculateTotal(...num){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    return sum;

}
console.log("The sum of nums is: " +calculateTotal(10,20,30));