// 设计哈希集合，哈希集合中的值是非重复的。
// 纯数组实现链地址法

class MyHashSet {

    constructor() {
        // 存放1000个桶，每一个桶都是数组
        this.buckets = new Array(1000).fill([])
    }

    // 哈希函数
    hash(key) { return key % 1000 }

    add(key) {
        if (this.contains(key)) return
        let index = this.hash(key)
        let bucket = this.buckets[index]
        bucket.push(key)
    }

    remove(key) {
        if (!this.contains(key)) return

        let index = this.hash(key)
        let bucket = this.buckets[index]
        bucket.splice(bucket.indexOf(key), 1)
    }

    contains(key) {
        let index = this.hash(key)
        let bucket = this.buckets[index]
        for (let i = 0; i < bucket.length; i++) {
            if (key === bucket[i]) return true
        }
        return false
    }
}


class Node {

    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
    }
}

class MyHashMap {

    constructor() {
        this.buckets = new Array(1000).fill(new Node())
    }
    
    hash(key) { return key % 1000 }

    put(key, value) {
        const index = this.hash(key)
        const bucket = this.buckets[index]
        let cur = bucket
        // 替换设置
        while (cur && cur.next) {
            if (cur.next.key === key) {
                cur.next.value = value
                return
            }
            cur = cur.next
        }
        
        // 不一定非得加在尾部，
        cur.next = new Node(key, value)
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.buckets[index]
        let cur = bucket
        while (cur && cur.next) {
            if (cur.next.key === key) {
                return cur.next.value
            }
            cur = cur.next
        }

        return -1
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.buckets[index]
        let cur = bucket, pre = null
        while (cur && cur.next) {
            pre = cur
            if (cur.next.key === key) {
                pre.next = cur.next.next
                return
            }
            cur = cur.next
        }
    }
}