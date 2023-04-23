let submit = document.getElementById("submit");
let output = document.getElementById("output");

submit.addEventListener("click", () => {
// creates date object from the input
  let date1 = new Date(document.getElementById("date-1").value);
  let date2 = new Date(document.getElementById("date-2").value);
  console.log(date1, date2);

// validates the difference when valid
  if(date1.getTime() && date2.getTime() ){
    // gets the difference using getTime function
    let timeDifference = date2.getTime() - date1.getTime();
    
    //formula to convert into days
    let dayDifference = Math.abs(timeDifference / (1000 * 3600 * 24));
    output.innerHTML = `Difference: <span>${dayDifference} days</span`;
  }

  else {
    output.innerHTML = "Please select valid date";
  }
});