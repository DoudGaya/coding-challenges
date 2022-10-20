const longest = (arr) => {

    let solution = [arr[0]]
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > solution[solution.length - 1]) {
        solution.push(arr[i])
      }
    }
    return solution
  }
  longest([9,9,4,2])