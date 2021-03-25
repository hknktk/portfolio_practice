

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
        targetElement[i].clientHeight * 2;
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    }
  });
}

{
  function typing(str = ""){
		let buf = document.getElementById("my_name").innerHTML;
		let writed = buf.length;
		let write = "";
		if(writed < str.length){
			write = str.charAt(writed);
		}else{
			// buf = "";
      return;
		}
		document.getElementById("my_name").innerHTML = buf + write;
	}

	const str = document.getElementById("my_name").innerHTML;
	const delay = 200;


	document.getElementById("my_name").innerHTML = "";
	window.setInterval(function(){typing(str);}, delay);

  
}




