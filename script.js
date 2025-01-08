// const submitBtn=document.getElementById('#submit');
// const fnError=document.getElementById('fnError');
// submitBtn.addEventListener('click',(e)=>{
//         e.preventDefault();

//         if(validateFName()){
//             alert(" Form submitted successfully");
//         }
// })

// function validateFName(){
//     let name=document.getElementById('fn');
//     if(name.length == 0){
//         fnError.innerHTML="Name is required";
//         return false;
//     }
//     return true;
// }
// function validateLName(){
//     let name=document.getElementById('ln');
//     if(name.length == 0){
//         fnError.innerHTML="Name is required";
//         return false;
//     }
//     return true;
// }

let username=document.getElementById("fn");

function validateForm(){
    if(username.value == ""){
        console.log("username empty")
        // document.getElementById("userError").innerHTML="User Name is empty";
    }
    return false;
}