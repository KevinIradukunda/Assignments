

"use strict";

//Creating the calcTip function
const calcTip = function Tip(bill) {
    const calcBill1 = bill * 15;
    const calcBill2 = bill * 20;
    calcpercentange1 = calcBill1 /100;
    calcpercentange2 = calcBill2 /100;
    if(bill >= 50 && bill <= 300) {
        return calcpercentange1;
    } else {
        return calcpercentange2;
    }

}


let bills = [20,130,60];
const tips = [];
let addTotips = tips.push(calcTip(bills[0]));
addTotips = tips.push(calcTip(bills[1]));
addTotips = tips.push(calcTip(bills[2]));
const newTipsArray = addTotips;

console.log(newTipsArray);

const total = [];
  let sum = total.push(bills[0] + newTipsArray[0]);
  sum = total.push(bills[1] + newTipsArray[1]);
  sum = total.push(bills[2] + newTipsArray[2]);

  console.log(sum);
