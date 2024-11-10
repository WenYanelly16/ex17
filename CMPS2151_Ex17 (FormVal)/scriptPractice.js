/*
Script Files for ALL EXERCISES
comment out exercises as they are completed, label them accordingly
*/

//*******************************Exercise 3.1 - index1.html***************************

function ProcessData (fname, email, gend, live, stat) {
    alert("The form was submitted");

    let name = document.getElementById(fname).value;
    alert("Full name is: " + name);

    let firstName = name.slice(0, name.indexOf(" "));
    let lastName = name.slice(name.indexOf(" ") + 1);
    alert("Last Name is: " + lastName);

    let genderRadio = document.getElementsByName(gend);
    let genderchosen = ""; // Declare the variable for selected gender

    for(let i = 0; i < genderRadio.length; i++){
        if(genderRadio[i].checked){
            genderchosen = genderRadio[i].value;
        }
    }
    alert("Gender Selected is: " + genderchosen);

    if(stat === "None"){
        alert("Please select a valid status.");
    }
}

//*******************************Exercise 3.2 - index2.html***************************