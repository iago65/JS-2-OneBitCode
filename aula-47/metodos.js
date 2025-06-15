let pessoa = {
  nome: "Iago",
  idade: 26,
  // Os métodos conseguem deixar os objetos muito mais "poderosos", eles são como funções dentro dos objetos, assim como o ´console.log´ o "console" é um objeto nativo do JavaScript e o .log é um método dentro deste objeto
  dizerOla(){
    console.log("Olá, Mundo! Meu nome é " + this.nome) 
  }

}

console.log(pessoa)
pessoa.dizerOla()