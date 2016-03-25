// JavaScript Document
window.addEventListener('load', function () {
   initialize();
}, false);


// works out the X, Y position of the click inside the canvas from the X, Y position on the page
function getPosition(mouseEvent, sigCanvas) {
   var x, y;
   if (mouseEvent.pageX != undefined && mouseEvent.pageY != undefined) {
	  x = mouseEvent.pageX;
	  y = mouseEvent.pageY;
   } else {
	  x = mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	  y = mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
   }
   return { X: x - sigCanvas.offsetLeft, Y: y - sigCanvas.offsetTop };
}

function initialize() {
   // get references to the canvas element as well as the 2D drawing context
   var sigCanvas = document.getElementById("canvasSignature1");
   var context = sigCanvas.getContext("2d");
   var mode = $("#mode").val();
   context.strokeStyle = 'Black';

   // This will be defined on a TOUCH device such as iPad or Android, etc.
   var is_touch_device = 'ontouchstart' in document.documentElement;

   if (is_touch_device) {
	  // create a drawer which tracks touch movements
	  var drawer = {
		 isDrawing: false,
		 touchstart: function (coors) {
			context.beginPath();
			context.moveTo(coors.x, coors.y);
			this.isDrawing = true;
		 },
		 touchmove: function (coors) {
			if (this.isDrawing) {
			   //context.lineTo(coors.x, coors.y);
			   //context.stroke();
				var mode = $("#mode").val();
				if (mode == 0) {
					drawTree(coors.x, sigCanvas.height-coors.y);
				} else if (mode == 1) {
					drawSierpinskiTriangle(coors.x, sigCanvas.height-coors.y);
				} else if (mode == 2) {
					drawFern(coors.x, sigCanvas.height-coors.y);
				} else if (mode == 3) {
					var geo_mode = $("#geo_mode").val();
					drawRandomGeometries(coors.x, sigCanvas.height-coors.y, geo_mode);
				}
			}
		 },
		 touchend: function (coors) {
			if (this.isDrawing) {
			   this.touchmove(coors);
			   this.isDrawing = false;
			}
		 }
	  };

	  // create a function to pass touch events and coordinates to drawer
	  function draw(event) {

		 // get the touch coordinates.  Using the first touch in case of multi-touch
		 var coors = {
			x: event.targetTouches[0].pageX,
			y: event.targetTouches[0].pageY
		 };

		 // Now we need to get the offset of the canvas location
		 var obj = sigCanvas;

		 if (obj.offsetParent) {
			// Every time we find a new object, we add its offsetLeft and offsetTop to curleft and curtop.
			do {
			   coors.x -= obj.offsetLeft;
			   coors.y -= obj.offsetTop;
			}
			// The while loop can be "while (obj = obj.offsetParent)" only, which does return null
			// when null is passed back, but that creates a warning in some editors (i.e. VS2010).
			while ((obj = obj.offsetParent) != null);
		 }

		 // pass the coordinates to the appropriate handler
		 drawer[event.type](coors);
	  }


	  // attach the touchstart, touchmove, touchend event listeners.
	  sigCanvas.addEventListener('touchstart', draw, false);
	  sigCanvas.addEventListener('touchmove', draw, false);
	  sigCanvas.addEventListener('touchend', draw, false);

	  // prevent elastic scrolling
	  sigCanvas.addEventListener('touchmove', function (event) {
		 event.preventDefault();
	  }, false); 
   }
	else {
	
		// start drawing when the mousedown event fires, and attach handlers to
		// draw a line to wherever the mouse moves to
		$("#canvasSignature1").mousedown(function (mouseEvent) {
			var position = getPosition(mouseEvent, sigCanvas);
			var mode = $("#mode").val();
			var geo_mode = $("#geo_mode").val();
			drawLine(mouseEvent, sigCanvas, context, mode);
			// attach event handlers
			$(this).mousemove(function (mouseEvent) {
				drawLine(mouseEvent, sigCanvas, context, mode);
			}).mouseup(function (mouseEvent) {
				finishDrawing(mouseEvent, sigCanvas, context, mode);
			
			}).mouseout(function (mouseEvent) {
				finishDrawing(mouseEvent, sigCanvas, context, mode);
			});
		});
	
	}
}

// draws a line to the x and y coordinates of the mouse event inside
// the specified element using the specified context
function drawLine(mouseEvent, sigCanvas, context, mode) {
	
	var position = getPosition(mouseEvent, sigCanvas);
	
	var mode = $("#mode").val();
	if (mode == 0) {
		drawTree(position.X, sigCanvas.height-position.Y);
	} else if (mode == 1) {
		drawSierpinskiTriangle(position.X, sigCanvas.height-position.Y);
	} else if (mode == 2) {
		drawFern(position.X, sigCanvas.height-position.Y);
	} else if (mode == 3) {
		var geo_mode = $("#geo_mode").val();
		drawRandomGeometries(position.X, sigCanvas.height-position.Y, geo_mode);
	}
}

// draws a line from the last coordinates in the path to the finishing
// coordinates and unbind any event handlers which need to be preceded
// by the mouse down event
function finishDrawing(mouseEvent, sigCanvas, context, mode) {
   // draw the line to the finishing coordinates
   var geo_mode = $("#geo_mode").val();
   if (geo_mode < 0) {
	   drawLine(mouseEvent, sigCanvas, context, mode);
   }
   //drawLine(mouseEvent, sigCanvas, context, mode);
   //context.closePath();

   // unbind any events which could draw
   $(sigCanvas).unbind("mousemove")
			   .unbind("mouseup")
			   .unbind("mouseout");
}

function saveImage() {
	var b_canvas = document.getElementById("canvasSignature1");
	var b_context = b_canvas.getContext("2d");
	var img = b_canvas.toDataURL("image/png"); 
	//var imagestring = "Hello Image";
	var httpc = new XMLHttpRequest(); // simplified for clarity
	// Modify the below variable url as needed, according to your specific host
	var url = "http://www.edworlds.com/fractal_drawing/canvasupload.php";
	httpc.open("POST", url, true); // sending as GET so file can be saved remotely
	var params = 'img=' + img;

	httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	//httpc.setRequestHeader("Content-Length", params.length); 

	httpc.onreadystatechange = function() { //Call a function when the state changes.
		if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
			//document.write(httpc.responseText);
			console.log("File saved!" + httpc.responseText);
		}
	}
	httpc.send(params);
}