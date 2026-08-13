/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let marks = 0;
if (marks <=100) {
  if (marks >= 90) {
  console.log("you got A");
} 
else if (marks >=80) {
  console.log("you got B");
}
else if (marks >=70) {
  console.log("you got C");
}
else if(marks>=60){
  console.log("you got D");
}
else if(marks>=0){
  console.log("you got F");
}
}
else{
  console.log('you are out from score');
  
}


// let marks = 70;
// if (marks <=100) {
  
//   console.log("you got A");

// }else if(marks <=90){
//   console.log("you got A");
// }else if(marks <=89){
//    console.log("you got B");
// }

// else{
//   console.log('you are out from score');
  
// }

