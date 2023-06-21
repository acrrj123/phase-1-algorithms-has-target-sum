function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] + array[i] === target) {
        return true
      } 
    }
  }
  return false
}
// const array = [22, 19, 4, 6, 30] 
// array.length = 5
// target = 25
// i = 0 = 22
// j = 1 = 19

/* 
Rewrite the Problem in Your Own Words:
Define a function hasTargetSum, that returns true if any pair of numbers in the array adds up to the target number. Otherwise, return false.
*/

/* 
Write the Big O time complexity of your function here
This algorithm's runtime gets worse by a power of two (n * n, or n²), where n are the elements of the array. For every n elements in the input array, we need to check it against the remaining n elements.
In Big O notation, we can express this as O(n²), which is also known as quadratic time.
*/

/* 
Write algorithm here:
1. find which iteration method to use.
2. write another loop to be paired with it. This inner loop should be 1 place ahead of the outer loop in the array.
3. compare the loops together through each iteration.
4. if any sum of the 2 loops === the target, return true, if not, return false.
*/

/* 
Add your pseudocode here
Create a loop to iterate through the array: let i = 0, i <array.length; i++
Inside of that loop, nest another loop to iterate through the array one step ahead of the first loop. let j = i + 1; j <array.length; j++
Write an if statement for if any combinatino of the 2 loops = the target, then the fuction returns true. If arrayi + arrayj = target return true, 
if not, then it returns false. 
*/

/*
Add written explanation of your solution here
I start by creating a loop to iterate through the array. The second loop is nested in the first one. It is set to iterate through the array along with the first loop, only iterating one number ahead. The if statement says that for every time the outer loop
passes to a new position in the array, add it to the number in the nested array, and check to see if it equals the target.
If at anytime the function finds a combination that equals the target, it will return true. If not, it will return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
