// ONE CLASS OF VOCABULARY TERM
class Term{
  constructor(name,definition,language){
    this.name = name;
    this.definition = definition;
    this.language = language;
  }
  render(){
    return`
    <details>
      <summary>${this.name} (${this.language})</summary>
        <p>${this.definition}</p>
    </details>`;
  }
}
