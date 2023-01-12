const event1 = ["01:15","02:00"]
const event2 = ["02:00","03:00"]
let event3 = event1.concat(event2);
let cache

for (let i = 0; i < event3.length; i++){
    cache = event3[i];              
    for (let j = i+1; j < event3.length; j++){
        if (cache == event3[j]){
        console.log(`ошибка: две задачи в ${cache}`);
        }
    }
}