let nameField;
let errorField;
let number;
let error2;

let email;
let error3;

let passNode;
let error4;
let confirmPass;
let error5; 
let showPassword;
let formNode;
$(function(){
     nameField =$("#name");
     errorField = $("#err1");
     number = $("#num");
     error2 =$("#err2");
    
     email = $("#email");
     error3 = $("#err3");

     passNode = $("#pass");
     error4 = $("#err4");
     confirmPass= $("#pass1");
     error5 =$("#err5"); 
     showPassword = $("#show");
    formNode=$('#regForm');
     nameField.blur(function(){
         validate();
     });

     number.blur(function(){
        val();
     });
     email.blur(function(){
        valid();
     });
     passNode.blur(function(){
         valid2();
     });

     confirmPass.blur(function(){
         valid3();
     });
});





function validate(){
    errorField.html("");
    nameField.css({border:"2px solid green",backgroundColor:"aqua"});
    let name = nameField.val();
    if(name ==""){
        errorField.html("<b>This field is required</b>");
        nameField.css({border:"2px solid red",backgroundColor:"yellow"});
       
        return false;
    }
    else
        return true;
}

function val(){
    error2.html("");
    number.css({border:"2px solid green",backgroundColor:"aqua"});
    let age = number.val();
    if(age ==""){
        error2.html("<b>This field is required</b>");
        number.css({border:"2px solid red",backgroundColor:"palepink"});
      
        return false;
    }
    else if(age< 0 || age>100){
        error2.html("<b>Age should be in range of 0 to 100</b>");
        number.css({border:"2px solid red",backgroundColor:"palepink"});

        return false;
    }
    else
        return true;
}


function valid(){
    error3.html("");
    email.css({border:"2px solid green",backgroundColor:"yellow"});
    let mail = email.val();
    let ss = mail.substring(mail.indexOf('@')+1);
    console.log(ss);
    if(mail ==""){
        error3.html("<b>This field is required</b>");
        email.css({border:"2px solid red",backgroundColor:"pink"});
        return false;
    }
    else if(!mail.includes("@") || ss===''){
        error3.html("<b>Invalid Email</b>");
        email.css({border:"2px solid red",backgroundColor:"pink"});
       
        return false;
    }
    else
        return true;
}



function valid2()
{
    error4.html("");
    passNode.css({border:"2px solid green",backgroundColor:"yellow"});
    let passw = passNode.val();
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

   
    if(passw ==""){
        error4.html("<b>This field is required</b>");
        passNode.css({border:"2px solid red",backgroundColor:"pink"});
       
        return false;
    }
    else if(regexpress.test(passw)===false){
        error4.html("<b>Password should be Alphanumeric with atleat one special character</b>");
        passNode.css({border:"2px solid red",backgroundColor:"pink"});
        return false;
    }
    else if(passw.length<3 || passw.length>8){
        error4.html("<b>Password should be greater than3 and less than8</b>");
        passNode.css({border:"2px solid red",backgroundColor:"pink"});
        return false;
    }
    else
        return true;
}


    
function valid3(){
    error5.html("");
    confirmPass.css({border:"2px solid green",backgroundColor:"yellow"});
    let confirm = confirmPass.val();
    let p = passNode.val();
    
    if(confirm ==""){
        error5.html("<b>This field is required</b>");
        confirmPass.css({border:"2px solid red",backgroundColor:"pink"});
        return false;
    }
    else if(p != confirm){
        error5.html("<b>Passwords do not match</b>");
        confirmPass.css({border:"2px solid red",backgroundColor:"pink"});
        return false;
    }
    else 
        return true;


}


 function showpass(){
    if(showPassword.checked){
        passNode.type="text";
        confirmPass.type="text"
    }
    else{
        passNode.type="password";
        confirmPass.type="password"
    }
}



function validateForm(){
 let cond1 = validate();
 let cond2 = val();
 let cond3 = valid();
 let cond4 = valid2();
 let cond5 = valid3();

 return(cond1 && cond2 && cond3 && cond4 && cond5);

}