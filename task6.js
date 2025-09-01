class Player {
  constructor(name) {
  this.name = name;
  this.members = [];
  }
addMember(player) {
  if (player instanceof Player) {
    this.members.push(player);
  } else {
    console.log("You can only add an instance of Player.");
  }  
}

removeMember(player) {
  this.members = this.members.filter(member => member !== player);
}

listmembers() {
  this.members.forEach(member => console.log(member.name));
}
}

