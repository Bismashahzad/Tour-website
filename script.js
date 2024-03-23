const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 60)
});

function loading_animation(){
    gsap.from(".feature h1",{
        y:-90,
        opacity:0,
        duration:1.2,
        delay: 0.5,
        stagger: 0.5,
    })
    gsap.from(".holiday-text h5",{
        x:-100,
        opacity:0,
        duration:0.5,
        delay:0.5,
        stagger:0.3,
    })
    gsap.from(".culture-text h5",{
        x:180,
        opacity:0,
        duration:0.5,
        delay:0.4,
        stagger:0.3,
    })

}
loading_animation();