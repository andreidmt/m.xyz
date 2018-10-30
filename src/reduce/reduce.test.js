const test = require("tape")
const reduce = require("./reduce")

test("reduce", t => {
  t.deepEqual(
    reduce((acc, reduceElm) => acc + reduceElm, 0)([1, 2, 3]),
    6,
    "Sum up the elements of an array"
  )

  t.end()
})
