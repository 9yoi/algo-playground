var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = function () {
};

/*---------------------------------*/
var Bee = function() {
  Grub.call(this);  //inherits grub properties --> grub is a superclass
  this.age = 5;
  this.color = "yellow";
};
 
Bee.prototype = Object.create (Grub.prototype); //failed method lookups on Bee will delegate to Grub

Bee.prototype.job = "keep on growing";
 
Bee.prototype.constructor = Bee;  //When lookups from a new instance of Bee to Bee prototype fails, it will stop and report the right constructor

/*---------------------------------*/

var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "find pollen"; 
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create (Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push (treasure);
} 

/*---------------------------------*/

var RetiredForagerBee = function() {
  //Grub.call(this);
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create (Grub.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push (treasure);
}

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};


/*---------------------------------*/

var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create (Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot ++;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot --;
};

