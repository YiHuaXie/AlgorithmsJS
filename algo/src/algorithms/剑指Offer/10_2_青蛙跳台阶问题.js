
const jz_frogJumpingOnStairs = n => {
    if (n <= 0) { return 1 }
    if (n < 3) { return n }
    
    let minusOne = 2, minusTwo = 1, sum = 0

    for (let i = 3; i <= n; i++) {
        sum = (minusOne + minusTwo) % 1000000007
        minusTwo = minusOne
        minusOne = sum
    }

    return sum
}

export const jz_frogJumpingOnStairsTest = () => {
    console.log(jz_frogJumpingOnStairs(6))
}