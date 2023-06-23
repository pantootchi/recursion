function fibs(N) {
    let array = [0,1];

    if (N <= 0) return "Invalid input";
    if (N === 1) return [0];

    while (array.length <= (N - 1)) {
        array.push(array[array.length - 2] + array[array.length -1])
    }

    return array;
}


console.log(fibs(8));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(0));