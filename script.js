const icons = document.querySelector(".connect-icons");
const resumeIcon = document.querySelector("#resumeIcon");

// Window scroll event
window.addEventListener("scroll", () => {
  const scrollTop = document.scrollingElement.scrollTop;

  //   Scroll method for the social icons
  if (scrollTop > 2060) {
    if (icons.classList.contains("overScroll")) {
      icons.classList.remove("overScroll");
    } else {
      icons.classList.add("scrollMethod");
      icons.style.opacity = 1;
    }
  } else if (scrollTop < 2050) {
    if (icons.classList.contains("scrollMethod")) {
      icons.classList.remove("scrollMethod");
    } else {
      icons.classList.add("overScroll");
      icons.style.opacity = 0;
    }
  }

  //   Scroll method for the resume icon
  if (scrollTop > 2250) {
    if (resumeIcon.classList.contains("pushDown")) {
      resumeIcon.classList.remove("pushDown");
    } else {
      resumeIcon.classList.add("pushUp");
      resumeIcon.style.opacity = 1;
    }
  } else if (scrollTop < 2249) {
    if (resumeIcon.classList.contains("pushUp")) {
      resumeIcon.classList.remove("pushUp");
    } else {
      resumeIcon.classList.add("pushDown");
      resumeIcon.style.opacity = 0;
    }
  }
});
