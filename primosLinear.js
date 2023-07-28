/**
 * Método responsável por encontrar todos os números primos até o número n.
 *
 * @param {number} n -> O número inteiro maior que 1 até o qual serão encontrados os números primos.
 * @returns {number[]} -> Um array contendo todos os números primos encontrados até o número n.
 * @throws {Error} -> Se o valor de n for menor ou igual a 1, ou se não for um número inteiro.
 *
 * @author Eduardo Knopp <eduardoknopp7@gmail.com> (28/07/2023)
 */
function primos(n) {
    // Valida o input para garantir que seja um número inteiro maior que 1
    if (n <= 1 || !Number.isInteger(n)) {
      throw new Error('O número deve ser inteiro maior que 1.');
    }

    // Inicia o array com o número 2, que é o primeiro número primo
    const primos = [2];

    for (let i = 3; i <= n; i++) {
      let ePrimo = true;

      // Verifica se o número atual (i) é divisível por algum número primo encontrado até agora
      for (let j = 0; j < primos.length; j++) {
        // Se o número é divisível por um número primo, não é primo, e não é necessário continuar testando
        if (i % primos[j] === 0) {
          ePrimo = false;
          break;
        }
      }

      // Se o número é primo, adiciona ao array de primos
      if (ePrimo) {
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
