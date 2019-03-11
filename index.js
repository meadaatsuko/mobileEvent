function addEvent(element,type,method) {
	// body...
	if (element.addEventListener) {
		element.addEventListener(type,method,false);
	}else{
		element["on" + type] = method;
	}
}
addEvent(window,"load",function (event) {
	// body...
	var box = document.querySelector("#box");
	var text = document.querySelector("#text");
	addEvent(window,"orientationchange",function (event) {
		// body...
		box.style.transform = "rotate(" + window.orientation + "deg)";
		text.style.transform = "rotate(" + (window.orientation) + "deg)";
	});
});
