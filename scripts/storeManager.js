//console.log("store manager");

//saving to localStorage
function saveUser(user){
    let oldUsers = readUsers();
    //console.log(user); //this is an object
    oldUsers.push(user);
    let save= JSON.stringify(oldUsers);
    console.log(save); //this is a string
    localStorage.setItem("users", save); // this fn SENDS elements TO localStorage
}

function readUsers(){
    let users = localStorage.getItem("users"); // this fn GETS elements FROM localStorage
    console.log(users); //this is a string
    if(!users){ // NOT users? then...
        // localStorage is empty
        return []; // creating the array (empty)
    }else{
        // if you get here, localStorage has users
        let listUsers = JSON.parse(users) //parse back into an array
        console.log(listUsers); //this is an array
        return listUsers;
    }
}


// ***QUESTION...

// HOW AND/OR WHY USE THIS METHOD (JSON) VS THE METHOD USED IN PET SALON?? WHY/WHEN TO USE?? DOES LOCAL STORAGE APPLY TO PET SALON/ ALL INPUT INFO NEEDING TO BE STORED??

//(PET SALON--OBJECTS WERE CREATED AND PUSHED/STORED IN ARRAY...INDIVIDUAL OBJECTS-PETS-WERE ADDED TO ARRAY; VS USERS BEING CREATED INDIVIDUALLY BUT PUSHED TO ARRAY AS A GROUP)