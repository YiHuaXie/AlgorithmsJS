const lc_isPowerOfFour = n => {
    const power = Math.log10(n) / Math.log10(4)
    return Number.isInteger(power)
}

export const lc_isPowerOfFourTest = () => {
    console.log(lc_isPowerOfFour(37))
    console.log(lc_isPowerOfFour(16))
}