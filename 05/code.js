function is_nice(input) {
    let arr = input.split('')

    if (has_vowels(arr) && has_consecutive_letters(arr) && !has_forbidden_pairs(input)) {
        return true
    } else {
        return false
    }
}


function has_vowels(array) {
    if (typeof array === "string") {
        array = array.split('')
    }

    let x = array.filter(e => ['a', 'e', 'i', 'o', 'u',].indexOf(e) != -1)
    return x.length >= 3 ? true : false

}

function has_consecutive_letters(input) {
    if (typeof input === "string") {
        input = input.split('')
    }

    let x = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            x++
        }
    }

    return x > 0 ? true : false
}


function has_forbidden_pairs(input) {
    return ['ab', 'cd', 'pq', 'xy'].map(e => input.includes(e)).filter(e => e === true).length > 0
}

function test_multiple_words(words, test_func) {
    let all = words.split("\n")
    let count = 0
    all.forEach(e => {
        if (test_func(e)) {
            count++
        }
    });
    console.log(count)

    return count
}

function contains_pair_twice(text) {
    return text.split('')
        .map((char, ix, arr) => char + arr[ix + 1])
        .filter((pair, ix, arr) => text.substring(ix + 2, arr.length).includes(pair))
        .length > 0

}

function has_xyx(text) {
    return text.split('')
        .filter((char, ix, arr) => char === arr[ix + 2])
        .length > 0
}
function is_nice_two(text) {
    return contains_pair_twice(text) && has_xyx(text)
}

const test_puzzle_input = input => test_multiple_words(input, is_nice)
const test_puzzle_input_2 = input => test_multiple_words(input, is_nice_two)

