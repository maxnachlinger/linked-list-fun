'use strict'

function insertAfterValue(head, val, afterValue) {
    if (val === undefined) {
        throw new Error('val required')
    }

    const node = {val, next: null}

    // empty head
    if (!head || Object.keys(head).length === 0) {
        return node
    }

    // new list head
    if (afterValue === undefined) {
        node.next = head
        return node
    }

    let current = head

    while (current) {
        if (current.val === afterValue) {
            current.next = {val, next: current.next}
            return head
        }
        current = current.next
    }

    current.next = {val, next: current.next}
    return head
}

module.exports = insertAfterValue
