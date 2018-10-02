function test_md5(description, params, expected) {

    QUnit.test(description, function (assert) {
        assert.equal(calculate_md5(params), expected, description + " Passed!");
    })
}

test_md5("md5 test", 'abcdef', 609043)
test_md5("second md5 test", 'pqrstuv', 1048970)
test_md5("puzzle input test", puzzle_input, 346386)
