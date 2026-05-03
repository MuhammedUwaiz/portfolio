// HERO ANIMATION
gsap.from(".hero h1", {
  y: 50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  opacity: 0,
  duration: 1,
  delay: 0.5
});

// SCROLL REVEAL
const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  projects.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// INITIAL STYLE
projects.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s";
});

// SMOOTH SCROLL
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash) {
      e.preventDefault();
      document.querySelector(link.hash)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});