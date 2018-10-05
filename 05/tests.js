function test_ok(func, params, paramdesc) {
    if (!paramdesc) {
        paramdesc = params
    }
    const desc = func.name + "('" + paramdesc + "') is truthy"

    QUnit.test(desc, function (assert) {
        assert.ok(func(params))
    })
}

function test_not_ok(func, params) {
    const desc = func.name + "('" + params + "') is falsy"

    QUnit.test(desc, function (assert) {
        assert.notOk(func(params))
    })
}

test_ok(is_nice, 'ugknbfddgicrmopn')
test_ok(is_nice, 'aaa')
test_ok(has_consecutive_letters, 'aaa')
test_not_ok(has_forbidden_pairs, 'aaa')
test_ok(has_consecutive_letters, 'haegwjzuvuyypxyu')
test_ok(has_forbidden_pairs, 'haegwjzuvuyypxyu')
test_not_ok(is_nice, 'ydjyboqwhfpqfydc')
test_not_ok(is_nice, 'jchzalrnumimnmhp')
test_not_ok(is_nice, 'haegwjzuvuyypxyu')
test_ok(has_vowels, 'haegwjzuvuyypxyu')
test_not_ok(is_nice, 'dvszwmarrgswjxmb')
test_ok(test_puzzle_input, puzzle_input, "puzzle_input")

//part 2

test_ok(contains_pair_twice, "xyxy")
test_ok(contains_pair_twice, "aabcdefgaa")
test_ok(contains_pair_twice, "bcdaaefgaa")
test_not_ok(contains_pair_twice, "nick sawe")
test_not_ok(contains_pair_twice, "aaa")

test_ok(has_xyx, "xyxy")
test_not_ok(has_xyx, "uurcxstgmygtbstg")

test_ok(is_nice_two, "xyxy")
test_ok(is_nice_two, "qjhvhtzxzqqjkmpb")
test_not_ok(is_nice_two, "uurcxstgmygtbstg")
test_not_ok(is_nice_two, "ieodomkazucvgmuy")

test_ok(test_puzzle_input_2, puzzle_input, "puzzle_input")



