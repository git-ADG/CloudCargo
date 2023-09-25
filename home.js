gsap.to("#nav",{
    backgroundColor :"#08080A",
    height: "80px" ,
    duration: 2,
    scrollTrigger:{
        trigger:"#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub: 1
    }
}) 

gsap.to("#main", {
    backgroundColor: "#fff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true
        start: "top -30vh",
        end: "top -80vh",
        scrub:2
    }
})