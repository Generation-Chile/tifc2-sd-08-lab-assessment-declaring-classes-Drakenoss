export class Player {
    constructor(name,level) {
     this.name = name;
     this.level = level;
     this.experience = 0;
     this.exptolevel = 100;
     this.inventory = new Map();
      }
    }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
    
  }
  levelUp() {
    this.level += 1;
    this.experience = 0;
    console.log(`${this.name} has leveled up to Level ${this.level}!`);
  }

  addItem(itemName, quantity = 1) {
    const currentQty = this.inventory.get(itemName) || 0;
    this.inventory.set(itemName, currentQty + quantity);
  }

  removeItem(itemName, quantity = 1) {
    const currentQty = this.inventory.get(itemName) || 0;
    if (currentQty <= quantity) {
      this.inventory.delete(itemName);
    } else {
      this.inventory.set(itemName, currentQty - quantity);
    }
  }
  listInventory() {
    console.log(`${this.name}'s Inventory:`);
    for (const [item, qty] of this.inventory.entries()) {
      console.log(`${item}: ${qty}`);
    }
  }