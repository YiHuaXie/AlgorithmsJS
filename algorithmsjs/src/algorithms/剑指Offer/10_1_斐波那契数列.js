
/**
 * 
 * 斐波那契数列公式
 * 
 * f(0) = 1
 * f(1) = 1
 * f(n) = f(n-1) + f(n-2)
 * 
 */

// 递归
const jz_fib1 = n => {
    if (n <= 0) { return 0 }
    if (n === 1) { return 1 }

    return jz_fib1(n - 1) + jz_fib1(n - 2)
}

// 非递归
const jz_fib2 = n => {
    if (n <= 0) { return 0 }
    if (n === 1) { return 1 }

    let minusOne = 1, minusTwo = 0, sum = 0

    for (let i = 2; i <= n; i++) {
        sum = (minusOne + minusTwo) % 1000000007
        minusTwo = minusOne
        minusOne = sum
    }

    return sum
}

export const jz_fibTest = () => {
    console.log(jz_fib2(45))
}