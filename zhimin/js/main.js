// Script to open and close sidebar
function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("myOverlay").style.display = "none";
}


function sendEmailTo() {
	let name = document.getElementById('mail-name').value;
	let subject = document.getElementById('mail-subject').value;
	let message = document.getElementById('mail-message').value;

	// build message body
	let message_body = 'Dear Zhi Min,\n\n' + message + '\n\n' + 'Through Portfolio Page,\n' + name + '\n\n\n';

	window.location.href =
		'mailto:leongzhimin1997@gmail.com?subject=' + encodeURI(subject) + '&body=' + encodeURI(message_body);

	// clear form area
	document.getElementById('contact-form').reset();
}