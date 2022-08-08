

function domainName(url) {
    return url.replace(/^https?:\/\/|(www\.)?/, '').replace(/\..+$/, '');   
}