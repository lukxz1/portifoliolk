const header = document.getElementById('header');
const headerClassList = header.classList;

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || window.pageYOffset;

  if (scrollTop > lastScrollTop) {
o
    if (!headerClassList.contains('scrollHide')) {
      headerClassList.add('scrollHide');
    }
  } else {

    if (scrollTop < lastScrollTop - 2 || scrollTop <= 0) {
      headerClassList.remove('scrollHide');
    }
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.textContent = 'Fechar';

  function toggleMenu() {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');

    if (navbar.classList.contains('active')) {
      navbar.innerHTML = `
        <ul>
          <li><a href="#sobre">Sobre mim</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#curriculo">Curriculo</a></li>
          <li><a href="#contatar">Contatar</a></li>
        </ul>
      `;
      navbar.appendChild(closeButton);
      closeButton.addEventListener('click', toggleMenu);


      navbar.style.backgroundColor = '#562ca9;';
      navbar.style.padding = '1rem';
      navbar.style.borderRadius = '8px';
      navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      navbar.style.maxWidth = '300px';
      navbar.style.position = 'absolute';
      navbar.style.top = '60px';
      navbar.style.right = '20px';
    } else {
      navbar.innerHTML = '';
    }
  }

  menuToggle.addEventListener('click', toggleMenu);

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
      navbar.innerHTML = '';
    }
  });
});