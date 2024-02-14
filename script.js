var tl=gsap.timeline();
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

tl.from(".nav1 ,.nav2>a ,.nav3",{
    y:-20,
    delay:1,
    duration:3,
    stagger:1,
    opacity:0

})


tl.from(".pagsec > .line>h2",{
    x:-100,
    duration:2,
    scale:3,
    opacity:0

})

tl.from(".web1",{
    // x:+50,
    duration:2,
  
    stagger:1,
    scale:3,
    opacity:0
})

tl.from(".d1 >h3 ",{
    y:400,
    duration:2,
    scale:4,
    opacity:0,

})

tl.from(".web",{
    x:-100,

    duration:0.5,
    opacity:0
})
tl.from(".ui",{
    x:100,
   
    duration:0.5,
    opacity:0
})
tl.from(".app",{
    x:-100,

    duration:0.5,
    opacity:0
})
tl.from(".ai",{
    x:100,
   
    duration:0.5,
    opacity:0
})
tl.from(".prof>h1",{
    y:300,
    opacity:0,
    scale:8,
 
    duration:1.4,
})

tl.from(".social>.leet",{
    y:200,
    duration:3,
    opacity:0,
    stagger:1,
    scale:2,

})



tl.from(".pagr6 ,.m1,.m2,.m3",{
   y:50,
   delay:0.7,
   duration:4,
   opacity:0,
   scale:2,
})
