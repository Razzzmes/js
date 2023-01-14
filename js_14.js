class MyString{

    constructor(str){
        this.str = str;
    }

    reverse(){
        return this.str.split('').reverse().join('')
    }

    ucFirst(){
        return this.str.charAt(0).toUpperCase() + this.str.slice(1)
    }

    ucWords(){
        return this.str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
    }
}

let myString = new MyString ("олег саша паша даша")
console.log(myString.reverse())
console.log(myString.ucFirst())
console.log(myString.ucWords())

