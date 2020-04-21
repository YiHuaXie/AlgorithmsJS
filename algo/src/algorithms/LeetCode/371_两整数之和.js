
const lc_getSum = (a, b) => {
    return add(a, b)
}

const add = (a, b) => {
    return b === 0 ? a : add(a ^ b, (a & b) << 1);
}

export const lc_getSumTest = () => {
    console.log(lc_getSum(1, 3))
    console.log(lc_getSum(1, -3))
    console.log(lc_getSum(-1, -3))
}