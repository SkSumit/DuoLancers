document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

const signUpButton = document.getElementById("sul");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const text4 = document.getElementById("text4");
const form = document.querySelector("#form");

const input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  event.preventDefault();

  text1.classList.add("text-after-signup-hide");

  text2.classList.add("text-after-signup-hide");
  text3.classList.add("text-after-signup-show");
  text4.classList.add("text-after-signup-show");
});


var formpg = document.querySelector('.pageclip-form')
Pageclip.form(formpg, {
  onSubmit: function (event) { },
  onResponse: function (error, response) { },
//   successTemplate: '<span>Thank you!</span>'
})