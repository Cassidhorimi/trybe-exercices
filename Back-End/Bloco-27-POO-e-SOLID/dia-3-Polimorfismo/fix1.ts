abstract class CharacterVaiDarNamoro { 
  abstract talk(): void;
  abstract specialMov(): void;
}

class MeleeCharacter extends CharacterVaiDarNamoro {
  constructor(private _name: string, private _specialmove: string) {
    super();
  }
  talk() {
    console.log(`${this._name} diz: Tome`);
  }
  specialMov() {
    console.log(`${this._name} usa: ${ this._specialmove }`);
  }
}

class LongRangeCharacter extends CharacterVaiDarNamoro {
  constructor(private _name: string, private _specialmove: string) {
    super();
  }
  talk() {
    console.log(`${this._name} diz: Tome`);
  }
  specialMov() {
    console.log(`${this._name} usa: ${ this._specialmove }`);
  }
}

const hmmmApaixonei = new MeleeCharacter('Memada', 'Cavalo');
const rodrigoFaro = new LongRangeCharacter('Rodrigo Faro', 'Ele Gosta');

const VaiDarNamoro = (character: CharacterVaiDarNamoro) => {
  character.talk();
  character.specialMov();
}

VaiDarNamoro(hmmmApaixonei);
VaiDarNamoro(rodrigoFaro);