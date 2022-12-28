

//for the icon toggling 
let icon = document.getElementById("btn-icon");

//for the invisable menue
let invisable = document.getElementById("mobile-menue");
//  to prevent multible clicked 

function iconToggel()
{
   icon.classList.toggle('closed-style');
   invisable.classList.toggle("invisable");
   document.body.classList.toggle("catch-overflow");
}
icon.addEventListener('click',iconToggel);

//for the up btn
let up = document.getElementById("top");
// for the counter of the time passed 
let counter = document.getElementById("btn-counter");
window.onscroll = function()
{
   if(window.scrollY >= 100)
   {
      up.classList.add("return");
      counter.classList.remove("hide");
      up.onmouseover = function()
      {
         up.classList.add("opacity-went");
      }
      up.onmouseleave = function()
      {
         up.onmous
         up.classList.remove("opacity-went");
      }
   }else
   {
      up.classList.remove("return");
      counter.classList.add("hide");
   }
}
//to go to the top of the website 
up.onclick = function()
{
   window.scrollTo({
      top:0,
      behavior: "smooth",
   });
};
counter.onclick = function()
{
   this.classList.toggle("blure");
}
//for the time formation itself
let ss = document.getElementById("seconds");
let mm = document.getElementById("minutes");
let hh = document.getElementById("hours");


function addTime()
{
   if(mm.innerHTML == 59)
   {
      hh.innerHTML++;
      if(hh.innerHTML <= 9)
      {
           hh.textContent = "0" + hh.innerHTML;
      }
      mm.innerHTML = "00";
   }
   if(ss.innerHTML == 59)
   {
      mm.innerHTML++;
      if(mm.innerHTML <= 9)
      {
           mm.textContent = "0" + mm.innerHTML;
      }
      ss.innerHTML = "00";
   }
ss.innerHTML++;
if(ss.innerHTML <= 9)
{
   ss.textContent = "0" + ss.innerHTML;
}

}
setInterval(addTime,1000);


//making the div for fun 

let funDiv = document.getElementById("fun");

function MoveTheDiv()
{
   funDiv.style.animationName = "moveToleft";
}
setTimeout(MoveTheDiv,500*1000);

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

