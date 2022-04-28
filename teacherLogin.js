function login(){
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    console.log("username: " + username)
    console.log("password: " + password)

    //Conditional's, if the user prompts the following, it will redirect to the Teacher Creator Page
    if((username === "Srinivas") && (password === "Vankadari")){
        location.href = "Teacher Announcement.html"; 
    }else{
        document.getElementById("Incorrect").innerHTML = "Incorrect Please Try Again!";
    }
}