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
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", "#910A67");
  }
  document.querySelector(".darkMode_btn").innerHTML =
    '<i class="fa-solid fa-sun"></i>';
  document.querySelector("body").style.backgroundColor = "#030637";
  document.querySelector("body").style.color = "#fff";
  if (document.querySelector(".typed_anim")) {
    document.querySelector(".typed_anim").style.textShadow =
      "4px 3px 0px #000, 9px 8px 0px #ffffff26";
  }
  document.querySelectorAll(".title").forEach((title) => {
    title.style.color = "#fff";
  });
  document.documentElement.style.setProperty("--boxShadow-hov-clr", "#4f013b");
  document.documentElement.style.setProperty("--color-hg-light1", "#910A67");
  document.documentElement.style.setProperty("--color-hg-light2", "#720455");
  document.documentElement.style.setProperty("--color-hg-dark2", "#3C0753");
  document.documentElement.style.setProperty("--boxShadow-red", "#85005b");
  document.documentElement.style.setProperty(
    "--blob-img",
    'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M848 692.5q-41 192.5-236.5 183T320 749.5q-96-116.5-53.5-229t85-298q42.5-185.5 220-110T819 344q70 156 29 348.5Z%22%2F%3E%3C%2FclipPath%3E%3Cpattern id=%22a%22 patternUnits=%22userSpaceOnUse%22 width=%2225%22 height=%2225%22 viewBox=%220 0 100 100%22 fill=%22%2385005b%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2212.5%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Cpath fill=%22url(%23a)%22 d=%22M848 692.5q-41 192.5-236.5 183T320 749.5q-96-116.5-53.5-229t85-298q42.5-185.5 220-110T819 344q70 156 29 348.5Z%22 transform=%22translate(-60 -60)%22%2F%3E%3Cg clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%2385005b%22 d=%22M848 692.5q-41 192.5-236.5 183T320 749.5q-96-116.5-53.5-229t85-298q42.5-185.5 220-110T819 344q70 156 29 348.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")'
  );
  document.querySelectorAll(".wrapper a").forEach((a) => {
    a.style.color = "#fff";
    a.style.borderColor = "#fff";
  });
  updateColorsForJS("dark");
}

function applyLightMode() {
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", "#f00");
  }
  document.querySelector(".darkMode_btn").innerHTML =
    '<i class="fa-solid fa-moon"></i>';
  document.querySelector("body").style.cssText = "";
  if (document.querySelector(".typed_anim")) {
    document.querySelector(".typed_anim").style.cssText = "";
  }
  document.querySelectorAll(".title").forEach((title) => {
    title.style.cssText = "";
  });
  document.documentElement.style.setProperty("--boxShadow-hov-clr", "#0002");
  document.documentElement.style.setProperty("--color-hg-light1", "#f00");
  document.documentElement.style.setProperty("--color-hg-light2", "#ff4444");
  document.documentElement.style.setProperty("--color-hg-dark2", "#eee");
  document.documentElement.style.setProperty("--boxShadow-red", "#c77");
  document.documentElement.style.setProperty(
    "--blob-img",
    'url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M848 692.5q-41 192.5-236.5 183T320 749.5q-96-116.5-53.5-229t85-298q42.5-185.5 220-110T819 344q70 156 29 348.5Z%22%2F%3E%3C%2FclipPath%3E%3Cpattern id=%22a%22 patternUnits=%22userSpaceOnUse%22 width=%2225%22 height=%2225%22 viewBox=%220 0 100 100%22 fill=%22%23ff4e4e%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2212.5%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Cpath fill=%22url(%23a)%22 d=%22M848 692.5q-41 192.5-236.5 183T320 749.5q-96-116.5-53.5-229t85-298q42.5-185.5 220-110T819 344q70 156 29 348.5Z%22 transform=%22translate(-60 -60)%22%2F%3E%3Cg clip-path=%22url(%23b)%22%3E%3Cpath fill=%22%23ff4e4e%22 d=%22M848 692.5q-41 192.5-236.5 183T320 749.5q-96-116.5-53.5-229t85-298q42.5-185.5 220-110T819 344q70 156 29 348.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")'
  );
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
    localStorage.setItem("theme", newTheme);
    currentTheme = newTheme;
    console.log("dark mode turned on");
  } else {
    //light mode colors
    applyLightMode();
    const newTheme = "light";
    localStorage.setItem("theme", newTheme);
    currentTheme = newTheme;
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
