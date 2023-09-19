// Problem 01


const allUser = [
    "Vikash",
    "Puspendra",
    "Pankaj",
    "Ayushi",
    "Ruchi",
    "Rishita",
    "Ishika",
    "Priti",
]

function isUserPresent(userName){
    if(allUser.includes(userName)){
        console.log(`Yes , ${userName} is a valid user.`)
        return true;
    }
    else{
        console.log(`No, ${userName} is not a valid user.`)
        return false;
    }   
}


isUserPresent("Ayushi");

isUserPresent("Vikash")

isUserPresent("Ruchi")

isUserPresent("Priti")

isUserPresent("Ishika")

isUserPresent("Deepali")


// Output
// Yes , Ayushi is a valid user.
// Yes , Vikash is a valid user.
// Yes , Ruchi is a valid user.
// Yes , Priti is a valid user.
// Yes , Ishika is a valid user.
// No, Deepali is not a valid user.