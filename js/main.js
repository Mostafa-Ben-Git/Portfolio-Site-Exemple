let list = document.querySelectorAll("a");
let tog = document.querySelector(".toggle");
let nav = document.querySelector(".navigation");
tog.onclick = function () {
  tog.classList.toggle("active");
  nav.classList.toggle("active");
};
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "";
    }
    list[i].classList = "active";
  };
}
// slider script
let slide1 = document.querySelector(".right");
let slide2 = document.querySelector(".left");
let bodyHieght = document.documentElement.scrollHeight;
let windowHieght = document.documentElement.clientHeight;
let hight = bodyHieght - windowHieght;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let h = ((scrollTop / hight) * 100) / 2;
  slide1.style.width = slide2.style.width = `${h}%`;
});
// totop
let totop = document.querySelector(".totop");
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > windowHieght * 1.5) {
    totop.classList.add("show");
  } else {
    totop.classList.remove("show");
  }
  if (scrollTop > hight - windowHieght) {
    totop.classList.add("glow");
    cursor.classList.add("glow");
  } else {
    totop.classList.remove("glow");
    cursor.classList.remove("glow");
  }
};
/* cursor*/
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x +'px'
  cursor.style.top = y +'px'
});
