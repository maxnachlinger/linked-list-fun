'use strict'
const reverse = require('./reverse')

// you can pass a negative index here to start at the end of the linked list
function getAtIndex(head, idx) {
    idx = Number(idx)
    if(idx < 0) {
        head = reverse(head)
        idx = Math.abs(idx) - 1 // -1 would be the tail, so we subtract 1 again to make it zero etc
    }

    let i = 0
    let curr = head

    while (curr) {
        if(i === idx) {
            return curr.val
        }
        i++
        curr = curr.next
    }

    return null
}

module.exports = getAtIndex
