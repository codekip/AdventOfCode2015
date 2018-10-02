function test_md5(description, params, leading_zeroes, expected) {

    QUnit.test(description, function (assert) {
        assert.equal(calculate_md5(params, leading_zeroes), expected, description + " Passed!");
    })
}

test_md5("md5 test", 'abcdef', 5, 609043)
test_md5("second md5 test", 'pqrstuv', 5, 1048970)
test_md5("puzzle input test", puzzle_input, 5, 346386)
test_md5("puzzle input test", puzzle_input, 6, 9958218)
