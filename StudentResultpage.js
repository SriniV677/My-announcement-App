// let and square brackets were used to create arrays of variables.
var SAnnouncements = "";
let SGender = [];
let SGrade = [];

let SGrade9 = [];
let SGrade10 = [];
let SGrade11 = [];
let SGrade12 = [];
let S_ALL = [];

let SClubs = [];

let SGenderMale = [];
let SGenderFemale = [];

let SDetails = [];


let STG9 = [];
let STG10 = [];
let STG11 = [];
let STG12 = [];
let ST_ALL = [];

let ST_Club = [];
let ST_GenderMale = [];
let ST_GenderFemale = [];

//Creating a function that will print the results
function Results() {
    //using the localstorage.getitem function to access the keys that were saved in the local storage.
    // To convert the objects from local storage into an array, I used JSON.parse.
    //This was done for all of the previously produced letiables as well as things in the local storage.

    //teacher variables
    SDetails = JSON.parse(localStorage.getItem("TDetailsKey"))

    SGrade9 = JSON.parse(localStorage.getItem("TGrade9Key"));
    SGrade10 = JSON.parse(localStorage.getItem("TGrade10Key"));
    SGrade11 = JSON.parse(localStorage.getItem("TGrade11Key"));
    SGrade12 = JSON.parse(localStorage.getItem("TGrade12Key"));

    SClubs = JSON.parse(localStorage.getItem("TClubsKey"));

    SGenderMale = JSON.parse(localStorage.getItem("TMaleKey"));
    SGenderFemale = JSON.parse(localStorage.getItem("TFemaleKey"));

    SDetails = JSON.parse(localStorage.getItem("TDetailsKey"));

    //student variables
    STG9 = JSON.parse(localStorage.getItem("G9Key"));
    STG10 = JSON.parse(localStorage.getItem("G10Key"));
    STG11 = JSON.parse(localStorage.getItem("G11Key"));
    STG12 = JSON.parse(localStorage.getItem("G12Key"));

    ST_Club = JSON.parse(localStorage.getItem("ClubKey"));

    ST_GenderMale = JSON.parse(localStorage.getItem("GMaleKey"));
    ST_GenderFemale = JSON.parse(localStorage.getItem("GFemaleKey"));


    //Using a for loop that has an argument
    //The argument specifies that the loop should continue until the SGenderMale array has the specified number of elements.
    //created a variable called i and incremented so that it would go through the entire length of the array
    for (let i = 0; i < SGenderMale.length; i++) {
        //Using conditionals to chcek for announcements that matched with the user output from the studentsearchpage
        //used the variable i to check the first index of the variables, all the way to the last index
        if ((((STG9[0] == SGrade9[i] && STG9[0] == true)) ||
            (STG10[0] == SGrade10[i] && STG10[0] == true) ||
            (STG11[0] == SGrade11[i] && STG11[0] == true) ||
            (STG12[0] == SGrade12[i] && STG12[0] == true) ||
            (ST_ALL[0] == S_ALL[i] && ST_ALL[0] == true)) &&
            ((ST_GenderMale[0] == SGenderMale[i] && ST_GenderMale[0] == true) ||
                (ST_GenderFemale[0] == SGenderFemale[i] && ST_GenderFemale[0] == true)) &&
            ((ST_Club[0] == SClubs[i]) || SClubs[i] == "All Clubs" || (ST_Club[0] == "All Clubs"))) {
                if(SGrade9[i]){
                    SGrade.push(" Grade 9 ")
                }
                if(SGrade10[i]){
                    SGrade.push(" Grade 10 ")
                }
                if(SGrade11[i]){
                    SGrade.push(" Grade 11 ")
                }
                if(SGrade12[i]){
                    SGrade.push(" Grade 12 ")
                }
                if(SGenderMale[i]){
                    SGender.push(" Male ")
                }
                if(SGenderFemale[i]){
                    SGender.push(" Female ")
                }

                SAnnouncements += SGrade;
                SAnnouncements += "<br>"
                SAnnouncements += SClubs[i];
                SAnnouncements += "<br>"
                SAnnouncements += SGender;
                SAnnouncements += "<br>"
                SAnnouncements += SDetails[i];
                SAnnouncements += "<br>"
                SAnnouncements += "<br>"
                SAnnouncements += "<br>"

                SGrade = [];
                SGender = [];

        } else {
            console.log(i + ": result not found");
        }

    }
    document.getElementById("SResults").innerHTML = SAnnouncements
}


