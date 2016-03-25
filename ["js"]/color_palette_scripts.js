// JavaScript Document

function changeBackground() {
	document.body.style.background = $( "#background_color_picker" ).val();
}

$(document).ready(function(){
	$("#AllOneColor").click(function(){
		$('#cp1').val($('#all_one_color').val());
		$('#cp2').val($('#all_one_color').val());
		$('#cp3').val($('#all_one_color').val());
		$('#cp4').val($('#all_one_color').val());
		$('#cp5').val($('#all_one_color').val());
		$('#cp6').val($('#all_one_color').val());
		$('#cp7').val($('#all_one_color').val());
		$('#cp8').val($('#all_one_color').val());
		$('#cp9').val($('#all_one_color').val());
		$('#cp10').val($('#all_one_color').val());
		$('#cp11').val($('#all_one_color').val());
		$('#cp12').val($('#all_one_color').val());
		$('#cp13').val($('#all_one_color').val());
	});
});
$(document).ready(function(){
	$("#setRedPalette").click(function(){
		$('#cp1').val("#440000");
		$('#cp2').val("#660000");
		$('#cp3').val("#880000");
		$('#cp4').val("#aa0000");
		$('#cp5').val("#cc0000");
		$('#cp6').val("#ff0000");
		$('#cp7').val("#ff2222");
		$('#cp8').val("#ff4444");
		$('#cp9').val("#ff6666");
		$('#cp10').val("#ff8888");
		$('#cp11').val("#ffaaaa");
		$('#cp12').val("#ffcccc");
		$('#cp13').val("#ffeeee");
	});
});
$(document).ready(function(){
	$("#setGreenPalette").click(function(){
		$('#cp1').val("#004400");
		$('#cp2').val("#006600");
		$('#cp3').val("#008800");
		$('#cp4').val("#00aa00");
		$('#cp5').val("#00cc00");
		$('#cp6').val("#00ff00");
		$('#cp7').val("#22ff22");
		$('#cp8').val("#44ff44");
		$('#cp9').val("#66ff66");
		$('#cp10').val("#88ff88");
		$('#cp11').val("#aaffaa");

		$('#cp12').val("#ccffcc");
		$('#cp13').val("#eeffee");
	});
});
$(document).ready(function(){
	$("#setBluePalette").click(function(){
		$('#cp1').val("#000044");
		$('#cp2').val("#000066");
		$('#cp3').val("#000088");
		$('#cp4').val("#0000aa");
		$('#cp5').val("#0000cc");
		$('#cp6').val("#0000ff");
		$('#cp7').val("#2222ff");
		$('#cp8').val("#4444ff");
		$('#cp9').val("#6666ff");
		$('#cp10').val("#8888ff");
		$('#cp11').val("#aaaaff");
		$('#cp12').val("#ccccff");
		$('#cp13').val("#eeeeff");
	});
});
$(document).ready(function(){
	$("#setDefaultPalette").click(function(){
		$('#cp1').val("#331100");
		$('#cp2').val("#851607");
		$('#cp3').val("#d11919");
		$('#cp4').val("#a83605");
		$('#cp5').val("#a82e27");
		$('#cp6').val("#ba5a02");
		$('#cp7').val("#cf4253");
		$('#cp8').val("#998417");
		$('#cp9').val("#d6a831");
		$('#cp10').val("#ffc700");
		$('#cp11').val("#9bfa00");
		$('#cp12').val("#00ff7f");
		$('#cp13').val("#ff8800");
	});
});
$(document).ready(function(){
	$("#setTreePalette").click(function(){
		$('#cp1').val("#331100");
		$('#cp2').val("#5f1105");
		$('#cp3').val("#70430c");
		$('#cp4').val("#8c2d04");
		$('#cp5').val("#a82e27");
		$('#cp6').val("#d3800e");
		$('#cp7').val("#c1a637");
		$('#cp8').val("#804000");
		$('#cp9').val("#008000");
		$('#cp10').val("#00b000");
		$('#cp11').val("#9bfa00");
		$('#cp12').val("#ffff00");
		$('#cp13').val("#fc5005");
	});
});
$(document).ready(function(){
	$("#setFernPalette").click(function(){
		$('#cp1').val("#331100");
		$('#cp2').val("#5f1105");
		$('#cp3').val("#20430c");
		$('#cp4').val("#8c2d04");
		$('#cp5').val("#331100");
		$('#cp6').val("#23800e");
		$('#cp7').val("#21a637");
		$('#cp8').val("#304000");
		$('#cp9').val("#008000");
		$('#cp10').val("#006000");
		$('#cp11').val("#2b4a00");
		$('#cp12').val("#331100");
		$('#cp13').val("#2c5005");
	});
});
$(document).ready(function(){
	$("#setRainbowPalette").click(function(){
		$('#cp1').val("#aa00aa");
		$('#cp2').val("#ff00ff");
		$('#cp3').val("#8800ff");
		$('#cp4').val("#0000ff");
		$('#cp5').val("#0088ff");
		$('#cp6').val("#00ffff");
		$('#cp7').val("#00ff88");
		$('#cp8').val("#00ff00");
		$('#cp9').val("#88ff00");
		$('#cp10').val("#ffff00");
		$('#cp11').val("#ff8800");
		$('#cp12').val("#ff0000");
		$('#cp13').val("#990000");
	});
});
