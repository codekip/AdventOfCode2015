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
    assert.equal(part_one(), 1598415, "puzzle input area succeeds");

});

QUnit.test("Day 2 part 2: total material required test", function (assert) {
    assert.equal(total_material(2, 3, 4), 34, "total material required succeeds");
    assert.equal(total_material(1, 1, 10), 14, "total material required succeeds");
});

QUnit.test("Day 2 part 2 puzzle input test", function (assert) {
    assert.equal(part_two(), 3812909, "total material required succeeds");
});