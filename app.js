/**
 * Verbergt alle pagina-secties zodat er maar één tegelijk zichtbaar is.
 */
function hideAllPages() {
  const homePage = document.getElementById('home-page');
  const contactPage = document.getElementById('contact-page');
  const detailPage = document.getElementById('detail-page');
  const profilePage = document.getElementById('profile-page');

  if (homePage) homePage.style.display = 'none';
  if (contactPage) contactPage.style.display = 'none';
  if (detailPage) detailPage.style.display = 'none';
  if (profilePage) profilePage.style.display = 'none';
}

/**
 * Toont de detailpagina voor een specifieke expertise/dienst.
 * @param {string} serviceName - De naam van de geselecteerde dienst.
 */
function showDetail(serviceName) {
  hideAllPages();
  const detailPage = document.getElementById('detail-page');
  const titleEl = document.getElementById('service-title');
  const boldEl = document.getElementById('service-title-bold');

  if (detailPage) detailPage.style.display = 'block';
  if (titleEl) titleEl.innerText = serviceName;
  if (boldEl) boldEl.innerText = serviceName;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Toont de contactpagina.
 */
function showContact() {
  hideAllPages();
  const contactPage = document.getElementById('contact-page');
  if (contactPage) contactPage.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Toont het persoonlijk profiel van Martin Kortekaas.
 */
function showProfile() {
  hideAllPages();
  const profilePage = document.getElementById('profile-page');
  if (profilePage) profilePage.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Toont de homepagina en scrolt optioneel naar een specifieke sectie.
 * @param {string} [sectionId] - Optioneel ID van de sectie op de homepagina.
 */
function showHome(sectionId) {
  hideAllPages();
  const homePage = document.getElementById('home-page');
  if (homePage) homePage.style.display = 'block';

  if (sectionId) {
    setTimeout(function() {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
