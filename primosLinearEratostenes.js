/**
 * Método responsável por, através do Crivo de Eratóstenes, encontrar todos os números primos até o número n.
 *
 * @param {number} n -> O número inteiro maior que 1 até o qual serão encontrados os números primos.
 * @returns {number[]} -> Um array contendo todos os números primos encontrados até o número n.
 * @throws {Error} -> Se o valor de n for menor ou igual a 1, ou se não for um número inteiro.
 *
 * @author Eduardo Knopp <eduardoknopp7@gmail.com> (28/07/2023)
 */
function primos(n) {
    // Valida o input para garantir que seja um número inteiro maior a 1
    if (n <= 1 || !Number.isInteger(n)) {
        throw new Error('O número deve ser inteiro maior que 1.');
    }

    // Criação do crivo com todos os números considerados primos
    const crivo = Array(n + 1).fill(true);
    crivo[0] = false;
    crivo[1] = false;

    /**
     * Função auxiliar para marcar os múltiplos de um número primo no crivo.
     *
     * @param {number} primo -> O número primo cujos múltiplos serão marcados como não primos.
     */
    function marcarMultiplos(primo) {
        for (let i = 2 * primo; i <= n; i += primo) {
            crivo[i] = false;
        }
    }

    // Loop para encontrar os números primos
    for (let primo = 2; primo <= Math.sqrt(n); primo++) {
        // Verifica se o número ainda não foi marcado como não primo
        if (crivo[primo]) {
            // Marca os múltiplos do número primo atual como não primos
            marcarMultiplos(primo);
        }
    }

    // Cria um array com todos os números primos encontrados no crivo
    const primos = [];
    for (let i = 2; i <= n; i++) {
        if (crivo[i]) {
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
