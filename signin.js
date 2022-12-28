//for the list togling 
let iconsArray = document.querySelectorAll(".icon-list");
let listsArray = document.querySelectorAll(".list-data");
let boxesArray = document.querySelectorAll(".list-box");
let iconRotate = document.querySelectorAll(".fas");
for(let i = 0; i < listsArray.length; i++)
{
   iconsArray[i].addEventListener('click',show);
   function show()
   {
   listsArray[i].classList.toggle("max-height");
   boxesArray[i].classList.toggle("resize");
   iconRotate[i].classList.toggle("rotate");
   }
}

//for the for validation 
//for the users in the system
let systemUsers = ["islam sobhy","afnan raafat"];
let systemPass = [1234,56789];
//for the main inputs 
let signForm = document.getElementById("form-sign-in");
let userNAme = document.getElementById("sign-in-name");
let passWord = document.getElementById("sign-in-pass");
//get the value of the input feilds
//for the error mesg
let userErr = document.getElementById("user-err");
let passErr = document.getElementById("pass-err");
//for the button 
let btnSubmit = document.getElementById("submt-lnk");
//making the check values

btnSubmit.addEventListener('click',(e)=>{
   let det =  CheckValidation();
   if(det === 0)
   {
      e.preventDefault();
   }else
   {
      btnSubmit.click();
   }
});


//for checking the validation :)

function CheckValidation()
{
   //set the variables which holds the feilds data 
   const userData = userNAme.value.trim();
   const userPAss = passWord.value;
   
   //check the validation for the empty
   let empty = IsEmpty(userData,userPAss);
   let hasMatch = existInDb(userData,userPAss);
   let emptyMsg = "this feild can't be empty";
   let wrongPass = "invalid password";
   let wrongUser = "invalid username";
   let inCorrectPass = "the password is wrong";
   if(empty == 0)
   {
      //then both of them has no value then set an error msg
      DispalyError(userNAme,userErr,emptyMsg);
      DispalyError(passWord,passErr,emptyMsg);
      return 0;
   }else if(empty == 1)
   {
      //then the user name only is the empty field
      //here we can't make a success msg for the pass
      //as the user is not valid
      DispalyError(userNAme,userErr,emptyMsg);
      //display the success msg for the the password
      DispalySuccess(passWord,passErr,'');
      return 0;
   }else if(empty == 2)
   {
      //then the user name is not empty but the pass is empty
      DispalyError(passWord,passErr,emptyMsg);
      //display the success msg for the user name 
      DispalySuccess(userNAme,userErr,'')
      return 0;
   }else
   {
      //then the user name and the  password is not empty 
      //move to the next move 
      //checking if the user name and the password match the DB
      if(hasMatch == 2)
      {
         //then both user name and password are not valid
         DispalyError(userNAme,userErr,wrongUser);
         DispalyError(passWord,passErr,'');
         return 0;
      }else if(hasMatch == 1)
      {
         //then the username is valid but the pass word is not
         DispalyError(passWord,passErr,inCorrectPass);
         //display a user name success msg
         DispalySuccess(userNAme,userErr,'');
         return 0;
      }else
      {
         DispalySuccess(userNAme,userErr,'');
         DispalySuccess(passWord,passErr,'');
         return 1;
      }
   }
}

//for checking if the field is empty of not 

function IsEmpty(name,pass)
{
   if(name == '' && pass == '')
   {
      //both are empty 
      return 0;
   }else if(name == '')
   {
      //user name is empty
      return 1;
   }else if(pass == '')
   {
      //pass is empty 
      return 2;
   }else
   {
      //both are not empty 
      return 3
   }
}

//for checking if the user name and the email are the same 
function existInDb(name,pass)
{
   for(let i = 0; i < systemUsers.length; i++)
   {
     if(systemUsers[i] == name)
     {
      if(systemPass[i] == pass)
      {
         //if the username and the pass are valid
         return 0;
      }else
      {
         //if the user name is equal and the pass is not 
         return 1;
      }
     }
   }
   //if bot user name and pass are not valid;
   return 2;
}

//for displaying an error 
function DispalyError(feild,err,msg)
{
   
   feild.style.borderColor = "#e74c3c";
   err.innerHTML = msg;
   err.style.visibility = "visible";
   err.style.color = "#e74c3c";
}

//for displaying a success
function DispalySuccess(feild,succ,msg)
{
  feild.style.borderColor = "#2ecc71";
   succ.innerHTML = msg;
   succ.style.visibility = "visible";
   succ.style.color = "#2ecc71";
}
