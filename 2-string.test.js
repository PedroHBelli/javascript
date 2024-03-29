describe('string', function() {
    it('retorna o tamanho de uma string', function() {
      const str = 'teste';
      expect(str.length).toEqual(5); // IMPLEMENTE
    });
  
    it('retorna o segundo char de uma string', function() {
      const str = 'abcde';
      expect(str.length).toEqual('b'); // IMPLEMENTE
    });
  
    it('retorna o os 5 primeiros chars de uma string', function() {
      const str = 'abcdefghi';
      expect(str.length).toEqual('abcde'); // IMPLEMENTE
    });
  
    it('retorna a concatenação de duas strings', function() {
      const str_one = 'Hello';
      const str_two = ' World!';
  
      expect(str_one + ' ' + str_two).toEqual('Hello World!'); // IMPLEMENTE
    });
  
    it('retorna a interpolação de duas strings', function() {
      const str_one = 'Hello';
      const str_two = 'World';
  
      expect(`${str_one} ` + `${str_two}!`).toBe('Hello World!'); // IMPLEMENTE
    });
  
    it('replace uma parte da string', function() {
      const str = 'Hello, World!';
      const res = str.replace('hello', 'studant');
      expect(str.replace) .toEqual('Hello, Student!'); // IMPLEMENTE
    });
  
    it('split uma string', function() {
      const str = 'Isso é uma string';
      const res = str.split('');
      expect(str.split).toEqual(['Isso', 'é', 'uma', 'string']); // IMPLEMENTE
    });
  
    it('lower case uma string', function() {
      const str = 'ISSO É UMA STRING';
      const res = str.toLowerCase;
      expect(str.toLowerCase).toEqual('isso é uma string'); // IMPLEMENTE
    });
  
    it('upper case uma string', function() {
      const str = 'isso é uma string';
      const res = str.toUpperCase;
      expect(str.toUpperCase).toEqual
      ('ISSO É UMA STRING'); // IMPLEMENTE
    });
  });
  