class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header is-100" id="header">
        <a href="./index.html" class="header-logo box-bordered top">
         &#127967;
        </a>

        <nav class="nav-container">
          <ul class="menu">
            <li class="menu-item"><a href="./index.html">home</a></li>
            <li class="menu-item"><a href="./about-me.html">about me</a></li>
            <li class="menu-item"><a href="./portfolio.html">portfolio</a></li>
            <li class="menu-item"><a href="">blog</a></li>
          </ul>
        </nav>

        <address class="contacts">
          <a class="contact-item" title="Github" target="_blank" href="https://github.com/purpledk">
            <i class='bx bxl-github'></i>
          </a>
          <a class="contact-item" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/sergio-oliveira-/">
            <i class='bx bxl-linkedin-square' ></i>
          </a>
          <a class="contact-item" title="Twitter" target="_blank"  href="https://twitter.com/">
            <i class='bx bxl-twitter' ></i>
          </a>
          <a class="contact-item" title="Youtube" href="">
            <i class='bx bxl-youtube' ></i>
          </a>
          <a class="contact-item" title="Instagram" href="https://instagram.com/sergio.etc">
            <i class='bx bxl-instagram' ></i>
          </a>
        </address>
      </header>
    `;
  }
}

customElements.define('main-header', Header);

