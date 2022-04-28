//When a student looks for an announcement, this function will execute.
function ButtonSubmit() {
    //Selects all options to false
    let All = [false];
    let G9 = [false];
    let G10 = [false];
    let G11 = [false];
    let G12 = [false];

    let GMale = [false];
    let GFemale = [false];

    //using.checked and changing the index to true with an if statement to isolate the specified grade(s).

    if (document.getElementById("G9HTML").checked) {
        G9[0] = true;
    }
    if (document.getElementById("G10HTML").checked) {
        G10[0] = true;
    }
    if (document.getElementById("G11HTML").checked) {
        G11[0] = true;
    }
    if (document.getElementById("G12HTML").checked) {
        G12[0] = true;
    }

    if ((!(G9[0]) && !(G10[0]) && !(G11[0]) && !(G12[0])) ||
        ((G9[0]) && (G10[0]) && (G11[0]) && (G12[0]))) {
        All[0] = true;
    }

    //Using cocument, isolated the specified club using getelementbyid and .value
    let Club = [];
    Club[0] = document.getElementById("CLUBSHTML").value;

    //Changing the seleced gender to true

    if (document.getElementById("MaleHTML").checked) {
        GMale = [true];
    }
    if (document.getElementById("FemaleHTML").checked) {
        GFemale = [true];
    }

    //JSON.stringify is used to deliver data to local storage as a string
    localStorage.setItem("AllKey", JSON.stringify(All));
    localStorage.setItem("G9Key", JSON.stringify(G9));
    localStorage.setItem("G10Key", JSON.stringify(G10));
    localStorage.setItem("G11Key", JSON.stringify(G11));
    localStorage.setItem("G12Key", JSON.stringify(G12));
    localStorage.setItem("GMaleKey", JSON.stringify(GMale));
    localStorage.setItem("GFemaleKey", JSON.stringify(GFemale));
    localStorage.setItem("ClubKey", JSON.stringify(Club));

}



