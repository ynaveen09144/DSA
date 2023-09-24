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






class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const arr = [5, 4, 3, 2, 1]

const LinkedList = arr.reduce((acc, val) => new ListNode(val, acc), null)

const printList = (head) => {
  if (!head) return

  console.log(head.val)
  printList(head.next)
}

const reverse = (head) => {
  let prev = null
  let current = head

  while (current) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

printList(LinkedList)
console.log("after reversal")
printList(reverse(LinkedList))
