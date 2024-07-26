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
