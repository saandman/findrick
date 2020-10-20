$(document).ready(function(){
		        $('#rick_img').hide();
		        $('#rickim').show();
});


var r_x=Math.floor(Math.random() * (1265 - 10 + 1)) + 10;		//	(end - start + 1) + start;
var r_y=Math.floor(Math.random() * (600 - 10 + 1)) + 10;
console.log("randomNO._x: "+r_x);
console.log("randomNO._y: "+r_y);
document.addEventListener('mousemove',function(evt) {
	var pos = getMousePos(evt);
	console.log("posx: "+pos.x);
	console.log("posy: "+pos.y);
	var o =
		{
			left:r_x-75,
			top:r_y-75
		};
	dis=Math.sqrt(((r_x-pos.x)*(r_x-pos.x))+((r_y-pos.y)*(r_y-pos.y)));
	if(pos.x>=(r_x-75) && pos.x<=(r_x+75) && pos.y>=r_y-75 && pos.y<=r_y+75)
	{
			$("#rick_img").show().offset(o);
			document.getElementById("my_audio").play();
	}
});

// pageX/Y coordinates are relative to the top left corner of the whole rendered page (including parts hidden by scrolling),

//while clientX/Y coordinates are relative to the top left corner of the visible part of the page, "seen" through browser window.

function getMousePos(evt) {
	return {
		x: evt.clientX,
		y: evt.clientY
	};
}
