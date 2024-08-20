var userLang = navigator.language || navigator.userLanguage;
switch (userLang) {
  case "hi": //hindi
    document.getElementById("greet").innerText = "नमस्ते";
    break;
  case "fr":
  case "fr-FR": //french
    document.getElementById("greet").innerText = "Bonjour";
    break;
  case "ur": //urdu
    document.getElementById("greet").innerText = "ہیلو";
    break;
  case "ru": //russian
    document.getElementById("greet").innerText = "привет";
    break;
  case "zh": //chinese
    document.getElementById("greet").innerText = "你好";
    break;
  case "ja": //japanese
    document.getElementById("greet").innerText = "こんにちは";
    break;
  case "bn": //bengali
    document.getElementById("greet").innerText = "হ্যালো";
    break;
  case "es": //spanish
    document.getElementById("greet").innerText = "Hola";
    break;

  default:
    document.getElementById("greet").innerText = "Hi";
    break;
}

//move to top on scroll section
let scrollTop = document.getElementById("topBtn");
window.onscroll = function () {
  scrollFunc();
};

function scrollFunc() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  )
    scrollTop.style.display = "block";
  else scrollTop.style.display = "none";
}

function moveToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Responsive NavBar
function expandMenu() {
  document.getElementById("links").classList.remove("links");
  document.getElementById("links").classList.add("links-mobile");
  document.getElementById("logo").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("navBack").classList.remove("navBack");
  document.getElementById("navBack").classList.add("menu");
  document.querySelector("nav").style.width = "fit-content";
  document.querySelector("nav").style.right = "0";
  // animation to slide the right navigation menu into view
  document.querySelector("nav").style.animation = "navSlideIn 1s forwards";
  setTimeout(function () {
    document.querySelector("nav").style.animation = "";
  }, 1000); // Duration of animation (1000ms)
}

function collapseMenu() {
  // animation to slide the right navigation menu out view
  document.querySelector("nav").style.animation = "navSlideOut 0.8s forwards";
  setTimeout(function () {
    document.querySelector("nav").style.width = "100%";
    document.getElementById("navBack").classList.remove("menu");
    document.getElementById("navBack").classList.add("navBack");
    document.getElementById("menu").style.display = "block";
    document.getElementById("logo").style.display = "flex";
    document.getElementById("links").classList.remove("links-mobile");
    document.getElementById("links").classList.add("links");
    // animation to slide the top navigation menu in view
    document.querySelector("nav").style.animation =
      "navSlideDown 0.3s forwards";
    setTimeout(function () {
      document.querySelector("nav").style.animation = "";
    }, 300);
  }, 500); // Duration of animation (1000ms)
}

let currentTheme = "light";
function darkMode() {
  if (currentTheme == "light") {
    //dark mode colors
    currentTheme = "dark";
    document.querySelector(".darkMode_btn").innerHTML =
      '<i class="fa-solid fa-sun"></i>';
    document.querySelector("body").style.backgroundColor = "#030637";
    document.querySelector("body").style.color = "#fff";
    document.querySelector(".typed_anim").style.textShadow =
      "4px 3px 0px #000, 9px 8px 0px #ffffff26";
    document.querySelectorAll(".title").forEach((title) => {
      title.style.color = "#fff";
    });
    document.documentElement.style.setProperty("--boxShadow-hov-clr", "#fff2");
    document.documentElement.style.setProperty("--color-hg-light1", "#910A67");
    document.documentElement.style.setProperty("--color-hg-light2", "#720455");
    document.documentElement.style.setProperty("--color-hg-dark2", "#3C0753");
    document.documentElement.style.setProperty("--boxShadow-red", "#85005b");
    document.querySelectorAll(".wrapper a").forEach((a) => {
      a.style.color = "#fff";
      a.style.borderColor = "#fff";
    });

    console.log("dark mode turned on");
  } else {
    //light mode colors
    currentTheme = "light";
    document.querySelector(".darkMode_btn").innerHTML =
      '<i class="fa-solid fa-moon"></i>';
    document.querySelector("body").style.cssText = "";
    document.querySelector(".typed_anim").style.cssText = "";
    document.querySelectorAll(".title").forEach((title) => {
      title.style.cssText = "";
    });
    document.documentElement.style.setProperty("--boxShadow-hov-clr", "#0002");
    document.documentElement.style.setProperty("--color-hg-light1", "#f00");
    document.documentElement.style.setProperty("--color-hg-light2", "#ff4444");
    document.documentElement.style.setProperty("--color-hg-dark2", "#eee");
    document.documentElement.style.setProperty("--boxShadow-red", "#c77");
    document.querySelectorAll(".wrapper a").forEach((a) => {
      a.style.cssText = "";
    });

    console.log("light mode turned on");
  }
  updateColorsForJS();
}

function updateColorsForJS() {
  var rightBar = document.getElementById("typedTxt-borderRight");
  if (rightBar) {
    rightBar.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid ${
      currentTheme === "dark" ? "#fff" : "#000"
    }; }`;
  }
}
