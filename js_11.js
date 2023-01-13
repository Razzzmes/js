class Worker {
    
    constructor(firstName, lastName, rate, days){
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        console.log("Имя работника:" + this.firstName + " " + this.lastName + ", " +"Зарплата: " + this.rate*this.days)
    }
}


let worker = new Worker('Павел', 'Миронов', '1000', '30',)
worker.getSalary()

let worker2 = new Worker('Саша', 'Кос', '100', '30',)
worker2.getSalary()
