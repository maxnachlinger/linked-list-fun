'use strict'

const test = require('tape')
const filter = require('../filter')

test('linked-lists filterx tests', (t) => {
    t.test('should filter out a node at the end of a list', (t) => {
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
        
        const result = filter(input, (val) => val < 2)
        t.deepEqual(result, expected)
        t.end()
    })

    t.test('should filter out a node in the middle of a list', (t) => {
        const input = {
            val: 0, next: {
                val: 1, next: {
                    val: 2, next: null
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

        const result = filter(input, (val) => val !== 1)
        t.deepEqual(result, expected)
        t.end()
    })

    t.test('should create a new list if an empty one was provided', (t) => {
        const result = filter({}, (val) => val)
        t.deepEqual(result, {})
        t.end()
    })


    t.test('should filter an entire list', (t) => {
        let input = {
            val: 0, next: {
                val: 1, next: null
            }
        }
        const result = filter(input, (val) => val < 0)
        t.deepEqual(result, {})
        t.end()
    })
})
