function test_houses_visited(instructions, expected_count) {
    const desc = 'houses_visited("' + instructions + '").size equals ' + expected_count
    QUnit.test(desc, function (assert) {
        assert.equal(houses_visited(instructions).size, expected_count)
    })
}
test_houses_visited(">", 2)
test_houses_visited("^>v<", 4)
test_houses_visited("^v^v^v^v^v", 2)

QUnit.test("Part 1 Puzzle input", function (assert) {
    assert.equal(houses_visited(puzzle_input).size, 2572, "Part 1 Puzzle input Passed!");
});

//  //part 2
function test_houses_visited_with_robot(instructions, expected_count) {
    const desc = 'houses_visited("' + instructions + '").size equals ' + expected_count
    QUnit.test(desc, function (assert) {
        assert.equal(houses_visited_with_robot(instructions).size, expected_count)
    })
}
test_houses_visited_with_robot(">", 2)
test_houses_visited_with_robot("^>v<", 3)
test_houses_visited_with_robot("^v^v^v^v^v", 11)

QUnit.test("Part 2 Puzzle input", function (assert) {
    assert.equal(houses_visited_with_robot(puzzle_input).size, 2631, "Part 2 Puzzle input Passed!");
});