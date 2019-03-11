function addEvent(element,type,method) {
	// body...
	if (element.addEventListener) {
		element.addEventListener(type,method,false);
	}else{
		element["on" + type] = method;
	}
}
function deviceOrientationEvent(event){
	var text = document.querySelector("#textOut");
	var arrow = document.querySelector("#arrow");
	text.innerHTML = "alpha:" + event.alpha.toFixed(2) + ".";
	arrow.style.transform = "rotate(" + event.alpha.toFixed(0) + "deg)"; 
}
addEvent(window,"load",function (event) {
	// body...
	var box = document.querySelector("#box");
	var text = document.querySelector("#textOut");
	addEvent(window,"orientationchange",function (event) {
		// body...
		box.style.transform = "rotate(" + window.orientation + "deg)";
		text.style.transform = "rotate(" + (-window.orientation) + "deg)";
	});
	addEvent(window,"deviceorientation",deviceOrientationEvent);
});
