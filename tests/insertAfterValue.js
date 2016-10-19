'use strict'

const test = require('tape')
const insertAfterValue = require('../insertAfterValue')

test('linked-list insertAfterValue tests', (t) => {
    t.test('inserts a new head into an empty list', (t) => {
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

        t.deepEqual(insertAfterValue(input, -1), expected)
        t.end()
    })

    t.test('inserts a new head', (t) => {
        const expected = {
            val: 0,
            next: null
        }

        t.deepEqual(insertAfterValue({}, 0), expected)
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

        t.deepEqual(insertAfterValue(input, 0.5, 0), expected)
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

        t.deepEqual(insertAfterValue(input, 2, 1), expected)
        t.end()
    })
})
