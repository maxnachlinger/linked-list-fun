'use strict'

function append(head, val) {
    if (val === undefined) {
        throw new Error('val required')
    }

    const node = {val, next: null}

    // empty head
    if (!head || Object.keys(head).length === 0) {
        return node
    }

    let current = head

    while (current.next) {
        current = current.next
    }

    current.next = node
    return head
}

module.exports = append
