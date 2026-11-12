/**
 * Geautomatiseerde browser-tests voor de navigatiefuncties in app.js.
 * Open de ontwikkelaarstools (F12 -> Console) in de browser om de testresultaten te bekijken.
 */
function runTests() {
  console.log("=== Start testen van Midda website ===");

  try {
    // Test 1: Controleer of alle pagina-elementen bestaan in de DOM
    console.assert(document.getElementById('home-page') !== null, "Test 1a mislukt: #home-page ontbreekt");
    console.assert(document.getElementById('profile-page') !== null, "Test 1b mislukt: #profile-page ontbreekt");
    console.assert(document.getElementById('detail-page') !== null, "Test 1c mislukt: #detail-page ontbreekt");
    console.assert(document.getElementById('contact-page') !== null, "Test 1d mislukt: #contact-page ontbreekt");

    // Test 2: Test showContact()
    showContact();
    console.assert(document.getElementById('contact-page').style.display === 'block', "Test 2a mislukt: contact-page wordt niet getoond");
    console.assert(document.getElementById('home-page').style.display === 'none', "Test 2b mislukt: home-page is niet verborgen");

    // Test 3: Test showProfile()
    showProfile();
    console.assert(document.getElementById('profile-page').style.display === 'block', "Test 3a mislukt: profile-page wordt niet getoond");
    console.assert(document.getElementById('contact-page').style.display === 'none', "Test 3b mislukt: contact-page is niet verborgen");

    // Test 4: Test showDetail() met dienstnaam
    const testDienst = "Verandermanagement";
    showDetail(testDienst);
    console.assert(document.getElementById('detail-page').style.display === 'block', "Test 4a mislukt: detail-page wordt niet getoond");
    console.assert(document.getElementById('service-title').innerText === testDienst, "Test 4b mislukt: diensttitel komt niet overeen");

    // Test 5: Test showHome() (herstelt tevens de beginstand van de pagina)
    showHome();
    console.assert(document.getElementById('home-page').style.display === 'block', "Test 5a mislukt: home-page wordt niet getoond");
    console.assert(document.getElementById('detail-page').style.display === 'none', "Test 5b mislukt: detail-page is niet verborgen");

    console.log("✅ Alle tests succesvol uitgevoerd!");
  } catch (error) {
    console.error("❌ Er is een fout opgetreden tijdens het testen:", error);
  }
}

// Voer de tests uit zodra de pagina volledig is geladen
window.addEventListener('DOMContentLoaded', runTests);
