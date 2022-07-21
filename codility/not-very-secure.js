

function alphanumeric (string) {
    if (/^[a-z0-9]+$/i.test(string)) {
        return true; 
    } else {
        return false;
    }
}



console.log(alphanumeric('abc123_'))