function getProjectsData() {
	// add accordingly, array of json data
	let projectsData = [
		{
			Description: "Social media prototype",
			Category: "website",
			Link: "http://mixriev.herokuapp.com/",
			Preview: "img/mixriev_preview.JPG",
			PrivateName: "Mixriev"
		},
		{
			Description: "Flight Insurance Ethereum Dapp",
			Category: "software website",
			Link: "https://github.com/clemencegoh/SUTD_Blockchain_50.037/tree/master/dapp",
			Preview: "img/simple_dapp.JPG",
			PrivateName: "Ethereum Blockchain Dapp"
		},
		{
			Description: "Simple file upload webapp in Go",
			Category: "software",
			Link: "https://github.com/clemencegoh/GolangProjects/tree/master/WebApplication-Resume",
			Preview: "img/coding_no_preview.jpg",
			PrivateName: "Simple golang resume webapp"
		},
		{
			Description: "Whack-a-mole game for mojo FPGA",
			Category: 'school software',
			Link: "https://github.com/clemencegoh/MojoLucidWAM",
			Preview: "img/coding_no_preview.jpg",
			PrivateName: "Lucid Mojo Project"
		}
	];
	return projectsData;
}


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
