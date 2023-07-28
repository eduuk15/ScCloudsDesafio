/**
 * Método responsável por determinar o valor correspondente da sequência Fibonacci de acordo
 * com o número da posição da sequência
 *
 * @param {number} n -> O número da posição na sequência Fibonacci.
 * @returns {number} -> O valor correspondente na sequência Fibonacci.
 * @throws {Error} -> Se o valor de n não for um número inteiro não negativo.
 *
 * @author Eduardo Knopp <eduardoknopp7@gmail.com> (28/07/2023)
 */
function fib(n) {
    // Valida o input para garantir que seja um número inteiro não negativo
    if (!Number.isInteger(n) || n < 0) {
        throw new Error('O número deve ser um inteiro não negativo.');
    }

    // Casos base da sequência Fibonacci {0, 1, ...}
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Chamada recursiva para calcular os valores dos números anteriores na sequência
        return fib(n - 1) + fib(n - 2);
    }
}

// Exemplos de uso descritos no problema
console.log(fib(0)); // Output: 0
console.log(fib(1)); // Output: 1
console.log(fib(2)); // Output: 1
console.log(fib(3)); // Output: 2
console.log(fib(5)); // Output: 5
console.log(fib(6)); // Output: 8

// Exemplo de erro
console.log(fib(-1)); // Output: Error
