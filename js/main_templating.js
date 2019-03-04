function generateProjects(){
    let projectsData = getProjectsData();

    // init areas
    let projectsArea = document.getElementById("projects_content");
    let proj_templ = document.getElementsByTagName("template")[0];

    // clear area
    projectsArea.textContent = '';

    // init template pointers
    let proj_fields = proj_templ.content.getElementById("filter_fields");
    let img_preview = proj_templ.content.getElementById("proj_preview_img");
    let proj_link = proj_templ.content.getElementById("proj_link");
    let proj_decription = proj_templ.content.getElementById("proj_description");
    let proj_category = proj_templ.content.getElementById("proj_category");


    for (let i=0;i<projectsData.length;i++){
        let d = projectsData[i];
        proj_fields.setAttribute('class', 'single-portfolio col-sm-4 all ' + d.Category);
        proj_category.innerText = d.Category;    
        img_preview.setAttribute('src', d.Preview);
        proj_link.setAttribute('href', d.Link);
        proj_decription.innerText = d.Description;  

        // clone node
        let proj_node = proj_templ.content.cloneNode(true);

        // append
        projectsArea.appendChild(proj_node);
    }

    console.log('completed creating of projects');
}

function timeSince(date) {
	let d = new Date();
	let year = d.getFullYear() - date.getFullYear();
	let month_now = d.getMonth();
	let month_then = date.getMonth();
	let month = '';
	if (month_now < month_then){
		month = month_now + 12 - month_then;
		year -= 1;
	}else{
		month = month_now - month_then;
	}
	return year + " years " + month + " months, ";
}

function generateSkills(){
	let data = getSkillsData();

	// init areas
	let skills_templ = document.getElementsByTagName("template")[1];

	// clear area
	let area1 = document.getElementById("skills-area1");
	let area2 = document.getElementById("skills-area2");
	area1.textContent = '';
	area2.textContent = '';

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
