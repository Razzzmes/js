const str = ['дим', 'an', 'рота', 'аргентинам']
let array = []


function palindrome (str){
    for(let i = 0; i < str.length; i++){
        array.push(str[i] + str[i].slice(0, -1).split('').reverse().join(''))
    }
    return array 
}

console.log(palindrome (str))
