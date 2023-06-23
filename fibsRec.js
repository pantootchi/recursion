const fibsRec = (N, array = [0,1]) => N <= 0 ? "Invalid input" : N === 1 ? [0] : N === 2 ? [0,1] : N === array.length ? array : fibsRec(N, array.concat(array[array.length -2] + array[array.length -1]))

console.log(fibsRec(8));