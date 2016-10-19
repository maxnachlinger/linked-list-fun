'use strict'

const test = require('tape')
const sort = require('../sort')

test('linked-list sort tests', (t) => {
    t.test('sorts a list', (t) => {
        const input = {
            val: 99,
            next: {
                val: 1,
                next: {
                    val: 10.1,
                    next: null
                }
            }
        }

        const expected = {
            val: 1,
            next: {
                val: 10.1,
                next: {
                    val: 99,
                    next: null
                }
            }
        }

        t.deepEqual(sort(input), expected)
        t.end()
    })
})
