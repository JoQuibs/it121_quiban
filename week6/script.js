// Jomar P. Quiban 
// 05.08.2023
// HW 6
function countToTen(num) {
  if (num >10) {
    return;
   }

  console.log(num);
  countToTen(num +1);
}
countToTen(1);

const outputOne = () => {
  console.log("one");
};

const outputTwo = () => {
  console.log("two");
};

const outputThree = () => {
  console.log("three");
  outputOne();
  outputTwo();
  };

const outputFour = () => {
 console.log("four");
 setTimeout(() => {
  outputOne();
  setTimeout(outputThree, 0 );
 });
};

outputFour();