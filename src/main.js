import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
setupCounter(document.querySelector('#counter'))
const toggleBtn = document.getElementById("dark-toggle");
const root = document.documentElement; // <html> element

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  root.classList.add("dark");
} else if (localStorage.getItem("theme") === "light") {
  root.classList.remove("dark");
} else {
  // Default: follow system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    root.classList.add("dark");
  }
}

toggleBtn.addEventListener("click", () => {
  root.classList.toggle("dark");

  // Save theme choice
  if (root.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
