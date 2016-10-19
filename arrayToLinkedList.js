'use strict'

const append = require('./append')

function arrayToLinkedList(arr) {
    if (!arr || arr.length === 0) {
        return {}
    }

    let list = null
    let last = null

    arr.forEach(val => {
        const node = {val, next: null}
        if(!list) {
            list = node
            last = list
            return
        }

        last.next = node
        last = last.next
    })
    return list
}

module.exports = arrayToLinkedList
