'use strict'

const test = require('tape')
const reverse = require('../reverse')

test('linked-list reverse tests', (t) => {
    t.test('reverses a list with 1 node :)', (t) => {
        const input = {
            val: 0,
            next: null
        }

        const expected = {
            val: 0,
            next: null
        }

        t.deepEqual(reverse(input), expected)
        t.end()
    })

    t.test('reverses an empty list', (t) => {
        const input = {}
        const expected = {}

        t.deepEqual(reverse(input), expected)
        t.end()
    })

    t.test('reverses a list', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        const expected = {
            val: 1,
            next: {
                val: 0,
                next: null
            }
        }

        t.deepEqual(reverse(input), expected)
        t.end()
    })
})
