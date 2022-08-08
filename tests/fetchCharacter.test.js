require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  it('testa se a se o id 720 corresponde a Wonder Wooman', async () => {
    const { name } = await fetchCharacter('720');
    expect(name).toEqual('Wonder Woman');
  });

  it('testa se a função gera um error quando é chamada sem parâmetros', async () => {
    const result = await fetchCharacter();
    expect(result).toEqual(new Error('You must provide an url'));
  });

  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const response = await fetchCharacter('parâmetro qualquer');
    expect(response).toBe('Invalid id');
  });

  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});