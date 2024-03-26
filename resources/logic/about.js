

// ?? ANIMATING THE FIRST DIV FROM THE RIGHT 1️⃣
const a1 = anime({
    targets: '.infocard',
    opacity:[0,1],
    rotateY:[90,0],
    duration: 500,
    easing: 'linear',
    autoplay: false
});


//??ANIMATING THE SECOND DIV FROM THE RIGHT 2️⃣
const a2 = anime({
    targets: '.firstskill',
    opacity:[0,1],
    rotateY:[90,0],
    duration: 500,
    easing: 'linear',
    autoplay: false
});


// ??ANIMATING THE THIRD DIV FROM THE RIGHT 3️⃣
const a3 = anime({
    targets: '.secondskill',
    opacity:[0,1],
    rotateY:[90,0],
    duration: 500,
    easing: 'linear',
    autoplay: false
});


// ??ANIMATING THE THIRD DIV FROM THE RIGHT 3️4️⃣
const a4 = anime({
    targets: '.thirdskill',
    opacity:[0,1],
    rotateY:[90,0],
    duration: 500,
    easing: 'linear',
    autoplay: false
});


function animate_divs() {

//  💀 📢 Animating each div according to panda panda_anim progress

    progress = Math.round(panda_anim.progress);
    // console.log(progress)
    if(progress<20){
        a1.reset();
        a2.reset();
        a3.reset();
        a4.reset();
    }
    if (progress >= 20 && progress <= 22) {
        a1.play();
    }
    if (progress >= 26 && progress <= 28) {
        a2.play();
    }
    if (progress >= 58 && progress <= 62) {
        a3.play();
    }
    if (progress >= 68 && progress <= 70) {
        a3.play();
    }
    if (progress >= 73 && progress <= 75) {
        a4.play();
    }
}

// 🐼 Animating the panda
const panda_anim = anime({
    targets: '.pth',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 500,
    easing: 'linear',
    update: animate_divs,
    autoplay: false
});


let panda_controller = new ScrollMagic.Controller();
let panda_line = new TimelineMax();
let scene1 = new ScrollMagic.Scene({
    triggerElement: ".info",
    duration: "500%",
    triggerHook: 0,
    scrub: true,
    reverse: true
}).setTween(panda_line).on("progress", (scroll) => {
    // ANIMATION PROCEEDS ON SCROLl !
    const seekValue = 1100 * scroll.progress;
    panda_anim.seek(seekValue);
}).addTo(panda_controller).setPin('.info').on("end",chngnav)


// Making panda walk on his path
panda_line.to(".panda", {
    motionPath: {
        path: ".pth",
    },
    duration: 3,
}).to('.ftr', { y: -200 }).to('.ftr', { y: 0 });