QUnit.test("area test", function (assert) {
    assert.equal(area(2, 3, 4), 52, "2x3x4; area succeeds");
    assert.equal(area(1, 1, 10), 42, "2x3x4; area succeeds");

});

QUnit.test("product of two smallest numbers test", function (assert) {
    assert.equal(smallest_product(2, 3, 4), 6, "Smallest area given 2x3x4; Smallest area succeeds");
    assert.equal(smallest_product(1, 1, 10), 1, "Smallest area given 1x1x10; Smallest area succeeds");

});

QUnit.test("total area test", function (assert) {
    assert.equal(total_area(2, 3, 4), 58, "2x3x4; area succeeds");
    assert.equal(total_area(1, 1, 10), 43, "1x1x10; area succeeds");

});

QUnit.test("puzzle input test", function (assert) {
    assert.equal(puzzle_run(), 1598415, "puzzle input area succeeds");

});