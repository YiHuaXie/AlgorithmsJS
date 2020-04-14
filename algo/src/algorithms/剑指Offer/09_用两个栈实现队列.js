
/**
 * 解题思路：
 * 
 * 队列：先进先出，堆栈：先进后出
 * 
 * stackA处理入队操作，stackB用来处理出队操作。
 * 
 * 在执行出队操作的时候，当stackB为空且stackA有值的时候，stackA出栈，stackB入栈。
 * stackA的出栈顺序为stackB的入栈顺序。stackB有值，stackB直接出栈即可。
 */

class CQueue {
    constructor() {
        this.stackA = []
        this.stackB = []
    }

    appendTail(value) {
        this.stackA.push(value)
    }

    deleteHead() {
        if (!this.stackB.length && this.stackA.length) {
            while (this.stackA.length) {
                this.stackB.push(this.stackA.pop())
            }
        }

        return this.stackB.length ? this.stackB.pop() : -1
    }
}

export const jz_cqueueTest = () => {
    const queue = new CQueue()
    queue.appendTail(1)
    queue.appendTail(2)
    queue.appendTail(3)
    console.log(queue.deleteHead())
    queue.appendTail(4)
    console.log(queue.deleteHead())
    console.log(queue.deleteHead())
    console.log(queue.deleteHead())
    console.log(queue.deleteHead())
}