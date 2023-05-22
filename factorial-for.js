function factorialDe10 (numero) {
let factorial = 1;

for(let i = numero; i > 1; i--) {
    factorial *= i;
    }
    return factorial;
}

console.log(factorialDe10(10));