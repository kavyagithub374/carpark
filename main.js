canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

gcar_height=90;
gcar_width=80;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gcar_x=75;
gcar_y=255;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

	greencar_imgTag=new Image()
	greencar_imgTag.onload=uploadgreencar
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,gcar_x,gcar_y,gcar_width,gcar_height)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gcar_y >=65){
		gcar_y = gcar_y - 10;
		console.log("when up arrow is pressed, x= " + gcar_x + " | y= "+ gcar_y)
		uploadBackground()
		uploadgreencar()

	}

}

function down()
{
	if(gcar_y <=250){
		gcar_y = gcar_y +10;
		console.log("when down arrow is pressed, x= " + gcar_x + " | y= "+ gcar_y)
		uploadBackground()
		uploadgreencar()

	}
}

function left()
{
	if(gcar_x >=0){
		gcar_x = gcar_x - 10;
		console.log("when left arrow is pressed, y= " + gcar_y + " | x= "+ gcar_x)
		uploadBackground()
		uploadgreencar()

	}
}

function right()
{
	if(gcar_x <=720){
		gcar_x = gcar_x + 10;
		console.log("when right arrow is pressed, y= " + gcar_y + " | x= "+ gcar_x)
		uploadBackground()
		uploadgreencar()
	}
}
