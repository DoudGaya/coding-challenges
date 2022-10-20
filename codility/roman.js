
function solution(roman){

// Reference refs 
    const ref = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }

    // Validation Check
    if (roman === '' || typeof(roman) !== 'string' ) {
        console.log('Please use the right roman... ')
        return;
    }

    // Returned Number
    let numbers = 0;

    // converting to arrays 
    let raw = roman.split('')


    // Looping through and checking conditions 
    for (let i = raw.length - 1; i >= 0; i--) {
        if ( raw[i] === 'V' && raw[i - 1] == 'I' ) {
            numbers = numbers + ref[raw[i]] - 1
            i = i - 1
        } else if ( raw[i] === 'X' && raw[i - 1] === 'I' ) {
            numbers = numbers + ref[raw[i]] - 1
            i = i - 1
        } else if ( raw[i] === 'L' && raw[i - 1] === 'X' ) {
            numbers = numbers + ref[raw[i]] - 10
            i = i - 1
        } else if ( raw[i] === 'C' && raw[i - 1] === 'X' ) {
            numbers = numbers + ref[raw[i]] - 10
            i = i - 1
        } else if ( raw[i] === 'D' && raw[i - 1] === 'C' ) {
            numbers = numbers + ref[raw[i]] - 100
            i = i - 1
        } else if ( raw[i] === 'M' && raw[i - 1] === 'C' ) {
            numbers = numbers + ref[raw[i]] - 100
            i = i - 1
        } else {
            numbers = numbers + ref[raw[i]]
        }

    }

    return numbers
}
