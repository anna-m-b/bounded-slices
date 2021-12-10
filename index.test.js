const { solution, calculateTotalPossibleSlices } = require("./index")

test("calculateTotalPossibleSlices of array", () => {
  let A = [1, 2, 3]
  let expected = 5
  let actual = calculateTotalPossibleSlices(A)
  expect(actual).toBe(expected)

  A = [1, 2, 3, 4, 10]
  expected = 14
  actual = calculateTotalPossibleSlices(A)
  expect(actual).toBe(expected)
})

test("array where all slices are valid", () => {
  let A = [1, 2, 3]
  let K = 2
  let expected = 5
  let actual = solution(K, A)
  expect(actual).toBe(expected)
})

xtest("[3, 5, 7, 6, 3] with K = 2 returns 9", () => {
  let A = [3, 5, 7, 6, 3]
  let K = 2
  let expected = 9
  let actual = solution(K, A)
  expect(actual).toBe(expected)
})
