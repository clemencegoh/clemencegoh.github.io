function navbarFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav sticky") {
        x.className += " responsive";
    } else {
        x.className = "topnav sticky";
    }
}

// Toggler functions for enabling changes to happen on click
function navbarToggler(header_name, selections_name) {
	let header = document.getElementById(header_name);
	let btns = header.getElementsByClassName(selections_name);

	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			let current = header.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}


function projectsFilterToggler(header_name, selections_name) {
	let projects_area = document.getElementById('projects_content');
	let header = document.getElementById(header_name);
	let btns = header.getElementsByClassName(selections_name);

	for (let i = 0; i < btns.length; i++) {
		// Add function to click
		btns[i].addEventListener("click", function() {
			// sets this to active while the rest to not active
			let current = header.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
			let filtering_for = this.innerText.toLowerCase();
			let to_filter = projects_area.getElementsByClassName('all');

			for (let j=0;j<to_filter.length;j++){
				if (!to_filter[j].className.includes(filtering_for)){
					to_filter[j].setAttribute('hidden', true);
				}else{
					to_filter[j].removeAttribute('hidden');
				}
			}
		});
	}
}

function goto_Section(section) {
	window.scrollTo(0, document.getElementsByClassName(section)[0].offsetTop);
}


