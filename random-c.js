



function solution (arr) {
  // sorting the array in descending order
  let list = arr.sort((a, b) => b - a).slice(0, 4)
  const final = list.reduce((res, sum) => res + sum)
  console.log(final)
}
solution([1,2,3,4])



function strings(str) {
  const ref = ['div', 'p', 'i', 'em', 'p']

  for (let i = 0; i < ref.length; i++){
    if (str.indexOf(ref[i])) {

      
      let first = str.indexOf(ref[i])
      let last = str.lastIndexOf(ref[i] || undefined)

      if (first === last || last == undefined){
        return str[first]
      }
    }

  }
}


function MathChallenge(num) { 

  let solution = []
  let snum = String(num)
  let numbers = snum.split('')

  let ref;


  
  let s = numbers.map( item => {
    return Number(item)
  })

  console.log(s)

  for (let i = s.length; i > 0; i--) {
      if (s[i] > s[i -1]) {
        let x = s[i]
        s[i] = s[i - 1]
        s[i - 1] = x

        if (s[i+1] !== undefined && s[i] > s[i+1]) {
          for (let j = s[i]; j < s.length; j++) {
            if (s[i] > s[j]) {

              let y = s[j]
              s[j] = s[i]
              s[i] = y



            } 
          }
        }
        break
      }
  }


  // if ()

  
}

MathChallenge(41352)



