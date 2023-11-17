
function myFunc() {
    window.location = "login.html";
}


function myFunc1() {
    window.location = "signup.html";
}

function show1(){
  document.getElementById("show").style.display = "none";
  document.getElementById("wrap").style.height = 400+'px';
  document.getElementById("slot").style.display = "block";
  document.getElementById("book").style.display = "block";
}


const faqs=document.querySelectorAll(".faq");
faqs.forEach(faq =>{
  faq.addEventListener("click",() =>{
     // faq.classList.toggle("open");
    //change icoin
    const icon =faq.querySelector(".faq-icon i");
    if(icon.className==="fa-solid fa-chevron-up"){
      icon.className="fa-solid fa-chevron-down";

       var id=faq.getAttribute('id');
       console.log(id);
          document.getElementsByClassName("ans")[id-1].style.display="block";
    }
    else{
      icon.className="fa-solid fa-chevron-up";
      var id=faq.getAttribute('id');
      console.log(id);
         document.getElementsByClassName("ans")[id-1].style.display="none";

    }
  })
})
