// const assert = require('assert');
const answerPhone = require('../src/asyncJest');
/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
  // Usei como referência o conteúdo sobre callbacks, bloco 10.2 do course Trybe:
  test('atende', (done) => {
    // Como a função retorna um resultado assíncrono, fiz a chamada do done() para que o tesre aguarde o resultado.
    answerPhone(true).then((response) => {
      expect(response).toEqual('Oi!');
      done();
    });
  });

  //  Usei como referência o conteúdo sobre async/await bloco 10.2 do course Trybe:
  test('ocupado', async () => {
    // Nesse caso precisei verificar quando ocorre o reject da promise.
    try {
      await answerPhone(false);
    } catch (error) {
      expect(error).toEqual(new Error('Infelizmente não podemos atender...'));
    }
  });
});
