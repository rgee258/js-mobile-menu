const mobileMenu = (() => {

  function addToggle() {
    let button = document.querySelector(".menu-btn");

    button.addEventListener('click', function() {
      toggleExpand();
    });
  }

  function toggleExpand() {
    let menu = document.querySelector(".mobile-menu");

    menu.classList.toggle("expanded");
  }

  return { addToggle };

})();

export { mobileMenu }
