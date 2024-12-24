//images
var body;
var eye = [];
var eyeId = -1;
var mouth = [];
var mouthId = -1;
var ear = [];
var earId = -1;
var acc = [];
var accId = -1;
var back = [];
var backId = -1;
var bangs = [];
var bangsId = -1;
var hair = [];
var hairId = -1;
var clothing = [];
var clothingId = -1;

//colors
var skinColors = ["#f3e1cd","#ddc5ab","#c69c6c","#8c6238","#603814"];
var skinColorsId = 0;
var eyeColors = ["#d03737","#ff7d00","#ffe200","#00b72d","#4e9ee3","#7a357b","#ffbad5","#634534","#3a3a39","#ffffff"];
var eyeColorsId = 9;
var earColors = ["#d03737","#ff7d00","#ffe200","#00b72d","#4e9ee3","#7a357b","#ffbad5","#634534","#3a3a39","#ffffff"];
var earColorsId = 9;
var accColors = ["#d03737","#ff7d00","#ffe200","#00b72d","#4e9ee3","#7a357b","#ffbad5","#634534","#3a3a39","#ffffff"];
var accColorsId = 9;
var backColors = ["#d03737","#ff7d00","#ffe200","#00b72d","#4e9ee3","#7a357b","#ffbad5","#634534","#3a3a39","#ffffff"];
var backColorsId = 9;
var bangColors = ["#d03737","#ff7d00","#ffe200","#00b72d","#4e9ee3","#7a357b","#ffbad5","#634534","#3a3a39","#ffffff"];
var bangColorsId = 9;
var hairColors = ["#d03737","#ff7d00","#ffe200","#00b72d","#4e9ee3","#7a357b","#ffbad5","#634534","#3a3a39","#ffffff"];
var hairColorsId = 9;

// eye buttons
var btnEye1;
var btnEye2;
var btnEye3;
var btnEye4;
var btnEye5;
var btnEye6;
var btnEye7;
var btnEye8;
var btnEye9;
var btnEye10;

//mouth buttons
var btnMouth1;
var btnMouth2;
var btnMouth3;
var btnMouth4;

//ear buttons
var btnEar1;
var btnEar2;
var btnEar3;
var btnEar4;

//acc buttons
var btnAcc1;
var btnAcc2;
var btnAcc3;
var btnAcc4;

//back buttons
var btnBack1;
var btnBack2;
var btnBack3;

//bangs buttons
var btnBangs1;
var btnBangs2;
var btnBangs3;
var btnBangs4;

//hair buttons
var btnHair1;
var btnHair2;
var btnHair3;
var btnHair4;

//clothing buttons
var btnCloth1;
var btnCloth2;
var btnCloth3;

//color buttons
var btnSkin1;
var btnSkin2;
var btnSkin3;
var btnSkin4;
var btnSkin5;

var btnEyec1;
var btnEyec2;
var btnEyec3;
var btnEyec4;
var btnEyec5;
var btnEyec6;
var btnEyec7;
var btnEyec8;
var btnEyec9;
var btnEyec10;

var btnEarc1;
var btnEarc2;
var btnEarc3;
var btnEarc4;
var btnEarc5;
var btnEarc6;
var btnEarc7;
var btnEarc8;
var btnEarc9;
var btnEarc10;

var btnAccC1;
var btnAccC2;
var btnAccC3;
var btnAccC4;
var btnAccC5;
var btnAccC6;
var btnAccC7;
var btnAccC8;
var btnAccC9;
var btnAccC10;

var btnBackc1;
var btnBackc2;
var btnBackc3;
var btnBackc4;
var btnBackc5;
var btnBackc6;
var btnBackc7;
var btnBackc8;
var btnBackc9;
var btnBackc10;

var btnBangc1;
var btnBangc2;
var btnBangc3;
var btnBangc4;
var btnBangc5;
var btnBangc6;
var btnBangc7;
var btnBangc8;
var btnBangc9;
var btnBangc10;

var btnHairc1;
var btnHairc2;
var btnHairc3;
var btnHairc4;
var btnHairc5;
var btnHairc6;
var btnHairc7;
var btnHairc8;
var btnHairc9;
var btnHairc10;

//random button
var btnRandom;

//random button
var btnSave;

function preload() {
	//preload images
	body = loadImage("body.png");
	
	//back
	back[0] = loadImage("back1.png");
	back[1] = loadImage("back2.png");
	
	//eyes
	eye[0] = loadImage("eyes1.png");
	eye[1] = loadImage("eyes2.png");
	eye[2] = loadImage("eyes3.png");
	eye[3] = loadImage("eyes4.png");
	eye[4] = loadImage("eyes5.png");
	eye[5] = loadImage("eyes6.png");
	eye[6] = loadImage("eyes7.png");
	eye[7] = loadImage("eyes8.png");
	eye[8] = loadImage("eyes9.png");
	eye[9] = loadImage("eyes10.png");
	
	//mouths
	mouth[0] = loadImage("mouth1.png");
	mouth[1] = loadImage("mouth2.png");
	mouth[2] = loadImage("mouth3.png");
	mouth[3] = loadImage("mouth4.png");
	
	//ears
	ear[0] = loadImage("ears1.png");
	ear[1] = loadImage("ears2.png");
	ear[2] = loadImage("ears3.png");
	ear[3] = loadImage("ears4.png");
	
	//acc
	acc[0] = loadImage("head1.png");
	acc[1] = loadImage("head2.png");
	acc[2] = loadImage("head3.png");
	
	//bangs
	bangs[0] = loadImage("bangs1.png");
	bangs[1] = loadImage("bangs2.png");
	bangs[2] = loadImage("bangs3.png");
	bangs[3] = loadImage("bangs4.png");
	
	//hair
	hair[0] = loadImage("hair1.png");
	hair[1] = loadImage("hair2.png");
	hair[2] = loadImage("hair3.png");
	hair[3] = loadImage("hair4.png");
	
	//clothing
	clothing[0] = loadImage("clothes1.png");
	clothing[1] = loadImage("clothes2.png");
	clothing[2] = loadImage("clothes3.png");
}

function setup() {
	myCanvas = createCanvas(1200, 800);
	background("#efefef");
	
	//random
btnRandom = new imageButton("random.button.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnRandom.position(700, 550); 				// Set x and y position of the button
	btnRandom.mousePressed(randomBtnPressed);		// draw random


	//save
	btnSave = new imageButton("save.button.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnSave.position(390, 550); 				// Set x and y position of the button
	btnSave.mousePressed(saveBtnPressed);		
	
	
	//back
	btnBack1 = new imageButton("back.button.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnBack1.position(90, 650); 				// Set x and y position of the button
	btnBack1.mousePressed(back1BtnPressed);		// draw acc
	
	btnBack2 = new imageButton("back.button2.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnBack2.position(200, 650); 				// Set x and y position of the button
	btnBack2.mousePressed(back2BtnPressed);		// draw acc
	
	btnBack3 = new imageButton("none.button.png", 50 , 50);
	//none button              ^ file name, ^ width, ^ height            
	btnBack3.position(300, 675); 				// Set x and y position of the button
	btnBack3.mousePressed(back3BtnPressed);		// draw acc
	
	
	//eyes
	btnEye1 = new imageButton("eye.button.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye1.position(50, 20); 				// Set x and y position of the button
	btnEye1.mousePressed(eye1BtnPressed);		// draw eye
	
	btnEye2 = new imageButton("eye.button2.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye2.position(110, 20); 				// Set x and y position of the button
	btnEye2.mousePressed(eye2BtnPressed);		// draw eye
	
	btnEye3 = new imageButton("eye.button3.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye3.position(170, 20); 				// Set x and y position of the button
	btnEye3.mousePressed(eye3BtnPressed);		// draw eye
	
	btnEye4 = new imageButton("eye.button4.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye4.position(230, 20); 				// Set x and y position of the button
	btnEye4.mousePressed(eye4BtnPressed);		// draw eye
	
	btnEye5 = new imageButton("eye.button5.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye5.position(290, 20); 				// Set x and y position of the button
	btnEye5.mousePressed(eye5BtnPressed);		// draw eye
	
	btnEye6 = new imageButton("eye.button6.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye6.position(50, 80); 				// Set x and y position of the button
	btnEye6.mousePressed(eye6BtnPressed);		// draw eye

	btnEye7 = new imageButton("eye.button7.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye7.position(110, 80); 				// Set x and y position of the button
	btnEye7.mousePressed(eye7BtnPressed);		// draw eye
	
	btnEye8 = new imageButton("eye.button8.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye8.position(170, 80); 				// Set x and y position of the button
	btnEye8.mousePressed(eye8BtnPressed);		// draw eye
	
	btnEye9 = new imageButton("eye.button9.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye9.position(230, 80); 				// Set x and y position of the button
	btnEye9.mousePressed(eye9BtnPressed);		// draw eye
	
	btnEye10 = new imageButton("eye.button10.png", 50 , 50);
	//                     ^ file name, ^ width, ^ height            
	btnEye10.position(290, 80); 				// Set x and y position of the button
	btnEye10.mousePressed(eye10BtnPressed);		// draw eye
	
	
	//mouths
	btnMouth1 = new imageButton("mouth.button.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnMouth1.position(50, 190); 				// Set x and y position of the button
	btnMouth1.mousePressed(mouth1BtnPressed);		// draw mouth
	
	btnMouth2 = new imageButton("mouth.button2.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnMouth2.position(120, 190); 				// Set x and y position of the button
	btnMouth2.mousePressed(mouth2BtnPressed);		// draw mouth
	
	btnMouth3 = new imageButton("mouth.button3.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnMouth3.position(190, 190); 				// Set x and y position of the button
	btnMouth3.mousePressed(mouth3BtnPressed);		// draw mouth
	
	btnMouth4 = new imageButton("mouth.button4.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnMouth4.position(260, 190); 				// Set x and y position of the button
	btnMouth4.mousePressed(mouth4BtnPressed);		// draw mouth
	
	
	//ears
	btnEar1 = new imageButton("ear.button.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnEar1.position(50, 320); 				// Set x and y position of the button
	btnEar1.mousePressed(ear1BtnPressed);		// draw ear
	
	btnEar2 = new imageButton("ear.button2.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnEar2.position(120, 320); 				// Set x and y position of the button
	btnEar2.mousePressed(ear2BtnPressed);		// draw ear
	
	btnEar3 = new imageButton("ear.button3.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnEar3.position(190, 320); 				// Set x and y position of the button
	btnEar3.mousePressed(ear3BtnPressed);		// draw ear
	
	btnEar4 = new imageButton("ear.button4.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnEar4.position(260, 320); 				// Set x and y position of the button
	btnEar4.mousePressed(ear4BtnPressed);		// draw ear
	
	
	//accesories
	btnAcc1 = new imageButton("accessory.button.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnAcc1.position(90, 500); 				// Set x and y position of the button
	btnAcc1.mousePressed(acc1BtnPressed);		// draw acc
	
	btnAcc2 = new imageButton("accessory.button2.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnAcc2.position(160, 500); 				// Set x and y position of the button
	btnAcc2.mousePressed(acc2BtnPressed);		// draw acc
	
	btnAcc3 = new imageButton("accessory.button3.png", 70 , 70);
	//                     ^ file name, ^ width, ^ height            
	btnAcc3.position(230, 500); 				// Set x and y position of the button
	btnAcc3.mousePressed(acc3BtnPressed);		// draw acc
	
	btnAcc4 = new imageButton("none.button.png", 50 , 50);
	//none button              ^ file name, ^ width, ^ height            
	btnAcc4.position(300, 510); 				// Set x and y position of the button
	btnAcc4.mousePressed(acc4BtnPressed);		// draw acc
	
	
	//bangs
	btnBangs1 = new imageButton("bangs.button.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnBangs1.position(900, 20); 				// Set x and y position of the button
	btnBangs1.mousePressed(bangs1BtnPressed);		// draw bangs
	
	btnBangs2 = new imageButton("bangs.button2.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnBangs2.position(1000, 20); 				// Set x and y position of the button
	btnBangs2.mousePressed(bangs2BtnPressed);		// draw bangs
	
	btnBangs3 = new imageButton("bangs.button3.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnBangs3.position(900, 120); 				// Set x and y position of the button
	btnBangs3.mousePressed(bangs3BtnPressed);		// draw bangs
	
	btnBangs4 = new imageButton("bangs.button4.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnBangs4.position(1000, 120); 				// Set x and y position of the button
	btnBangs4.mousePressed(bangs4BtnPressed);		// draw bangs
	
	
	//hair
	btnHair1 = new imageButton("hair.button.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnHair1.position(900, 230); 				// Set x and y position of the button
	btnHair1.mousePressed(hair1BtnPressed);		// draw hair
	
	btnHair2 = new imageButton("hair.button2.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnHair2.position(1000, 230); 				// Set x and y position of the button
	btnHair2.mousePressed(hair2BtnPressed);		// draw hair
	
	btnHair3 = new imageButton("hair.button3.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnHair3.position(900, 330); 				// Set x and y position of the button
	btnHair3.mousePressed(hair3BtnPressed);		// draw hair
	
	btnHair4 = new imageButton("hair.button4.png", 100 , 100);
	//none button              ^ file name, ^ width, ^ height            
	btnHair4.position(1000, 330); 				// Set x and y position of the button
	btnHair4.mousePressed(hair4BtnPressed);		// draw hair
	
	
	//clothes
	btnCloth1 = new imageButton("clothing.button.png", 150 , 150);
	//none button              ^ file name, ^ width, ^ height            
	btnCloth1.position(850, 480); 				// Set x and y position of the button
	btnCloth1.mousePressed(cloth1BtnPressed);		// draw clothes
	
	btnCloth2 = new imageButton("clothing.button2.png", 150 , 150);
	//none button              ^ file name, ^ width, ^ height            
	btnCloth2.position(1020, 480); 				// Set x and y position of the button
	btnCloth2.mousePressed(cloth2BtnPressed);		// draw clothes
	
	btnCloth3 = new imageButton("clothing.button3.png", 150, 150);
	//none button              ^ file name, ^ width, ^ height            
	btnCloth3.position(935, 630); 				// Set x and y position of the button
	btnCloth3.mousePressed(cloth3BtnPressed);		// draw clothes
	
	
		//skin colors
	btnSkin1 = new imageButton("skin.button1.png", 50 , 50);
	//skin button              ^ file name, ^ width, ^ height            
	btnSkin1.position(470, 450); 				// Set x and y position of the button
	btnSkin1.mousePressed(skin1BtnPressed);		// draw acc
	
	btnSkin2 = new imageButton("skin.button2.png", 50 , 50);
	//skin button              ^ file name, ^ width, ^ height            
	btnSkin2.position(520, 450); 				// Set x and y position of the button
	btnSkin2.mousePressed(skin2BtnPressed);		// draw acc
	
	btnSkin3 = new imageButton("skin.button3.png", 50 , 50);
	//skin button              ^ file name, ^ width, ^ height            
	btnSkin3.position(570, 450); 				// Set x and y position of the button
	btnSkin3.mousePressed(skin3BtnPressed);		// draw acc
	
	btnSkin4 = new imageButton("skin.button4.png", 50 , 50);
	//skin button              ^ file name, ^ width, ^ height            
	btnSkin4.position(620, 450); 				// Set x and y position of the button
	btnSkin4.mousePressed(skin4BtnPressed);		// draw acc
	
	btnSkin5 = new imageButton("skin.button5.png", 50 , 50);
	//skin button              ^ file name, ^ width, ^ height            
	btnSkin5.position(670, 450); 				// Set x and y position of the button
	btnSkin5.mousePressed(skin5BtnPressed);		// draw acc
	
	
	//eye colors
	btnEyec1 = new imageButton("color.button1.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec1.position(15, 25); 				// Set x and y position of the button
	btnEyec1.mousePressed(eyec1BtnPressed);		// draw acc
	
		btnEyec2 = new imageButton("color.button2.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec2.position(15, 45); 				// Set x and y position of the button
	btnEyec2.mousePressed(eyec2BtnPressed);		// draw acc
	
		btnEyec3 = new imageButton("color.button3.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec3.position(15, 65); 				// Set x and y position of the button
	btnEyec3.mousePressed(eyec3BtnPressed);		// draw acc
	
		btnEyec4 = new imageButton("color.button4.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec4.position(15, 85); 				// Set x and y position of the button
	btnEyec4.mousePressed(eyec4BtnPressed);		// draw acc
	
		btnEyec5 = new imageButton("color.button5.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec5.position(15, 105); 				// Set x and y position of the button
	btnEyec5.mousePressed(eyec5BtnPressed);		// draw acc
	
		btnEyec6 = new imageButton("color.button6.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec6.position(33, 25); 				// Set x and y position of the button
	btnEyec6.mousePressed(eyec6BtnPressed);		// draw acc
	
		btnEyec7 = new imageButton("color.button7.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec7.position(33, 45); 				// Set x and y position of the button
	btnEyec7.mousePressed(eyec7BtnPressed);		// draw acc
	
		btnEyec8 = new imageButton("color.button8.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec8.position(33, 65); 				// Set x and y position of the button
	btnEyec8.mousePressed(eyec8BtnPressed);		// draw acc
	
		btnEyec9 = new imageButton("color.button9.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec9.position(33, 85); 				// Set x and y position of the button
	btnEyec9.mousePressed(eyec9BtnPressed);		// draw acc
	
		btnEyec10 = new imageButton("color.button10.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEyec10.position(33, 105); 				// Set x and y position of the button
	btnEyec10.mousePressed(eyec10BtnPressed);		// draw acc
	
	
	//ear colors
		btnEarc1 = new imageButton("color.button1.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc1.position(15, 225 + 85); 				// Set x and y position of the button
	btnEarc1.mousePressed(earc1BtnPressed);		// draw acc
	
		btnEarc2 = new imageButton("color.button2.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc2.position(15, 245 + 85); 				// Set x and y position of the button
	btnEarc2.mousePressed(earc2BtnPressed);		// draw acc
	
		btnEarc3 = new imageButton("color.button3.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc3.position(15, 265 + 85); 				// Set x and y position of the button
	btnEarc3.mousePressed(earc3BtnPressed);		// draw acc
	
		btnEarc4 = new imageButton("color.button4.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc4.position(15, 285 + 85); 				// Set x and y position of the button
	btnEarc4.mousePressed(earc4BtnPressed);		// draw acc
	
		btnEarc5 = new imageButton("color.button5.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc5.position(15, 305 + 85); 				// Set x and y position of the button
	btnEarc5.mousePressed(earc5BtnPressed);		// draw acc
	
		btnEarc6 = new imageButton("color.button6.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc6.position(33, 225 + 85); 				// Set x and y position of the button
	btnEarc6.mousePressed(earc6BtnPressed);		// draw acc
	
		btnEarc7 = new imageButton("color.button7.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc7.position(33, 245 + 85); 				// Set x and y position of the button
	btnEarc7.mousePressed(earc7BtnPressed);		// draw acc
	
		btnEarc8 = new imageButton("color.button8.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc8.position(33, 265 + 85); 				// Set x and y position of the button
	btnEarc8.mousePressed(earc8BtnPressed);		// draw acc
	
		btnEarc9 = new imageButton("color.button9.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc9.position(33, 285 + 85); 				// Set x and y position of the button
	btnEarc9.mousePressed(earc9BtnPressed);		// draw acc
	
		btnEarc10 = new imageButton("color.button10.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnEarc10.position(33, 305 + 85); 				// Set x and y position of the button
	btnEarc10.mousePressed(earc10BtnPressed);		// draw acc
	
	
	//acc colors
	btnAccC1 = new imageButton("color.button1.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC1.position(15 + 10, 310 + 180); 				// Set x and y position of the button
	btnAccC1.mousePressed(accC1BtnPressed);		// draw acc
	
		btnAccC2 = new imageButton("color.button2.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC2.position(15 + 10, 330 + 180); 				// Set x and y position of the button
	btnAccC2.mousePressed(accC2BtnPressed);		// draw acc
	
		btnAccC3 = new imageButton("color.button3.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC3.position(15 + 10, 350 + 180); 				// Set x and y position of the button
	btnAccC3.mousePressed(accC3BtnPressed);		// draw acc
	
		btnAccC4 = new imageButton("color.button4.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC4.position(15 + 10, 370 + 180); 				// Set x and y position of the button
	btnAccC4.mousePressed(accC4BtnPressed);		// draw acc
	
		btnAccC5 = new imageButton("color.button5.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC5.position(15 + 10, 390 + 180); 				// Set x and y position of the button
	btnAccC5.mousePressed(accC5BtnPressed);		// draw acc
	
		btnAccC6 = new imageButton("color.button6.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC6.position(33 + 10, 310 + 180); 				// Set x and y position of the button
	btnAccC6.mousePressed(accC6BtnPressed);		// draw acc
	
		btnAccC7 = new imageButton("color.button7.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC7.position(33 + 10, 330 + 180); 				// Set x and y position of the button
	btnAccC7.mousePressed(accC7BtnPressed);		// draw acc
	
		btnAccC8 = new imageButton("color.button8.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC8.position(33 + 10, 350 + 180); 				// Set x and y position of the button
	btnAccC8.mousePressed(accC8BtnPressed);		// draw acc
	
		btnAccC9 = new imageButton("color.button9.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC9.position(33 + 10, 370 + 180); 				// Set x and y position of the button
	btnAccC9.mousePressed(accC9BtnPressed);		// draw acc
	
		btnAccC10 = new imageButton("color.button10.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnAccC10.position(33 + 10, 390 + 180); 				// Set x and y position of the button
	btnAccC10.mousePressed(accC10BtnPressed);		// draw acc
	
	
	//back colors
	btnBackc1 = new imageButton("color.button1.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc1.position(25, 490 + 165); 				// Set x and y position of the button
	btnBackc1.mousePressed(backc1BtnPressed);		// draw acc
	
		btnBackc2 = new imageButton("color.button2.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc2.position(25, 510 + 165); 				// Set x and y position of the button
	btnBackc2.mousePressed(backc2BtnPressed);		// draw acc
	
		btnBackc3 = new imageButton("color.button3.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc3.position(25, 530 + 165); 				// Set x and y position of the button
	btnBackc3.mousePressed(backc3BtnPressed);		// draw acc
	
		btnBackc4 = new imageButton("color.button4.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc4.position(25, 550 + 165); 				// Set x and y position of the button
	btnBackc4.mousePressed(backc4BtnPressed);		// draw acc
	
		btnBackc5 = new imageButton("color.button5.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc5.position(25, 570 + 165); 				// Set x and y position of the button
	btnBackc5.mousePressed(backc5BtnPressed);		// draw acc
	
		btnBackc6 = new imageButton("color.button6.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc6.position(43, 490 + 165); 				// Set x and y position of the button
	btnBackc6.mousePressed(backc6BtnPressed);		// draw acc
	
		btnBackc7 = new imageButton("color.button7.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc7.position(43, 510 + 165); 				// Set x and y position of the button
	btnBackc7.mousePressed(backc7BtnPressed);		// draw acc
	
		btnBackc8 = new imageButton("color.button8.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc8.position(43, 530 + 165); 				// Set x and y position of the button
	btnBackc8.mousePressed(backc8BtnPressed);		// draw acc
	
		btnBackc9 = new imageButton("color.button9.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc9.position(43, 550 + 165); 				// Set x and y position of the button
	btnBackc9.mousePressed(backc9BtnPressed);		// draw acc
	
		btnBackc10 = new imageButton("color.button10.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBackc10.position(43, 570 + 165); 				// Set x and y position of the button
	btnBackc10.mousePressed(backc10BtnPressed);		// draw acc
	
	
	//bang colors
	btnBangc1 = new imageButton("color.button1.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc1.position(850, 25); 				// Set x and y position of the button
	btnBangc1.mousePressed(bangc1BtnPressed);		// draw acc
	
		btnBangc2 = new imageButton("color.button2.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc2.position(850, 45); 				// Set x and y position of the button
	btnBangc2.mousePressed(bangc2BtnPressed);		// draw acc
	
		btnBangc3 = new imageButton("color.button3.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc3.position(850, 65); 				// Set x and y position of the button
	btnBangc3.mousePressed(bangc3BtnPressed);		// draw acc
	
		btnBangc4 = new imageButton("color.button4.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc4.position(850, 85); 				// Set x and y position of the button
	btnBangc4.mousePressed(bangc4BtnPressed);		// draw acc
	
		btnBangc5 = new imageButton("color.button5.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc5.position(850, 105); 				// Set x and y position of the button
	btnBangc5.mousePressed(bangc5BtnPressed);		// draw acc
	
		btnBangc6 = new imageButton("color.button6.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc6.position(868, 25); 				// Set x and y position of the button
	btnBangc6.mousePressed(bangc6BtnPressed);		// draw acc
	
		btnBangc7 = new imageButton("color.button7.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc7.position(868, 45); 				// Set x and y position of the button
	btnBangc7.mousePressed(bangc7BtnPressed);		// draw acc
	
		btnBangc8 = new imageButton("color.button8.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc8.position(868, 65); 				// Set x and y position of the button
	btnBangc8.mousePressed(bangc8BtnPressed);		// draw acc
	
		btnBangc9 = new imageButton("color.button9.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc9.position(868, 85); 				// Set x and y position of the button
	btnBangc9.mousePressed(bangc9BtnPressed);		// draw acc
	
		btnBangc10 = new imageButton("color.button10.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnBangc10.position(868, 105); 				// Set x and y position of the button
	btnBangc10.mousePressed(bangc10BtnPressed);		// draw acc
	
	
	//hair colors
	btnHairc1 = new imageButton("color.button1.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc1.position(850, 25 + 220); 				// Set x and y position of the button
	btnHairc1.mousePressed(hairc1BtnPressed);		// draw acc
	
		btnHairc2 = new imageButton("color.button2.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc2.position(850, 45 + 220); 				// Set x and y position of the button
	btnHairc2.mousePressed(hairc2BtnPressed);		// draw acc
	
		btnHairc3 = new imageButton("color.button3.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc3.position(850, 65 + 220); 				// Set x and y position of the button
	btnHairc3.mousePressed(hairc3BtnPressed);		// draw acc
	
		btnHairc4 = new imageButton("color.button4.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc4.position(850, 85 + 220); 				// Set x and y position of the button
	btnHairc4.mousePressed(hairc4BtnPressed);		// draw acc
	
		btnHairc5 = new imageButton("color.button5.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc5.position(850, 105 + 220); 				// Set x and y position of the button
	btnHairc5.mousePressed(hairc5BtnPressed);		// draw acc
	
		btnHairc6 = new imageButton("color.button6.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc6.position(868, 25 + 220); 				// Set x and y position of the button
	btnHairc6.mousePressed(hairc6BtnPressed);		// draw acc
	
		btnHairc7 = new imageButton("color.button7.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc7.position(868, 45 + 220); 				// Set x and y position of the button
	btnHairc7.mousePressed(hairc7BtnPressed);		// draw acc
	
		btnHairc8 = new imageButton("color.button8.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc8.position(868, 65 + 220); 				// Set x and y position of the button
	btnHairc8.mousePressed(hairc8BtnPressed);		// draw acc
	
		btnHairc9 = new imageButton("color.button9.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc9.position(868, 85 + 220); 				// Set x and y position of the button
	btnHairc9.mousePressed(hairc9BtnPressed);		// draw acc
	
		btnHairc10 = new imageButton("color.button10.png", 15 , 15);
	//skin button              ^ file name, ^ width, ^ height            
	btnHairc10.position(868, 105 + 220); 				// Set x and y position of the button
	btnHairc10.mousePressed(hairc10BtnPressed);		// draw acc
}


function draw() {
	background(250);
	//setting up the base
	noFill()
	strokeWeight(5);
	rect(385, 10, 430, 430); //middle rect
	rect(10, 10, 360, 430); //left rect
	rect(830, 10, 360, 430); //right rect
	rect(10, 460, 360, 335); //bottom left rect
	rect(830, 460, 360, 335); //bottom right rect

	
	//body
	tint(skinColors[skinColorsId]);
	image(body, 385, 7, 430, 430); //body
	noTint();
	
	//back
	tint(backColors[backColorsId]);
	if (backId != -1) {
		image(back[backId], 385, 7, 430, 430);
	}
	noTint();
	//hair
	tint(hairColors[hairColorsId]);
	if (hairId != -1) {
		image(hair[hairId], 385, 7, 430, 430);
	}
	noTint();
	//eye
	tint(eyeColors[eyeColorsId]);
	if (eyeId != -1) {
		image(eye[eyeId], 385, 7, 430, 430); //eye1
		}
	noTint();
	//mouth
	if (mouthId != -1) {
		image(mouth[mouthId], 385, 7, 430, 430);
	}
	//ear
	if (earId == 0 || earId == 1) {
		tint(skinColors[skinColorsId])
	}
	else {
		tint(earColors[earColorsId])
	}
	if (earId != -1) {
		image(ear[earId], 385, 7, 430, 430);
	}
	noTint();
	//clothing
	if (clothingId != -1) {
		image(clothing[clothingId], 385, 7, 430, 430);
	}
	//bangs
	tint(bangColors[bangColorsId]);
	if (bangsId != -1) {
		image(bangs[bangsId], 385, 7, 430, 430);
	}
	noTint();
	//acc
	tint(accColors[accColorsId])
	if (accId != -1) {
		image(acc[accId], 385, 7, 430, 430);
	}
	noTint();
}


//random
function randomizeAll() {
    // Randomize IDs for each category
    hairId = int(random(0, 4)); // Assuming 4 hair styles
    hairColorsId = int(random(0, 10)); // Assuming 10 hair colors
    backId = int(random([-1, 0, 1])); // Randomly include or exclude back (3 options)
    eyeId = int(random(0, 10)); // Assuming 10 eye options
    eyeColorsId = int(random(0, 10)); // Assuming 10 eye colors
    mouthId = int(random(0, 4)); // Assuming 4 mouth options
    earId = int(random(0, 4)); // Assuming 4 ear options
    earColorsId = int(random(0, 10)); // Assuming 10 ear colors
    accId = int(random([-1, 0, 1, 2])); // Randomly include or exclude accessories (4 options)
    accColorsId = int(random(0, 10)); // Assuming 10 accessory colors
    bangsId = int(random(0, 4)); // Assuming 4 bangs styles
    bangColorsId = int(random(0, 10)); // Assuming 10 bangs colors
    clothingId = int(random(0, 3)); // Assuming 3 clothing options
    backColorsId = int(random(0, 10)); // Assuming 10 background colors

    // Redraw canvas with new random values
    draw();
}

function randomBtnPressed() {
randomizeAll();
}


//save
function saveBtnPressed() {
	savedImg = myCanvas.get(385,10,430,430);
  savedImg.save('character', 'png');

}	

//colors
function skin1BtnPressed() {
	skinColorsId = 0;
}
function skin2BtnPressed() {
	skinColorsId = 1;
}
function skin3BtnPressed() {
	skinColorsId = 2;
}
function skin4BtnPressed() {
	skinColorsId = 3;
}
function skin5BtnPressed() {
	skinColorsId = 4;
}


function eyec1BtnPressed() {
	eyeColorsId = 0;
}
function eyec2BtnPressed() {
	eyeColorsId = 1;
}
function eyec3BtnPressed() {
	eyeColorsId = 2;
}
function eyec4BtnPressed() {
	eyeColorsId = 3;
}
function eyec5BtnPressed() {
	eyeColorsId = 4;
}
function eyec6BtnPressed() {
	eyeColorsId = 5;
}
function eyec7BtnPressed() {
	eyeColorsId = 6;
}
function eyec8BtnPressed() {
	eyeColorsId = 7;
}
function eyec9BtnPressed() {
	eyeColorsId = 8;
}
function eyec10BtnPressed() {
	eyeColorsId = 9;
}


function earc1BtnPressed() {
	earColorsId = 0;
}
function earc2BtnPressed() {
	earColorsId = 1;
}
function earc3BtnPressed() {
	earColorsId = 2;
}
function earc4BtnPressed() {
	earColorsId = 3;
}
function earc5BtnPressed() {
	earColorsId = 4;
}
function earc6BtnPressed() {
	earColorsId = 5;
}
function earc7BtnPressed() {
	earColorsId = 6;
}
function earc8BtnPressed() {
	earColorsId = 7;
}
function earc9BtnPressed() {
	earColorsId = 8;
}
function earc10BtnPressed() {
	earColorsId = 9;
}


function accC1BtnPressed() {
	accColorsId = 0;
}
function accC2BtnPressed() {
	accColorsId = 1;
}
function accC3BtnPressed() {
	accColorsId = 2;
}
function accC4BtnPressed() {
	accColorsId = 3;
}
function accC5BtnPressed() {
	accColorsId = 4;
}
function accC6BtnPressed() {
	accColorsId = 5;
}
function accC7BtnPressed() {
	accColorsId = 6;
}
function accC8BtnPressed() {
	accColorsId = 7;
}
function accC9BtnPressed() {
	accColorsId = 8;
}
function accC10BtnPressed() {
	accColorsId = 9;
}


function backc1BtnPressed() {
	backColorsId = 0;
}
function backc2BtnPressed() {
	backColorsId = 1;
}
function backc3BtnPressed() {
	backColorsId = 2;
}
function backc4BtnPressed() {
	backColorsId = 3;
}
function backc5BtnPressed() {
	backColorsId = 4;
}
function backc6BtnPressed() {
	backColorsId = 5;
}
function backc7BtnPressed() {
	backColorsId = 6;
}
function backc8BtnPressed() {
	backColorsId = 7;
}
function backc9BtnPressed() {
	backColorsId = 8;
}
function backc10BtnPressed() {
	backColorsId = 9;
}


function bangc1BtnPressed() {
	bangColorsId = 0;
}
function bangc2BtnPressed() {
	bangColorsId = 1;
}
function bangc3BtnPressed() {
	bangColorsId = 2;
}
function bangc4BtnPressed() {
	bangColorsId = 3;
}
function bangc5BtnPressed() {
	bangColorsId = 4;
}
function bangc6BtnPressed() {
	bangColorsId = 5;
}
function bangc7BtnPressed() {
	bangColorsId = 6;
}
function bangc8BtnPressed() {
	bangColorsId = 7;
}
function bangc9BtnPressed() {
	bangColorsId = 8;
}
function bangc10BtnPressed() {
	bangColorsId = 9;
}


function hairc1BtnPressed() {
	hairColorsId = 0;
}
function hairc2BtnPressed() {
	hairColorsId = 1;
}
function hairc3BtnPressed() {
	hairColorsId = 2;
}
function hairc4BtnPressed() {
	hairColorsId = 3;
}
function hairc5BtnPressed() {
	hairColorsId = 4;
}
function hairc6BtnPressed() {
	hairColorsId = 5;
}
function hairc7BtnPressed() {
	hairColorsId = 6;
}
function hairc8BtnPressed() {
	hairColorsId = 7;
}
function hairc9BtnPressed() {
	hairColorsId = 8;
}
function hairc10BtnPressed() {
	hairColorsId = 9;
}


//back
function back1BtnPressed() {
	backId = 0;
}
function back2BtnPressed() {
	backId = 1;
}
function back3BtnPressed() {
	backId = -1;
}

//eyes
function eye1BtnPressed() {
	eyeId = 0;
}
function eye2BtnPressed() {
	eyeId = 1;
}
function eye3BtnPressed() {
	eyeId = 2;
}
function eye4BtnPressed() {
	eyeId = 3;
}
function eye5BtnPressed() {
	eyeId = 4;
}
function eye6BtnPressed() {
	eyeId = 5;
}
function eye7BtnPressed() {
	eyeId = 6;
}
function eye8BtnPressed() {
	eyeId = 7;
}
function eye9BtnPressed() {
	eyeId = 8;
}
function eye10BtnPressed() {
	eyeId = 9;
}

//mouth
function mouth1BtnPressed() {
	mouthId = 0;
}
function mouth2BtnPressed() {
	mouthId = 1;
}
function mouth3BtnPressed() {
	mouthId = 2;
}
function mouth4BtnPressed() {
	mouthId = 3;
}

//ears
function ear1BtnPressed() {
	earId = 0;
}
function ear2BtnPressed() {
	earId = 1;
}
function ear3BtnPressed() {
	earId = 2;
}
function ear4BtnPressed() {
	earId = 3;
}

//accessories
function acc1BtnPressed() {
	accId = 0;
}
function acc2BtnPressed() {
	accId = 1;
}
function acc3BtnPressed() {
	accId = 2;
}
function acc4BtnPressed() {
	accId = -1;
}

//bangs
function bangs1BtnPressed() {
	bangsId = 0;
}
function bangs2BtnPressed() {
	bangsId = 1;
}
function bangs3BtnPressed() {
	bangsId = 2;
}
function bangs4BtnPressed() {
	bangsId = 3;
}

//hair
function hair1BtnPressed() {
	hairId = 0;
}
function hair2BtnPressed() {
	hairId = 1;
}
function hair3BtnPressed() {
	hairId = 2;
}
function hair4BtnPressed() {
	hairId = 3;
}

//clothing
function cloth1BtnPressed() {
	clothingId = 0;
}
function cloth2BtnPressed() {
	clothingId = 1;
}
function cloth3BtnPressed() {
	clothingId = 2;
}
