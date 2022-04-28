// Assigning Variabes 
let TGrade9 = [];
let TGrade10 = [];
let TGrade11 = [];
let TGrade12 = [];
let TMale = [];
let TFemale = [];
let TClubs = [];
let TDetails = [];
// Counter indexes the array inorder to make multiple announcements
let counter = 0;

//  Creating A Function to get the Teacher Input from elements from HTML
function Teachersubmit() {
	// The getElementbyID gets the ID from the HTML code and checks here if it is checked or gets the value of the dropdown list
	TGrade9[counter] = document.getElementById("G9HTML").checked;
	TGrade10[counter] = document.getElementById("G10HTML").checked;
	TGrade11[counter] = document.getElementById("G11HTML").checked;
	TGrade12[counter] = document.getElementById("G12HTML").checked;
	TClubs[counter] = document.getElementById("CLUBHTML").value;
	TMale[counter] = document.getElementById("MaleHTML").checked;
	TFemale[counter] = document.getElementById("FemaleHTML").checked;
	TDetails[counter] = document.getElementById("DetailsHTML").value;
	//this is the how the input is stored in local storage using the set item method
	localStorage.setItem("TGrade9Key", JSON.stringify(TGrade9));
	localStorage.setItem("TGrade10Key", JSON.stringify(TGrade10));
	localStorage.setItem("TGrade11Key", JSON.stringify(TGrade11));
	localStorage.setItem("TGrade12Key", JSON.stringify(TGrade12));
	localStorage.setItem("TMaleKey", JSON.stringify(TMale));
	localStorage.setItem("TFemaleKey", JSON.stringify(TFemale));
	localStorage.setItem("TClubsKey", JSON.stringify(TClubs));
	localStorage.setItem("TDetailsKey", JSON.stringify(TDetails));
     //incrementing counter to move onto the next announcement created
	counter++

	console.log(TClubs)

	alert('Announcement was posted!')
}

//creating a function to get the local storage already saved from before.
function getExistingAnnouncements() {
	//checks for no null scenarios to reduce null related problems.
	if (JSON.parse(localStorage.getItem("TGrade9Key")) != null) {
		// The .getItem get the values from each of the keys and uses the function to store the annnouncements
		TGrade9 = JSON.parse(localStorage.getItem("TGrade9Key"));
		TGrade10 = JSON.parse(localStorage.getItem("TGrade10Key"));
		TGrade11 = JSON.parse(localStorage.getItem("TGrade11Key"));
		TGrade12 = JSON.parse(localStorage.getItem("TGrade12Key"));
		TMale = JSON.parse(localStorage.getItem("TMaleKey"));
		TFemale = JSON.parse(localStorage.getItem("TFemaleKey"));
		TClubs = JSON.parse(localStorage.getItem("TClubsKey"));
		TDetails = JSON.parse(localStorage.getItem("TDetailsKey"));
		counter = TGrade9.length;
	}

}