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
    
    getDays() {
        return this.#days;
    }
    
    getSalary(){
        return this.#rate * this.#days
    }
}


let worker = new Worker('Павел', 'Миронов', '1000', '30')
console.log(worker.getFirstName());
console.log(worker.getLastName());
console.log(worker.getRate());
console.log(worker.getDays());
console.log(worker.getSalary());