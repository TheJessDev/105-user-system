console.log("register");

//create the constructor for a user
function User(e,pw,f,l,a,g,ph,py,c){
    this.email = e;
    this.password = pw;
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    this.gender = g;
    this.phoneNum = ph;
    this.payment = py;
    this.color = c;
}
//display the user on console
//console.log(User);

function validation(user){  //**IF I NEED MULTIPLE VALIDATIONS, CAN I VALIDATE MULTIPLE INPUTS IN A SINGLE CODE, MAYBE USING OR?? */ 

// WHY DO THE ALERTS NOT CLEAR AFTER BEING CORRECTED WITH A VALID INPUT OR STORED IN LS??

    let valid= true;

    if(user.email==""){
        //if I get here it means that the email is empty
        valid=false;
        $("#txtEmail").addClass("alert-error");
    }
    if(user.password==""){
        valid=false;
        $("#txtPassword").addClass("alert-error");
    }
    if(user.firstName==""){
        valid=false;
        $("#txtFirst").addClass("alert-error");
    }
    if(user.lastName==""){
        valid=false;
        $("#txtLast").addClass("alert-error");
    }

    // if(user.payment==null){  ***----DOES NOT CLEAR----***
    //     valid=false;
    //     $("#selPayment").addClass("alert-error");
    // }
    return valid;   
}


function register(){
    //get values from the form
    let inputEmail=$("#txtEmail").val();
    let inputPassword=$("#txtPassword").val();
    let inputFirst=$("#txtFirst").val();
    let inputLast=$("#txtLast").val();
    let inputAge=$("#txtAge").val();
    let inputGender=$("#txtGender").val();
    let inputPhone=$("#txtPhone").val();
    let inputPayment=$("#txtPayment").val();
    let inputColor=$("#txtColor").val();

    //create user using the constructor
    let newUser = new User(inputEmail,inputPassword,inputFirst,inputLast,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    //console.log(newUser); 

    if(validation(newUser)){
        saveUser(newUser); //function is saved under local storage-storeManager 
    }

    //clear the form
    $("input").val("");
}

function init(){
    $("#btnAdd").click(register);
}

window.onload=init;


