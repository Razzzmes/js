const str = 'DDADSADASDAAADS'
let das = []

for(let i =0; i < str.length; i++){
    
    if(das.indexOf(str[i]) === -1){
        das.push(str[i])
    }
}
console.log(das)