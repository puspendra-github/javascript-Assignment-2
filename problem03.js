
// Problem 03

const students =[
    {
        name:"Vikash",
        marks:95,
    },
    {
        name:"Ayushi",
        marks:96,
    },
    {
        name:"Ruchi",
        marks:99,
    },
    {
        name:"Rishita",
        marks:98,
    },

    {
        name:"Amisha",
        marks:89
    }
];

function results(name){
    for (let student of students){
        if(student.name===name){
            if(student.marks>90){
                console.log(`Congratulations ${student.name}! You have cleared the exam.`)
            }
            else{
                console.log(`Sorry ! you have not cleared the exam`)
            }
            return ;
        }
       
    }
    
        console.log("Invalid User !!!")
    
}


results("Vikash")

results("Ayushi")

results("abc")

results("Amisha")


// Output

// Congratulations Vikash! You have cleared the exam.
// Congratulations Ayushi! You have cleared the exam.
// Invalid User !!!
// Sorry ! you have not cleared the exam
