export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
  }
  
  info (){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp() {
    this.level += 1;
    console.log(`${this.name} leveled up to Level ${this.level}!`);
  }
}

