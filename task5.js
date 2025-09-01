export class Player {
  constructor(name,level = 1) {
  this.name = name;
    this.level = level;
    this.experience = 0;
    this.expToLevelUp = 100;  
  }
 info (){ 
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp() {
    this.level += 1;
    this.experience = 0;
    console.log(`${this.name} leveled up to Level ${this.level}!`); 
  }

  gainExperience(points) {
    this.experience += points;
    while (this.experience >= this.expToLevelUp) {
      this.experience -= this.expToLevelUp;
      this.levelUp();
    }
  }
}