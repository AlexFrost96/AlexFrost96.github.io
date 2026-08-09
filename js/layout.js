/**
 * Layout Engine for VF VID Website (Виробнича фірма ВИД)
 * Handles dynamic injection of head metadata/styles, navbar, footer, and scripts.
 * Reduces code duplication to zero and makes the site 100% scalable.
 */

(function () {
  // 1. Calculate dynamic root prefix based on the script's import path
  const scriptElement = document.currentScript;
  const scriptSrc = scriptElement ? scriptElement.getAttribute('src') : 'js/layout.js';
  const rootPrefix = scriptSrc.replace('js/layout.js', '');

  // Note: Styles are now loaded statically in <head> of each HTML file to avoid FOUC.

  // 3. Inject Google Tag Manager (GTM)
  if (!window.gtag) {
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-230974778-1';
    document.head.appendChild(gtmScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', 'UA-230974778-1');
  }

  // Helper to determine if link is active
  const isActive = (pageName) => {
    const pathname = window.location.pathname.toLowerCase();
    return pathname.includes(pageName.toLowerCase()) ? 'active' : '';
  };

  // 4. Dom Content Loaded - Inject Navbar and Footer
  document.addEventListener('DOMContentLoaded', function () {
    // Generate Navbar
    const navHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="${rootPrefix}index.html">
            <img src="${rootPrefix}vendor/bootstrap/css/img/logo.png" alt="Виробнича фірма ВИД | Безрамне скління">
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-around" id="navbarResponsive">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a href="${rootPrefix}html/oblasti.html" class="nav-link ${isActive('oblasti')}" onclick="window.open('${rootPrefix}html/oblasti.html','_self')"
                  data-toggle="dropdown">Області застосування<b class="caret"></b>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Продукція<b class="caret"></b></a>
                <ul class="dropdown-menu multi-level">
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/skladni_systemy.html" class="dropdown-toggle dropdown_icon">
                      Складні системи
                    </a>
                    <ul class="dropdown-menu">
                      <a href="${rootPrefix}html/produkciya/skladni_systemy/tiara_max.html">Tiara Max</a>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/rozsuvni_systemy.html" class="dropdown-toggle dropdown_icon">
                      Розсувні системи
                    </a>
                    <ul class="dropdown-menu">
                      <a href="${rootPrefix}html/produkciya/rozsuvni_systemy/altest_ls70.html">Altest LS70 (lifting sliding)</a>
                      <a href="${rootPrefix}html/produkciya/rozsuvni_systemy/altest_ls38.html">Altest LS38 (sliding thermo)</a>
                      <a href="${rootPrefix}html/produkciya/rozsuvni_systemy/reynaers_cp155.html">Reynaers CP155</a>
                      <a href="${rootPrefix}html/produkciya/rozsuvni_systemy/sliding_smart.html">Sliding Smart</a>
                      <a href="${rootPrefix}html/produkciya/rozsuvni_systemy/sliding_max_track.html">Sliding Max Track</a>
                      <a href="${rootPrefix}html/produkciya/rozsuvni_systemy/dveri_garmoshka.html">Двері типу гармошка</a>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/pidvisni_systemy.html" class="dropdown-toggle dropdown_icon">
                      Підвісні системи
                    </a>
                    <ul class="dropdown-menu">
                      <a href="${rootPrefix}html/produkciya/pidvisni_systemy/floppy_spin.html">Floppy Spin</a>
                      <a href="${rootPrefix}html/produkciya/pidvisni_systemy/floppy_parking.html">Floppy Parking</a>
                      <a href="${rootPrefix}html/produkciya/pidvisni_systemy/momentum.html">Momentum</a>
                      <a href="${rootPrefix}html/produkciya/pidvisni_systemy/centrum.html">Centrum</a>
                      <a href="${rootPrefix}html/produkciya/pidvisni_systemy/atrium.html">Atrium</a>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/gilyotynni_systemy.html" class="dropdown-toggle dropdown_icon">
                      Гільйотинні системи
                    </a>
                    <ul class="dropdown-menu">
                      <a href="${rootPrefix}html/produkciya/gilyotynni_systemy/giliotina_breeze100.html">Breeze 100</a>
                      <a href="${rootPrefix}html/produkciya/gilyotynni_systemy/giliotina_breeze130.html">Breeze 130</a>
                    </ul>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/balkonni_zagorodzhennya.html">
                      Балконні огородження
                    </a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/sklyanni_piddashky.html">
                      Скляні піддашки
                    </a>
                  </li>
                  <li class="dropdown-submenu">
                    <a href="${rootPrefix}html/produkciya/aksesuary.html" class="dropdown-toggle dropdown_icon" data-toggle="dropdown">
                      Аксессуари для вікон и дверей
                    </a>
                    <ul class="dropdown-menu">
                      <a href="${rootPrefix}html/produkciya/aksesuary/vidlyvy.html">Відливи</a>
                      <li class="dropdown-submenu">
                        <a href="${rootPrefix}html/produkciya/aksesuary/moskytni_sitky.html" class="dropdown-toggle">Протимоскітні
                          сітки</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="${rootPrefix}html/produkciya/aksesuary/moskytni_sitky.html#1">Віконно-рамкові</a>
                            <a href="${rootPrefix}html/produkciya/aksesuary/moskytni_sitky.html#2">Ролетного типу</a>
                            <a href="${rootPrefix}html/produkciya/aksesuary/moskytni_sitky.html#3">Дверно-відкривні</a>
                            <a href="${rootPrefix}html/produkciya/aksesuary/moskytni_sitky.html#4">Дверно-розсувні</a>
                            <a href="${rootPrefix}html/produkciya/aksesuary/moskytni_sitky.html#5">Плісе</a>
                          </li>
                        </ul>
                      </li>
                      <a href="${rootPrefix}html/produkciya/aksesuary/tepli_vidkosy.html">Теплі відкоси</a>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('proekty')}" href="${rootPrefix}html/proekty.html">Проекти</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('statti')}" href="${rootPrefix}html/statti.html">Статті</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('galereya')}" href="${rootPrefix}html/galereya.html">Галерея</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${isActive('kontakty')}" href="${rootPrefix}html/kontakty.html">Контакти</a>
              </li>
            </ul>
            <div class="social-networks">
              <a href="tel:+38(097)393-25-74" title="Позвони нам">
                <i class="faa-vertical animated-hover fa fa-phone"></i>
              </a>
              <a href="https://www.instagram.com/vikna_vid#" title="Ми в Instagram">
                <i class="fa fa-instagram faa-spin animated-hover"></i>
              </a>
              <a href="https://www.facebook.com/vidvikna" title="Ми в Facebook">
                <i class="fa fa-facebook-official faa-float animated-hover"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;

    // Generate Footer
    const footerHTML = `
      <footer id="myFooter">
        <div class="container">
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-sm-3 myCols">
              <p class="h5"><a href="${rootPrefix}html/staty_partnerom.html">Стати партнером</a></p>
            </div>
            <div class="col-sm-3 myCols">
              <p class="h5"><a href="${rootPrefix}html/pro_kompaniyu.html">Про компанію</a></p>
            </div>
            <div class="col-sm-3 myCols">
              <p class="h5"><a href="${rootPrefix}html/statti.html">Статті</a></p>
            </div>
          </div>
        </div>
        <div class="social-networks">
          <a href="https://www.instagram.com/vikna_vid/" class="twitter" title="Ми в Instagram"><i class="fa fa-instagram"></i></a>
          <a href="https://www.facebook.com/vidvikna" class="facebook" title="Ми в Facebook"><i class="fa fa-facebook-official"></i></a>
        </div>
        <div class="footer-copyright">
          <p>© <span>${new Date().getFullYear()}</span> Виробнича фірма ВИД</p>
        </div>
      </footer>
    `;

    // Inicilize Injection
    // Insert Navbar before body first child
    const tempNavDiv = document.createElement('div');
    tempNavDiv.innerHTML = navHTML.trim();
    const navNode = tempNavDiv.firstChild;
    document.body.insertBefore(navNode, document.body.firstChild);

    // Append Footer to body
    const tempFooterDiv = document.createElement('div');
    tempFooterDiv.innerHTML = footerHTML.trim();
    const footerNode = tempFooterDiv.firstChild;
    document.body.appendChild(footerNode);

    // 5. Sequentially load required scripts (jQuery -> Bootstrap Bundle -> Fancybox -> Lazysizes)
    function loadScript(src, async = false) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = async;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    }

    // Load scripts chain
    loadScript(`${rootPrefix}vendor/jquery/jquery.min.js`)
      .then(() => loadScript(`${rootPrefix}vendor/bootstrap/js/bootstrap.bundle.min.js`))
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.js'))
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js', true))
      .then(() => {
        // Trigger custom layout loaded event for pages that need initialization post-jquery load
        document.dispatchEvent(new CustomEvent('layout-loaded'));
      })
      .catch(err => console.error('Error loading scripts in layout engine:', err));
  });
})();
