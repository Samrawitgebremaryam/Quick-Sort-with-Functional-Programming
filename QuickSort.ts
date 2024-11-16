function quicksort(xs: number[]): number[] {
  if (xs.length == 0){
    return []
  }

  const [pivot, ...tail] = xs
  
  const smaller = filter(tail, x => x <= pivot)
  const larger = filter(tail, x => x > pivot)

  return [...quicksort(smaller), pivot, ...quicksort(larger)]
}


function filter(xs: number[], func):number[]{

  if (xs.length == 0) {
    return []
  }
    
  const [head, ...tail] = xs

   return func(head)
    ? [head, ...filter(tail, func)]
    : filter(tail, func)
}

let nums = [10, 2, 5, 3, 1, 6, 7, 4, 2, 3, 4, 8, 9]
console.log(quicksort(nums))

