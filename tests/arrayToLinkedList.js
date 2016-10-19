'use strict'

const test = require('tape')
const arrayToLinkedList = require('../arrayToLinkedList')

test('linked-list from array tests', (t) => {
    t.test('converts array into linked list', (t) => {
        const input = [2,0,1]
        const expected = {
            val: 2,
            next: {
                val: 0,
                next: {
                    val: 1,
                    next: null
                }
            }
        }

        t.deepEqual(arrayToLinkedList(input), expected)
        t.end()
    })

})
