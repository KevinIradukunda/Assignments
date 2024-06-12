
//create an arrow function for calculating the average of scores

const calcAverage = (marks1, marks2, marks3) => {
    const addMarks = marks1 + marks2 + marks3;
    const result = addMarks / 3;
    return result;
}
console.log(calcAverage(20, 15, 18));

//creating the variables marksdophines&marksKoalas and assign calcaverage to it!

const marksDophines = calcAverage(30, 20, 8);
const marksKoalas = calcAverage(50, 5, 10);

// this is where the condition of checking who winners and assign the marksdophines&markskoalas to the checkwinner function!

const CheckWinner = function calcWinner(marksDophines, marksKoalas) {
    if(marksDophines > marksKoalas) {
        console.log(`marksDophines is the Winner with the mark of ${marksDophines}`);
    } else if (marksDophines < marksKoalas){
        console.log(`markKoalas is the Winner with the mark of ${marksKoalas}`);
    } else {
        console.log("No Teams Wins!!!");
    }
}

//this is where I'm calling the function and console the function in order to get the results!

const winnerResult = CheckWinner(marksDophines, marksKoalas);
console.log(winnerResult)



