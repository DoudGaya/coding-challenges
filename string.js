
const strSearch = (str) => {
    let all = str.match(/(div)|(p)|(em)|(i)|(b)/g)

    for (let i = 0; i < all.length; i++){

           let check = all.filter(item => {
            return item === all[i]
           })

           if (check.length === 1 || check.length%2 !== 0){
            return all[i]
           }
    }

    return true
    
}


console.log(strSearch('<div><i>hello</i>world</b>'))


(function() {
    var a = b = 5;
  })();
  
  console.log(b);

