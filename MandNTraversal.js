class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const values = [7, 6, 5, 4, 3, 2, 1]

const linkedList = values.reduce((acc, val) => new ListNode(val, acc), null)

const printList = (head) => {
  if (!head) return

  console.log(head.val)
  printList(head.next)
}

const mnTraversal = (head, m, n) => {
  let currentPos = 1,
    currentNode = head,
    start = head

  while (currentPos < m) {
    start = currentNode
    currentNode = currentNode.next
    currentPos++
  }

  let tail = currentNode,
    newList = null

  while (currentPos >= m && currentPos <= n) {
    let next = currentNode.next
    currentNode.next = newList
    newList = currentNode
    currentNode = next
    currentPos++
  }

  start.next = newList
  tail.next = currentNode

  if (m > 1) return head
  else return newList
}

printList(linkedList)
console.log("After Traversal")
printList(mnTraversal(linkedList, 3, 5))
