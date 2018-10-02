function calculate_md5(params) {

    let number = 0
    let first_5_digits = ''
    while (first_5_digits !== '00000') {
        let to_encrypt = params + number
        first_5_digits = CryptoJS.MD5(to_encrypt)
            .toString()
            .split('')
            .slice(0, 5)
            .join('')
        number++
    }

    return number - 1

}