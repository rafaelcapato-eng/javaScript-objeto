// ------------------------------------------------------
// Função auxiliar - NÃO precisa mexer aqui
function testar(nomeExercicio, resultado, esperado) {
  const igual = JSON.stringify(resultado) === JSON.stringify(esperado);
  if (igual) {
    console.log(`✅ Correto - ${nomeExercicio}`);
  } else {
    console.log(`❌ Errado - ${nomeExercicio}`);
    console.log(`   Esperado: ${JSON.stringify(esperado)}`);
    console.log(`   Recebido: ${JSON.stringify(resultado)}`);
  }
}
// ------------------------------------------------------

function encontrarRepetidos(array) {
  const vistos = new Set();
  const repetidos = new Set();

  for (const elemento of array) {
    if (vistos.has(elemento)) {
      repetidos.add(elemento);
    } else {
      vistos.add(elemento);
    }
  }

  return [...repetidos];
}

function unirSemRepetir(array1, array2) {
  const juntados = [...array1, ...array2];
  const resultadoSemRepetir = [...new Set(juntados)];
  return resultadoSemRepetir;
}

function temRepetido(array) {
  const elementosUnicos = new Set(array);
  return elementosUnicos.size < array.length;
}

// ------------------------------------------------------
// Adicione as chamadas de teste abaixo para ver no terminal:
testar("encontrarRepetidos", encontrarRepetidos([1, 2, 2, 3, 4, 4]), [2, 4]);
testar("unirSemRepetir", unirSemRepetir([1, 2], [2, 3]), [1, 2, 3]);
testar("temRepetido", temRepetido([1, 2, 3, 1]), true);
