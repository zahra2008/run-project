var path, boy_running;
function preload(){
loadImage(path.png)
loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  createSprite(path.png,boy_running);
path=velocity.y(350,150,20,30);
setAnimation(boy_running);

}

function draw() {
  background=("blue");
createBoundries()
visible.boundries
invisible.boundries
createleftrightboundries(path.png)
boy_running=collide(leftrightboundries);
mousepressedX();
if(mousepressedX >10 move leftrightboundries);





}
