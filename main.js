// Function expression to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burguer-menu-icon").addEventListener("click", ()=>{
  selectElement(".nav-list").classList.toggle("active");
  selectElement(".burguer-menu-icon").classList.toggle("toggle")

  navLinks.forEach((link,index) => {
    if (link.style.animation){
      link.style.animation = ""
    }else{
      link.style.animation = `navLinkAnimated 0.5s ease forwards ${ index/7 + 0.5}s`
    }
  })
});