let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();

let promise = new Promise((resolve, reject) => {

  if ((hour === 8 && min >= 30) || (hour > 8 && hour < 12) || (hour === 12 && min < 30)) {
    resolve("Do'kon ochiq");
  }
  
  else if ((hour === 12 && min >= 30) || (hour === 13 && min < 30)) {
    resolve("Abet vaqti");
  }
 
  else if ((hour === 13 && min >= 30) || (hour > 13 && hour < 21) || (hour === 21 && min < 30)) {
    resolve("Do'kon ochiq");
  }
  else {
    reject("Do'kon yopiq");
  }
});

promise
  .then(data => console.log(data))
