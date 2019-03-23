class Vocabulary{
  constructor( title ){
    this.title = title;
    this.terms = [];//<<<<<<<<[Term,Term2]
  }
  addTerm( term ){
    this.terms.push(term); //ARRAY PUSH();
  }
  getTerm(name){ //SEARCHES TERMS BY NAME
    for(var i = 0; i<this.terms.length; i++){
      if(name == this.terms[i].name){
        return this.terms[i];
      }
    }
    return null;
  }
  generateTerms(amount){ //GENERATES NUMBER OF TERMS
    while(this.terms.length != amount){
    this.addTerm(
    //   new Term("HTML","lorem ipsum set dolor...","en")
    new Term(faker.lorem.word(), faker.lorem.sentence(), "en")
    );
  }
  }
  showAllTerms(){
    // div/ul/li
  }
  showAllTerms(page){
    // for
    // showTerms(1) 0....19
    // showTerms(2) 20....39
    // showTerms(3) 40....59
    //
  }
}
