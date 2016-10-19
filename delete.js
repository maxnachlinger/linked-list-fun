'use strict'

function del(head, val) {
    // empty list
    if (!head || !Object.keys(head).length) {
        return {}
    }

    let curr = head
    let prev = null

    while (curr) {
        if (curr.val === val) {
            if (!prev) { // deleting the head
                return curr.next || {}
            }
            prev.next = curr.next
            return head
        }

        prev = curr
        curr = curr.next
    }

    return head
}

module.exports = del
