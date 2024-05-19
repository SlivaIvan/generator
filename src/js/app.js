import Character from './character';

export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  // eslint-disable-next-line no-undef
  * [Symbol.iterator]() {
    // eslint-disable-next-line no-restricted-syntax
    for (const i of this.characters) {
      yield i;
    }
  }
}

const iTeam = new Team();

iTeam.addCharacter(new Character('Name1', 'type', 1, 1, 1, 1));
