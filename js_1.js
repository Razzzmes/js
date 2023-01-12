const month = 11
const year = 2020

function season (month){
    if(month >= 1 && month <= 3){
        console.log('зима')
    }
    else if(month >= 4 && month <= 6){
        console.log('весна')
    }
    else if(month >= 7 && month <= 9){
        console.log('лето')
    }
    else if(month >= 10 && month <= 12){
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

console.log(season(month))
console.log(leapyear(year))