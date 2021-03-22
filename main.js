{
  const $menuButton = document.getElementById("menuButton");
  const $list = document.getElementById("list");

  $menuButton.addEventListener("click", () => {
    $menuButton.classList.toggle("active");
    $list.classList.toggle("active");
  });

  $list.addEventListener("click", () => {
    $menuButton.classList.toggle("active");
    $list.classList.toggle("active");
  });

  const targetElement = document.querySelectorAll(".js-target");
  document.addEventListener("scroll", function () {
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance =
        targetElement[i].getBoundingClientRect().top +
        targetElement[i].clientHeight * 0.8;
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    }
  });
}
