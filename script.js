function onScrollNavigation() {
  let element = document.querySelector(".nav-bar");
  let stickyElement = element.offsetTop;
  if (window.pageYOffset > stickyElement) {
    element.classList.add("sticky");
  } else {
    element.classList.remove("sticky");
  }
}
window.addEventListener("scroll", onScrollNavigation);

//document.body for safari
//document.documentElement for chrome IE firefox opera

let topButton = document.querySelector(".top");
//showing topbutton on scroll
function showTopButton () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
window.addEventListener("scroll", showTopButton);

//scrolling to top on clicking the button
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
topButton.addEventListener("click", scrollToTop);

const workTitle = document.querySelectorAll(".work-title");

workTitle.forEach(title => {
  title.addEventListener("click", event => {

    const currentActive = document.querySelector(".work-title.active");
    if (currentActive && currentActive!==title) {
      currentActive.classList.toggle("active");
      currentActive.nextElementSibling.style.maxHeight = 0;
    }

    title.classList.toggle("active");
    const workBody = title.nextElementSibling;
    if (title.classList.contains("active")) {
      workBody.style.maxHeight = workBody.scrollHeight + "px";
    } else {
      workBody.style.maxHeight = 0;
    }
  });
});

/*function aboutSlide() {
  let element = document.querySelector(".greeting");
  let elPosition = element.getBoundingClientRect().top;
  let screenPos = window.innerHeight/2;
  if (elPosition < screenPos) {
    element.classList.add("about-slideleft");
  }
}
window.addEventListener("scroll", aboutSlide);

let elementTwo = document.querySelector(".about-body");
let addClass = elementTwo.classList.add("about-show");

function animate (el, number, statement) {
  elPosition = el.getBoundingClientRect().top;
  let screenPos = window.innerHeight / number;
  if (elPosition < screenPos) {
    statement;
  }
  console.log(elPosition, screenPos);
}
window.addEventListener("scroll", animate(document.querySelector(".about-body"), 2, elementTwo.classList.add("about-show")));

function skillSlide() {
    let element = document.querySelector(".skill");
    let elementTwo = document.querySelector(".technical");
    let elementThree = document.querySelector(".relevant")
    let elPosition = element.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 2;
    if (elPosition < screenPos) {
      element.classList.add("skill-slideright");
      elementTwo.classList.add("skill-show");
      elementThree.classList.add("skill-show");
    }
  }
  window.addEventListener("scroll", skillSlide);
/*window.addEventListener("load",function (e) {loadfunction(e,"hello")},true);
function loadfunction(event,text){
  alert("welcome and "+text);
  }
  window.addEventListener("load",loadfunction(event,"hello"),true);*/

let head = document.querySelector(".job-title");
let body = document.querySelector(".name");
let aboutHead = document.querySelector(".about-me");
let aboutBody = document.querySelector(".about-body");
let skillHead = document.querySelector(".skill");
let skillBody = document.querySelector(".skill-hover");
let eduHead = document.querySelector(".education");
let eduBody = document.querySelector(".education-details");
let workHead = document.querySelector(".work");
let workBody = document.querySelector(".work-items");
function hover(el, elT) {
  el.classList.add("bg-text-hover");
  elT.classList.add("body-text-hover");
}
function noHover(el, elT) {
  el.classList.remove("bg-text-hover");
  elT.classList.remove("body-text-hover");
}
head.addEventListener("mouseenter", () => hover(head, body));
head.addEventListener("mouseleave", () => noHover(head, body));
aboutHead.addEventListener("mouseenter", () => hover(aboutHead, aboutBody));
aboutHead.addEventListener("mouseleave", () => noHover(aboutHead, aboutBody));
skillHead.addEventListener("mouseenter", () => hover(skillHead, skillBody));
skillHead.addEventListener("mouseleave", () => noHover(skillHead, skillBody));
eduHead.addEventListener("mouseenter", () => hover(eduHead, eduBody));
eduHead.addEventListener("mouseleave", () => noHover(eduHead, eduBody));
workHead.addEventListener("mouseenter", () => hover(workHead, workBody));
workHead.addEventListener("mouseleave", () => noHover(workHead, workBody));