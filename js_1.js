const month = 0
const year = 0

function season (month){
    if(month >= 1 && month <= 2 || month == 12){
        console.log('зима')
    }
    else if(month >= 3 && month <= 5){
        console.log('весна')
    }
    else if(month >= 6 && month <= 8){
        console.log('лето')
    }
    else if(month >= 9 && month <= 11){
        console.log('осень')
    }

    return month
}


function leapyear (year){
    if(Number.isInteger(year / 4)){
        console.log('год високосный')
    }
    else{
        console.log('год не високосный')
    }
    return year
}

console.log(season(6))
console.log(leapyear(2020))
