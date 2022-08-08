

function domainName(url) {
    return url.replace(/(^https?:\/\/|www.)(www\.)?/, '').replace(/\..+$/, '');  
}

// test cases for domainName
console.log(domainName('https://chemcider.com'))
console.log(domainName('www.demo.com'))
console.log(domainName('http://foo.co.uk/'))
console.log(domainName('https://www.chemcider.biz/'))
console.log(domainName('http://www.chemcider.biz/'))
console.log(domainName('https://marketplace.visualstudio.com/items?itemName=chrmarti.regex'))
console.log(domainName('https://github.com/chrmarti/vscode-regex'))
