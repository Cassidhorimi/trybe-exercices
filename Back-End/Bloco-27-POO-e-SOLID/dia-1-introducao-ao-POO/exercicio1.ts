class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(
    matricula: string,
    nome: string,
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProvas = [];
    this._notasTrabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ser maior que 3 caracteres.');
    }

    this._nome = value;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(value: number[]) {
    if(value.length < 4) {
      throw new Error('O aluno deve ter 4 notas cadastradas');
    }

    this._notasProvas = value;
  }

  get notasTrabalhos(): number[] {
    return this._notasTrabalhos;
  }

  set notasTrabalhos(value: number[]) {
    if(value.length < 2) {
      throw new Error('O aluno deve ter 2 notas cadastradas');
    }

    this._notasTrabalhos = value;
  }

  somaNotas(): number {
    return [...this._notasProvas, ...this._notasTrabalhos]
      .reduce((prev, acc) => {
        acc += prev;

        return acc;
      }, 0);
  }

  mediaNotas(): number {
    const soma = this.somaNotas();
    const divisor = this._notasProvas.length + this._notasTrabalhos.length;

    return Math.round(soma / divisor);
  }
}