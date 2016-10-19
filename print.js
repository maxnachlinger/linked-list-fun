function print (head, sep) {
  sep = sep || ' '
  const values = []
  let node = head

  while(node) {
    values.push(node.val)
    node = node.next
  }

  console.log(values.join(sep))
}

module.exports = print
