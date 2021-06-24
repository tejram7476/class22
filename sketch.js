var mario;
var platformGroup;

function preload()
{}

function setup() {
  createCanvas(7346, 668);
  var countDistanceX = 0;
  var platform;
  var gap;

  mario = new Player();
  platformGroup= createGroup();
  for (var i=0;i<14;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
   }
 
}

function draw() {
  background('skyblue');  
  mario.applyGravity();
  mario.spt.collide(platformGroup);
  drawSprites();
}



