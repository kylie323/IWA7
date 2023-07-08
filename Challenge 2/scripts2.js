/* 
const nickname= "Timmy";
const firstname = "Timothy";

console.log("Good Morning, ${nickname} || {firstname}!")
*/

const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
  console.log(`Good Morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good Morning ${firstname}!`);
} else {
  console.log("Good Morning!");
}
