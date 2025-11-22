// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon
  const btn = document.getElementById("theme-toggle");
  btn.textContent = document.body.classList.contains("dark-mode") ? "[{Light}]" : "[{Dark}]";
});




document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const dropdown = btn.parentElement;
    const content = dropdown.querySelector('.dropdown-content');

    // Toggle open
    dropdown.classList.toggle('open');

    if (dropdown.classList.contains('open')) {
      // Auto-expand to full height
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // Collapse
      content.style.maxHeight = 0;
    }
  });
});


// Open modules when clicking an item
document.querySelectorAll('.dropdown-content .item').forEach(item => {
  item.addEventListener('click', () => {

    // ----- Slide-in module (item1) -----
    const target1 = item.dataset.target;
    if (target1) {
      document.querySelectorAll('.item1 .module.active').forEach(m => m.classList.remove('active'));
      document.getElementById(target1).classList.add('active');
    }

    // ----- Fade module (item2) -----
    const target2 = item.dataset.target2;
    if (target2) {
      document.querySelectorAll('.item2 .item2-module.active').forEach(m => m.classList.remove('active'));
      document.getElementById(target2).classList.add('active');
    }
  });
});

// Back button closes both
document.querySelectorAll('.item1 .back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.item1 .module.active').forEach(m => m.classList.remove('active'));
    document.querySelectorAll('.item2 .item2-module.active').forEach(m => m.classList.remove('active'));
  });
});


const preview = document.getElementById("hover-preview");

document.querySelectorAll(".dropdown-content .item").forEach(item => {
  
  item.addEventListener("mouseenter", () => {
    const img = item.getAttribute("data-img");
    if (!img) return;

    preview.src = img;
    preview.style.display = "block";
  });

  item.addEventListener("mouseleave", () => {
    preview.style.display = "none";
  });

});
