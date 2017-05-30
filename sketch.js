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
  createCanvas(1800, 1800);

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
  text("1", 2, 900);
  text("1", 500, 900);
  text("1", 1000, 900);

  if (isHeartHealthy === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgheart, 330, 215, width / 27, height / 26);
    textSize(10);
    text("3", 330, 280);

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
    text("Pictures:", 1, 80);
    text("1. http://gothing.info/pic-of-human-skeleton/", 1, 100);
    text("2. http://www.passmyexams.co.uk/GCSE/biology/respiration-diseases.html", 1, 120);
    text("3. https://www.pinterest.com/pin/409898003556960869/", 1, 140);
    text("4. http://www.gettyimages.com/photos/necrosis?excludenudity=true&sort=mostpopular&mediatype=photography&phrase=necrosis", 1, 160);
    text("5. https://www.pinterest.com/pin/79516749642975828/", 1, 180);
    text("6. http://www.playbuzz.com/upsocl10/puedes-distinguir-entre-lo-que-pertenece-a-un-cuerpo-humano-y-a-un-cuerpo-animal", 1, 200);
    text("14. liver-disease-symptoms.com/alcoholic-liver-disease/", 1, 220);

    text("Content:", 1, 300);
    text("7. Center for Disease Control and Prevention. May 23, 2017. Available from: https://www.cdc.gov/heartdisease/facts.htm", 1, 320);
    text("8. US Department of Health and Human Services. May 29, 2017. Available from: https://betobaccofree.hhs.gov/health-effects/smoking-health/", 1, 340);
    text("9. Asthma Partners. May 25, 2017. Available from: www.asthma.partners.org/NewFiles/BoFAChapter30.html", 1, 360);
    text("10. International Union Against Tuberculosis and Lung Cancer. May 26, 2017. Available from: www.theunion.org/news-centre/news/new-study-shows-smoking-tobacco-doubles-risk-of-recurrent-tuberculosis", 1, 380);
    text("11. James McIntosh. May 28, 2017. Available from: www.medicalnewstoday.com/articles/8856.php", 1, 400);
    text("12. Family Doctor. May 27, 2017. Available from: http://familydoctor.org/condition/pneumonia/", 1, 420);
    text("13. American Friends of Tel Aviv University. May 21, 2017. Available from: http://www.sciencedaily.com/releases/2016/01/160107104811.htm", 1, 440);
    text("15. Love Your Liver. May 22, 2017. Available from: loveyourliver.com.au/alcohol", 1, 460);


  }
  if (isHeartAttackHeart === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgHeartAttackHeart, 330, 220, width / 27, height / 20);
    text("4", 320, 290);
    fill(153, 0, 0);
    textSize(20);
    text("Heart Attacks affect roughly 610,000 Americans every year and", 1, 1000);
    text("contributes to 1 in every 4 deaths in America each year.", 1, 1020);
    text("Risk factors for heart attacks include high blood pressure,", 1, 1040);
    text("high choleserol, obesity, diabetes, lack of exercise, excessive", 1, 1060);
    text("alcohol consumption. This is a model of a heart during a heart", 1, 1080);
    text("attack. The blue portion is meant to represent the cells in the", 1, 1100);
    text("heart which are cut off from blood flow due to a plague and are", 1, 1120);
    text("not receiving the nutrients they need to beat in time with the", 1, 1140);
    text("rest of the heart. Risk factors such as those listed above", 1, 1160);
    text("contribute to the buildup of a plague in blood vessels of the", 1, 1180);
    text("heart.", 1, 1200);
    textSize(10);
    text("7", 490, 1015);
    text("7", 190, 1075);
    fill(153, 0, 0);
  }
  if (isHealthyLungs === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imghealthylungs, 795, 225, width / 17, height / 17);
    fill(0, 0, 0);
    text("2", 780, 300);
    fill(0, 0, 204);
    text("This is a model of healthy lungs surrounding the heart. In this model", 600, 1000);
    text("no breathing should be obstructed and the tissue of the lungs is unscarred.", 600, 1020);
  }
  if (isSmokingLungs === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgsmokinglungs, 795, 225, width / 20, height / 20);
    fill(76, 0, 153);
    textSize(20);
    text("This is a model of lungs which shows the effects of smoking.", 600, 1000);
    text("480,000 people die prematurely in America every year because", 600, 1020);
    text("of smoking. The effects of smoking can also be seen in increased", 600, 1040);
    text("disease risks. These include asthma, tuberculosis, and", 600, 1060);
    text("pneumonia. Asthma attacks are the tightening of the muscles", 600, 1080);
    text("around the bronchial tubes, making breathing difficult. Asthma", 600, 1100);
    text("attacks can be induced by smoking or through second hand  smoke.", 600, 1120);
    text("Children with parents who smoke, are far more likely to develop", 600, 1140);
    text("asthma than those who do not. The Tuberculosis disease is also", 600, 1160);
    text("affected by smoking. The risk of Tuberculosis recurring is", 600, 1180);
    text("significantly higher in smokers than those who do not smoke.", 600, 1200);
    text("Tuberculosis is an infectious disease which is contracted through", 600, 1220);
    text("air travel, such as coughing of sneezing. In 2012, 8.6 million", 600, 1240);
    text("people were sick with Tuberculosis, and 1.3 million people died", 600, 1260);
    text("of Tuberculosis related deaths. Smoking can also increase the", 600, 1280);
    text("risk of the latent disease beginning to show symptoms in", 600, 1300);
    text("in people previously unaffected. Pneumonia is a bacterial", 600, 1320);
    text("infection in the lungs. Smokers are more likely to contract", 600, 1340);
    text("this infection because smoking damages the small hairs in the", 600, 1360);
    text("lungs which remove germs and bacteria. Additionally, 10% of", 600, 1380);
    text("smokers who contract pneumonia are develop lung cancer.", 600, 1400);

    fill(0, 0, 0);
    textSize(10);
    text("8", 1180, 1035);
    text("8", 705, 1075);
    text("9", 1070, 1095);
    text("9", 1200, 1115);
    text("9", 870, 1155);
    text("10", 780, 1175);
    text("10", 1135, 1195);
    text("10", 950, 1235);
    text("10", 870, 1275);
    text("11", 880, 1315);
    text("12", 953, 1375);
    text("13", 1120, 1395);
    text("2", 780, 300);
    //text("8",);
  }
  if (isLiverHealthy === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    push();
    translate(1295, 295);
    rotate(radians(10));
    image(imghealthyliver, 0, 0, width / 18, height / 18);
    pop();
    text(1295, 295);
    fill(0, 153, 0);
    textSize(20);
    text("This is the model of a healty liver. This liver shows no signs of", 1000, 1000);
    text("alcoholic hepatitis or chrosis.", 1000, 1020);
  }
  if (isDrinkingLiver === true) {
    background(255, 255, 255);
    image(imgskeleton, 500, 20);
    image(imgskeleton, 0, 20);
    image(imgskeleton, 1000, 20);
    image(imgdrinkingliver, 1295, 295, height / 18, width / 18);
    fill(0, 0, 0);
    textSize(10);
    text("5", 1295, 295);
    text("15", 1070, 1015);
    text("15", 1100, 1035);
    text("15", 1280, 1055);
    text("15", 1660, 1035);
    text("15", 1275, 1095);
    text("15", 1577, 1135);
    text("15", 1267, 1115);
    fill(0, 102, 0);
    textSize(20);
    text("This is a picture of a liver harmed by alcohol and suffering from alcoholic", 1000, 1000);
    text("disease. The liver can be affected if too much fat is allowed to build up", 1000, 1020);
    text("on the liver. This excess of fat causes the liver to swell and become tender.", 1000, 1040);
    text("This is called alcoholic hepatitis. If swelling is allowed to continue at the", 1000, 1060);
    text("same rate, or contributing factors are worsened, the fat buildup will transfer", 1000, 1080);
    text("into scar tissue called Cirrhosis. Cirrohosis is permenant damage done to the", 1000, 1100);
    text("liver which cannot be reversed. Other factors which may affect the liver besides", 1000, 1120);
    text("drinking, are diabetes, obesity, high cholesterol and heart disease.", 1000, 1140);

  }

  fill(0, 0, 0);
  textSize(20);
  text("Living a healthy life style is incredibly important! In this animation, you will be able to see how different unhealthy decisions could affect different organs in your body!", 1, 15);
  textSize(15);
  text("Click on each button across the top to see a heatlhy organ and then an organ which is affected by unhealthy lifestyle decisions.", 1, 30);
  text("Then scroll down for an explaination of the condition and ways to prevent it. To see the code which makes this possible:", 1, 45);
  text("right click, chose inspect, click on sources at the top then scroll down in the box in the upper right to view my code!", 1, 60);
}