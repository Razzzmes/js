class Worker {
    
    #firstName;
    #lastName;
    #rate;
    #days;

    constructor(firstName, lastName, rate, days){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#rate = rate;
        this.#days = days;
    }

    getFirstName() {
        return this.#firstName;
    }

    getLastName() {
        return this.#lastName;
    }

    getRate() {
        return this.#rate;
    }

    setRate(rate){
        this.#rate = rate
    }
    
    getDays() {
        return this.#days;
    }

    setDays(days){
        this.#days = days
    }
    
    getSalary(){
        return this.#rate * this.#days
    }
}

let worker = new Worker('Павел', 'Миронов', '1000', '30')
console.log(worker.getFirstName());
console.log(worker.getLastName());

worker.setRate(35);
worker.setDays(1500);

console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());