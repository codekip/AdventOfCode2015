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

 //part 2

 QUnit.test("Part 2a - separate the steps", function (assert) {
     assert.equal(split_house_count("^v"), 3, "Part 2a - separation of steps passed!");
 })

 QUnit.test("Part 2b - separate the steps", function (assert) {
     assert.equal(split_house_count("^>v<"), 3, "Part 2b - 3 houses passed!");
 })

 QUnit.test("Part 2c - eleven - separate the steps", function (assert) {
     assert.equal(split_house_count("^v^v^v^v^v"), 11, "Part 2c - eleven houses passed!");
 })