document.addEventListener('DOMContentLoaded', (event) => {
    let head = document.getElementsByTagName('head')[0];
    
    let linkTag1 = document.createElement('link');
    linkTag1.rel = 'stylesheet';
    linkTag1.href = '../../styles/header.css';
    head.appendChild(linkTag1);
    
    let linkTag2 = document.createElement('link');
    linkTag2.rel = 'stylesheet';
    linkTag2.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css';
    head.appendChild(linkTag2);
    
    document.getElementById("header").innerHTML =
    `<header>
    <div class="px-3 py-2 banner text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <img class="d-flex align-items-center my-2 my-lg-0 me-lg-auto" src="../../IMGs/librePensador2.webp" height="14%" width="14%">
    
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small4">
            <li>
              <a href="#" class="nav-link text-white">
                <i class="bi bi-house d-block mx-auto mb-1 fs-2"></i>
                <b> Menu </b>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white d-flex flex-column align-items-center">
                <i class="bi bi-qr-code-scan d-block mx-auto mb-1 fs-2"></i>
                <b> Escanear </b>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white d-flex flex-column align-items-center">
                <i class="bi bi-credit-card d-block mx-auto mb-1 fs-2"></i>
                <b> Cargar puntos </b>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white d-flex flex-column align-items-center">
                <i class="bi bi-person-add d-block mx-auto mb-1 fs-2"></i>
                <b> Enlazar </b>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white d-flex flex-column align-items-center">
                <i class="bi bi-person-x d-block mx-auto mb-1 fs-2"></i>
                <b> Desenlazar </b>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </header>`;
});