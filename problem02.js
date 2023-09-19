// Problem 02 



function calculateTotalValue(){
    let totalValue = 0
    for(let i=0;i<arguments.length; i++){
        totalValue+=arguments[i]; 
    }   
    console.log(`The total cart value is ${totalValue}`);
    return totalValue; 
}

calculateTotalValue(100,20,60,900)



// Output

// The total cart value is 1080
