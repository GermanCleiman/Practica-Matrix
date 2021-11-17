var element = document.querySelector("#canvas");
var ctx = element.getContext("2d");

/* Le doy un ancho y alto a canvas con el ancho de la view de la persona que esta viendo por internet*/
const w = document.body.clientWidth;
const h = document.body.clientHeight;
element.width = w;
element.height = h;

var position = Array(300).join(0).split("");
/**Join rellena con, split separa con */

var initMatrix = () => {
	ctx.fillStyle = "rgba(0, 15, 2, 0.12)";
	ctx.fillRect(0, 0, w, h);
	ctx.fillStyle = "#00ff00";
	ctx.font = "15pt";

	position.map((y, index) => {
		var text = String.fromCharCode(1e3 + Math.random() * 30);
		/**1e3 tipo de idioma (español, chino,etc; y con random *30 me da letras aleatorias en ese idioma )*/
		var x = index * 15;

		canvas.getContext("2d").fillText(text, x, y);

		y > 100 + Math.random() * 1e5
			? (position[index] = 0)
			: (position[index] = y + 15);
	});
};
setInterval(initMatrix, 50); /**llama a initMatrix sin () */
