//pravimo objekat u kome se nalaye 3 metode
var GameManager = {
  //pravimo jedan metod koji pokrece druga 2
  //this zamenjuje naziv objekta
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  //ovaj metod nam stvara igrace
  resetPlayer: function(classType) {
    switch (classType) {
      case "Beli":
        player = new Player(classType, 200, 0, 200, 100, 50);
        break;
      case "Crveni":
        player = new Player(classType, 100, 0, 100, 150, 200);
        break;
      case "Zuti":
        player = new Player(classType, 80, 0, 50, 200, 50);
        break;
      case "Plavi":
        player = new Player(classType, 200, 0, 50, 200, 100);
        break;
    }
    //sada pravimo novu stranicu, kada se klikne na igraca
    //ova promenljiva ce da zameni pocetni interfejs sa novim
    //querySelector se koristi umesto .getElementsByClassName i ne sme se zaboraviti .nazivKlase u ()
    var getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/'+ classType.toLowerCase() +'.png" class="img-avatar"><div><h3>'+ classType +'</h3><p>Health: ' + player.health + '<br>Mana: ' + player.mana + '<br>Strength: ' + player.strength + '<br>Agility: ' + player.agility + '<br>Speed: ' + player.speed +  ' </p></div>';
  },
  setPreFight: function() {
    var getHeader = document.querySelector(".header");
    var getActions = document.querySelector(".actions");
    var getArena = document.querySelector(".arena");
    getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()"> Search for enemy!</a>';
    getArena.style.visibility = "visible";
  },
  setFight: function() {
    var getHeader = document.querySelector(".header");
    var getActions = document.querySelector(".actions");
    var getEnemy = document.querySelector(".enemy");
    //stvaranje zlikovaca
    var enemy00 = new Enemy("Vestica", 100, 0, 50, 100, 100);
    var enemy01 = new Enemy("Paradajz", 200, 0, 150, 80, 150);
    var chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
    switch (chooseRandomEnemy) {
      case 0:
        enemy = enemy00;
        break;
      case 1:
        enemy = enemy01;
        break;
    }
    getHeader.innerHTML = '<p>Task:Choose your move!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
    getEnemy.innerHTML = '<img src="img/' + enemy.enemyType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '<br>Mana: ' + enemy.mana + '<br>Strength: ' + enemy.strength + '<br>Agility: ' + enemy.agility + '<br>Speed: ' + enemy.speed +  ' </p></div> ';
  }

}
