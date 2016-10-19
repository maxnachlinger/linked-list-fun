'use strict'

const test = require('tape')
const del = require('../delete')

test('linked-list delete tests', (t) => {
    t.test('dels the head', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        const expected = {
            val: 1,
            next: null
        }

        t.deepEqual(del(input, 0), expected)
        t.end()
    })

    t.test('handles an empty list', (t) => {
        const input = {}
        const expected = {}

        t.deepEqual(del(input, 0), expected)
        t.end()
    })

    t.test('deletes a node after the head', (t) => {
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

        const expected = {
            val: 0,
            next: {
                val: 2,
                next: null
            }
        }

        t.deepEqual(del(input, 1), expected)
        t.end()
    })

    t.test('deletes the tail', (t) => {
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

        const expected = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        t.deepEqual(del(input, 2), expected)
        t.end()
    })
})
