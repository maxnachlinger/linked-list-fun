'use strict'

function insertAtIndex(head, val, idx) {
    const newNode = {val, next: null}
    // empty list
    if (!head || !Object.keys(head).length) {
        return newNode
    }

    let node = head
    let lastNode = null
    let i = 0

    while (node) {
        if (i === idx) {
            newNode.next = node
            // new head
            if (!lastNode) {
                return newNode
            }

            lastNode.next = newNode
            return lastNode
        }

        lastNode = node
        node = node.next
        i++
    }

    // new tail
    lastNode.next = newNode
    return head
}

module.exports = insertAtIndex
