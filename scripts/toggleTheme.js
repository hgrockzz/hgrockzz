let currentTheme;
document.addEventListener("DOMContentLoaded", function () {
  const localStorageTheme = localStorage.getItem("theme");
  const systemDefaultThemeDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  currentTheme = calculateTheme({
    localStorageTheme,
    systemDefaultThemeDark,
  });

  if (currentTheme === "dark") {
    applyDarkMode();
  } else {
    applyLightMode();
  }
});

function calculateTheme({ localStorageTheme, systemDefaultThemeDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }
  if (systemDefaultThemeDark.matches) {
    return "dark";
  }
  return "light";
}

function applyDarkMode() {
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
  updateColorsForJS("dark");
}

function applyLightMode() {
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
  updateColorsForJS("light");
}

function toggleTheme() {
  if (currentTheme == "light") {
    //dark mode colors
    applyDarkMode();
    const newTheme = "dark";
    currentTheme = newTheme;
    localStorage.setItem("theme", newTheme);
    console.log("dark mode turned on");
  } else {
    //light mode colors
    applyLightMode();
    const newTheme = "light";
    currentTheme = newTheme;
    localStorage.setItem("theme", newTheme);
    console.log("light mode turned on");
  }
}

function updateColorsForJS(theme) {
  var rightBar = document.getElementById("typedTxt-borderRight");
  if (rightBar) {
    rightBar.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid ${
      theme === "dark" ? "#fff" : "#000"
    }; }`;
  }
}
