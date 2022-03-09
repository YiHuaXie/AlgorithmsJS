var letterCombinations = function(digits) {
    if (!digits || !digits.length) return []
    let result = []
    const map = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z'],        
    };
    let backtrace = (start, arr) => {
        if (arr.length === digits.length) {
            result.push(arr.join(''))
            return;
        }

        const charArr = map[digits[start]];
        for(let i=0; i<charArr.length; i++){
            backtrace(start + 1, arr.concat(charArr[i]));
        }
    };

    backtrace(0, []);
    return result;

};