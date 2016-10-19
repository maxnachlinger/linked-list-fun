'use strict'

const test = require('tape')
const insertAtIndex = require('../insertAtIndex')

test('linked-list insertAtIndex tests', (t) => {
    t.test('inserts a new head', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        const expected = {
            val: -1,
            next: {
                val: 0,
                next: {
                    val: 1,
                    next: null
                }
            }
        }

        t.deepEqual(insertAtIndex(input, -1, 0), expected)
        t.end()
    })

    t.test('inserts a new head into an empty list', (t) => {
        const input = {}

        const expected = {
            val: 0,
            next: null
        }

        t.deepEqual(insertAtIndex(input, 0, 0), expected)
        t.end()
    })

    t.test('inserts a new node after the head', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        const expected = {
            val: 0,
            next: {
                val: 0.5,
                next: {
                    val: 1,
                    next: null
                }
            }
        }

        t.deepEqual(insertAtIndex(input, 0.5, 1), expected)
        t.end()
    })

    t.test('inserts a new tail', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        const expected = {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        }

        t.deepEqual(insertAtIndex(input, 2, 2), expected)
        t.end()
    })
})
