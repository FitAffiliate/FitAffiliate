console.log("Affiliate Seite geladen");
// ==================== LANGUAGE SYSTEM ====================

const translations = {
    de: {
        home: "Home",
        impressum: "Impressum",
        datenschutz: "Datenschutz",
	language: "Sprache",

        heroTitle: "Die besten Fitness Produkte – ehrlich empfohlen",
        heroText: "Vergleiche Supplements & Zubehör für Muskelaufbau und Performance",

        affiliate: "Hinweis: Diese Website enthält Affiliate-Links. Wenn du über einen dieser Links einkaufst, erhalten wir eine kleine Provision. Für dich entstehen keine zusätzlichen Kosten.",

        products: "Empfohlene Produkte",
		searchPlaceholder: "Produkt suchen"
        wheyTitle: "Whey Protein",
        wheyText: "Ideal für Muskelaufbau & Regeneration",
        buy1: "Jetzt kaufen",

        creatineTitle: "Creatin Monohydrat",
        creatineText: "Mehr Kraft & Leistung",
        buy2: "Zum Angebot",

        shakerTitle: "Protein Shaker",
        shakerText: "BPA-frei, 700ml",
        buy3: "Jetzt ansehen",

        copyright: "© 2025 FitAffiliate"
    },

    en: {
        home: "Home",
        impressum: "Legal Notice",
        datenschutz: "Privacy Policy",
	language: "Language",

        heroTitle: "The best fitness products – honestly recommended",
        heroText: "Compare supplements & gear for muscle growth and performance",

        affiliate: "Note: This website contains affiliate links. If you purchase through them, we earn a small commission at no extra cost to you.",

        products: "Recommended Products",
		searchPlaceholder: "Search Products"
        wheyTitle: "Whey Protein",
        wheyText: "Perfect for muscle growth & recovery",
        buy1: "Buy now",

        creatineTitle: "Creatine Monohydrate",
        creatineText: "More strength & power",
        buy2: "View offer",

        shakerTitle: "Protein Shaker",
        shakerText: "BPA free, 700ml",
        buy3: "View",

        copyright: "© 2025 FitAffiliate"
    }
};

function setLanguage(lang) {
    localStorage.setItem("language", lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
        const key = el.getAttribute("data-lang");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

	const searchInput = document.getElementById("search");
if (searchInput) {
    searchInput.placeholder = translations[lang].searchPlaceholder;
}

// Dropdown verbinden
const langSelect = document.getElementById("langSelect");
if (langSelect) {
    langSelect.addEventListener("change", function() {
        setLanguage(this.value);
    });
}

// Sprache beim Laden setzen
const savedLang = localStorage.getItem("language") || "de";
if (langSelect) langSelect.value = savedLang;

setLanguage(savedLang);
// ==================== SUCHLEISTE ====================
// Funktion durchsucht Produkte nach Titel und Beschreibung
function searchProducts() {
    const input = document.getElementById("search").value.toLowerCase(); // Wert aus Suchleiste
    const products = document.querySelectorAll(".product"); // Alle Produkt-Divs

    products.forEach(product => {
        // Titel (h3) und Beschreibung (p) durchsuchen
        const title = product.querySelector("h3").textContent.toLowerCase();
        const text = product.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || text.includes(input)) {
            product.style.display = "block"; // Produkt anzeigen
        } else {
            product.style.display = "none"; // Produkt ausblenden
        }
    });
}

