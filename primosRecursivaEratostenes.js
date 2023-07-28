/**
 * Método responsável por, através do Crivo de Eratóstenes, encontrar todos os números primos até o número n
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

  // Criação do crivo com todos os números considerados primos
  const crivo = Array(n + 1).fill(true);
  crivo[0] = false;
  crivo[1] = false;

  /**
   * Função auxiliar para marcar os múltiplos de um número primo no crivo
   *
   * @param {number} primo -> O número primo cujos múltiplos serão marcados como não primos
   */
  function marcarMultiplos(primo) {
    for (let i = 2 * primo; i <= n; i += primo) {
      crivo[i] = false;
    }
  }

  /**
   * Função auxiliar para encontrar o próximo número primo a partir de um valor dado
   *
   * @param {number} primo -> O número primo a partir do qual será buscado o próximo primo
   * @returns {number} -> O próximo número primo encontrado após o número dado
   */
  function encontrarProximoPrimo(primo) {
    let proximo = primo + 1;
    while (!crivo[proximo]) {
      proximo++;
    }
    return proximo;
  }

  /**
   * Função recursiva para executar o Crivo de Eratóstenes
   *
   * @param {number} primo -> O número primo atual a partir do qual serão marcados os múltiplos
   */
  function crivoRecursivo(primo) {
    // Verifica se ainda é possível marcar múltiplos e encontrar mais primos
    if (primo <= Math.sqrt(n)) {
      // Marca os múltiplos do número primo atual
      marcarMultiplos(primo);
      // Encontra o próximo número primo
      const proximoPrimo = encontrarProximoPrimo(primo);
      // Chama-se recursivamente com o próximo número primo
      crivoRecursivo(proximoPrimo);
    }
  }

  // Executa o Crivo de Eratóstenes recursivamente começando do número 2 (primeiro primo)
  crivoRecursivo(2);

  // Cria um array com todos os números primos encontrados no crivo
  const listaPrimos = [];
  for (let i = 2; i <= n; i++) {
    if (crivo[i]) {
      listaPrimos.push(i);
    }
  }

  // Retorna o array contendo todos os números primos até o número n
  return listaPrimos;
}

// Exemplos de uso descritos no problema
console.log(primos(2)); // Output: [2]
console.log(primos(3)); // Output: [2, 3]
console.log(primos(10)); // Output: [2, 3, 5, 7]

// Exemplo de erro
console.log(primos(0)); // Output: Error
