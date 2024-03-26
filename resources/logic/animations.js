//ANimating the quote
var wrtqut = gsap.timeline({ paused: true }); // write quote 

wrtqut.to(".quote", {
    duration: 1.3,
    text: '"Code your dreams into existence, one line at a time !"',
    ease: "slow",
});
wrtqut.play()

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Animating the role description change on the smaller quote below the bigger quote
var rldescchng = gsap.timeline({ paused: false, repeat: -1 }); // role description change

const words = ["Webdeveloper", "Gamer", "Tech Enthusiast", "Designer", "Level-headed"]
function chngitxt() {
    words.forEach(word => {
        rldescchng.fromTo("#itxt", {
            text: "!>     ",
        }, {
            duration: 1.3,
            text: "!>     " + word,
            ease: "slow",
        }).to("#itxt", {
            duration: 1.3,
            text: "!>     ",
            ease: "slow",
        })
        rldescchng.play()
        chngnav()
    });
}
chngitxt()


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ANimating the scroll effect 👇
let controller =  new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.main',3,{scale:1.5},"-=3").fromTo('.gallery',{scale:0.5},{scale:1,duration:3},"-=3");

let scene = new ScrollMagic.Scene({
  triggerElement:".main",
  duration:"100%",
  triggerHook:0,
  scrub:true,
  yoyo:true,
  reverse:true,
}).setTween(timeline).addTo(controller).on("end",chngnav)


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
