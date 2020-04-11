/**
 * 题目地址：https://leetcode-cn.com/problems/lru-cache/
 * 
 * 解题思路：双向链表+HashMap
 * 
 * LRU缓存：最近最少使用的结点将被淘汰
 * get操作：如果元素存在，置为最新使用；
 * put操作：如果元素存在，置为最新使用；如果容器超限，进行删除末尾元素操作
 * 
 * 时间复杂度：get操作的时间复杂度为O(1)，put操作的时间复杂度为O(1)
 * 空间复杂度：O(n)，n为LRU缓存的容量
 */

class CacheNode {

    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.pre = null;
        this.next = null;
    }
}

class CacheList {
    // 初始化头、尾节点、链表最大容量
    constructor() {
        this.head = new CacheNode(null, null);
        this.tail = new CacheNode(null, null);
        this.size = 0;
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    // 删除链表中存在的node结点
    remove(node) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
        this.size--;
    }

    // 在链表头部添加结点
    addFirst(node) {
        node.next = this.head.next;
        node.pre = this.head;
        this.head.next.pre = node;
        this.head.next = node;
        this.size++;
    }

    // 删除链表中最后一个节点，并返回该节点
    removeLast() {
        // 链表为空
        if (this.tail.pre === this.head) return null;

        let last = this.tail.pre;
        this.remove(last);
        return last;
    }
}

class LRUCache {

    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.list = new CacheList();
    }

    get(key) {
        let map = this.map;
        if (!map.has(key)) return -1;

        let val = map.get(key).val;
        this.put(key, val);

        return val;
    }

    put(key, value) {
        let list = this.list, map = this.map, node = new CacheNode(key, value);
        if (map.has(key)) {
            // 删除旧的节点，新的插到头部
            list.remove(map.get(key));
        } else {
            if (this.capacity === list.size) {
                // 删除最后一个
                let last = list.removeLast();
                map.delete(last.key);
            }
        }
        list.addFirst(node);
        map.set(key, node);
    }
}

export const lc_LRUCacheTest = () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    console.log(cache.get(1)); 
    cache.put(3, 3); 
    console.log(cache.get(2)); 
    cache.put(4, 4);
    console.log(cache.get(1));
    console.log(cache.get(3));
    console.log(cache.get(4));   
}