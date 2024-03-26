//// Variables
root = document.documentElement; // document root
boy = document.querySelector(".boy"); // picture of boy
main = document.querySelectorAll(".link")[0]; //home btn
gallery = document.querySelectorAll(".link")[1]; //gallery btn
info = document.querySelectorAll(".link")[2]; // info btn


// #$Changing the color of the text
function cct() {
  //FUnction to change color of text on the landing page🎓🌈
  // "getting random color and then setting it to text value adding 150 means we get only bright colors"
  setInterval(() => {
    color = `rgb(${Math.random() * 106 + 150},${Math.random() * 106 + 150},${Math.random() * 106 + 150
      })`;
    root.style.setProperty("--tcolor", color);
  }, 1300);
}



// Updating the navbar 
function chngnav() {
  // ???FUcntion to change the color and state to navabar according to the page which is active 🦕
  actvpage = pgonscrn();
  nmopg = actvpage.classList[0];
  bgclr = window.getComputedStyle(actvpage).backgroundColor;
  gallery.classList.remove("active-btn");
  main.classList.remove("active-btn");
  info.classList.remove("active-btn");
  switch (nmopg) {
    case "main":
      // console.log("Main page is active");
      root.style.setProperty("--btn-color", bgclr);
      main.classList.toggle("active-btn")
      break;
    case "gallery":
      root.style.setProperty("--btn-color", bgclr);
      gallery.classList.toggle("active-btn")
      // console.log("Gallery is active")
      break;
    case "info":
      root.style.setProperty("--btn-color", bgclr);
      info.classList.toggle("active-btn");
      break;

  }

}



///Handling clicks
// ??=> PAGE NAVIGATION;

gallery.addEventListener('click', (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1, scrollTo: { y: 730, autoKill: false }, onComplete: chngnav });
})

main.addEventListener('click', (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1, scrollTo: { y: '.main', autoKill: false }, onComplete: chngnav });
})

info.addEventListener('click', (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1, scrollTo: { y: '.info', autoKill: false }, onComplete: chngnav });
})


//getting page on screen
function pgonscrn() {
  const pages = document.querySelectorAll('section');
  let maxVisibleArea = 0;
  let activeSection = null;
  pages.forEach(page => {
    const rect = page.getBoundingClientRect(); // getting boundary of the page
    const visibleArea = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0); //checking if it covers the whole page
    if (visibleArea >= maxVisibleArea) {
      maxVisibleArea = visibleArea;
      activepage = page;
    }
  });
  return activepage
}



/// RUnning all the events ⭐ 🌟🎄
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(MotionPathPlugin) ;
  gsap.to(window, { duration: 0.2, scrollTo: { y:0, autoKill: false }, });
});
cct();
setInterval(chngnav, 300);