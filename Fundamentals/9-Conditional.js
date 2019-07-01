let year = 2015

let result = (year == 2015) ? 'Yeah' : 
             (year > 2015) ? 'Too high' :
             'Too low';

console.log(result)

//Task 1
if ('') {
    console.log("Sim, é falso")
}

//Task 2
name = 'ECMAScript'

console.log(`What's the "official" name of Javascript?`) 
if (name == 'ECMAScript') {
    console.log(`Right!`)
} else {
    console.log(`You don't know? ECMAScript!`)
}

//Task 3
let number = 0

if (number > 0) {
    console.log('1')
} else if (number < 0) {
    console.log('-1')
} else {
    console.log(0)
}

//Task 4
let a = 1,
    b = 5;

result = (a + b < 4) ? 'Below' : 'Over';
console.log(result)

//Task 5
let message,
    login = 'Director';

(login == 'Employee') ? console.log('Hello') :
          (login == 'Director') ? console.log('Greetings') :
          (login == '') ? console.log('No login') :
          console.log('');