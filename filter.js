'use strict'

const append = require('./append')

// fn is a filter function much like Array.filter, which returns a bool
function filter(list, fn) {
    let ret = {}
    let current = list

    while (current) {
        if (fn(current.val)) {
            ret = append(ret, current.val)
        }

        current = current.next
    }

    return ret
}

module.exports = filter
