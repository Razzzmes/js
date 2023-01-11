// const array = [1,2,3,4,5,6,7,8,9,2,3,1]

// function linearSearch(array, items) {
//     let mass = []
//     for (let i = 0; i < array.length; i++){
        
//         if (array[i] === items) {
//             mass.push(i)
//         }

//     }
//     return mass; 
// }

// console.log(linearSearch(array, 2))









// const array = [0,1,1,2,2,3,3,3,4,6,6,7,8,9,32,34,76,87,456]

// function binarySearch (array, item){

//     let start = 0
//     let end = array.length
//     let mid
//     let found = false
//     let possition = -1
//     let count = 0

//     while (found === false && start <= end){
//         count += 1
//         mid = Math.floor((start + end)/2)

//         if(array[mid] === item) {
//             found = true
//             possition = mid
//             console.log(`количество шагов: ${count}`)
//             return possition;
//         }

//         if (item < array[mid]){
//             end = mid - 1
//             console.log(`отрезал правую часть `)
//         }
        
//         else {
//             start = mid + 1
//             console.log(`отрезал левую часть `)
//         }
//     }
//     return possition;
// }

// binarySearch(array, 4)









const array = [1,6,3,2,87,9,34,3,2,1,456,7,6,4,3,8,0,76,32]
let count = 0

function quickSort(array){

    if (array.length <= 1){
        return array
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []

    for(let i = 0; i < array.length; i++){

        count += 1

        if (i === pivotIndex){
            continue
        }

        if(array[i] < pivot){
            less.push(array[i])
        }

        else{
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


function binarySearch (array, item){
    let start = 0
    let end = array.length
    let mid
    let found = false
    let possition = -1
    let countSearch = 0

    while (found === false && start <= end){
        countSearch += 1
        mid = Math.floor((start + end)/2)

        if(array[mid] === item) {
            found = true
            possition = mid
            console.log(`количество шагов: ${countSearch}`)
            return possition;
        }

        if (item < array[mid]){
            end = mid - 1
            console.log(`отрезал правую часть `)
        }
        
        else {
            start = mid + 1
            console.log(`отрезал левую часть `)
        }
    }
    return possition;
}
    

console.log(quickSort(array))
console.log(count)

binarySearch(quickSort(array), 456)


