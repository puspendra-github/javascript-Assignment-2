// Problem 09

function uniqueCharChecks(inputString){
    let charSet = new Set();

    for(let char of inputString){
        if(charSet.has(char)){
            console.log("The input string contains duplicates")
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string does not contains duplicates")
    return true;
   
}

uniqueCharChecks("Ayushi")

uniqueCharChecks("Vikash")

uniqueCharChecks("Jai Shree Ram")

uniqueCharChecks("Jai Shree krishna")

// Output

// The input string does not contains duplicates
// The input string does not contains duplicates
// The input string contains duplicates
// The input string contains duplicates