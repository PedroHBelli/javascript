describe('Funções', function() {
  it('Implemente uma função chamada add que recebe dois parâmtros e retorna a soma deles', function() {

    function add(x, y) {
      return x + y;
    }

    expect(add(1, 2)).toBe(3);
  });
});
