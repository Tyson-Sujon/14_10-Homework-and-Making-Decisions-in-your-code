/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let regularTicket = 800;
// let payable;
let age = 30;
let discount;
if (age < 10) {
  console.log("free Ticket");
} else if (age == "students") {
  discount = (regularTicket * 50) / 100;
  let payable = regularTicket - discount;
  console.log(payable);
} else if (age >= 60) {
  discount = (regularTicket * 15) / 100;
  payable = regularTicket - discount;
  console.log(payable);
} else {
  console.log(regularTicket);
}
