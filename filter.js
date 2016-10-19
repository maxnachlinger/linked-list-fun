'use strict'

// fn is a filter function much like Array.filter, which returns a bool
function filter(list, fn) {
    let ret = null
    let last = null
    let current = list

    while (current) {
        if (!fn(current.val)) {
            current = current.next
            continue
        }

        const node = {val: current.val, next: null}
        if (!ret) {
            ret = node
            last = ret
        } else {
            last.next = node
            last = last.next
        }

        current = current.next
    }

    return ret || {}
}

module.exports = filter
