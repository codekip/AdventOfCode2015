function calculate_md5(params, number_of_leading_zeroes) {
    let required_zeroes = ''

    for (let i = 0; i < number_of_leading_zeroes; i++) {
        required_zeroes += '0'
    }

    let number = 0
    let first_5_digits = ''
    while (first_5_digits !== required_zeroes) {
        let to_encrypt = params + number
        first_5_digits = CryptoJS.MD5(to_encrypt)
            .toString()
            .split('')
            .slice(0, number_of_leading_zeroes)
            .join('')
        number++
    }

    return number - 1

}