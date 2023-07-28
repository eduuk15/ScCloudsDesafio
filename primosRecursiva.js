/**
 * Método responsável por encontrar todos os números primos até o número n
 *
 * @param {number} n -> O número inteiro maior que 1 até o qual serão encontrados os números primos
 * @returns {number[]} -> Um array contendo todos os números primos encontrados até o número n
 * @throws {Error} -> Se o valor de n for menor ou igual a 1, ou se não for um número inteiro
 *
 * @author Eduardo Knopp <eduardoknopp7@gmail.com> (28/07/2023)
 */
function primos(n) {
    // Valida o input para garantir que seja um número inteiro maior a 1
    if (n <= 1 || !Number.isInteger(n)) {
        throw new Error('O número deve ser inteiro maior que 1.');
    }

    /**
     * Função recursiva para verificar se um número é primo
     *
     * @param {number} num -> O número a ser verificado
     * @param {number} divisor -> O divisor atual a ser testado para verificar se o número é divisível
     * @returns {boolean} -> true se o número for primo, false caso contrário
     */
    function ePrimo(num, divisor) {
        // Verifica se o divisor chegou a 1, indicando que o número foi testado para divisibilidade por todos os valores possíveis
        if (divisor <= 1) {
            return true;
        }
        // Verifica se o número é divisível pelo divisor atual
        if (num % divisor === 0) {
            return false;
        }
        // Chama-se recursivamente a função com um novo divisor decrescente
        return ePrimo(num, divisor - 1);
    }

    const primos = [];
    for (let i = 2; i <= n; i++) {
        if (ePrimo(i, Math.floor(Math.sqrt(i)))) {
            // Se o número é primo, adiciona ao array de primos
            primos.push(i);
        }
    }

    // Retorna o array contendo todos os números primos até o número n
    return primos;
}

// Exemplos de uso descritos no problema
console.log(primos(2)); // Output: [2]
console.log(primos(3)); // Output: [2, 3]
console.log(primos(10)); // Output: [2, 3, 5, 7]

// Exemplo de erro
console.log(primos(0)); // Output: Error
