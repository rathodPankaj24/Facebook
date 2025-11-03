let li = document.querySelectorAll('.menu li');

const list = Array.from(li);


li.forEach((elem) => {
    elem.addEventListener("click", (val) => {
        document.querySelector('li.active').classList.remove('active');
        val.target.classList.add('active');

    });
});

let activeLi = document.querySelector("li.active a");
const postImg = document.querySelector(".post .post-img");
const cards = document.querySelector(".cards card");
activeLi.addEventListener("click",()=>{
    postImg.style.display ="none";
    cards.style.display = "none";
    activeLi.target.classList.add('video.html');
});



let post = document.querySelector(".crose-x i");

    
 post && post.addEventListener("click", (val) => {
    val = document.querySelector(".post");
    val.style.opacity = "0";
});


const postOne = document.querySelector('.post-one');

postOne && postOne.addEventListener('click',(val)=>{
    val = document.querySelector('post-one i')
   val.style.color ="red";
})


let leftLi = document.querySelector(".icon2-menu a");

leftLi.addEventListener("click", (elem) => {
    elem.preventDefault();

    const leftSection = document.querySelector(".left-sec");

    leftSection.classList.toggle('hide');

});

window.addEventListener('resize', () => {
    const leftSection = document.querySelector(".left-sec");

    if (window.outerWidth >= 1023) {
        leftSection.classList.remove('hide');
    } else {
        leftSection.classList.add('hide');
    }
});


let rightLi = document.querySelector(".icon-menu a");

rightLi.addEventListener("click", (elem) => {
    elem.preventDefault();

    const rightSection = document.querySelector(".right-sec");

    rightSection.classList.toggle('hide');

});

window.addEventListener('resize', () => {
    const rightSection = document.querySelector(".right-sec");

    if (window.outerWidth >= 1000) {
        rightSection.classList.remove('hide');
    } else {
        rightSection.classList.add('hide');
    }
});


window.addEventListener("resize", () => {
    const leftSearchs = document.querySelector(".search input");
    const search = document.querySelector(".search");
    if (window.outerWidth < 768 && window.outerWidth > 475) {
        search.style.flexDirection = "row-reverse";
        leftSearchs.style.display = "block";
    }
    else if(window.outerWidth > 900){
        search.style.flexDirection = "row";
        leftSearchs.style.display = "block";
    }
    else {
        leftSearchs.style.display = "none";

    }
});


// const menuList = document.querySelector(".bars-icon");

// menuList.addEventListener("click",(val)=>{
//     val = document.querySelectorAll('.left-sec')
//     const list = Array.from(val);

    // val.style.display="block";
    //  console.log(list);

   
// });


const logoLeft = document.querySelector('.logo-img1 img');
const logo = document.querySelector(".logo-img2 img");
window.addEventListener("resize", () => {
    if ( window.outerWidth < 475) {
        logoLeft.style.display= "none";
        logo.style.display = "block";
        logo.style.height = "25px";
    }
    else {
        logoLeft.style.display = "block";
       logo.style.display = "none";
    }
});







// const logoLeft = document.querySelector('.logo img')


// const lenis = new Lenis()

// // lenis.on('scroll', (e) => {
// //   console.log(e)
// // })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)