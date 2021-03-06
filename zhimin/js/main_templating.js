/*
	Helper functions
 */
let currentProjects = [];

// filters all projects using filter name
function setProjectFilter(filter_name) {
	// initial filtering
	let all_data = getProjectsData();
	if (filter_name === 'all'){
		currentProjects = all_data;
	}else{
		let temp_data = [];
		for (let i=0;i<all_data.length;i++){
			if (all_data[i].Category.includes(filter_name)){
				temp_data.push(all_data[i]);
			}
		}
		currentProjects = temp_data;
	}

	generateProjects();
	generatePagination(getNumberOfPages());
}

function getNumberOfPages(){
	console.log('number of pages to be created:' + Math.ceil(currentProjects.length/3));
	return Math.ceil(currentProjects.length/3)
}

function setCurrentPagination(num) {
	localStorage.setItem('pagination', num);
	setCurrentPaginationButtonToBlack();
}

function setCurrentPaginationButtonToBlack(){
	let pagination_area = document.getElementById('pagination-area');

	let elems = pagination_area.getElementsByClassName('w3-bar-item');

	for (let i = 0; i < elems.length; i++) {
		setBlackIfCurrent(elems[i]);
	}
}

function setBlackIfCurrent(element){
	if (parseInt(element.innerText) === (parseInt(localStorage.getItem('pagination')) + 1)){
		element.setAttribute('class', 'w3-bar-item w3-black w3-button');
	}else{
		element.setAttribute('class', 'w3-bar-item w3-button w3-hover-black');
	}
}



/*
	Generation functions
	To be called whenever html needs to be generated
	from data
 */


// Generate projects (on page filter)
function generateProjects(page = 0){
	let projectsData = currentProjects;

	if (page < 0){
		page = 0;
	}

	let max_pages = Math.ceil(projectsData.length/3);

	if (page >= max_pages){
		page = max_pages - 1;
	}

	setCurrentPagination(page);

	// init areas
	let projectsArea = document.getElementById("portfolio-build-section");
	let proj_templ = document.getElementsByTagName("template")[0];  // portfolio template

	// clear area
	projectsArea.textContent = '';

	// init template pointers
	let proj_label = proj_templ.content.getElementById("project-label");
	let img_preview = proj_templ.content.getElementById("project-image");
	let proj_link = proj_templ.content.getElementById("project-link");
	let proj_decription = proj_templ.content.getElementById("project-description");
	let proj_category = proj_templ.content.getElementById("project-single-wrapper");

	// Shows max 3 per page
	for (let i= (page * 3);i< (page * 3) + 3;i++){
		let d = projectsData[i];
		if (!d){
			break;
		}
		proj_category.setAttribute('class', 'w3-third w3-container w3-margin-bottom all ' + d.Category);
		// proj_category.innerText = d.Category;
		proj_label.innerHTML = '<b>' + d.PrivateName + '</b>';
		img_preview.setAttribute('src', d.Preview);
		proj_link.setAttribute('href', d.Link);
		proj_decription.innerText = d.Description;

		// clone node
		let proj_node = proj_templ.content.cloneNode(true);

		// append
		projectsArea.appendChild(proj_node);
	}
}

// Generate pagination for projects (1,2,3,4,...)
function generatePagination(number = 1) {
	// min 1 page
	let pagination_area = document.getElementById('pagination-area');

	// clear text
	pagination_area.innerText = '';

	// add left and right navigators
	let leftNode = document.createElement('a');
	leftNode.setAttribute(
		'href',
		'javascript:generateProjects(parseInt(localStorage.getItem("pagination")) - 1)'
		);
	leftNode.setAttribute('class', 'w3-bar-item w3-button w3-hover-black');
	leftNode.innerText = '«';
	pagination_area.appendChild(leftNode);

	for (let i=0;i<number;i++){
		let newNode = document.createElement('a');
		newNode.setAttribute(
			'href',
			'javascript:generateProjects(' + i.toString() + ')'
		);
		newNode.setAttribute('class', 'w3-bar-item w3-button w3-hover-black');
		newNode.innerText = (i + 1).toString();
		pagination_area.appendChild(newNode);
	}

	let rightNode = document.createElement('a');
	rightNode.setAttribute(
		'href',
		'javascript:generateProjects(parseInt(localStorage.getItem("pagination")) + 1)'
	);
	rightNode.setAttribute('class', 'w3-bar-item w3-button w3-hover-black');
	rightNode.innerText = '»';
	pagination_area.appendChild(rightNode);

}


// Generate technical skills area according to data
function generateSkills(){
	let data = getSkillsData();

	// init areas
	let skills_templ = document.getElementsByTagName("template")[1];

	// clear area
	let area1 = document.getElementById("skills-section");
	area1.textContent = '';

	// init template pointers
	let name = skills_templ.content.getElementById("skill-desc");
	let details = skills_templ.content.getElementById("skill-details");
	let proficiency = skills_templ.content.getElementById("skill-proficiency");

	for (let i=0;i<data.length;i++){
		for (let j=0;j<data[i].length;j++){
			let d = data[i][j];

			console.log('doing for data:', d);

			name.innerText = d.Name;
			details.innerText = timeSince(d.Time_Start) + d.Projects + " Projects";
			proficiency.setAttribute('class', 'single-skill ' + d.Proficiency);
			proficiency.innerText = d.Proficiency;

			// clone
			let skills_node = skills_templ.content.cloneNode(true);

			if (i===0){
				area1.appendChild(skills_node);
			}else{
				area2.appendChild(skills_node);
			}

		}
	}

	console.log('completed creating of skills');
}
