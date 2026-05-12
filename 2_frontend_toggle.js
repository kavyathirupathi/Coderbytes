// ============================================
// FRONT-END CHALLENGE (ON/OFF Toggle)
// ============================================
import $ from "jquery";

const rootApp = document.getElementById("root");
rootApp.innerHTML = '<button>ON</button>';

rootApp.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const btn = e.target;
    btn.textContent = btn.textContent === "ON" ? "OFF" : "ON";
  }
});
