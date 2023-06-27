function mergeSort(array) {
    if (array.length < 2) return array; //If array only has 1 item, return that array

    const midPoint = Math.floor(array.length/2); //Returns  a value that is just lesser than the given rational value
    const leftHalf = mergeSort(array.slice(0, midPoint)); //Slices the array from 0 to the midPoint but not including the midPoint
    const rightHalf = mergeSort(array.slice(midPoint)); //Slices the array starting from midPoint all the way to the end
    
    return merge(leftHalf, rightHalf) //Return the merged results
}

const merge = (leftArray, rightArray) => {
    const result = []; 

    while (leftArray.length > 0 && rightArray.length > 0) { //for comparing elements between 2 non-empty arrays
        const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
        result.push(arrayWithMin.shift()); //Shift method modifies the actual array and returns the removed element which is then added to the result array
    }
    
    //Pushes the last element from the only remaining non-empty array (either leftArray or rightArray)
    return result.concat(leftArray, rightArray);
}

let testArray = [4, 7, 8, 5, 3];
console.log(mergeSort(testArray));