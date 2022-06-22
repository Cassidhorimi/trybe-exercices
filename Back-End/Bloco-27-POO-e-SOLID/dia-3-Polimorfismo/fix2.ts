interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create: (char: Character) => Promise<DbCharacter>;
  update: (id: number, char: Character) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>
  getById: (id: number) => Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  create = async (char: Character) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...char };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndexById = (id: number) => {
    const index = db.findIndex((char) => char.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  update = async (id: number, character: Character) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  getAll = async () => db;

  getById = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor (readonly model: IModel) { }

  async create(char: Character) {
    const newChar = await this.model.create(char);
    return ({ status: 201, data: newChar });
  }

  async getAll() {
    const allChar = await this.model.getAll();
    return ({ status: 200, data: allChar });
  }

  async getById(id: number) {
    const charById = await this.model.getById(id);
    return ({ status: 200, data: charById });
  }

  async update(id: number, char: Character) {
    const updateChar = await this.model.update(id, char);

    return ({ status: 201, data: updateChar })
  }

  async delete(id: number) {
    await this.model.delete(id);

    return ({ status: 200 });
  }
}

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);