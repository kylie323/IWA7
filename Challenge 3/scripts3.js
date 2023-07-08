/*
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)
*/

const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "----------------------------------";

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = ` ${leoName} ${leoSurname.substring(0, 8)} (Owed R ${
  leoBalance * -1
})`;
const sarah = `${sarahName.substring(0, 5)} ${sarahSurname} (Owed R ${(
  sarahBalance * -1
).toFixed(2)})`;
const total = `Total amount owed:  ${
  parseFloat(leoBalance * -1) + parseFloat((sarahBalance * -1).toFixed(2))
}`;
const result = `${leo}\n ${sarah}\n ${divider}\n ${total}\n ${divider}`;

console.log(result);

//substring to remove blank spaces from string
//*-1 to become positive
//Parsefloat for decimal number
//tofixed for allocated decimal points.
