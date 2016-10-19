'use strict'

const test = require('tape')
const areEqual = require('../areEqual')

test('linked-lists areEqual tests', (t) => {
    t.test('returns true for identical lists', (t) => {
        const input = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        t.ok(areEqual(input, input))
        t.end()
    })

    t.test('returns true for empty lists', (t) => {
        t.ok(areEqual({}, {}))
        t.end()
    })

    t.test('inserts a new head into an empty list', (t) => {
        const input0 = {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }

        const input1 = {
            val: 0,
            next: null
        }

        t.notOk(areEqual(input0, input1))
        t.end()
    })
})
