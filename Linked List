class ListNode {
    constructor(val, next = null){
       this.val = val
       this.next = next
    }
}

const arr = [5,4,3,2,1]

const LinkedList = arr.reduce((acc, val) => new ListNode(val, acc), null)

const printList = (head) => {
    if (!head) return
    
    console.log(head.val)
    printList(head.next)
}

printList(LinkedList)
