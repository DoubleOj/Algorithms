export default function linSearch(x, arr){
    let message = `false: cannot find  ${x} in the Array`
    let i = 0
    while(i < arr.length){
        if(arr[i] === x){
            message = `true: found ${x} in position ${i} of Array in run ${i}`;
            break
        }
        i++
    }

    return message;
}