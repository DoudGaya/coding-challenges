function MathChallenge(num) { 



    
    let first;
    let last;
    let snum = String(num);
    let numbers = snum.split('');
    let ref;
    let solution
  
    let s = numbers.map( item => {
    return Number(item)
    })


    if (s.every(item => item === s[0])) {
        return -1
    }
  
  
    for (let i = s.length - 1; i >= 0; i--) {
      
      if (s[i] > s[i - 1]) {
        let x = s[i]
        s[i] = s[i-1]
        s[i-1] = x
  
        if (s[i+1] !== undefined) {
          ref = i
        } else {
            return s
        }
        break;
      }
    }
  
  
  first = s.slice(0, ref)
  last = s.slice(ref, s.length)
  
  
  solution = first.concat(last.sort())
  
  solution = Number(solution.join(''))
  
  return solution;
  
  }
     
  // keep this function call here
  console.log(MathChallenge(999))