'use strict'

const test = require('tape')
const append = require('../append')

test('linked-list append tests', (t) => {
    t.test('inserts a new head into an empty list', (t) => {
        const input = {}
        const expected = {
            val: 0,
            next: null
        }

        t.deepEqual(append(input, 0), expected)
        t.end()
    })

    t.test('appends a new node after the head', (t) => {
        const input = {
            val: 0,
            next: null
        }
        const expected = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        t.deepEqual(append(input, 1), expected)
        t.end()
    })
})
