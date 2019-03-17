// Write a mySort function which takes in an array integers, and should return an array of the inputed integers sorted such that the odd numbers come first and even numbers come last.

// For exampl1e:

// mySort( [90, 45, 66, 'bye', 100.5] )
// should return

// [45, 66, 90, 100]

function mySort(nums) {
    let evens = [];
    let odds = [];
  
    for (let i = 0; i < nums.length; i++) {
      if(typeof nums[i] === "number"){ // ignore if its not a number
        if ((nums[i] % 2) === 1) {
            odds.push(parseInt(nums[i]));
        }
        else {
            evens.push(parseInt(nums[i]));
        }
      }
    }
    let numsArray = odds.sort((a, b) => a - b).concat(evens.sort((a, b) => a - b));
    return numsArray;
  }