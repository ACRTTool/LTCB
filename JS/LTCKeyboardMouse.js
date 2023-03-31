(function() {
	var sheet = document.createElement('style');
	sheet.innerHTML = 'div {margin: 0;}';
	document.body.appendChild(sheet);
	var add_div = document.createElement('div');
	add_div.setAttribute('id', 'mydiv');
    add_div.style.position = "absolute";
    add_div.style.zIndex = "999999";
	//add option to enter transparency
	var ori = 2;
	ori = prompt("Enter Transparency value between 1 to 4");
	if (ori ==1) ori =1;
	else if (ori ==2) ori =0.90;
	else if (ori ==3) ori =0.75;
	else if (ori ==4) ori =0.60;
	else ori =0.90;
		
	add_div.innerHTML = ' <img src= "./Resources/LTCBImage.png"   alt="Image with Text for LTC" width="190" height="155" id="image1" style="border-style: double;border: 2px;border-radius: 5px;  cursor: pointer;   opacity: '+ ori+';   transform: translate(+50%, +50%);" document.getElementById("image1").autofocus; >';
    
		
	//add div to body end
    //document.body.appendChild(add_div);
	//add div to top of body
	document.body.insertBefore(add_div, document.body.firstChild);
	



//USE MOUSE TO GRAG OBJECT

// Get the image element
var image = document.getElementById("image1");

// Set initial values for the image position
var pos = { x: 0, y: 0 };
var offset = { x: 0, y: 0 };
var isDragging = false;

// Add mouse event listeners
image.addEventListener("mousedown", function(event) {
	isDragging = true;
	offset = {
		x: image.offsetLeft - event.clientX,
		y: image.offsetTop - event.clientY
	};
});

image.addEventListener("mouseup", function(event) {
	isDragging = false;
});

image.addEventListener("mousemove", function(event) {
	event.preventDefault();
	if (isDragging) {
		pos = {
			x: event.clientX + offset.x,
			y: event.clientY + offset.y
		};
		image.style.left = pos.x + "px";
		image.style.top = pos.y + "px";
	}
});






//Hide image with text on escape key
$(document).on('keydown', function(event) {
       getKeyAndMove(event);
       if (event.key == "Escape") {
          document.getElementById("mydiv").style.display = "none"; 
       }
   });
 
 


//USE KEYBOARD TO DRAG OBJECT 

            //init object globally, 
            var objImage = null;
            function init() {
                objImage = document.getElementById("image1");
                objImage.style.position = "relative";
                objImage.style.left = "0px";
                objImage.style.top = "0px";
            }
            function getKeyAndMove(e) {
                var key_code = e.which || e.keyCode;
                switch (key_code) {
                    case 37: //left arrow key
                        moveLeft();
                        break;
                    case 38: //Up arrow key
                        moveUp();
                        break;
                    case 39: //right arrow key
                        moveRight();
                        break;
                    case 40: //down arrow key
                        moveDown();
                        break;
                }
            }
            function moveLeft() {
                objImage.style.left = parseInt(objImage.style.left) - 5 + "px";
            }
            function moveUp() {
                objImage.style.top = parseInt(objImage.style.top) - 5 + "px";
            }
            function moveRight() {
                objImage.style.left = parseInt(objImage.style.left) + 5 + "px";
            }
            function moveDown() {
                objImage.style.top = parseInt(objImage.style.top) + 5 + "px";
            }
            window.onload = init;
			




})();


	