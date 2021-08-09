const acc = document.querySelectorAll(".accordion");

acc.forEach(function(element) {
  element.addEventListener("click", function() {
    // Toggle between adding and removing the "active" class,
    // to highlight the button that controls the panel
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      panel.classList.add("active");
    }
  });
});
