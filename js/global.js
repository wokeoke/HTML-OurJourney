const links = document.querySelectorAll('#main-nav .nav-links .links');

function currentLink() {
  links.forEach((link) => {
    link.classList.remove('current');
  });
  this.classList.add('current');
}

links.forEach((link) => link.addEventListener('click', currentLink));
