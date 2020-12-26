const leftMenu = document.querySelector(".left-menu");

leftMenu.addEventListener("click", (e) => {
  const classMenu = e.target.classList;

  const sidebar = document.querySelector(".sidebar"),
    leftArrow = document.querySelector(".fa-arrow-left"),
    rightArrow = document.querySelector(".fa-arrow-right");

  if (classMenu.contains("fa-arrow-left")) {
    leftArrow.style.display = "none";
    rightArrow.style.display = "block";
    sidebar.style.display ="none";
  }
  
  else if (classMenu.contains("fa-arrow-right")) {
    leftArrow.style.display = "block";
    rightArrow.style.display = "none";
    sidebar.style.display = "block";
  }
});
