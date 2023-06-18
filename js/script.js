const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    //Toggle Nav
    burger.addEventListener('click', ()=>{
      nav.classList.toggle('nav-active');
      
      //Animate Links
      navLinks.forEach((link, index)=>{
        if(link.style.animation){
          link.style.animation = ''
        }else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
  
        }
      });
      //burger animation
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();

  time="21 june 2023 14:00:00";
const countDate = new Date(time).getTime();
var x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDate - now;

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("days").innerHTML= d + "d";
    document.getElementById("hours").innerHTML= hrs + "h";
    document.getElementById("minutes").innerHTML= min + "m";
    document.getElementById("seconds").innerHTML= sec + "s";

    if(distance<0){
        x= setInterval(0);
        document.getElementById("days").innerHTML= "00d";
        document.getElementById("hours").innerHTML= "00h";
        document.getElementById("minutes").innerHTML= "00m";
        document.getElementById("seconds").innerHTML= "00s";
    
    }
})