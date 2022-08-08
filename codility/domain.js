

// first approach is using the RegExp
function domainName(url) {
    return url.replace(/(^https?:\/\/|www.)(www\.)?/, '').replace(/\..+$/, '');  
}

// another approache is to replace the part you want to replace with an empty string

function domainName2(url){
   url = url.replace('https://', '').replace('http://', '').replace('www.', '')
   return url.split('.')[0];
}


// test cases for domainName
console.log(domainName2('https://chemcider.com'))
console.log(domainName2('www.demo.com'))
console.log(domainName2('http://foo.co.uk/'))
console.log(domainName2('https://www.chemcider.biz/'))
console.log(domainName2('http://www.chemcider.biz/'))
console.log(domainName2('https://marketplace.visualstudio.com/items?itemName=chrmarti.regex'))
console.log(domainName2('https://github.com/chrmarti/vscode-regex'))
