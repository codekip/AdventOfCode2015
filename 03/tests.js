QUnit.test("Total distance from start - East Passed", function (assert) {
    assert.equal(distance_from_start(">"), 1, "Total distance from start - East Passed!");
});

QUnit.test("Total distance from start - N E W S Passed!", function (assert) {
    assert.equal(distance_from_start("^>v<"), 0, "Total distance from start - N E W S Passed!");
});

QUnit.test("number of houses", function (assert) {
    assert.equal(running_total("^>v<<"), 0, "number of houses Passed!");
    assert.equal(running_total(puzzle_input), 0, "number of houses Passed!");

});