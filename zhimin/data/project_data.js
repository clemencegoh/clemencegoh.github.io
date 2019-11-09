
// For Zhimin's projects and earrings
function getProjectsData() {
	// add accordingly, array of json data
	let projectsData = [
		{
			Description: "First of the Emilia series from HappyBloooms",
			Category: "happybloooms",
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",  // todo: change this to correct
			Preview: "files/zhimin_happybloooms_emilia1.jpg",
			PrivateName: "Emilia Series @HappyBloooms"
		},
		{
			Description: "Second of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "Snacks x Rose Bouquet!",
			Category: 'theloftybouquets',
			Link: "https://www.instagram.com/p/B4mRKxGlg0I/",
			Preview: "files/zhimin_greedy_bouquet.jpg",
			PrivateName: "Greedy Bouquet Series"
		},
		{
			Description: "4th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "5th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "6th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "7th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "8th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "9th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "Second of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "Third of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "4th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "5th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "6th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "7th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "8th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "Second of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "Third of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "4th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
		{
			Description: "5th of the Emilia series from HappyBloooms",
			Category: 'happybloooms',
			Link: "https://www.instagram.com/p/B4hEPKegbx5/",
			Preview: "files/zhimin_happybloooms_emilia2.jpg",
			PrivateName: "Emilia Series @HappyBlooms"
		},
	];
	return projectsData;
}