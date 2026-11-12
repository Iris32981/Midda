# Midda - Empower to act

Welkom bij de repository van de **Midda** website, ontwikkeld voor het schoolvak **Informatica**.

## Over het project
Dit project is oorspronkelijk opgezet als een prototype in Google Apps Script en vervolgens omgezet naar een zelfstandige webapplicatie (HTML, CSS en JavaScript) zodat deze via **GitHub** en **GitHub Pages** gehost kan worden.

De website presenteert de consultancy-diensten van Midda (Martin Kortekaas), inclusief:
- **Homepagina**: Introductie, klantquotes, herkenbare bedrijfsuitdagingen, expertises en resultaten.
- **Detailpagina**: Specifieke weergave per gekozen expertise (dynamisch ingeladen via JavaScript).
- **Persoonlijk profiel**: Achtergrondinformatie, doelstellingen en kernwaarden van Martin Kortekaas.
- **Contactpagina**: Directe contactgegevens en adresinformatie.

## Bestandsstructuur
- `index.html`: De hoofdstructuur van de website waarin alle pagina-secties zijn samengebracht.
- `style.css`: Alle vormgeving, kleuren, grid-indelingen en responsive stijlen.
- `app.js`: De JavaScript-logica voor de navigatie tussen de verschillende pagina's (`showHome`, `showProfile`, `showDetail`, `showContact`).
- `tests.js`: Automatische unit/DOM-tests met `console.assert()` die controleren of de paginanavigatie foutloos werkt.
- `README.md`: Projectdocumentatie.

## Gebruik & Testen
1. Open `index.html` in een webbrowser (of bezoek de live GitHub Pages-link).
2. Open de **Developer Tools** in je browser (`F12` of `Ctrl+Shift+I`) en ga naar het tabblad **Console** om de resultaten van `tests.js` te bekijken.
