// JavaScript Document
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
// Slider Functions
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Enables Alpha Transparency for trees, ferns, and sierpinski triangles.
  $(function() {
    $( "#alpha_value_slider" ).slider({
      range: "min",
      value: 1,
      min: 0.01,
      max: 1,
	  step: 0.01,
      slide: function( event, ui ) {
        $( "#alpha_value" ).val( ui.value );
      }
    });
    $( "#alpha_value" ).val( $( "#alpha_value_slider" ).slider( "value" ) );
  });
  
  // Width of random range variation around default parameters
  $(function() {
    $( "#random_range_slider" ).slider({
      range: "min",
      value: 1,
      min: 0,
      max: 20,
	  step: 0.1,
      slide: function( event, ui ) {
        $( "#random_range" ).val( ui.value );
      }
    });
    $( "#random_range" ).val( $( "#random_range_slider" ).slider( "value" ) );
  });
  
  // Constrains random factor for Ferns to single value for all parameters
  $(function() {
    $( "#single_random_factor_value_slider" ).slider({
      range: "min",
      value: 0.5,
      min: 0,
      max: 1,
	  step: 0.01,
      slide: function( event, ui ) {
        $( "#single_random_factor_value" ).val( ui.value );
      }
    });
    $( "#single_random_factor_value" ).val( $( "#single_random_factor_value_slider" ).slider( "value" ) );
  });
  
  // # of Branches Per Level. Options: 2, 3, or 4
  $(function() {
    $( "#numbranches_slider" ).slider({
      range: "min",
      value: 2,
      min: 1,
      max: 4,
	  step: 1,
      slide: function( event, ui ) {
        $( "#numbranches" ).val( ui.value );
      }
    });
    $( "#numbranches" ).val( $( "#numbranches_slider" ).slider( "value" ) );
  });
  
  // Root Node Scale Factor scales the root node and tree trunk length which affects all branches
  $(function() {
    $( "#root_node_scale_slider" ).slider({
      range: "min",
      value: 1,
      min: 0.05,
      max: 10,
	  step: 0.05,
      slide: function( event, ui ) {
        $( "#root_node_scale" ).val( ui.value );
      }
    });
    $( "#root_node_scale" ).val( $( "#root_node_scale_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#node_scale_slider" ).slider({
      range: "min",
      value: 1,
      min: 0.1,
      max: 10,
	  step: 0.1,
      slide: function( event, ui ) {
        $( "#node_scale" ).val( ui.value );
      }
    });
    $( "#node_scale" ).val( $( "#node_scale_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#node_scale_reduction_slider" ).slider({
      range: "min",
      value: 96,
      min: 1,
      max: 200,
	  step: 1,
      slide: function( event, ui ) {
        $( "#node_scale_reduction" ).val( ui.value );
      }
    });
    $( "#node_scale_reduction" ).val( $( "#node_scale_reduction_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#max_branch_level_slider" ).slider({
      range: "min",
      value: 8,
      min: 0,
      max: 12,
      slide: function( event, ui ) {
        $( "#max_branch_level" ).val( ui.value );
      }
    });
    $( "#max_branch_level" ).val( $( "#max_branch_level_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#branch_angle_slider" ).slider({
      range: "min",
      value: 20,
      min: 0,
      max: 360,
      slide: function( event, ui ) {
        $( "#branch_angle" ).val( ui.value );
      }
    });
    $( "#branch_angle" ).val( $( "#branch_angle_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#branch_length_slider" ).slider({
      range: "min",
      value: 2000,
      min: 2,
      max: 4000,
      slide: function( event, ui ) {
        $( "#branch_length" ).val( ui.value );
      }
    });
    $( "#branch_length" ).val( $( "#branch_length_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#branch_length_reduction_slider" ).slider({
      range: "min",
      value: 98,
      min: 1,
      max: 200,
      slide: function( event, ui ) {
        $( "#branch_length_reduction" ).val( ui.value );
      }
    });
    $( "#branch_length_reduction" ).val( $( "#branch_length_reduction_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#branch_thickness_slider" ).slider({
      range: "min",
      value: 0.6,
      min: 0.05,
      max: 1,
	  step: 0.01,
      slide: function( event, ui ) {
        $( "#branch_thickness" ).val( ui.value );
      }
    });
    $( "#branch_thickness" ).val( $( "#branch_thickness_slider" ).slider( "value" ) );
  });
  $(function() {
    $( "#branch_thickness_reduction_slider" ).slider({
      range: "min",
      value: 66,
      min: 1,
      max: 200,
      slide: function( event, ui ) {
        $( "#branch_thickness_reduction" ).val( ui.value );
      }
    });
    $( "#branch_thickness_reduction" ).val( $( "#branch_thickness_reduction_slider" ).slider( "value" ) );
  });

  // Shadow Offset
  $(function() {
    $( "#shadow_offset_slider" ).slider({
      range: "min",
      value: 0,
      min: 0,
      max: 50,
	  step: 1,
      slide: function( event, ui ) {
        $( "#shadow_offset" ).val( ui.value );
      }
    });
    $( "#shadow_offset" ).val( $( "#shadow_offset_slider" ).slider( "value" ) );
  });
  
  // Shadow Offset
  $(function() {
    $( "#shadow_blur_slider" ).slider({
      range: "min",
      value: 0,
      min: 0,
      max: 50,
	  step: 1,
      slide: function( event, ui ) {
        $( "#shadow_blur" ).val( ui.value );
      }
    });
    $( "#shadow_blur" ).val( $( "#shadow_blur_slider" ).slider( "value" ) );
  });
  
  // Line Thickness
  $(function() {
    $( "#line_width_slider" ).slider({
      range: "min",
      value: 3,
      min: 1,
      max: 50,
	  step: 1,
      slide: function( event, ui ) {
        $( "#line_width" ).val( ui.value );
      }
    });
    $( "#line_width" ).val( $( "#line_width_slider" ).slider( "value" ) );
  });
  
  $(function() {
    $( "#rectangle_size_slider" ).slider({
      range: "min",
      value: 2,
      min: 1,
      max: 20,
	  step: 1,
      slide: function( event, ui ) {
        $( "#rectangle_size" ).val( ui.value );
      }
    });
    $( "#rectangle_size" ).val( $( "#rectangle_size_slider" ).slider( "value" ) );
  });
  
  $(function() {
    $( "#spiral_tightness_slider" ).slider({
      range: "min",
      value: 1,
      min: 0.1,
      max: 10,
	  step: 0.1,
      slide: function( event, ui ) {
        $( "#spiral_tightness" ).val( ui.value );
      }
    });
    $( "#spiral_tightness" ).val( $( "#spiral_tightness_slider" ).slider( "value" ) );
  });
  
  $(function() {
    $( "#spline_curvature_slider" ).slider({
      range: "min",
      value: 40,
      min: -50,
      max: 50,
	  step: 1,
      slide: function( event, ui ) {
        $( "#spline_curvature" ).val( ui.value );
      }
    });
    $( "#spline_curvature" ).val( $( "#spline_curvature_slider" ).slider( "value" ) );
  });
  
  $(function() {
    $( "#spline_curvature_random_factor_slider" ).slider({
      range: "min",
      value: 0,
      min: 0,
      max: 20,
	  step: 1,
      slide: function( event, ui ) {
        $( "#spline_curvature_random_factor" ).val( ui.value );
      }
    });
    $( "#spline_curvature_random_factor" ).val( $( "#spline_curvature_random_factor_slider" ).slider( "value" ) );
  });
  
	function convertHexToRGB(color_input) {
		//var color_input;
		if (DEBUG) debugger;
		if (typeof color_input === 'undefined') {
			var redvar1 = "0";
			var redvar2 = "0";
			var greenvar1 = "0";
			var greenvar2 = "0";
			var bluevar1 = "0";
			var bluevar2 = "0";
		} else {
			var redvar1 = color_input.substring(1,2);
			var redvar2 = color_input.substring(2,3);
			var greenvar1 = color_input.substring(3,4);
			var greenvar2 = color_input.substring(4,5);
			var bluevar1 = color_input.substring(5,6);
			var bluevar2 = color_input.substring(6,7);
			if (DEBUG) console.log("color_input: " + color_input);
		}
		var redcolor, greencolor, bluecolor;  
	
		var color_array = Array();
		var colorlist = Array();
		colorlist = Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
		for (var i = 0; i < 16; i++) {
		  if (redvar1 == colorlist[i]) {
			  for (var j = 0; j < 16; j++) {
				  if (redvar2 == colorlist[j]) {
					  redcolor = i*16 + j;
				  }
			  }
		  }
		}
		for (i = 0; i < 16; i++) {
		  if (greenvar1 == colorlist[i]) {
			  for (j = 0; j < 16; j++) {
				  if (greenvar2 == colorlist[j]) {
					  greencolor = i*16 + j;
				  }
			  }
		  }
		}
		for (i = 0; i < 16; i++) {
		  if (bluevar1 == colorlist[i]) {
			  for (j = 0; j < 16; j++) {
				  if (bluevar2 == colorlist[j]) {
					  bluecolor = i*16 + j;
				  }
			  }
		  }
		}
		color_array[0] = redcolor;
		color_array[1] = greencolor;
		color_array[2] = bluecolor;
		if (DEBUG) console.log("redcolor:" + redcolor + " greencolor:" + greencolor + " bluecolor:" + bluecolor);
		return color_array;
	}
