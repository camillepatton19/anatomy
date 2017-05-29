var buttonLungsHealthy;
var buttonHeartAttack;
var buttonLungsSmoking;
var buttonHeartHealthy;
var buttonAlchoholicLiver;
var buttonWorksCited;

var imgskeleton;
var imgheart;
var imgHeartAttackHeart;
var imghealthylungs;
var imgsmokinglungs;
var imghealthyliver;
var imgdrinkingliver;

var isHeartAttackHeart = false;
var isSmokingLungs = false;
var isHealthyLungs = false;
var isHeartHealthy = false;
var isLiverHealthy = false;
var isDrinkingLiver = false;
var isWorksCited = false;


function setup() {
  createCanvas(1600, 1600);

  imgskeleton = loadImage("Place/human-skeleton-for-labeling.jpg");
  imgheart = loadImage("Place/healthy-heart-paint-image_burned.png");
  imgsmokinglungs = loadImage("Place/smoker appearing lungs_burned.png");
  imghealthylungs = loadImage("Place/healthy appearing lung_burned.png");
  imgHeartAttackHeart = loadImage("Place/heart with dead cells_burned.png");
  imghealthyliver = loadImage("Place/healthy-liver_burned.png");
  imgdrinkingliver = loadImage("Place/alcoholic-liver-disease_burned.png");

  buttonWorksCited = createButton('Works Cited');
  buttonWorksCited.position(725, 15);
  buttonWorksCited.mousePressed(workscited);

  buttonAlcoholicLiver = createButton('Alcoholic Liver');
  buttonAlcoholicLiver.position(600, 15);
  buttonAlcoholicLiver.mousePressed(drinkingLiver);

  buttonHealthyLiver = createButton('Healthy Liver');
  buttonHealthyLiver.position(490, 15);
  buttonHealthyLiver.mousePressed(healthyLiver);

  buttonHeartHealthy = createButton('Heart Healthy');
  buttonHeartHealthy.position(370, 15);
  buttonHeartHealthy.mousePressed(hearthealthy);

  buttonHeartAttack = createButton('Heart Attack');
  buttonHeartAttack.position(10, 15);
  buttonHeartAttack.mousePressed(heartattack);

  buttonLungsSmoking = createButton('Smoking Lungs');
  buttonLungsSmoking.position(120, 15);
  buttonLungsSmoking.mousePressed(lungssmoking);

  buttonLungsHealthy = createButton('Lungs Healthy');
  buttonLungsHealthy.position(250, 15);
  buttonLungsHealthy.mousePressed(lungshealthy);

}

function healthyLiver() {
  isLiverHealthy = true;
  isDrinkingLiver = false;
}

function drinkingLiver() {
  isLiverHealthy = false;
  isDrinkingLiver = true;
}

function hearthealthy() {
  isHeartHealthy = true;
  isHeartAttackHeart = false;
}

function lungssmoking() {
  isHealthyLungs = false;
  isSmokingLungs = true;
}

function heartattack() {
  isHeartHealthy = false;
  isHeartAttackHeart = true;
}

function lungshealthy() {
  isHealthyLungs = true;
  isSmokingLungs = false;
}

function workscited() {
  isWorksCited = true;
  isHeartHealthy = false;
  isHeartAttackHeart = false;
  isHealthyLungs = false;
  isSmokingLungs = false;
  isLiverHealthy = false;
  isDrinkingLiver = false;
}

function draw() {

  image(imgskeleton, 500, 20);
  image(imgskeleton, 0, 20);
  image(imgskeleton, 1000, 20);

  if (isHeartHealthy === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgheart, 330, 215, width / 27, height / 26);
    textSize(20);
    strokeWeight(0);
    fill(255, 0, 0);
    text("This is a 3D model of what a healthy human heart should look like.", 1, 1000);
    text("This is the heart of a person who eats well, exercises and does", 1, 1020);
    text("not drink, smoke or engage in other unhealthy activities.", 1, 1040);
  }
  if (isWorksCited === true) {
    background(255, 255, 255);
    textSize(20);
    fill(0, 51, 102);
    text("https://www.cdc.gov/heartdisease/facts.htm", 1, 100);
    text("https://www.emaze.com/@ATCCLQRF/Smoking-effects-to-the-lungs-&-body", 1, 120);
    text("http://gothing.info/pic-of-human-skeleton/", 1, 140);
    text("http://www.passmyexams.co.uk/GCSE/biology/respiration-diseases.html", 1, 160);
    text("https://www.pinterest.com/pin/409898003556960869/", 1, 180);
    text("http://www.gettyimages.com/photos/necrosis?excludenudity=true&sort=mostpopular&mediatype=photography&phrase=necrosis", 1, 200);
    text("http://www.playbuzz.com/upsocl10/puedes-distinguir-entre-lo-que-pertenece-a-un-cuerpo-humano-y-a-un-cuerpo-animal", 1, 220);
    text("https://www.pinterest.com/pin/79516749642975828/", 1, 240);
    text("liver-disease-symptoms.com/alcoholic-liver-disease/", 1, 260);
  }
  if (isHeartAttackHeart === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgHeartAttackHeart, 330, 220, width/27, height/20);
    fill(153, 0, 0);
    textSize(20);
    text("Heart Attacks affect roughly 610,000 Americans every year and", 1, 1000);
    text("contributes to 1 in every 4 deaths in America each year.", 1, 1020);
    text("Risk factors for heart attacks include high blood pressure,", 1, 1040);
    text("high choleserol, obesity, diabetes, lack of exercise, excessive", 1, 1060);
    text("alcohol consumption. This is a model of a heart during a heart", 1, 1080);
    text("_____________________________________", 1, 2000);
    textSize(10);
    text("1", 490, 1015);
    text("1", 190, 1075);
    fill(153, 0, 0);
  }
  if (isHealthyLungs === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imghealthylungs, 795, 225, width / 17, height / 17);
  }
  if (isSmokingLungs === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgsmokinglungs, 793, 200, width / 20, height / 20);
  }
  if (isLiverHealthy === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    push();
    translate(1295, 295);
    rotate(radians(-20));
    image(imghealthyliver, 0, 0, width / 16, height / 16);
    pop();
  }
  if (isDrinkingLiver === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgdrinkingliver, 1295, 295, height / 16, width / 16);
  }

  fill(0, 0, 0);
  textSize(20);
  text("Living a healthy life style is incredibly important! In this animation, you will be able to see how different unhealthy decisions could affect different organs in your body!", 1, 15);
  textSize(15);
  text("Click on each button across the top to see a heatlhy organ and then an organ which is affected by unhealthy lifestyle decisions.", 1, 30);
  text("Then scroll down for an explaination of the condition and ways to prevent it. To see the code which makes this possible:", 1, 45);
  text("right click, chose inspect, click on sources at the top then scroll down in the box in the upper right to view my code!", 1, 60);
}