var ExtendContext = function ( context ){
	this.context = context;
}

ExtendContext.prototype.drawRec = function (x, y, width, height, border, color){
	this.context.beginPath();
	this.context.strokeStyle = "rgb(51,51,102)";
	this.context.moveTo(x,y);
	this.context.lineTo(x+width,y);
	this.context.lineTo(x+width,y+height);
	this.context.lineTo(x,y+height);
	this.context.lineTo(x,y);
	this.context.stroke();
}