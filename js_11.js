class Worker {
    constructor(firstName, lastName, rate, days){
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }
    sayName(){
        console.log(`Имя работника: ${this.firstName} ${this.lastName}`)
    }
    getSalary(){
        console.log("Зарплата: " + this.rate*this.days)
    }
}


let worker = new Worker('Павел', 'Миронов', '1000', '30',)
worker.sayName()
worker.getSalary()

let worker2 = new Worker('Саша', 'Кос', '100', '30',)
worker2.sayName()
worker2.getSalary()