let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");

document.querySelector("button")
form.addEventListener("submit",(event)=>{
    // event.preventDefault();
    validateInput();

// subiting data into onother page
    if (submiting()==true){
        form.submit();
    }
    else{
        event.preventDefault();
    }
});

// submiting crosscheck validation on evry input
 function submiting(){
     const inputcontainer = form.querySelectorAll('.form-control');
     let result = true;
     inputcontainer.forEach((container)=>{
         if (container.classList.contains('error')){
             result = false
         }
         
     });
     return result;
    
 }


function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
    // email
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }
    //password
    if(pwd.value.trim()===""){
        onError(pwd,"Please enter password");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"Confirm password");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password not matching");
         }
         else
         onSuccess(conPwd);
     }
}


function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

 



