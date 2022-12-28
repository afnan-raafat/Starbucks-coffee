//for collecting all the feilds of the website 
let allFeilds = document.querySelectorAll(".field");
let allErrs = document.querySelectorAll(".error-msg");
let btn = document.getElementById("join-now-btn");
let form = document.getElementById("form-join-now");
//get the paragraph that will be hidden 
//some msg for the errors 
let emptyMsg = "this feild can't be empty";
btn.addEventListener('click',(e)=>{
    let det =  CheckValidation();
    if(det === 0)
    {
       e.preventDefault();
    }else
    {
        btn.click();
    }
 });
 function CheckValidation()
 {
    let empty = IsEmpty();
    if(empty)
    {
        DisplayForEach();
        return 1;
    }else
    {
        return 0;
    }
 }

//function to check if the value of the feild is empty or not 
 function IsEmpty()
 {
    let catchEmpty = true;
    for(let i = 0; i < allFeilds.length; i++)
    {
      if(allFeilds[i].value == '')
      {
        catchEmpty = false;
        DispalyError(allFeilds[i],allErrs[i],emptyMsg);
      }else
      {
        DispalySuccess(allFeilds[i],allErrs[i],'');
      }
    }
    //if there is no empty it will be true otherwis it will be false
    return catchEmpty;
 }
 //function to display something to all feilds 
 function DisplayForEach()
 {
    for(let i = 0; i < allFeilds.length; i++)
    {
       
        DispalySuccess(allFeilds[i],allErrs[i],'');
    }
 }

 //function to Display the error msg 

function DispalyError(feild,err,msg)
{
   
   feild.style.borderColor = "#e74c3c";
   err.innerHTML = msg;
   err.style.visibility = "visible";
   err.style.color = "#e74c3c";
}

//function to display the success msg
function DispalySuccess(feild,succ,msg)
{
  feild.style.borderColor = "#2ecc71";
   succ.innerHTML = msg;
   succ.style.visibility = "visible";
   succ.style.color = "#2ecc71";
}