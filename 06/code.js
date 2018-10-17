const test_cases_input = [
    {
        input: "turn on 0,0 through 999,999",
        expected: {
            instruction: "on",
            startx: 0,
            starty: 0,
            endx: 999,
            endy: 999
        }
    },
    {
        input: "turn off 499,499 through 500,500",
        expected: {
            instruction: "off",
            startx: 499,
            starty: 499,
            endx: 500,
            endy: 500
        }
    },
    {
        input: "toggle 0,0 through 999,0",
        expected: {
            instruction: "toggle",
            startx: 0,
            starty: 0,
            endx: 999,
            endy: 0
        }
    }
]

test_cases_input.forEach(function ({ input, expected }) {
    QUnit.test("read_instruction('" + input + "')", function (assert) {
        assert.deepEqual(read_instruction(input), expected)
    })
})

const test_cases_areas = [
    {
        input: { startx: 0, starty: 0, endx: 0, endy: 0 },
        expected: [{ x: 0, y: 0 }],
    },
    {
        input: { startx: 0, starty: 0, endx: 1, endy: 1 },
        expected: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }]
    }
]

test_cases_areas.forEach(function ({ input, expected }) {
    const desc = ["lights_in_area(", input.startx, ", ", input.starty, ", ",
        input.endx, ", ", input.endy, ")"].join('')

    QUnit.test(desc, function (assert) {
        assert.deepEqual(lights_in_area(input.startx, input.starty, input.endx, input.endy),
            expected)

    })

})