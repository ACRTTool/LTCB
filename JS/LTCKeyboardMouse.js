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
		
	add_div.innerHTML = ' <img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAosAAAIxCAMAAAASZQI2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIcUExURS9Sj9rj8zJVkT5ARQAAAA8PEIGGkNni8gEBAT0/RIKHkbK5xnV6g73F02htdKeuuh4fIZuhrMrS4UpNUywuMlpdZI+Vn2htdQAAAcnR4GludY+VnrzE0o+UnnR5go6Unh8gIklMUpCWoGdsc3Z7hDw+Q7G4xZqgqy0vMxAQET0/Q1teZdjh8crR4FpdY4OIktri8qatuVlcY9rj8hARErG4xBAQErvD0crS4Nni8bzE0aatuI+VoAICAiAhI0tOVLG3xLC3xAEBAsnR35yirZqgqqeuuwECAnV6gr3F0h4fIpuircnQ39nh8YKHki0vNLzD0Q8QEcjQ30pOVHV7hL3E0h8gI0pNVIKGkDliqURyxL7O6mCHzVeAysfV7Y+r2w0VJdnj80VyxL3O6mGIzdni80VzxJCr273N6o6r246q25Cs29ji80ZzxbzN6WKIztji8kZ0xbzM6WKJzkFuvS9TkCI5YjhQe7nG3U9okw8PEVpeZWhtcwABAZuhrXV5gh8hIy0wNGhscyI5YxkjM2mDsVpdZUBYg0RywywuM46TnTddn0pzvCI6Yztkqz1EU0Rxw1B6w7HA3Edgi0lxuggOGA0VJkVrr5mfqhEREoCFjy4wNLK5xY6Unaivu7K5x0tPVSwuMT5ARqWsuD9BRj0/RZuhqystMVteZklUaFuCx0Noq1uCxj5JXTZcnpOivDZcnaOvxEBYhAAAAGMsQkMAAAC0dFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AO/4UQoAAAAJcEhZcwAADsQAAA7EAZUrDhsAADQ/SURBVHhe7Z3LbxzHmuVdjfT+rrXwgqza9EYAc0ECvuJAWrAhqfKuZaFV0MawobmAQYBGs+0FF+asbIDCAAZY0hBUAwSk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"   alt="Image with Text for LTC" width="190" height="155" id="image1" style="border-style: double;border: 2px;border-radius: 5px; position: relative; top: 50%;left: 50%; transform: translate(-50%, -50%);cursor: pointer;   opacity: '+ ori+';  autofocus  background:#8080C0;" >';
  
		
	//add div to body end
    //document.body.appendChild(add_div);
	//add div to top of body
	document.body.insertBefore(add_div, document.body.firstChild);
	



})();


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
			

