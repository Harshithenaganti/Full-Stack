function mylogin(){
    var val1 = document.getElementById("username").value;
    var val2 = document.getElementById("password").value;
    if(/^[2][2][1][7][1][0][3-4][0][0-5][0-9][0-9][0-9]$/.test(val1)){
        if(val2 == "gitam123"){
            window.alert("LOGIN SUCESSFULL");
            window.open("home.html","+self")
        }
        else{
            window.alert("Enter correct credentials")
        }
    }
    else{
        window.alert("enter correct credentials")
    }
}
function myfeed(){
    var val2 = document.getElementById("femail").value;
    var val1 = document.getElementById("phonenumber").value;
    if(/^[a-zA-Z0-9._!#$%^&*()]{2,20}[@][a-z]{2,10}[.][a-z]{2,6}$/.test(val2)){
        if(/^[+][9][1][ ][6-9][0-9]{9}$/.test(val1)){
            window.alert("YOUR FEEDBACK IS SUBMITTED SUCCESSFULLY");
        }
        else{
            window.alert("ENTER VALID DETAILS");
        }
    }
    else{
        window.alert("ENTER VALID DETAILS");
    }
}
function myreg(){
    var val1 = document.getElementById("remail").value;
    var val2 = document.getElementById("rphonenumber").value;
    var val3 = document.getElementById("rpinnum").value;
    if(/^[a-zA-Z0-9._!#$%^&*()]{2,20}[@][a-z]{2,10}[.][a-z]{2,6}$/.test(val1) && /^[+][9][1][ ][6-9][0-9]{9}$/.test(val2) && /^[2][2][1][7][1][0][3-4][0][0-5][0-9][0-9][0-9]$/.test(val3)){
        window.alert("YOU HAVE REGISTERED SUCCESSFULLY");
    }
    else{
        window.alert("PLEASE ENTER THE CORRECT DETAILS IN THE REGISTRATION FORM");
    }
}
function myCancel(){
    location.reload();
}