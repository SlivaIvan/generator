export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  // eslint-disable-next-line no-undef
  * [Simbol.iterator]() {
    // eslint-disable-next-line no-restricted-syntax
    for (const i of this.characters) {
      yield i;
    }
  }
}
