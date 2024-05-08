const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years");
const arrowBtn = document.getElementById("arrow-btn");
let getYear = null;
let getMonth = null;
let getDay = null;

function date() {
  const currentDate = new Date();
  getYear = currentDate.getFullYear();
  getMonth = currentDate.getMonth();
  getDay = currentDate.getDate();
  console.log(getMonth);
}

arrowBtn.addEventListener("click", () => {
  const yearCalc = year.value - getYear;
  years.innerText = yearCalc;
});

year.addEventListener("input", () => {
  if (year.value.length > 4) {
    year.value = year.value.slice(0, 4);
  }
});

month.addEventListener("input", () => {
  if (month.value.length > 2) {
    month.value = month.value.slice(0, 2);
  }
});

day.addEventListener("input", () => {
  if (day.value.length > 2) {
    day.value = day.value.slice(0, 2);
  }
});
