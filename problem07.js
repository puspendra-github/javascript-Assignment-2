// Problem 07


function generateOtp(){
    const min= 1000;
    let max= 9999;
    let OTP= Math.floor(Math.random() * (max - min + 1))+ min

    return OTP;
}

console.log(`Here is your OTP: ${generateOtp()}`)

// Output
// Here is your OTP: 6180

// Here is your OTP: 8186

// Here is your OTP: 6400

// Here is your OTP: 7585