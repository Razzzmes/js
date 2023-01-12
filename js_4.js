const array = [1,2,3,6,8,1,6,3,2,1,0,4]
const str = ['one', 'two','three']

function bubbleSort (array, str){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if (array[j + 1] < array[j]){
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            
        }
    }

    let arraystr = array.concat(str);
    return arraystr
}

console.log(bubbleSort(array, str))