function distance_from_start(dir) {

    let vals = splitInput(dir)
    let ans = []
    const dict = new Map()
    dict.set("^", 1)
    dict.set(">", 1)
    dict.set("v", -1)
    dict.set("<", -1)

    vals.forEach(element => {
        ans.push(dict.get(element))
    });
    return ans.reduce((x, y) => x + y, 0)
}

function splitInput(dir) {
    return dir.split("");
}

function running_total(params) {
    let all = splitInput(params)

    let result = {
        "^": 0,
        ">": 0,
        "v": 0,
        "<": 0
    }

    for (let i = 0; i < all.length; i++) {
        ++result[all[i]]
    }

    console.log(result)
    return result
}