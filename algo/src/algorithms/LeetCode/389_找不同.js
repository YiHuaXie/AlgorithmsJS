
const lc_findTheDifference = (s, t) => {
    let res = t.charCodeAt(t.length - 1)
    for (let i = 0; i < s.length; i++) {
        res ^= s.charCodeAt(i)
        res ^= t.charCodeAt(i)
    }

    return String.fromCharCode(res)
}

export const lc_findTheDifferenceTest = () => {
    console.log(lc_findTheDifference("abcd", "eabcd"))
}