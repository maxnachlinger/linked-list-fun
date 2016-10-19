'use strict'

const test = require('tape')
const getAtIndex = require('../getAtIndex')

test('linked-list getAtIndex tests', (t) => {
    t.test('gets item at index 0 (the head)', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        }

        t.equal(getAtIndex(input, 0), 0)
        t.end()
    })

    t.test('get item at index -1 (the tail)', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        }

        t.deepEqual(getAtIndex(input, -1), 2)
        t.end()
    })

    t.test('get an item from the middle of the list', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        }

        t.deepEqual(getAtIndex(input, 1), 1)
        t.end()
    })

    t.test('get an item from the middle of the list using a negative index', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            }
        }

        t.deepEqual(getAtIndex(input, -2), 1)
        t.end()
    })
})
