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


function validation(user){ 
    let valid= true;
    // DOES NOT CLEAR ERROR ALLERTS AFTER BUTTON CLICK ****
    $("#txtEmail").removeClass("alert-error"); 
    $("#txtPassword").removeClass("alert-error");
    $("#txtFirst").removeClass("alert-error");
    $("#txtLast").removeClass("alert-error");
    $("#selColor").removeClass("alert-error");
    $("#selPayment").removeClass("alert-error");
    

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
     if(user.color =="#000000"){
        $("#selColor").addClass("alert-error");
     }
     if(user.payment==""){
        $("#selPayment").addClass("alert-error");
     }



    // if(user.payment==null){  ***----DOES NOT CLEAR----***
    //     valid=false;
    //     $("#selPayment").addClass("alert-error");
    // }
    return valid;   

     //**IF I NEED MULTIPLE VALIDATIONS, CAN I VALIDATE MULTIPLE INPUTS IN A SINGLE CODE, MAYBE USING OR?? */ 
}

function validatePass(){
    let inputPassword=$("#txtPassword"); // this is the HTML element
    let password = inputPassword.val();  //this is the password string
    if(password.length<6){
        inputPassword.css("background-color", "red");  //jquery changed the css
    }else{
        inputPassword.css("background-color", "green");  //jquery changed the css
    }
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
    let inputPayment=$("#selPayment").val();
    let inputColor=$("#selColor").val();

    //create user using the constructor
    let newUser = new User(inputEmail,inputPassword,inputFirst,inputLast,inputAge,inputGender,inputPhone,inputPayment,inputColor);
    //console.log(newUser); 

    if(validation(newUser)){
        saveUser(newUser); //function is saved under local storage-storeManager 
    }

    //clear the form
    $("input").val("");
    $("select").val("");
   
}

function init(){
    $("#btnAdd").click(register);
    $("#txtPassword").keyup(validatePass);
    
}
window.onload=init;