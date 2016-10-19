function reverse (head) {
  // empty list
  if (!head || !Object.keys(head).length) {
    return {}
  }
  // list with 1 node :)
  if (!head.next) {
    return head
  }

  let curr = head
  let next = null
  let prev = null

  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head = prev
  return head
}

module.exports = reverse
