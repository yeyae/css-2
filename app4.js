const player = {
   name:"yeajin",
   points: 10,
   fat: true,
};
console.log(player);
console.log(player.name);
//or console.log(player["name"]); 라고 사용해도 됨

player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);