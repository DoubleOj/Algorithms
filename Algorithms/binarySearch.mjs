//here i will make a binary sort function
export default function binarySearch(num, arr){
    let maxRuns = Math.floor(arr.length/2) + 1;
    let currentRun = 0;
    let searchPos = Math.floor(arr.length/2);
    let message = `false: couldn't find ${num} in the Array`;
    let low = 0;
    let high = arr.length
    //pseudo code
    // step 1)take array and go to mid point check if num is greater or less than (or is exact match)
    // step 2.1) if num is greater than searchPos go to the "right" half and split again go to step 1
    // step 2.2) else if num is less than searchPos go to "left" half and split the array go to step 1
    // step 2.3) if exact match return true (also how many loops needed to find)
    // step 3) retun if found(true) or not found(false) and how many times iterated through the loop

    //step 1
    while(currentRun < maxRuns){
        currentRun++
        if(arr[searchPos] > num){    
            high = searchPos - 1
            searchPos = Math.floor(low + high/2)
        }else if(arr[searchPos] < num){
            low = searchPos + 1
            searchPos = Math.floor((low + high)/2);
        }else if(arr[searchPos] === num){
            return message = `true: found ${num} at position: ${searchPos} of the Array in ${currentRun} runs`
            
        }
    }
    return message 
}