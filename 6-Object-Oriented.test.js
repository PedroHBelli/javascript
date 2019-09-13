
describe('Orientação a Objetos', function() {
    class 'Pessoa' {
      constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
      }
      fullname() {
        return `${this.firstname} ${this.lastname}`
      }
    } 
    
    it('retorna o nome completo Willian Gibson', function () {
      var pessoa = new Pessoa('Willian', 'Gibson');
  
      expect(pessoa.fullname()).toBe('Willian Gibson');
    });
  
    it('retorna o nome completo Douglas Adams', function () {
      var pessoa = new Pessoa('Douglas', 'Adams');
  
      expect(pessoa.fullname()).toBe('Douglas Adams');
    });
  });
  