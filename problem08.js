// Problem 08
function remainingDate(providedDate){

    const currentDate = new Date();

    const givenDate= new Date(providedDate);

    const differenceDate = currentDate - givenDate;

    const remainingDays = Math.floor(differenceDate / (1000*60*60*24))
    return remainingDays;

}

let r='2023-9-29';


console.log("RemaingDays:",Math.abs(remainingDate(r)));

// Output

// RemaingDays: 9