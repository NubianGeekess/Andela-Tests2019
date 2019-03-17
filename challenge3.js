// Given two numbers X and Y, write a function that:
// 1 returns even numbers between X and Y, if X is greater than Y else it returns odd numbers between x and y
// For instance, take the integers 10 and 2 . the function would return all the even numbers between 2 and 10.

// Specification
// numberGame(x, y)
// Return a list of odd or even number between two integers X and Y

// Parameters
// x: Number - The first integer provided

// y: Number - The second integer provided

// Return Value
// Number - a list of odd or even numbers between x and y

// Examples:
// 12, 0 => [2,4,6,8,10]


const number_game = (x, y) => {
    let range;
    if (x > y) {
        range = Array(x - y + 1).fill().map((_, idx) => y + idx)
        return range.filter(num => !(num % 2))
    } else{
        range = Array(y - x + 1).fill().map((_, idx) => x + idx)
        return range.filter(num => (num % 2))
    }
}