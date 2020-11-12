export default class Gunner {
  constructor(name, weapon, health) {
    this.name = name;
    this.weapon = weapon;
    this.health = 100;
  }

smAttack() {
  return this.health -= 10;
}

mdAttack() {
  return this.health -= 20;
}

spcAttack() {
  return this.health -= 50;
}






  // currentHealth() {
  //   let health = 100;
    
  // }
};