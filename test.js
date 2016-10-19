const test = require('tape')
const del = require('./delete')
const insert = require('./insert')
const reverse = require('./reverse')
const areEqual = require('./areEqual')

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

test('linked-list insert tests', (t) => {
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

    t.deepEqual(insert(input, -1, 0), expected)
    t.end()
  })

  t.test('inserts a new head into an empty list', (t) => {
    const input = {}

    const expected = {
      val: 0,
      next: null
    }

    t.deepEqual(insert(input, 0, 0), expected)
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
        val: 1.5,
        next: {
          val: 1,
          next: null
        }
      }
    }

    t.deepEqual(insert(input, 1.5, 1), expected)
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

    t.deepEqual(insert(input, 2, 2), expected)
    t.end()
  })
})

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

test('linked-lists are equal tests', (t) => {
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
