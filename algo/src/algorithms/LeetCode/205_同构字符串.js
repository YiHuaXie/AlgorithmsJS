/**
 * 题目地址：https://leetcode-cn.com/problems/isomorphic-strings/
 * 
 * 解题思路：HashMap
 * 如果s、t是同构字符串，那么s可以唯一的映射到t，同时t也可以唯一的映射到s，因此可以知道：单边的映射关系肯定是固定的。
 * 
 * 时间复杂度：O(N+M)
 * 空间复杂度：O(N+M)
 */
const lc_isIsomorphic = (s, t) => {
    // 单方面映射
    function _isIsomorphic(s, t) {
        let map = new Map()
        for (let i = 0; i < s.length; i++) {
            const sc = s[i], tc = t[i]
            // 没有映射关系，保存
            if (!map.has(sc)) {
                map.set(sc, tc)
            } else {
                if (map.get(sc) !== tc) return false
            }
        }

        return true
    }

    if (s.length !== t.length) return false
    return _isIsomorphic(s, t) && _isIsomorphic(t,s )
}

export const lc_isIsomorphicTest = () => {
    console.log(lc_isIsomorphic("egg", "add"))
    console.log(lc_isIsomorphic("foo", "bar"))
    console.log(lc_isIsomorphic("paper", "title"))
    console.log(lc_isIsomorphic("abcd", "dcbb"))
    console.log(lc_isIsomorphic("", ""))
    console.log(lc_isIsomorphic("ab", "aa"))
}