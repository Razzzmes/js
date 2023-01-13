class Worker {
    
    #firstName
    #lastName
    #rate
    #days

    constructor(firstName, lastName, rate, days){
        this.firstName = firstName;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }
    
    getSalary(){
        return "Имя работника: " + this.firstName + " " + this.lastName + ", "+ "Зарплата: " + this.rate*this.days
    }
}


let worker = new Worker('Павел', 'Миронов', '1000', '30')
console.log (worker.getSalary())
