function whichday(){
//splits date into array then chooses the 2 string in the array
let day = new Date().toLocaleDateString().split("/")[1];
if (day%2 == 0){
    document.getElementById("day").innerHTML = 'Today is Day 2';
} else{
    document.getElementById("day").innerHTML = 'Today is Day 1';
}

}

whichday();