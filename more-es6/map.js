const numbers = [1, 2, 3, 4, 5, 6];

// add 1 to each element

// traditional method
// let temp = [];
// for (let i=0; i<numbers.length; i++){
//     const element = numbers[index];
//     const sum = element + 1;
//     temp.push(sum)
// }
// console.log(temp)

// using maps - araays
const newArray = numbers.map((number) => number + 1);
console.log(newArray);

// maps multiple parameter
const friends = ["rahum", "korim", "hero"];

const newFriends = friends.map((element, index) => {
  console.log(index, element);
});
