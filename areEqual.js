function areEqual (headA, headB) {
  let nodeA = headA || {}
  let nodeB = headB || {}

  while (nodeA && nodeB) {
    if (nodeA.data !== nodeB.data) {
      return false
    }

    nodeA = nodeA.next
    nodeB = nodeB.next

    if (!nodeA && !nodeB) {
      return true
    }
    if (nodeA && !nodeB) {
      return false
    }
    if (!nodeA && nodeB) {
      return false
    }
  }

  return true
}

module.exports = areEqual
