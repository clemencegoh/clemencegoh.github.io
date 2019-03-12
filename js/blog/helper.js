/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById("side-nav").style.width = '250px';
	document.getElementById("overall-blog-wrapper").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById("side-nav").style.width = "0";
	document.getElementById("overall-blog-wrapper").style.marginLeft = "0";
	document.body.style.backgroundColor = "white";
}