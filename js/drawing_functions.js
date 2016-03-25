// JavaScript Document

var DEBUG = false;
var DEBUG2 = false;
var canvas = document.getElementById("canvasSignature1");
var ctx = canvas.getContext("2d");

//Set the canvas height and width
var W = 1520;
var H = 855;
canvas.width = W;
canvas.height = H;

ctx.clearRect(0, 0, canvas.width, canvas.height);

var color_inc = 0;
var line_inc = 0;
var this_x = 0;
var this_y = 0;
var prev_x = this_x;
var prev_y = this_y;

var shadow_color = $( "#shadow_color" ).val();
var shadow_offset = $( "#shadow_offset" ).val();
var shadow_blur = $( "#shadow_blur" ).val();
var random_range = $("#random_range").val();
var add_random_range = $("#add_random_range").prop('checked');
var num_points = $("#num_points").val();
var random_color_order = $("#random_color_order").prop('checked');
var add_shadow = $("#add_shadow").prop('checked');
var alpha_value = $("#alpha_value").val();
var rectangle_size = $("#rectangle_size").val();
var H = 855;
var W = 1520;
		
var color_array = [];
color_array[0] = $( "#cp1" ).val();
color_array[1] = $( "#cp2" ).val();
color_array[2] = $( "#cp3" ).val();
color_array[3] = $( "#cp4" ).val();
color_array[4] = $( "#cp5" ).val();
color_array[5] = $( "#cp6" ).val();
color_array[6] = $( "#cp7" ).val();
color_array[7] = $( "#cp8" ).val();
color_array[8] = $( "#cp9" ).val();
color_array[9] = $( "#cp10" ).val();
color_array[10] = $( "#cp11" ).val();
color_array[11] = $( "#cp12" ).val();
color_array[12] = $( "#cp13" ).val();

var random_color_array = [];
random_color_array[0] = color_array[Math.round(12*Math.random())];
random_color_array[1] = color_array[Math.round(12*Math.random())];
random_color_array[2] = color_array[Math.round(12*Math.random())];
random_color_array[3] = color_array[Math.round(12*Math.random())];
random_color_array[4] = color_array[Math.round(12*Math.random())];
random_color_array[5] = color_array[Math.round(12*Math.random())];
random_color_array[6] = color_array[Math.round(12*Math.random())];
random_color_array[7] = color_array[Math.round(12*Math.random())];
random_color_array[8] = color_array[Math.round(12*Math.random())];
random_color_array[9] = color_array[Math.round(12*Math.random())];
random_color_array[10] = color_array[Math.round(12*Math.random())];
random_color_array[11] = color_array[Math.round(12*Math.random())];
random_color_array[12] = color_array[Math.round(12*Math.random())];


var loadBackgroundImage = function() {
	var background_image_url = $( "#background_image_url" ).val();
	if (DEBUG) console.log("1 background_image_url: " + background_image_url);
	
	// Create a new image.
	var fractal_fft_canvas_bkgd = new Image();
	
	// Once it's loaded draw the image on the canvas.
	fractal_fft_canvas_bkgd.addEventListener('load', function () {
		// Original resolution: x, y.
		ctx.drawImage(this, 0, 0);
	}, false);
	fractal_fft_canvas_bkgd.src = background_image_url;
}
	
var loadBackgroundLayer = function() {
	var background_layer_url = $( "#background_image_url" ).val();
	console.log("1 background_layer_url: " + background_layer_url);
	
	$("#canvas_bkgd").css("background-image", 'url(' + background_layer_url + ')');
}
	
var clearCanvas = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}
$('#canvasSignature1').css('cursor','pointer')
	
function changeCanvasBackground() {
	ctx.fillStyle = $( "#canvas_background_color_picker" ).val();
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function doMouseDown(event) {
	var canvas_x = event.offsetX;
	var canvas_y = H-1*event.offsetY;
	if (DEBUG) console.log("canvas_x:" + canvas_x + " canvas_y:" + canvas_y);
	drawTree(canvas_x,canvas_y);
	drawSierpinskiTriangle();
}

$(function() {
	$( "#tabs" ).tabs();
});

// Reset line_inc so Paths are independent, not connected to the previously-drawn Path
canvas.addEventListener('mouseup', function () {
	line_inc = 0;
	return line_inc;
}, false);

//////////////////////////////////////////////////////////////////////////
// Function drawRandomGeometries
// Input: x mouse x-coordinate
// Input: y mouse y-coordinate
// Output: Lines and Filled Rectangles
//////////////////////////////////////////////////////////////////////////

var drawRandomGeometries = function(x, y, geo_mode) {
	
	var DEBUG = false;
	var DEBUG3 = false;
	var DEBUG4 = true;
	var x1, y1, x2, y2, x3, y3, x4, y4;
	var mousedown_flag = true;
	var add_random_range = $("#add_random_range").prop('checked');
	var random_range = $("#random_range").val();
	var random_branch_length = $("#random_branch_length").prop('checked');
	var branch_length = $("#branch_length").val();
	var random0 = Math.random();
	var random1 = Math.random();
	var random2 = Math.random();
	var random3 = Math.random();
	var random4 = Math.random();
	var random5 = Math.random();
	var random6 = Math.random();
	var random7 = Math.random();
	var random8 = Math.random();

	var color_array = [];
	color_array[0] = $( "#cp1" ).val();
	color_array[1] = $( "#cp2" ).val();
	color_array[2] = $( "#cp3" ).val();
	color_array[3] = $( "#cp4" ).val();
	color_array[4] = $( "#cp5" ).val();
	color_array[5] = $( "#cp6" ).val();
	color_array[6] = $( "#cp7" ).val();
	color_array[7] = $( "#cp8" ).val();
	color_array[8] = $( "#cp9" ).val();
	color_array[9] = $( "#cp10" ).val();
	color_array[10] = $( "#cp11" ).val();
	color_array[11] = $( "#cp12" ).val();
	color_array[12] = $( "#cp13" ).val();
	
	var random_color_array = [];
	random_color_array[0] = color_array[Math.round(12*Math.random())];
	random_color_array[1] = color_array[Math.round(12*Math.random())];
	random_color_array[2] = color_array[Math.round(12*Math.random())];
	random_color_array[3] = color_array[Math.round(12*Math.random())];
	random_color_array[4] = color_array[Math.round(12*Math.random())];
	random_color_array[5] = color_array[Math.round(12*Math.random())];
	random_color_array[6] = color_array[Math.round(12*Math.random())];
	random_color_array[7] = color_array[Math.round(12*Math.random())];
	random_color_array[8] = color_array[Math.round(12*Math.random())];
	random_color_array[9] = color_array[Math.round(12*Math.random())];
	random_color_array[10] = color_array[Math.round(12*Math.random())];
	random_color_array[11] = color_array[Math.round(12*Math.random())];
	random_color_array[12] = color_array[Math.round(12*Math.random())];
		
	init();
	
	function init() {
		var shadow_color = $( "#shadow_color" ).val();
		var shadow_offset = $( "#shadow_offset" ).val();
		var shadow_blur = $( "#shadow_blur" ).val();
		var random_branch_length = $("#random_branch_length").prop('checked');
		var add_random_range = $("#add_random_range").prop('checked');
		var branch_color = $("#branch_color").prop('checked');
		var num_points = $("#num_points").val();
		var random_color_order = $("#random_color_order").prop('checked');
		var add_shadow = $("#add_shadow").prop('checked');
		var alpha_value = $("#alpha_value").val();
		var rectangle_size = $("#rectangle_size").val();
		var line_width = $("#line_width").val();
		var branch_level_inc = 0;
		
		var H = 855;
		var W = 1520;
				
		if (add_random_range) {
			var random_scale_factor = random_range * Math.random() * $("#root_node_scale").val();
		} else {
			var random_scale_factor = 0.5 * $("#root_node_scale").val();
		}
		var triangle_size = H/2;
		var x1 = x;
		var y1 = y + random_scale_factor*triangle_size;
		var x2 = x - random_scale_factor*triangle_size;
		var y2 = y - random_scale_factor*triangle_size;
		var x3 = x + random_scale_factor*triangle_size;
		var y3 = y - random_scale_factor*triangle_size;
		
		if (add_shadow) {
		  ctx.shadowColor = $("#shadow_color").val();
		  ctx.shadowBlur = $("#shadow_blur").val();
		  ctx.shadowOffsetX = $("#shadow_offset").val();
		  ctx.shadowOffsetY = $("#shadow_offset").val();
		} else {
		  ctx.shadowColor = '#ffffff';
		  ctx.shadowBlur = 0;
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		}
		
		if (random_color_order) {
			var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
		} else {
			var temp_color_array = convertHexToRGB(color_array[color_inc]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
		}

		ctx.strokeStyle = stroke_style_string;
		ctx.lineWidth = line_width;
		ctx.lineCap = "round";

		if (DEBUG3) console.log("line_inc:" + line_inc + " geo_mode: " + geo_mode + " prev_x: " + prev_x + " prev_y: " + prev_y);
	
		if (geo_mode == 0) {
			drawPaths();
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
		}
		if (geo_mode == 1) {
			drawRandomLines1();
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
		}
		if (geo_mode == 2) {
			drawSinCos1();
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
		}
		if (geo_mode == 3) {
			drawSpline1();
		}
		if (geo_mode == 4) {
			drawSnowflakes();
		}
		if (geo_mode == 5) {
			drawFibonacciSpirals();
		}
		if (geo_mode == 6) {
			drawNormalSpirals();
		}
		if (geo_mode == 7) {
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
			drawExpandingCircles();
		}
		if (geo_mode == 8) {
			drawSinCos2();
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
		}
		if (geo_mode == 9) {
			drawSpline2();
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
		}
		if (geo_mode == 10) {
			drawEraser();
			if (DEBUG3) console.log("Inside init geo_mode:" + geo_mode);
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////
	// PATHS geo_mode = 0			
	/////////////////////////////////////////////////////////////////////////////
	function drawPaths() {
		ctx.beginPath();
		ctx.globalCompositeOperation = "source-over";
		ctx.moveTo(this_x,this_y);
		ctx.lineTo(x, H-y);
		if (line_inc > 1) ctx.stroke();
		this_x = x;
		this_y = H - y;
	}
	
	/////////////////////////////////////////////////////////////////////////////
	// Random Lines geo_mode = 1			
	/////////////////////////////////////////////////////////////////////////////
	function drawRandomLines1() {
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x + 100, H-y-100);
		ctx.stroke();
	}
	
	/////////////////////////////////////////////////////////////////////////////
	// Sine Cosine variations geo_mode = 2			
	/////////////////////////////////////////////////////////////////////////////
	function drawSinCos1() {
		ctx.beginPath();
		ctx.moveTo(x,H-y);
		ctx.lineTo(x + 100*$("#root_node_scale").val()*Math.sin(line_inc/40)*Math.sin(line_inc/10), H-y+50*$("#root_node_scale").val()*Math.sin(line_inc/20)*Math.cos(line_inc/10));
		ctx.stroke();
	}
	
	/////////////////////////////////////////////////////////////////////////////
	// Spline variation geo_mode = 3			
	/////////////////////////////////////////////////////////////////////////////
	function drawSpline1() {
		var cp0x = $("#root_node_scale").val()*(x - 10 + 100*Math.cos(line_inc/50));
		var cp0y = $("#root_node_scale").val()*(H-y - 10 + 100*Math.sin(line_inc/20));
		var cp1x = $("#root_node_scale").val()*(x + 10 + 100*Math.cos(line_inc/50));
		var cp1y = $("#root_node_scale").val()*(H-y + 10 + 100*Math.sin(line_inc/20));
		var cp2x = $("#root_node_scale").val()*(x + 50 + 200*Math.cos(line_inc/20));
		var cp2y = $("#root_node_scale").val()*(H-y + 50 + 200*Math.sin(line_inc/10));
		var cp3x = $("#root_node_scale").val()*(x + 50 + 200*Math.cos(line_inc/20));
		var cp3y = $("#root_node_scale").val()*(H-y + 50 + 200*Math.sin(line_inc/40));
		ctx.beginPath();
		ctx.moveTo(cp0x,cp0y);
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, cp3x, cp3y);
		ctx.stroke();
	}

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	// SNOWFLAKES geo_mode = 4			
	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	function drawSnowflakes() {
	
		if (random_color_order) {
			var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			var temp_color_array = convertHexToRGB(color_array[0]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		}

		var sub_branch_length_array = Array();
		var sub_branch_angle = Array();
		var stroke_style_string_array = Array();
		//var random_branch_length = $("#random_branch_length").prop('checked');
		if (add_random_range) {
			console.log("random_branch_length:" + random_branch_length);
			var snowflake_branch_length = Math.random() * 100*$("#root_node_scale").val();
		} else {
			var snowflake_branch_length = 50*$("#root_node_scale").val();
		}

		// Create an array, stroke_style_string_array, to contain the stroke styles for each branch division
		var number_of_branch_divisions = $("#max_branch_level").val();
		for (var j = 0; j < number_of_branch_divisions; j++) {
			sub_branch_length_array[j] = (0.1 + 0.8*Math.random())*snowflake_branch_length;
			if (Math.random() > 0.3) {
				sub_branch_angle[j] = 60;
				if (random_color_order) {
					var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
					stroke_style_string_array[j] = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				} else {
					if (branch_color) {
						var temp_color_array = convertHexToRGB(color_array[0]);
						stroke_style_string_array[j] = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					} else {
						var temp_color_array = convertHexToRGB(color_array[j]);
						stroke_style_string_array[j] = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					}
				}
			} else {
				sub_branch_angle[j] = 120;
				if (random_color_order) {
					var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
					stroke_style_string_array[j] = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				} else {
					if (branch_color) {
						var temp_color_array = convertHexToRGB(color_array[0]);
						stroke_style_string_array[j] = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					} else {
						var temp_color_array = convertHexToRGB(color_array[j]);
						stroke_style_string_array[j] = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					}
				}
			}
		}
		// Create the six main snowflake branches
		for (var i = 0; i < 6; i++) {
			x1 = x;
			y1 = H-y;
			x2 = x1 + snowflake_branch_length*Math.cos(i*60*6.28/360);
			y2 = y1 + snowflake_branch_length*Math.sin(i*60*6.28/360);
			ctx.strokeStyle = stroke_style_string_array[0];
			ctx.beginPath();
			ctx.lineWidth = line_width;
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			// Create the sub-branches
			for (var j = 0; j < number_of_branch_divisions; j++) {
				ctx.strokeStyle = stroke_style_string_array[j];
				if (line_width-j*2 < 1) {
					ctx.lineWidth = 1;
				} else {
					ctx.lineWidth = line_width-j*2;
				}
				var a = j*snowflake_branch_length/number_of_branch_divisions + sub_branch_length_array[j]*Math.cos(sub_branch_angle[j]*6.28/360);
				var b = sub_branch_length_array[j]*Math.sin(sub_branch_angle[j]*6.28/360);
				var hypotenuse = Math.sqrt(a*a + b*b);
				x3 = x1+(j*snowflake_branch_length/number_of_branch_divisions)*Math.cos(i*60*6.28/360);
				y3 = y1+(j*snowflake_branch_length/number_of_branch_divisions)*Math.sin(i*60*6.28/360);
				x4 = x1 + hypotenuse * Math.cos(i*60*6.28/360 + Math.atan(b/a));
				y4 = y1 + hypotenuse * Math.sin(i*60*6.28/360 + Math.atan(b/a));
				x5 = x3;
				y5 = y3;
				x6 = x1 + hypotenuse * Math.cos(i*60*6.28/360 - Math.atan(b/a));
				y6 = y1 + hypotenuse * Math.sin(i*60*6.28/360 - Math.atan(b/a));
				
				// Draw the sub-branches on one side of the main branch
				ctx.beginPath();
				ctx.moveTo(x3,y3);
				ctx.lineTo(x4,y4);
				ctx.stroke();
				// Draw the sub-branches on the other side of the main branch
				ctx.beginPath();
				ctx.moveTo(x5,y5);
				ctx.lineTo(x6,y6);
				ctx.stroke();
			}
		}
	}

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	// FIBONACCI SPIRALS geo_mode = 5			
	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	function drawFibonacciSpirals() {
		
		var unit_var, radius, startAngle, endAngle, counterClockwise;
		var x_array = Array();
		var y_array = Array();
		var radius = Array();
		
		var sub_branch_length_array = Array();
		var sub_branch_angle = Array();
		var stroke_style_string_array = Array();

		var spiral_branch_length = 10*$("#root_node_scale").val();
		var number_of_branch_divisions = $("#max_branch_level").val();
		x_array = [0,1, 1,-1,-1,4,4,-9,-9,25,25,-64];
		y_array = [0,0,-1,-1, 2,2,-6,-6,15,15,-40,-40];
		radius = [1,2,3,5,8,13,21,34,55,89,144,233];
		unit_var = spiral_branch_length;
		for (var i = 0; i < number_of_branch_divisions; i++) {
			if (random_color_order) {
				var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
				ctx.strokeStyle = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			} else {
				if (branch_color) {
					var temp_color_array = convertHexToRGB(color_array[0]);
					ctx.strokeStyle = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				} else {
					var temp_color_array = convertHexToRGB(color_array[i]);
					ctx.strokeStyle = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				}
			}

			x1 = x + x_array[i] * unit_var;
			y1 = H - (y + y_array[i] * unit_var);
			y11 = H - y;
			x2 = x1 + spiral_branch_length;
			y2 = y1 + spiral_branch_length;
			ctx.lineWidth = line_width;
			ctx.beginPath();
			var radius_var = radius[i] * unit_var;
			startAngle = (i + 1) * 0.5 * Math.PI;
			endAngle = (i + 2) * 0.5 * Math.PI;
			counterClockwise = false;
			ctx.arc(x1, y1, radius_var, startAngle, endAngle, counterClockwise);
			ctx.stroke();
		}
	}
	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	// NORMAL SPIRALS geo_mode = 6			
	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	function drawNormalSpirals() {
		var counterClockwise, radius, number_of_points, spiral_tightness;
		var random_color_order = $("#random_color_order").prop('checked');
		var branch_color = $("#branch_color").prop('checked');
		var alpha_value = $("#alpha_value").val();
		
		number_of_points = $("#num_points").val();
		if (add_random_range) {
			radius = 10*(0.1+random_range*Math.random())*$("#root_node_scale").val();
			spiral_tightness = (0.1 + random_range*Math.random()) * $("#spiral_tightness").val();
		} else {
			radius = 10*$("#root_node_scale").val();
			spiral_tightness = 0.1*$("#spiral_tightness").val();
		}
		var color_inc = 0;
		var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
		var same_color_stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
		for (var i = 0; i < number_of_points; i++) {
			if (color_inc > 12) color_inc = 0;
			if (branch_color) {
				if (random_color_order) {
					ctx.strokeStyle = same_color_stroke_style_string;
				} else {
					ctx.strokeStyle = same_color_stroke_style_string;
				}
			} else {
				if (random_color_order) {
					var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
					var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					ctx.strokeStyle = stroke_style_string;
				} else {
					var temp_color_array = convertHexToRGB(color_array[color_inc]);
					var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					ctx.strokeStyle = stroke_style_string;
				}
			}

			if (DEBUG) console.log("x_array:" + x_array[i]);
			x1 = x + (radius+i*spiral_tightness) * Math.cos(2*Math.PI*i/360);
			y1 = H - (y + (radius+i*spiral_tightness) * Math.sin(2*Math.PI*i/360));
			x2 = x + (radius+i*spiral_tightness) * Math.cos(2*Math.PI*(i+1)/360);
			y2 = H - (y + (radius+i*spiral_tightness) * Math.sin(2*Math.PI*(i+1)/360));
			if (DEBUG) console.log("x1:" + x1 + " x:" + x);
			if (DEBUG) console.log("y11:" + y11 + " y1:" + y1 + " y:" + y);
			ctx.lineWidth = line_width;
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			color_inc++;
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	// EXPANDING CIRCLES geo_mode = 7			
	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	function drawExpandingCircles() {
		$("#canvasSignature1").mouseup(function (mouseEvent) {
			mousedown_flag = false;
		});

		var branch_level_inc = 0;
		var max_branch_level = 10;
		expandingCirclesInit();
		
		function expandingCirclesInit() {
			expandingCircles();
		}
		
		function expandingCircles() {
			
			if (random_color_order) {
				var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
				ctx.strokeStyle = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
			} else {
				if (branch_color) {
					var temp_color_array = convertHexToRGB(color_array[0]);
					ctx.strokeStyle = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					var temp_color_array = convertHexToRGB(color_array[1]);
				} else {
					var temp_color_array = convertHexToRGB(color_array[i]);
					ctx.strokeStyle = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
					var temp_color_array = convertHexToRGB(color_array[i]);
				}
			}

			var sub_branch_length_array = Array();
			var sub_branch_angle = Array();
			var stroke_style_string_array = Array();

			var spiral_branch_length = 10*$("#root_node_scale").val();
			var number_of_branch_divisions = $("#max_branch_level").val();
			unit_var = spiral_branch_length;
			for (var i = 0; i < 5; i++) {
				ctx.beginPath();
				x1 = x;
				y1 = H - y;
				var radius_var = (1+Math.round(10*Math.random()))*branch_level_inc*0.1*$("#root_node_scale").val();
				ctx.lineWidth = $("#line_width").val();
				startAngle = 0;
				endAngle = 2 * Math.PI;
				counterClockwise = false;
				ctx.arc(x1, y1, radius_var, startAngle, endAngle, counterClockwise);
				if (mousedown_flag) ctx.stroke();
			}
			branch_level_inc++;
			if(branch_level_inc <= max_branch_level + 1) {
				setTimeout(expandingCircles, 100);
			}
		}
	}
	
	/////////////////////////////////////////////////////////////////////////////
	// Sine Cosine variations geo_mode = 8			
	/////////////////////////////////////////////////////////////////////////////
	function drawSinCos2() {
		ctx.beginPath();
		x1 = x;
		y1 = H-y;
		ctx.moveTo(x1,y1);
		x2 = x + 50*$("#root_node_scale").val()*Math.sin(line_inc/20)*Math.sin(line_inc/10);
		y2 = H - y + 50*$("#root_node_scale").val()*Math.sin(line_inc/20)*Math.cos(line_inc/10);
		ctx.lineTo(x2, y2 );
		ctx.stroke();
	}
	
	/////////////////////////////////////////////////////////////////////////////
	// Spline variation geo_mode = 9			
	/////////////////////////////////////////////////////////////////////////////
	function drawSpline2() {
		random1 = Math.random();
		random2 = Math.random();
		random3 = Math.random();
		random5 = Math.random();
		random6 = Math.random();
		random7 = Math.random();
		random8 = Math.random();
		var curvature = parseInt($("#spline_curvature").val());
		var curvature_random_factor = parseInt($("#spline_curvature_random_factor").val());
		var spline_angle = 1.0 * parseInt($("#branch_angle").val());
		
		var cp0x = x + (branch_length/2 + random0 * curvature_random_factor) * Math.cos((spline_angle + 180) * 2 * Math.PI/360);
		var cp0y = (H - y) + (branch_length/2 + random0 * curvature_random_factor) * Math.sin((spline_angle + 180) * 2 * Math.PI/360);

		var cp1x = x + random1 * Math.sqrt((branch_length/2 + random1 * curvature_random_factor)*(branch_length/2 + random1 * curvature_random_factor) + (curvature + random1 * curvature_random_factor)*(curvature + random1 * curvature_random_factor))*Math.cos(Math.atan(-1.0*(curvature + random1 * curvature_random_factor)/(-1.0*branch_length/2 + random1 * curvature_random_factor)) + (180 + spline_angle) * 2 * Math.PI/360);
		var cp1y = (H - y) + random1 * Math.sqrt((branch_length/2 + random1 * curvature_random_factor)*(branch_length/2 + random1 * curvature_random_factor) + (curvature + random1 * curvature_random_factor)*(curvature + random1 * curvature_random_factor))*Math.sin(Math.atan(-1.0*(curvature + random1 * curvature_random_factor)/(-1.0*branch_length/2 + random1 * curvature_random_factor)) + (180 + spline_angle) * 2 * Math.PI/360);

		var cp3x = x + (branch_length/2 + random3 * curvature_random_factor) * Math.cos((spline_angle) * 2 * Math.PI/360);
		var cp3y = (H - y) + (branch_length/2 + random3 * curvature_random_factor) * Math.sin((spline_angle) * 2 * Math.PI/360);
		var cp2x = x + random2 * Math.sqrt((branch_length/2 + random2 * curvature_random_factor)*(branch_length/2 + random2 * curvature_random_factor) + (curvature + random2 * curvature_random_factor)*(curvature + random2 * curvature_random_factor))*Math.cos(Math.atan((curvature + random2 * curvature_random_factor)/(-1.0*branch_length/2 + random2 * curvature_random_factor)) + (spline_angle) * 2 * Math.PI/360);
		var cp2y = (H - y) + random2 * Math.sqrt((branch_length/2 + random2 * curvature_random_factor)*(branch_length/2 + random2 * curvature_random_factor) + (curvature + random2 * curvature_random_factor)*(curvature + random2 * curvature_random_factor))*Math.sin(Math.atan((curvature + random2 * curvature_random_factor)/(-1.0*branch_length/2 + random2 * curvature_random_factor)) + (spline_angle) * 2 * Math.PI/360);
		
//		ctx.beginPath();
//		ctx.moveTo(x,(H-y));
//		ctx.lineTo(cp0x,cp0y);
//		ctx.stroke();
//		
//		ctx.beginPath();
//		ctx.moveTo(x,(H-y));
//		ctx.lineTo(cp1x,cp1y);
//		ctx.stroke();
//		
//		ctx.beginPath();
//		ctx.moveTo(x,(H-y));
//		ctx.lineTo(cp2x,cp2y);
//		ctx.stroke();
//		
//		ctx.beginPath();
//		ctx.moveTo(x,(H-y));
//		ctx.lineTo(cp3x,cp3y);
//		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(cp0x,cp0y);
		ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, cp3x, cp3y);
		ctx.stroke();
	}

	/////////////////////////////////////////////////////////////////////////////
	// ERASER geo_mode = 10			
	/////////////////////////////////////////////////////////////////////////////
	function drawEraser() {
		ctx.beginPath();
		ctx.globalCompositeOperation = "destination-out";
		//ctx.strokeStyle = "rgba(0,0,0,1)";
		ctx.moveTo(this_x,this_y);
		ctx.lineTo(x, H-y);
		if (line_inc > 1) ctx.stroke();
		this_x = x;
		this_y = H - y;
	}
	
	color_inc++;
	if (color_inc > 12) color_inc = 0;
	line_inc++;
}

//////////////////////////////////////////////////////////////////////////
// Function drawSierpinskiTriangle
// Input: x mouse x-coordinate
// Input: y mouse y-coordinate
// Output: Filled rectangle
//////////////////////////////////////////////////////////////////////////

var drawSierpinskiTriangle = function(x, y) {
	var DEBUG = false;
	var shadow_color = $( "#shadow_color" ).val();
	var shadow_offset = $( "#shadow_offset" ).val();
	var shadow_blur = $( "#shadow_blur" ).val();
	var random_range = $("#random_range").val();
	var add_random_range = $("#add_random_range").prop('checked');
	var num_points = $("#num_points").val();
	var random_color_order = $("#random_color_order").prop('checked');
	var add_shadow = $("#add_shadow").prop('checked');
	var alpha_value = $("#alpha_value").val();
	var rectangle_size = $("#rectangle_size").val();
			
	var color_array = [];
	color_array[0] = $( "#cp1" ).val();
	color_array[1] = $( "#cp2" ).val();
	color_array[2] = $( "#cp3" ).val();
	color_array[3] = $( "#cp4" ).val();
	color_array[4] = $( "#cp5" ).val();
	color_array[5] = $( "#cp6" ).val();
	color_array[6] = $( "#cp7" ).val();
	color_array[7] = $( "#cp8" ).val();
	color_array[8] = $( "#cp9" ).val();
	color_array[9] = $( "#cp10" ).val();
	color_array[10] = $( "#cp11" ).val();
	color_array[11] = $( "#cp12" ).val();
	color_array[12] = $( "#cp13" ).val();
	
	var random_color_array = [];
	random_color_array[0] = color_array[Math.round(12*Math.random())];
	random_color_array[1] = color_array[Math.round(12*Math.random())];
	random_color_array[2] = color_array[Math.round(12*Math.random())];
	random_color_array[3] = color_array[Math.round(12*Math.random())];
	random_color_array[4] = color_array[Math.round(12*Math.random())];
	random_color_array[5] = color_array[Math.round(12*Math.random())];
	random_color_array[6] = color_array[Math.round(12*Math.random())];
	random_color_array[7] = color_array[Math.round(12*Math.random())];
	random_color_array[8] = color_array[Math.round(12*Math.random())];
	random_color_array[9] = color_array[Math.round(12*Math.random())];
	random_color_array[10] = color_array[Math.round(12*Math.random())];
	random_color_array[11] = color_array[Math.round(12*Math.random())];
	random_color_array[12] = color_array[Math.round(12*Math.random())];
	
	var this_x, this_y;
	var next_x = Math.random();
	var next_y = Math.random();
	if (add_random_range) {
		var random_scale_factor = 0.1 + random_range * Math.random() * $("#root_node_scale").val();
	} else {
		var random_scale_factor = 0.1*$("#root_node_scale").val();
	}
	var triangle_size = H/2;
	var x1 = x;
	var y1 = y + random_scale_factor*triangle_size;
	var x2 = x - random_scale_factor*triangle_size;
	var y2 = y - random_scale_factor*triangle_size;
	var x3 = x + random_scale_factor*triangle_size;
	var y3 = y - random_scale_factor*triangle_size;
	
	if (add_shadow) {
	  ctx.shadowColor = $("#shadow_color").val();
	  ctx.shadowBlur = $("#shadow_blur").val();
	  ctx.shadowOffsetX = $("#shadow_offset").val();
	  ctx.shadowOffsetY = $("#shadow_offset").val();
	} else {
	  ctx.shadowColor = '#ffffff';
	  ctx.shadowBlur = 0;
	  ctx.shadowOffsetX = 0;
	  ctx.shadowOffsetY = 0;
	}
	
	if (random_color_order) {
		var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
		var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
		ctx.fillStyle = stroke_style_string;
	} else {
		var temp_color_array = convertHexToRGB(color_array[0]);
		var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
		ctx.fillStyle = stroke_style_string;
	}
	for (var i = 0; i < num_points; i++) {
		var random_s = Math.round(3 * Math.random());
		if (random_s == 1) {
			this_x = (next_x + x1)/2;
			this_y = (next_y + y1)/2;
			next_x = this_x;
			next_y = this_y;
			//ctx.fillStyle = "#ff0000";
			if (i > 20) ctx.fillRect(this_x,H-this_y,rectangle_size,rectangle_size);
		} else if (random_s == 2) {
			this_x = (next_x + x2)/2;
			this_y = (next_y + y2)/2;
			next_x = this_x;
			next_y = this_y;
			//ctx.fillStyle = "#00ff00";
			if (i > 20) ctx.fillRect(this_x,H-this_y,rectangle_size,rectangle_size);
		} else if (random_s == 3) {
			this_x = (next_x + x3)/2;
			this_y = (next_y + y3)/2;
			next_x = this_x;
			next_y = this_y;
			//ctx.fillStyle = "#0000ff";
			if (i > 20) ctx.fillRect(this_x,H-this_y,rectangle_size,rectangle_size);
		}
	}
}

//////////////////////////////////////////////////////////////////////////
// Function drawFern
// Input: x mouse x-coordinate
// Input: y mouse y-coordinate
// Output: Filled rectangle
//////////////////////////////////////////////////////////////////////////

var drawFern = function(x, y) {
	var DEBUG = false;
	var shadow_color = $( "#shadow_color" ).val();
	var shadow_offset = $( "#shadow_offset" ).val();
	var shadow_blur = $( "#shadow_blur" ).val();
	var num_points = $("#num_points").val();
	var random_range = 0.1 * $("#random_range").val();
	var random_branch_length = $("#random_branch_length").prop('checked');
	var left_leaf = $("#left_leaf").prop('checked');
	var right_leaf = $("#right_leaf").prop('checked');
	var alpha_value = $("#alpha_value").val();
	var add_random_range = $("#add_random_range").prop('checked');
	var single_random_factor = $("#single_random_factor").prop('checked');
	var single_random_factor_value = $("#single_random_factor_value").val();
	var random_color_order = $("#random_color_order").prop('checked');
	var add_shadow = $("#add_shadow").prop('checked');
	var rectangle_size = $("#rectangle_size").val();
	
	var color_array = [];
	color_array[0] = $( "#cp1" ).val();
	color_array[1] = $( "#cp2" ).val();
	color_array[2] = $( "#cp3" ).val();
	color_array[3] = $( "#cp4" ).val();
	color_array[4] = $( "#cp5" ).val();
	color_array[5] = $( "#cp6" ).val();
	color_array[6] = $( "#cp7" ).val();
	color_array[7] = $( "#cp8" ).val();
	color_array[8] = $( "#cp9" ).val();
	color_array[9] = $( "#cp10" ).val();
	color_array[10] = $( "#cp11" ).val();
	color_array[11] = $( "#cp12" ).val();
	color_array[12] = $( "#cp13" ).val();
	
	var random_color_array = [];
	random_color_array[0] = color_array[Math.round(12*Math.random())];
	random_color_array[1] = color_array[Math.round(12*Math.random())];
	random_color_array[2] = color_array[Math.round(12*Math.random())];
	random_color_array[3] = color_array[Math.round(12*Math.random())];
	random_color_array[4] = color_array[Math.round(12*Math.random())];
	random_color_array[5] = color_array[Math.round(12*Math.random())];
	random_color_array[6] = color_array[Math.round(12*Math.random())];
	random_color_array[7] = color_array[Math.round(12*Math.random())];
	random_color_array[8] = color_array[Math.round(12*Math.random())];
	random_color_array[9] = color_array[Math.round(12*Math.random())];
	random_color_array[10] = color_array[Math.round(12*Math.random())];
	random_color_array[11] = color_array[Math.round(12*Math.random())];
	random_color_array[12] = color_array[Math.round(12*Math.random())];

	var this_x = 0.5;
	var this_y = 0.5;
	var next_x = 0.5;
	var next_y = 0.5;
	var left_or_right = 1;
	
	if (add_random_range) {
		if (single_random_factor) {
			if (left_leaf && right_leaf) {
				if (Math.random() > 0.5) {
					left_or_right = -1;
				} else {
					left_or_right = 1;
				}
			} else if (left_leaf && !right_leaf) {
				left_or_right = -1;
			} else if (right_leaf && !left_leaf) {
				left_or_right = 1;
			}
			var x_scale_factor = left_or_right * (-10 + random_range * Math.random() - (10.0 * $("#root_node_scale").val()));
			var y_scale_factor = -10 + random_range * Math.random() - (10.0 * $("#root_node_scale").val());
			var random_param_factor = single_random_factor_value;
			var t11 = 0.60 + 0.4*random_range*random_param_factor; // original value was 0.85
			var t12 = 0.03 + 0.2*random_range*random_param_factor; // original value was 0.04
			var t21 = -0.03 - 0.2*random_range*random_param_factor; // original value was -0.04
			var t22 = 0.50 + 0.4*random_range*random_param_factor; // original value was 0.85
			var t23 = 1.0 + 1.0*random_range*random_param_factor; // original value was 1.6
			var t31 = -0.15;
			var t32 = 0.28;
			var t41 = 0.20 + 1.2*random_range*random_param_factor; // original value was 0.26
			var t42 = 0.24;
			var t43 = 0.44;
			var t51 = 0.2;
			var t52 = 0.20 + 1.2*random_range*random_param_factor; // original value was 0.26
			var t61 = 0.23;
			var t62 = 0.22;
			var t63 = 1.0 + 1.0*random_range*random_param_factor; // original value was 1.6
			var t71 = 0;
			var t72 = 0;
			var t81 = 0;
			var t82 = 0.16;

		} else {
			if (left_leaf && right_leaf) {
				if (Math.random() > 0.5) {
					left_or_right = -1;
				} else {
					left_or_right = 1;
				}
			} else if (left_leaf && !right_leaf) {
				left_or_right = -1;
			} else if (right_leaf && !left_leaf) {
				left_or_right = 1;
			}
			var x_scale_factor = left_or_right * (-10 + random_range * Math.random() - (20.0 * $("#root_node_scale").val()));
			var y_scale_factor = -10 + random_range * Math.random() - (20.0 * $("#root_node_scale").val());
			var t11 = 0.60 + 0.4*random_range*Math.random(); // original value was 0.85
			var t12 = 0.03 + 0.2*random_range*Math.random(); // original value was 0.04
			var t21 = -0.03 - 0.2*random_range*Math.random(); // original value was -0.04
			var t22 = 0.50 + 0.4*random_range*Math.random(); // original value was 0.85
			var t23 = 1.0 + 1.0*random_range*Math.random(); // original value was 1.6
			var t31 = -0.15;
			var t32 = 0.28;
			var t41 = 0.20 + 1.2*random_range*Math.random(); // original value was 0.26
			var t42 = 0.24;
			var t43 = 0.44;
			var t51 = 0.2;
			var t52 = 0.20 + 1.2*random_range*Math.random(); // original value was 0.26
			var t61 = 0.23;
			var t62 = 0.22;
			var t63 = 1.0 + 1.0*random_range*Math.random(); // original value was 1.6
			var t71 = 0;
			var t72 = 0;
			var t81 = 0;
			var t82 = 0.16;

		}
	} else {
		if (left_leaf && right_leaf) {
			if (Math.random() > 0.5) {
				left_or_right = -1;
			} else {
				left_or_right = 1;
			}
		} else if (left_leaf && !right_leaf) {
			left_or_right = -1;
		} else if (right_leaf && !left_leaf) {
			left_or_right = 1;
		}
		if (random_branch_length) {
			var x_scale_factor = left_or_right * -1 * (1 + 5*Math.random()) * (10.0 * $("#root_node_scale").val());
			var y_scale_factor = -1 * (1 + 5*Math.random()) * (10.0 * $("#root_node_scale").val());
		} else {
			var x_scale_factor = left_or_right * -1 * (10.0 * $("#root_node_scale").val());
			var y_scale_factor = -1 * (10.0 * $("#root_node_scale").val());
		}
		var t11 = 0.85; 
		var t12 = 0.04; 
		var t21 = -0.04; 
		var t22 = 0.85; 
		var t23 = 1.6;
		var t31 = -0.15;
		var t32 = 0.28;
		var t41 = 0.26;
		var t42 = 0.24;
		var t43 = 0.44;
		var t51 = 0.2;
		var t52 = 0.26;
		var t61 = 0.23;
		var t62 = 0.22;
		var t63 = 1.6;
		var t71 = 0;
		var t72 = 0;
		var t81 = 0;
		var t82 = 0.16;
		
	}

	if (add_shadow) {
	  ctx.shadowColor = $("#shadow_color").val();
	  ctx.shadowBlur = $("#shadow_blur").val();
	  ctx.shadowOffsetX = $("#shadow_offset").val();
	  ctx.shadowOffsetY = $("#shadow_offset").val();
	} else {
	  ctx.shadowColor = '#ffffff';
	  ctx.shadowBlur = 0;
	  ctx.shadowOffsetX = 0;
	  ctx.shadowOffsetY = 0;
	}

	if (random_color_order) {
		var temp_color_array = convertHexToRGB(random_color_array[Math.round(Math.random()*12)]);
		var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
		if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
		ctx.fillStyle = stroke_style_string;
	} else {
		var temp_color_array = convertHexToRGB(color_array[0]);
		var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
		if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
		ctx.fillStyle = stroke_style_string;
	}
	for (var i = 0; i < num_points; i++) {
		var random_var = Math.random();
		if (random_var <= 0.85) {
			next_x = t11*this_x + t12*this_y;
			next_y = t21*this_x + t22*this_y + t23;
			x1 = x+x_scale_factor*next_x;
			y1 = H-y+y_scale_factor*next_y;
			ctx.fillRect(x1, y1,rectangle_size,rectangle_size);
		} else if (0.85 < random_var && random_var <= 0.92) {
			next_x = t31*this_x + t32*this_y;
			next_y = t41*this_x + t42*this_y + t43;
			x1 = x+x_scale_factor*next_x;
			y1 = H-y+y_scale_factor*next_y;
			ctx.fillRect(x1, y1,rectangle_size,rectangle_size);
		} else if (0.92 < random_var && random_var <= 0.99) {
			next_x = t51*this_x - t52*this_y;
			next_y = t61*this_x + t62*this_y + t63;
			x1 = x+x_scale_factor*next_x;
			y1 = H-y+y_scale_factor*next_y;
			ctx.fillRect(x1, y1,rectangle_size,rectangle_size);
		} else if (0.99 < random_var) {
			next_x = t71*this_x + t72*this_y;
			next_y = t81*this_x + t82*this_y;
			x1 = x+x_scale_factor*next_x;
			y1 = H-y+y_scale_factor*next_y;
			ctx.fillRect(x1, y1,rectangle_size,rectangle_size);
		}
		this_x = next_x;
		this_y = next_y;
		if (DEBUG) console.log("i:"+ i + " random_var:" + random_var + " this_x:"+this_x + " this_y:"+this_y + " x1:"+x1 + " y1:"+y1);
	}
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// Function drawTree
// Input: x mouse x-coordinate
// Input: y mouse y-coordinate
// Output: 1, 2, 3, or 4 branches (lines) 
// with options for leaves (rectangles)
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

var drawTree = function(x, y) {
	
	//Some variables
	var tree_x = x;
	var tree_y = y;
	var length, divergence, reduction, branch_thickness, start_points = [];
	
	var add_leaves = $("#add_leaves").prop('checked');
	var add_shadow = $("#add_shadow").prop('checked');
	var shadow_color = $( "#shadow_color" ).val();
	var shadow_offset = $( "#shadow_offset" ).val();
	var shadow_blur = $( "#shadow_blur" ).val();
	var add_random_range = $("#add_random_range").prop('checked');
	var random_range = $("#random_range").val();
	var random_branch_length_var = $("#random_branch_length").prop('checked');
	var random_color_order = $("#random_color_order").prop('checked');
	var branch_color = $("#branch_color").prop('checked');
	var tree_color = Math.round(12*Math.random());
	var alpha_value = $("#alpha_value").val();
	var rectangle_size = $("#rectangle_size").val();
	var one_or_two_branches = $("#one_or_two_branches").prop('checked');
	if (DEBUG) console.log("random_branch_length_var:" + random_branch_length_var);
	
	var color_array = [];
	color_array[0] = $( "#cp1" ).val();
	color_array[1] = $( "#cp2" ).val();
	color_array[2] = $( "#cp3" ).val();
	color_array[3] = $( "#cp4" ).val();
	color_array[4] = $( "#cp5" ).val();
	color_array[5] = $( "#cp6" ).val();
	color_array[6] = $( "#cp7" ).val();
	color_array[7] = $( "#cp8" ).val();
	color_array[8] = $( "#cp9" ).val();
	color_array[9] = $( "#cp10" ).val();
	color_array[10] = $( "#cp11" ).val();
	color_array[11] = $( "#cp12" ).val();
	color_array[12] = $( "#cp13" ).val();
	
	var random_color_array = [];
	random_color_array[0] = color_array[Math.round(12*Math.random())];
	random_color_array[1] = color_array[Math.round(12*Math.random())];
	random_color_array[2] = color_array[Math.round(12*Math.random())];
	random_color_array[3] = color_array[Math.round(12*Math.random())];
	random_color_array[4] = color_array[Math.round(12*Math.random())];
	random_color_array[5] = color_array[Math.round(12*Math.random())];
	random_color_array[6] = color_array[Math.round(12*Math.random())];
	random_color_array[7] = color_array[Math.round(12*Math.random())];
	random_color_array[8] = color_array[Math.round(12*Math.random())];
	random_color_array[9] = color_array[Math.round(12*Math.random())];
	random_color_array[10] = color_array[Math.round(12*Math.random())];
	random_color_array[11] = color_array[Math.round(12*Math.random())];
	random_color_array[12] = color_array[Math.round(12*Math.random())];

	init();
	
	function init()
	{
		var random_range = 1.0*$("#random_range").val();
		//Lets draw the trunk of the tree
		//lets randomise the variables
		//length of the trunk - 100-150
		if (add_random_range) {
			length = parseInt($("#branch_length").val()/30) * (1.0 * $("#root_node_scale").val()) * (0.01 + (0.005 * random_range * Math.random()) * $("#node_scale_reduction").val());
		} else {
			length = parseInt($("#branch_length").val()/30) * (1.0 * $("#root_node_scale").val()) * 0.005 * $("#node_scale_reduction").val();
		}
		branch_level_inc = 0;
		//angle at which branches will diverge
		if (add_random_range) {
			divergence = 1 + Math.random() * $("#branch_angle").val();
		} else {
			divergence = 1 * $("#branch_angle").val();
		}
		//Every branch will be 0.75times of the previous one - 0.5-0.75
		//with 2 decimal points
		reduction = 0.01 * parseInt($("#branch_length_reduction").val());
		if (DEBUG) console.log("branch length:" + length + " branch angle:" + divergence + " reduction:" + reduction);
		
		//width of the branch/trunk
		branch_thickness = parseInt($("#branch_thickness").val()*20);
		branch_thickness_reduction = 0.01 * parseInt($("#branch_thickness_reduction").val());
		
		//This is the end point of the trunk, from where branches will diverge
		var trunk = {x: tree_x, y: tree_y + length, angle: 90};
		
		//It becomes the start point for branches
		start_points = []; //empty the start points on every init();
		start_points.push(trunk);
		if (DEBUG) console.log("start_points.length:" + start_points.length);
		
		//Y coordinates go positive downwards, hence they are inverted by deducting it
		//from the canvas height = H
		ctx.beginPath();
		ctx.moveTo(trunk.x, H-trunk.y + length);
		ctx.lineTo(trunk.x, H-trunk.y);

		if (branch_color) {
			var temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("tree_color:" + tree_color + " color_array[tree_color]: " + color_array[tree_color] + " stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				var temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("branch_level_inc:" + branch_level_inc + " random_color_array: " + random_color_array[tree_color] + " stroke_style_string: " + stroke_style_string);
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			} else {
				var temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("branch_level_inc:" + branch_level_inc + " color_array: " + color_array[branch_level_inc] + " stroke_style_string: " + stroke_style_string);
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			}
		}

		// Add a shadow/blur/glow if checkbox checked
		if (add_shadow) {
		  ctx.shadowColor = $("#shadow_color").val();
		  ctx.shadowBlur = $("#shadow_blur").val();
		  ctx.shadowOffsetX = $("#shadow_offset").val();
		  ctx.shadowOffsetY = $("#shadow_offset").val();
		} else {
		  ctx.shadowColor = '#ffffff';
		  ctx.shadowBlur = 0;
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		}
		ctx.lineWidth = branch_thickness;
		ctx.lineCap = "round";
		ctx.stroke();
		
		var numbranches = $("#numbranches").val();
		if (DEBUG) console.log("numbranches: " + numbranches);
		if (numbranches == 4) {
			fourBranches();
		} else if (numbranches == 3) {
			threeBranches();
		} else if (numbranches == 2) {
			twoBranches();
		} else if (numbranches == 1) {
			oneBranch();
		}
	}		

	//Lets draw a single branch for each parent
	function oneBranch()
	{
		if (Math.random() > 0.5) {
			divergence = -divergence;
		}
		var alpha_value = $("#alpha_value").val();
		if (random_branch_length_var == true) {
			length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
		} else {
			if (add_random_range) {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
			} else {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (0.01 * $("#node_scale_reduction").val());
			}
		}
		branch_thickness = branch_thickness * branch_thickness_reduction;
		ctx.lineWidth = branch_thickness;
		var max_branch_level = parseInt($("#max_branch_level").val());
		
		var new_start_points = [];
		ctx.beginPath();
		ctx.lineJoin = "round";
		var random_parameter_factor = Math.random();
		var temp_color_array = Array();

		if (branch_level_inc < max_branch_level) {
			if (DEBUG) console.log(branch_level_inc + " branches color:" + color_array[branch_level_inc] + " max_branch_level:" + max_branch_level);
			for(var i = 0; i < start_points.length; i++)
			{
				var sp = start_points[i];
				if (random_branch_length_var == true) {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length + 50 * Math.random());
				} else {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
				}
				
				//drawing the branches now
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep1.x, H-ep1.y);
				if (add_leaves) {
					if (random_color_order) {
						temp_color_array = convertHexToRGB(random_color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					} else {
						temp_color_array = convertHexToRGB(color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					}
					ctx.fillRect(ep1.x-1,H-ep1.y,rectangle_size,rectangle_size);
				}
				
				//Time to make this function recursive to draw more branches
				ep1.angle = sp.angle+divergence;
				new_start_points.push(ep1);
			}
		}
		branch_level_inc++;
		var alpha_value = $("#alpha_value").val();
		if (DEBUG2) console.log("alpha_value: " + alpha_value);
		if (branch_color) {
			temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			} else {
				temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			}
		}
		
		// Add a shadow if checkbox checked
		if (add_shadow) {
		  ctx.shadowColor = $("#shadow_color").val();
		  ctx.shadowBlur = $("#shadow_blur").val();
		  ctx.shadowOffsetX = $("#shadow_offset").val();
		  ctx.shadowOffsetY = $("#shadow_offset").val();
		} else {
		  ctx.shadowColor = '#ffffff';
		  ctx.shadowBlur = 0;
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		}

		ctx.stroke();
		start_points = new_start_points;
		//recursive call
		if (one_or_two_branches) {
			if (Math.random() > 0.4) {
				if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(oneBranch, 10);
			} else {
				if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(oneOrTwoBranches, 10);
			}
		} else {
			if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(oneBranch, 10);
		}
	}
	
	//Lets draw two child branches for each parent
	function oneOrTwoBranches()
	{
		var alpha_value = $("#alpha_value").val();
		if (random_branch_length_var == true) {
			length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
		} else {
			if (add_random_range) {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
			} else {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (0.01 * $("#node_scale_reduction").val());
			}
		}
		branch_thickness = branch_thickness * branch_thickness_reduction;
		ctx.lineWidth = branch_thickness;
		var max_branch_level = parseInt($("#max_branch_level").val());
		
		var new_start_points = [];
		ctx.beginPath();
		ctx.lineJoin = "round";
		var random_parameter_factor = Math.random();
		var temp_color_array = Array();

		if (branch_level_inc < max_branch_level) {
			if (DEBUG) console.log(branch_level_inc + " branches color:" + color_array[branch_level_inc] + " max_branch_level:" + max_branch_level);
			for(var i = 0; i < start_points.length; i++)
			{
				var sp = start_points[i];
				if (random_branch_length_var == true) {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length + 50 * Math.random());
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length + 50 * Math.random());
				} else {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);
				}
				
				//drawing the branches now
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep1.x, H-ep1.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep2.x, H-ep2.y);
				if (add_leaves) {
					if (random_color_order) {
						temp_color_array = convertHexToRGB(random_color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					} else {
						temp_color_array = convertHexToRGB(color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					}
					ctx.fillRect(ep1.x-1,H-ep1.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep2.x-1,H-ep2.y,rectangle_size,rectangle_size);
				}
				
				//Time to make this function recursive to draw more branches
				ep1.angle = sp.angle+divergence;
				ep2.angle = sp.angle-divergence;
				
				new_start_points.push(ep1);
				new_start_points.push(ep2);
			}
		}
		if (DEBUG && branch_level_inc < max_branch_level) console.log("color:" + color_array[branch_level_inc] + " length:" + length);
		if (DEBUG2) console.log("length:" + length);
		if (DEBUG2) console.log("branch_level_inc:" + branch_level_inc + " max_branch_level:" + max_branch_level);
		branch_level_inc++;
		var alpha_value = $("#alpha_value").val();
		if (DEBUG2) console.log("alpha_value: " + alpha_value);
		if (branch_color) {
			temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			} else {
				temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			}
		}
		
		// Add shadow/blur/glow if checkbox checked
		if (add_shadow) {
		  ctx.shadowColor = $("#shadow_color").val();
		  ctx.shadowBlur = $("#shadow_blur").val();
		  ctx.shadowOffsetX = $("#shadow_offset").val();
		  ctx.shadowOffsetY = $("#shadow_offset").val();
		} else {
		  ctx.shadowColor = '#ffffff';
		  ctx.shadowBlur = 0;
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		}
		ctx.stroke();
		start_points = new_start_points;
		//recursive call - only if length is more than 2.
		//Else it will fall in a long loop
		if (Math.random() > 0.4) {
			if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(oneBranch, 10);
		} else {
			if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(oneOrTwoBranches, 10);
		}
	}
	
	//Lets draw two child branches for each parent
	function twoBranches()
	{
		var alpha_value = $("#alpha_value").val();
		if (random_branch_length_var == true) {
			length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
		} else {
			if (add_random_range) {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
			} else {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (0.01 * $("#node_scale_reduction").val());
			}
		}
		branch_thickness = branch_thickness * branch_thickness_reduction;
		ctx.lineWidth = branch_thickness;
		var max_branch_level = parseInt($("#max_branch_level").val());
		
		var new_start_points = [];
		ctx.beginPath();
		ctx.lineJoin = "round";
		var random_parameter_factor = Math.random();
		var temp_color_array = Array();

		if (branch_level_inc < max_branch_level) {
			if (DEBUG) console.log(branch_level_inc + " branches color:" + color_array[branch_level_inc] + " max_branch_level:" + max_branch_level);
			for(var i = 0; i < start_points.length; i++)
			{
				var sp = start_points[i];
				if (random_branch_length_var == true) {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length + 50 * Math.random());
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length + 50 * Math.random());
				} else {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);
				}
				
				//drawing the branches now
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep1.x, H-ep1.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep2.x, H-ep2.y);
				if (add_leaves) {
					if (random_color_order) {
						temp_color_array = convertHexToRGB(random_color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					} else {
						temp_color_array = convertHexToRGB(color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					}
					ctx.fillRect(ep1.x-1,H-ep1.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep2.x-1,H-ep2.y,rectangle_size,rectangle_size);
				}
				
				//Time to make this function recursive to draw more branches
				ep1.angle = sp.angle+divergence;
				ep2.angle = sp.angle-divergence;
				
				new_start_points.push(ep1);
				new_start_points.push(ep2);
			}
		}
		if (DEBUG && branch_level_inc < max_branch_level) console.log("color:" + color_array[branch_level_inc] + " length:" + length);
		if (DEBUG2) console.log("length:" + length);
		if (DEBUG2) console.log("branch_level_inc:" + branch_level_inc + " max_branch_level:" + max_branch_level);
		branch_level_inc++;
		var alpha_value = $("#alpha_value").val();
		if (DEBUG2) console.log("alpha_value: " + alpha_value);
		if (branch_color) {
			temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			} else {
				temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			}
		}
		
		// Add shadow/blur/glow if checkbox checked
		if (add_shadow) {
		  ctx.shadowColor = $("#shadow_color").val();
		  ctx.shadowBlur = $("#shadow_blur").val();
		  ctx.shadowOffsetX = $("#shadow_offset").val();
		  ctx.shadowOffsetY = $("#shadow_offset").val();
		} else {
		  ctx.shadowColor = '#ffffff';
		  ctx.shadowBlur = 0;
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		}
		ctx.stroke();
		start_points = new_start_points;
		//recursive call
		if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(twoBranches, 10);
	}
	
	//Lets draw three child branches for each parent
	function threeBranches()
	{
		//reducing branch_thickness and length
		var alpha_value = $("#alpha_value").val();
		if (random_branch_length_var == true) {
			length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
		} else {
			if (add_random_range) {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
			} else {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (0.01 * $("#node_scale_reduction").val());
			}
		}

		branch_thickness = branch_thickness * branch_thickness_reduction;
		ctx.lineWidth = branch_thickness;
		ctx.lineJoin = "round";
		var max_branch_level = parseInt($("#max_branch_level").val());
		var random_parameter_factor = Math.random();
		var temp_color_array = Array();
		
		var new_start_points = [];
		ctx.beginPath();
		if (branch_level_inc < max_branch_level) {
			for(var i = 0; i < start_points.length; i++)
			{
				var sp = start_points[i];
				if (random_branch_length_var == true) {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length + 50 * Math.random());
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length + 50 * Math.random());
					var ep3 = get_endpoint(sp.x, sp.y, sp.angle, length + 50 * Math.random());
				} else {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);
					var ep3 = get_endpoint(sp.x, sp.y, sp.angle, length);
				}
				
				//drawing the branches now
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep1.x, H-ep1.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep2.x, H-ep2.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep3.x, H-ep3.y);
				if (add_leaves) {
					if (random_color_order) {
						temp_color_array = convertHexToRGB(random_color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					} else {
						temp_color_array = convertHexToRGB(color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					}
					ctx.fillRect(ep1.x-1,H-ep1.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep2.x-1,H-ep2.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep3.x-1,H-ep3.y,rectangle_size,rectangle_size);
				}
				
				ep1.angle = sp.angle+divergence;
				ep2.angle = sp.angle-divergence;
				ep3.angle = sp.angle;
				
				new_start_points.push(ep1);
				new_start_points.push(ep2);
				new_start_points.push(ep3);
			}
		}
		if (DEBUG) console.log("2tree_color:" + tree_color);
		branch_level_inc++;
		if (branch_color) {
			temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			} else {
				temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			}
		}
		
		//Draw the line and reset the start points to new start points
		ctx.stroke();
		start_points = new_start_points;
		//recursive call
		if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(threeBranches, 10);
	}
	
	//Lets draw four child branches for each parent
	function fourBranches()
	{
		//reducing branch_thickness and length
		var alpha_value = $("#alpha_value").val();
		if (random_branch_length_var == true) {
			length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
		} else {
			if (add_random_range) {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
			} else {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (0.01 * $("#node_scale_reduction").val());
			}
		}

		branch_thickness = branch_thickness * branch_thickness_reduction;
		ctx.lineWidth = branch_thickness;
		max_branch_level = parseInt($("#max_branch_level").val());
		
		var new_start_points = [];
		ctx.beginPath();
		if (branch_level_inc < max_branch_level) {
			for (var i = 0; i < start_points.length; i++)
			{
				var sp = start_points[i];
				if (DEBUG) console.log("i:" + i);
				//2 branches will come out of every start point. Hence there will be
				//2 end points. There is a difference in the divergence.
				if (random_branch_length_var == true) {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+1.5*divergence, length + 50 * Math.random());
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-1.5*divergence, length + 50 * Math.random());
					var ep3 = get_endpoint(sp.x, sp.y, sp.angle+0.5*divergence, length + 50 * Math.random());
					var ep4 = get_endpoint(sp.x, sp.y, sp.angle-0.5*divergence, length + 50 * Math.random());
				} else {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+1.5*divergence, length);
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-1.5*divergence, length);
					var ep3 = get_endpoint(sp.x, sp.y, sp.angle+0.5*divergence, length);
					var ep4 = get_endpoint(sp.x, sp.y, sp.angle-0.5*divergence, length);
				}
				
				//drawing the branches now
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep1.x, H-ep1.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep2.x, H-ep2.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep3.x, H-ep3.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep4.x, H-ep4.y);
				if (add_leaves) {
					if (random_color_order) {
						temp_color_array = convertHexToRGB(random_color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					} else {
						temp_color_array = convertHexToRGB(color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					}
					ctx.fillRect(ep1.x-1,H-ep1.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep2.x-1,H-ep2.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep3.x-1,H-ep3.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep4.x-1,H-ep4.y,rectangle_size,rectangle_size);
				}
				
				ep1.angle = sp.angle+1.5*divergence;
				ep2.angle = sp.angle-1.5*divergence;
				ep3.angle = sp.angle+0.5*divergence;
				ep4.angle = sp.angle-0.5*divergence;
				
				new_start_points.push(ep1);
				new_start_points.push(ep2);
				new_start_points.push(ep3);
				new_start_points.push(ep4);
			}
		}
		branch_level_inc++;
		if (branch_color) {
			temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			} else {
				temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
				ctx.strokeStyle = stroke_style_string;
			}
		}
		
		//Draw the line and set start points to new start points
		ctx.stroke();
		start_points = new_start_points;
		//recursive call - only if length is more or less than specified.
		//Else it will fall in a long loop
		if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(fourBranches, 10);
	}
	
	//Lets draw random child branches for each parent depending on random_branch_length_var 
	function randomBranches()
	{
		var alpha_value = $("#alpha_value").val();
		if (random_branch_length_var == true) {
			length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
		} else {
			if (add_random_range) {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (1 + 0.5 * Math.random()) * (0.01 * $("#node_scale_reduction").val());
			} else {
				length = length * reduction * (1.0 * $("#root_node_scale").val()) * (0.01 * $("#node_scale_reduction").val());
			}
		}
		branch_thickness = branch_thickness * branch_thickness_reduction;
		ctx.lineWidth = branch_thickness;
		var max_branch_level = parseInt($("#max_branch_level").val());
		
		var new_start_points = [];
		ctx.beginPath();
		ctx.lineJoin = "round";
		var random_parameter_factor = Math.random();
		var temp_color_array = Array();

		if (branch_level_inc < max_branch_level) {
			if (DEBUG) console.log(branch_level_inc + " branches color:" + color_array[branch_level_inc] + " max_branch_level:" + max_branch_level);
			for(var i = 0; i < start_points.length; i++)
			{
				var sp = start_points[i];
				if (random_branch_length_var == true) {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length + 50 * Math.random());
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length + 50 * Math.random());
				} else {
					var ep1 = get_endpoint(sp.x, sp.y, sp.angle+divergence, length);
					var ep2 = get_endpoint(sp.x, sp.y, sp.angle-divergence, length);
				}
				
				//drawing the branches now
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep1.x, H-ep1.y);
				ctx.moveTo(sp.x, H-sp.y);
				ctx.lineTo(ep2.x, H-ep2.y);
				if (add_leaves) {
					if (random_color_order) {
						temp_color_array = convertHexToRGB(random_color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					} else {
						temp_color_array = convertHexToRGB(color_array[branch_level_inc+1]);
						var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
						if (DEBUG) console.log("stroke_style_string: " + stroke_style_string);
						ctx.fillStyle = stroke_style_string;
					}
					ctx.fillRect(ep1.x-1,H-ep1.y,rectangle_size,rectangle_size);
					ctx.fillRect(ep2.x-1,H-ep2.y,rectangle_size,rectangle_size);
				}
				
				//Stack the branch end points
				ep1.angle = sp.angle+divergence;
				ep2.angle = sp.angle-divergence;
				
				new_start_points.push(ep1);
				new_start_points.push(ep2);
			}
		}
		branch_level_inc++;
		var alpha_value = $("#alpha_value").val();
		if (branch_color) {
			temp_color_array = convertHexToRGB(color_array[tree_color]);
			var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
			ctx.strokeStyle = stroke_style_string;
		} else {
			if (random_color_order) {
				temp_color_array = convertHexToRGB(random_color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				ctx.strokeStyle = stroke_style_string;
			} else {
				temp_color_array = convertHexToRGB(color_array[branch_level_inc]);
				var stroke_style_string = "rgba(" + temp_color_array[0] + "," + temp_color_array[1] + "," + temp_color_array[2] + ", " + alpha_value + ")";
				ctx.strokeStyle = stroke_style_string;
			}
		}
		
		//Lets add a shadow, blur, or glow
		if (add_shadow) {
		  ctx.shadowColor = $("#shadow_color").val();
		  ctx.shadowBlur = $("#shadow_blur").val();
		  ctx.shadowOffsetX = $("#shadow_offset").val();
		  ctx.shadowOffsetY = $("#shadow_offset").val();
		} else {
		  ctx.shadowColor = '#ffffff';
		  ctx.shadowBlur = 0;
		  ctx.shadowOffsetX = 0;
		  ctx.shadowOffsetY = 0;
		}
		ctx.stroke();
		start_points = new_start_points;
		//recursive call - only if length is more or less than the values specified.
		//Else it will fall in a long loop
		if(length > 0.01 && length < 800 && branch_level_inc <= max_branch_level + 1) setTimeout(randomBranches, 10);
	}
	
	function get_endpoint(x, y, a, length)
	{
		//This function will calculate the branch end points based on simple vectors
		var epx = x + length * Math.cos(a*Math.PI/180);
		var epy = y + length * Math.sin(a*Math.PI/180);
		return {x: epx, y: epy};
	}
	
}

