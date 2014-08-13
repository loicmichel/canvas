var Engine = function (idcanvas, width, height){
	if ( arguments.callee._singletonInstance )
    	return arguments.callee._singletonInstance;

  	arguments.callee._singletonInstance = this;

  	this.canvas = document.getElementById(idcanvas);
  	this.canvas_width = width;
	this.canvas_height = height; 
	this.canvas.height = this.canvas_height;
	this.canvas.width = this.canvas_width;
	this.extendContext = new ExtendContext(this.canvas.getContext('2d'));

  	this.ASSET_MANAGER = new AssetManager();
}

Engine.prototype.play = function(){
	if('function' != typeof(this.init)){
		console.log('Erreur: il faut definir la fonction init pour l\'objet Engine');
	}

	if('function' != typeof(this.update)){
		console.log('Erreur: il faut definir la fonction update pour l\'objet Engine');
	}

	if('function' != typeof(this.render)){
		console.log('Erreur: il faut definir la fonction render pour l\'objet Engine');
	}

	this.init( this.ASSET_MANAGER );
	this.ASSET_MANAGER.downloadAll(function(){
		Engine().gameBoucle();
	})
}

Engine.prototype.gameBoucle = function (){
	requestAnimFrame(function() {
    	Engine().update();
    	Engine().render(Engine().extendContext);
    	Engine().gameBoucle();
    });
}


window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
})();