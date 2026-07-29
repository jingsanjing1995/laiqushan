const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

const preferredTheme = localStorage.getItem("laiqushan-theme");
if (preferredTheme) root.dataset.theme = preferredTheme;
else if (window.matchMedia("(prefers-color-scheme: dark)").matches) root.dataset.theme = "dark";

toggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("laiqushan-theme", next);
});
menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
