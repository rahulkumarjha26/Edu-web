function switchMode() {
  let moon = document.getElementById("moon");
  if (moon.className === "moon") {
    moon.className = "sun";
    document.body.style.backgroundColor = "#141414";
    document.body.style.color = "#e0e0e0";
    document.getElementById("header").style.backgroundColor = "black";
    document.getElementById("logo").src = "./assets/logo-dark.png";
    document.getElementById("logo").style.transform = "scale(0.9)";
    document.querySelector("main").style.backgroundColor = "#1d1d1d";
    document.querySelector("footer").style.backgroundColor = "black";
    document.querySelectorAll(".institute").forEach((element) => {
      element.style.filter = "invert(1)";
    });

    document
      .querySelectorAll(".component, .teachers, .students")
      .forEach((element) => {
        element.style.backgroundColor = "#2e2e2e";
      });
    document.querySelector("hr").style.borderColor = "#444444";
  } else {
    moon.className = "moon";
    document.body.style.backgroundColor = "rgba(211, 211, 211, 0.205)";
    document.body.style.color = "#000000";
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("logo").src = "./assets/logo.jpg";
    document.getElementById("logo").style.transform = "scale(1)";
    document.querySelector("main").style.backgroundColor = "#ffffff";
    document.querySelector("footer").style.backgroundColor = "#666666";
    document
      .querySelectorAll(".component, .teachers, .students")
      .forEach((element) => {
        element.style.backgroundColor = "#fafafa";
      });

    document.querySelectorAll(".institute").forEach((element) => {
      element.style.filter = "invert(0)";
    });
    document.querySelector("hr").style.borderColor = "#fafafa";
  }
}

const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");

tab2.style.display = "none";
tab3.style.display = "none";

const pivot1 = document.getElementById("pivot-1");
const pivot2 = document.getElementById("pivot-2");
const pivot3 = document.getElementById("pivot-3");

pivot1.classList.add("active");

pivot1.addEventListener("click", function (event) {
  pivot1.classList.add("active");
  pivot2.classList.remove("active");
  pivot3.classList.remove("active");
  tab1.style.display = "block";
  tab2.style.display = "none";
  tab3.style.display = "none";
});

pivot2.addEventListener("click", function (event) {
  pivot1.classList.remove("active");
  pivot2.classList.add("active");
  pivot3.classList.remove("active");
  tab1.style.display = "none";
  tab2.style.display = "block";
  tab3.style.display = "none";
});

pivot3.addEventListener("click", function (event) {
  pivot1.classList.remove("active");
  pivot2.classList.remove("active");
  pivot3.classList.add("active");
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "block";
});
