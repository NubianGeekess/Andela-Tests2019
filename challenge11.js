// Write a function named power that accepts two arguments, a and b and calculates a raised to the power b.

// Example

// power(2, 3) => 8
// Note: Don't use

// 2 ** 3
// and don't use

// Math.pow(2, 3)

function power(a, b){
    let result = 1;
    
    if (b > 0)
    {
        for (let i = 1; i <= b; ++i)
        {
            result *= a;
        }
    }
    else if (b < 0)
    {
        for (let i = -1; i >= b; --i)
        {
            result /= a;
        }
    }
    
    return result;
    }