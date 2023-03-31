var circle = document.querySelector(".circle")
circle.classList.remove("closed")

circle.addEventListener("click", () => {
    circle.classList.toggle("closed")

})

gsap.to(".detail > .web > span.first", {
    rotateX: "0deg",
    stagger: 0.5,
    opacity: 1,
    duration: 2,
    ease: "bounce"
})

gsap.from(".detail > .web > span.last", {
    y: "-100%",
    opacity: 0,
    delay: 0.4,
    duration: 2,
    ease: "bounce"
})

let nameText = new SplitType(".detail > .name")

gsap.from(".detail > .name .char", {
    y: "200%",
    stagger: 0.1,
    opacity: 0,
    delay: 0.5,
    duration: 0.5,
    ease: "ease"
})

var tl = gsap.timeline()

tl.from(".me-full-svg-large path", {
    opacity: 0,
    stagger: 0.01,
    duration: 0.01
})
tl.to(".me-full-svg", {
    opacity: 1,
    duration: 0.4
})


let paths = document.querySelectorAll(".me-border-path path")

console.log(paths)

paths.forEach(path => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Animate the stroke-dashoffset property to create the drawing effect
    gsap.to(path, {
        duration: 2,
        strokeDashoffset: 0,
        ease: "power1.inOut"
    });
    gsap.to(path, {
        duration: 2,
        delay: 1.4,
        fill: "black",
        ease: "power1.inOut"
    });
    gsap.to(path, {
        duration: 1,
        delay: 2,
        stroke: "transparent",
        ease: "power1.inOut"
    });
})


