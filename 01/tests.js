QUnit.test("( translates to +1", function (assert) {
    assert.equal(convert("("), 1)
})

QUnit.test(") translates to -1", function (assert) {
    assert.equal(convert(")"), -1)
})

QUnit.test("should return zero", function (assert) {
    assert.equal(navigate("(())"), 0)
    assert.equal(navigate("()()"), 0)
})

QUnit.test("should return 3", function (assert) {
    assert.equal(navigate("((("), 3)
    assert.equal(navigate("(()(()("), 3)
    assert.equal(navigate("))((((("), 3)
})

QUnit.test("should return -1", function (assert) {
    assert.equal(navigate("())"), -1)
    assert.equal(navigate("))("), -1)
})

QUnit.test("navigate(puzzle_input)", function (assert) {
    assert.equal(navigate(puzzle_input), 232)
})

QUnit.test("')' enters basement at position 1", function (assert) {
    assert.equal(enters_basement(")"), 1)
})

QUnit.test("'()())' enters basement at position 5", function (assert) {
    assert.equal(enters_basement("()())"), 5)
})

QUnit.test("enters_basement(puzzle_input)", function (assert) {
    assert.equal(enters_basement(puzzle_input), 1783)
})