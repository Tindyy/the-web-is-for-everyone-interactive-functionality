document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".like-button").forEach((button) => {
      button.addEventListener("click", async function (e) {
        e.preventDefault(); // Prevent form submission
  
        let form = this.closest("form");
        let action = form.getAttribute("action");
        let method = form.getAttribute("method");
  
        // Send like/unlike request via AJAX
        let response = await fetch(action, {
          method: method,
        });
  
        if (response.ok) {
          // Toggle active class for animation
          this.classList.toggle("active");
          this.classList.add("animated");
          generateClones(this);
  
          // Swap the form action between like/unlike

          
        }
      });
    });
  });
  
  function generateClones(button) {
    let clones = randomInt(2, 4);
    for (let it = 1; it <= clones; it++) {
      let clone = button.querySelector("svg").cloneNode(true),
        size = randomInt(5, 16);
      button.appendChild(clone);
      clone.setAttribute("width", size);
      clone.setAttribute("height", size);
      clone.style.position = "absolute";
      clone.style.transition =
        "transform 0.5s cubic-bezier(0.12, 0.74, 0.58, 0.99) 0.3s, opacity 1s ease-out .5s";
      setTimeout(() => {
        clone.style.transform =
          "translate3d(" +
          (plusOrMinus() * randomInt(10, 25)) +
          "px," +
          (plusOrMinus() * randomInt(10, 25)) +
          "px,0)";
        clone.style.opacity = 0;
      }, 1);
      setTimeout(() => clone.remove(), 900);
      setTimeout(() => button.classList.remove("animated"), 600);
    }
  }
  
  function plusOrMinus() {
    return Math.random() < 0.5 ? -1 : 1;
  }
  
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
