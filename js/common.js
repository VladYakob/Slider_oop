window.onload = function(){

var slid1 = new CONST({
	prev: ".gallery-1 .buttons .prev",
	next: ".gallery-1 .buttons .next",
	img: ".gallery-1 .photos img",
	wrapper: ".gallery-1",
	auto: true,
	speed : 5000
});
	
var slid2 = new CONST({
	prev: ".gallery-2 .buttons .prev",
	next: ".gallery-2 .buttons .next",
	img: ".gallery-2 .photos img",
	wrapper: ".gallery-2",
	auto: true,
	speed : 5000
});
	
	

	
// Construcyot	
function CONST(obj){
	var i = 0;
	var CONST = this;
	var auto = obj.auto;
	var speed = obj.speed || 2000;
	var parentElem = obj.wrapper;
	
	

/*	
	var div = document.createElement("div");
	div.className = "buttons";
	var parent = document.querySelector(obj.wrapper);
	parent.appendChild(div);
	div.innerHTML = "<input type='button' value='prev' class='prev'>" +
	"<input type='button' value='next' class='next'>";
*/
	CONST.img = document.querySelectorAll(obj.img);
	CONST.next = document.querySelector(obj.next);
	CONST.prev = document.querySelector(obj.prev);
	
	
	CONST.nextFunc = function(){
		CONST.img[i].classList.toggle("showed");
		i++;
		if(i >= CONST.img.length){
			i = 0;
		}
		CONST.img[i].classList.toggle("showed");
	}
	
	CONST.prevFunc = function(){
		CONST.img[i].classList.toggle("showed");
		i--;
		if(i < 0){
			i = CONST.img.length - 1;
		}
		CONST.img[i].classList.toggle("showed");
	}
	
	
	
	CONST.next.onclick = CONST.nextFunc;
	CONST.prev.onclick = CONST.prevFunc;
	if(auto){
		setInterval(function(){
			CONST.nextFunc();
		}, speed)
	}

}


//end
}