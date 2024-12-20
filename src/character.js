export class Character {
  constructor(name, type, health = 100, level = 1, attack, defence) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Error");
    }
    this.name = name;
    this.type = type;
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Error");
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = Math.trunc(this.attack * 0.2 + this.attack);
      this.defence = Math.trunc(this.defence * 0.2 + this.defence);
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить уровень умершего");
    }
  }
  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
