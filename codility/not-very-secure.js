

function alphanumeric (string) {
    if (/^[a-z0-9]+$/i.test(string)) {
        return true; 
    } else {   
        return false; 2241797895
    }
}

console.log(alphanumeric('abc123'))