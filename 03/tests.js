 QUnit.test("Total distance from start - East Passed", function (assert) {
     assert.equal(count_of_houses(">"), 2, "Total distance from start - East Passed!");
 });


 QUnit.test("Total distance from start - N E W S Passed", function (assert) {
     assert.equal(count_of_houses("^>v<"), 4, "Total distance from start - N E W S Passed!");
 });

 QUnit.test("Total distance from start - N S Passed", function (assert) {
     assert.equal(count_of_houses("^v^v^v^v^v"), 2, "Total distance from start - N S Passed!");
 });

 QUnit.test("Part 1 Puzzle input Passed", function (assert) {
     assert.equal(count_of_houses(puzzle_input), 2572, "Part 1 Puzzle input Passed!");
 });