
function mobInputs(){
let regexp=/^[6-9]\d{9}$/;
let mobile=document.getElementById("MobileNum").value;
console.log(mobile);
if(mobile==""){
document.getElementById("invalid").innerHTML="invalid";
document.getElementById("invalid").style.color="red";
document.getElementById("invalid").style.visibility="visible";
}
else if(regexp.test(mobile)){
let m=document.getElementById("invalid").value;

console.log(m);
document.getElementById("invalid").innerHTML="valid";
document.getElementById("invalid").style.color="green";
document.getElementById("invalid").style.visibility="visible";
}
else{
document.getElementById("invalid").innerHTML="invalid";
document.getElementById("invalid").style.color="red";
document.getElementById("invalid").style.visibility="visible";
}
}

function emailInputs(){
let r=/^([a-zA-Z0-9]+)@([a-z A-z]+)\.([a-z A-Z]{2,5})$/
let e=document.getElementById("email").value;
if(e==" "){
document.getElementById("emailid").innerHTML="invalid";
document.getElementById("emailid").style.color="red";
document.getElementById("emailid").style.visibility="visible";
}
else if(r.test(e)){
document.getElementById("emailid").innerHTML="valid";
document.getElementById("emailid").style.color="green";
document.getElementById("emailid").style.visibility="visible";
}
else{
document.getElementById("emailid").innerHTML="invalid";
document.getElementById("emailid").style.color="red";
document.getElementById("emailid").style.visibility="visible";
}
}


function passInputs(){
let pass=document.getElementById("password").value;
let regExp=/^[A-Z](?=.*[!\@\#\$\%\^\&])(?=.*[a-z])(?=.*[0-9]).{8,}$/
if(pass==""){
document.getElementById("crtpass").innerHTML="Password consist should be 8 charater<br>First letter Should be Capital<br>atleast one lower case character<br>atleast one special character<br>atleast one Numeric value";
document.getElementById("crtpass").style.color="red";
document.getElementById("crtpass").style.visibility="visible";
}
else if(regExp.test(pass)){

document.getElementById("crtpass").innerHTML="valid";
document.getElementById("crtpass").style.color="green";
document.getElementById("crtpass").style.visibility="visible";

}
else{
console.log(pass);
console.log(regExp.test(pass));
document.getElementById("crtpass").innerHTML="Password consist should be 8 charater<br>First letter Should be Capital<br>atleast one lower case character<br>atleast one special character<br>atleast one Numeric value";
document.getElementById("crtpass").style.color="red";
document.getElementById("crtpass").style.visibility="visible";
}
}

function cnfInputs(){
let pass=document.getElementById("password").value;
let cnf=document.getElementById("confpassword").value;
if(cnf==" "){
document.getElementById("cnfpass").innerHTML="invalid";
document.getElementById("cnfpass").style.color="red";
document.getElementById("cnfpass").style.visibility="visible";
}
else if(pass==cnf)
{
document.getElementById("cnfpass").innerHTML="valid";
document.getElementById("cnfpass").style.color="green";
document.getElementById("cnfpass").style.visibility="visible";
}
else{

document.getElementById("cnfpass").innerHTML="invalid";
document.getElementById("cnfpass").style.color="red";
document.getElementById("cnfpass").style.visibility="visible";
}
}

function validate()
{

let valid;



let cnf=document.getElementById("confpassword").value;



let nam=document.getElementById("Name").value;

let dob=document.getElementById("dob").value;

let country=document.getElementById("country").value;
let frontEnd=document.getElementById("frontend devloper").checked
let java=document.getElementById("java devloper").checked
let execute=document.getElementById("Executive Accountant").checked
let regexp=/^[6-9]\d{9}$/;

let mobile=document.getElementById("MobileNum").value;
let radioCheck=document.getElementById('male').checked;
let radio=document.getElementById('female').checked;
let r=/^([a-zA-Z0-9]+)@([a-z A-z]+)\.([a-z A-Z]{2,5})$/
let e=document.getElementById("email").value;

let pass=document.getElementById("password").value;
let regExp=/^[A-Z](?=.*[!\@\#\$\%\^\&])(?=.*[a-z])(?=.*[0-9]).{8,}$/






console.log(mobile);
if(mobile==""){
document.getElementById("invalid").innerHTML="invalid";
document.getElementById("invalid").style.color="red";
document.getElementById("invalid").style.visibility="visible";
 valid=false
}
else if(regexp.test(mobile)){
let m=document.getElementById("invalid").value;

console.log(m);
document.getElementById("invalid").innerHTML="valid";
document.getElementById("invalid").style.color="green";
document.getElementById("invalid").style.visibility="visible";
valid=true;
}
else{
document.getElementById("invalid").innerHTML="invalid";
document.getElementById("invalid").style.color="red";
document.getElementById("invalid").style.visibility="visible";
valid=false;
}


if(e==" "){
document.getElementById("emailid").innerHTML="invalid";
document.getElementById("emailid").style.color="red";
document.getElementById("emailid").style.visibility="visible";
valid=false;
}
else if(r.test(e)){
document.getElementById("emailid").innerHTML="valid";
document.getElementById("emailid").style.color="green";
document.getElementById("emailid").style.visibility="visible";
valid=true;

}
else{
document.getElementById("emailid").innerHTML="invalid";
document.getElementById("emailid").style.color="red";
document.getElementById("emailid").style.visibility="visible";
valid=false;
}

if(pass==""){
document.getElementById("crtpass").innerHTML="Password consist should be 8 charater<br>First letter Should be Capital<br>atleast one lower case character<br>atleast one special character<br>atleast one Numeric value";
document.getElementById("crtpass").style.color="red";
document.getElementById("crtpass").style.visibility="visible";
}
else if(regExp.test(pass)){

document.getElementById("crtpass").innerHTML="valid";
document.getElementById("crtpass").style.color="green";
document.getElementById("crtpass").style.visibility="visible";

}
else
{
console.log(pass);
console.log(regExp.test(pass));
document.getElementById("crtpass").innerHTML="Password consist should be 8 charater<br>First letter Should be Capital<br>atleast one lower case character<br>atleast one special character<br>atleast one Numeric value";
document.getElementById("crtpass").style.color="red";
document.getElementById("crtpass").style.visibility="visible";
}


if(cnf==" "){
document.getElementById("cnfpass").innerHTML="invalid";
document.getElementById("cnfpass").style.color="red";
document.getElementById("cnfpass").style.visibility="visible";
}
else if(pass==cnf)
{
document.getElementById("cnfpass").innerHTML="valid";
document.getElementById("cnfpass").style.color="green";
document.getElementById("cnfpass").style.visibility="visible";
}
else{

document.getElementById("cnfpass").innerHTML="invalid";
document.getElementById("cnfpass").style.color="red";
document.getElementById("cnfpass").style.visibility="visible";
}


if(nam==""||mobile==""||country=="select"||pass==""||cnf==""||dob==""){
alert("mandatry fields are required to fill");

    	valid=false;

}

else if(radioCheck==false&&radio==false){

alert("mandatry fields are required to fill");
 valid=false
    

}
else if(frontEnd==false&&java==false&&execute==false){
alert("mandatry fields are required to fill");

    	valid=false

}

else if((regexp.test(mobile))&&(regExp.test(pass))&&cnf==pass){
alert("Sucessfully Register");

window.location.href="welcome.html";
valid=true;

}








    let Name,MobileNum,email,DOB,gender,Designation,Country,password,confpassword,add;
    Name=document.getElementById("Name").value;
    MobileNum=document.getElementById("MobileNum").value;
    email=document.getElementById("email").value;
    DOB=document.getElementById("dob").value;
    gender=document.f1.gender.value;
    let d=document.getElementsByClassName('Designation');
    let str="";
    for(let i=0;i<=2;i++)
    {
    if(d[i].checked==true)
    {
     str+=d[i].value+" ";
    }
    }
    Designation=str;

    Country=document.getElementById("country").value;
    password=document.getElementById("password").value;
    confpassword=document.getElementById("confpassword").value;
    add=document.getElementById("add").value;
    
    let regRecords=new Array();
    regRecords=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(regRecords.some((v)=>{return v.email==email})){
        alert("you are Already Registered");
        window.location.href="welcome.html";
    }
    else{
        regRecords.push({

            "Name":Name,
            "MobileNum":MobileNum,
            "email":email,
            "dob":DOB,
            "gender":gender,
            "Degree":Designation,
            "country":Country,
            "password":password,
            "confpassword":confpassword,
            "add":add,
            
    
        })
         localStorage.setItem("users",JSON.stringify(regRecords));
    }
    
     return valid;

}
