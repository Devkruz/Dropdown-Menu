
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener('click', () => {
      
      menu.classList.toggle("menu-toggle");
      hamburger.classList.toggle("hamburger-toggle")
      if(hamburger.classList.contains("fa-bars")) {
          hamburger.classList.replace("fa-bars", "fa-stream");
      }
      else {
            hamburger.classList.replace("fa-stream" ,"fa-bars")
      }
      
})
