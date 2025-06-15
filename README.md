# 🎭 Teatr Miejski – Strona Internetowa

Profesjonalna strona internetowa dla instytucji kultury, stworzona wyłącznie przy użyciu **HTML, CSS i JavaScript** – bez frameworków i bibliotek zewnętrznych.

## 📌 Spis treści

- [Demo i funkcjonalności](#demo-i-funkcjonalności)
- [Technologie](#technologie)
- [Struktura projektu](#struktura-projektu)
- [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
- [Funkcjonalności](#funkcjonalności)
- [Personalizacja](#personalizacja)
- [Responsywność](#responsywność)
- [Dostępność](#dostępność)
- [Optymalizacja](#optymalizacja)
- [Dodatkowe funkcje](#dodatkowe-funkcje)
- [Dodawanie obrazów](#dodawanie-obrazów)
- [Wskazówki rozwoju](#wskazówki-rozwoju)
- [Wsparcie](#wsparcie)
- [Licencja](#licencja)

---

## 🚀 Demo i funkcjonalności

### Główne sekcje strony:

- **Nagłówek** – logo teatru z hasłem
- **Nawigacja** – sticky menu z płynnym przewijaniem
- **Hero** – efektowna sekcja główna z tłem
- **O nas** – historia teatru ze statystykami
- **Repertuar** – aktualny program spektakli
- **Cennik** – przejrzyste ceny biletów
- **Galeria** – zdjęcia z przedstawień
- **Kontakt** – dane kontaktowe
- **Newsletter** – formularz zapisu z walidacją
- **Stopka** – linki i social media

---

## 🧱 Technologie

- **HTML5** – semantyczna struktura
- **CSS3** – nowoczesne stylowanie:
  - Grid & Flexbox
  - Zmienne CSS (`--custom-properties`)
  - Animacje i przejścia
  - Media Queries
- **Vanilla JavaScript**:
  - Funkcje ES6+
  - Intersection Observer API
  - Walidacja formularzy
  - Smooth scrolling

---

## 📁 Struktura projektu

```
teatr-miejski/
├── index.html        # Strona główna
├── style.css         # Style CSS
├── script.js         # Interakcje JS
├── README.md         # Dokumentacja
└── images/           # Folder z grafikami
    ├── logo.png
    ├── wnetrze.png
    ├── galeria1.jpg
    ├── galeria2.jpg
    └── galeria3.jpg
```

---

## ⚙️ Instalacja i uruchomienie

### Opcja 1 – bezpośrednie otwarcie:

```bash
# Pobierz repozytorium jako ZIP lub sklonuj je
# Otwórz plik index.html w przeglądarce
```

### Opcja 2 – lokalny serwer:

```bash
# Python 3
python -m http.server 8000

# Node.js (z npx)
npx serve .

# PHP
php -S localhost:8000
```

Po uruchomieniu: `http://localhost:8000`

---

## ✅ Funkcjonalności

### 🔗 Nawigacja

- Płynne przewijanie
- Sticky navbar
- Aktywne linki
- Mobilne menu (hamburger)

### 📱 Responsywność

- Desktop-first layout
- Dostosowanie do tabletów i telefonów
- Elastyczne komponenty

### ✨ Animacje

- Scrollowane wejścia elementów
- Hover/klik efekty
- Startowe ładowanie animacji
- Efekt fali na kliknięcia

### 📨 Newsletter

- Walidacja e-maili w czasie rzeczywistym
- Komunikaty błędów i sukcesu
- Dostępność z ARIA i labelami

---

## 🎨 Personalizacja

### Zmienne kolorów (CSS Variables)

```css
:root {
  --primary-gold: #D4AF37;
  --gold-light: #F4E797;
  --gold-dark: #B8941F;
  --black-primary: #0A0A0A;
  --black-secondary: #1A1A1A;
  --white-primary: #FFFFFF;
}
```

### Fonty

- Nagłówki: *Playfair Display*
- Treść: *Inter*

### Spacing

```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-xxl: 4rem;
}
```

---

## 📐 Responsywność

### Desktop (1200px+)

- Trójkolumnowe sekcje
- Sidebar
- Duże zdjęcia i typografia

### Tablet (768–1024px)

- Dwie kolumny
- Zmniejszone marginesy
- Przeskalowane menu

### Mobile (≤768px)

- Układ jednokolumnowy
- Hamburger menu
- Przystosowane przyciski
- Prosty formularz

---

## ♿ Dostępność

- Semantyczny HTML
- ARIA i role
- Pełna nawigacja klawiaturą
- Widoczne focusy
- Alt texty i skip links

### Klawiszologia:

- `Tab` – nawigacja po elementach
- `Enter`/`Space` – aktywacja przycisków
- `Escape` – zamknięcie menu mobilnego

---

## 🚅 Optymalizacja

### Wydajność

- Minimalizacja reflow przez przemyślany CSS
- Intersection Observer
- Throttle scroll eventów
- Obrazy zoptymalizowane (WebP)

### SEO

- Semantyczne tagi HTML5
- Meta description
- Dane strukturalne
- Open Graph

### Ładowanie

- Krytyczne CSS inline
- Lazy loading obrazów
- Preload fontów
- Minifikacja zasobów

---

## 🧠 Dodatkowe funkcje

### API JavaScript

```js
TeatrMiejski.smoothScrollTo('#id');
TeatrMiejski.showNotification('Komunikat', 'success');
TeatrMiejski.toggleMobileMenu();
```

### Śledzenie zdarzeń

- Kliknięcia przycisków
- Wysyłki formularzy
- Głębokość scrolla
- Czas na stronie

---

## 🖼️ Dodawanie obrazów

### Obowiązkowe grafiki:

1. `logo.png` – logo teatru (120x120px)
2. `wnetrze.png` – tło główne (1920x1080px)
3. `galeria1.jpg` – spektakl
4. `galeria2.jpg` – wnętrze
5. `galeria3.jpg` – zespół

### Zalecane formaty:

- **Logo**: PNG z przezroczystością
- **Hero**: JPG/WebP
- **Galeria**: JPG/WebP (800x600px)

---

## 🔧 Wskazówki rozwoju

### Nowe sekcje

1. Dodaj `section` z `id`
2. Uzupełnij nawigację
3. Dopisz style
4. Zaktualizuj JS (observer)

### Kolory

1. Zmień zmienne w `:root`
2. Kolory zmienią się globalnie
3. Sprawdź kontrast WCAG

### Animacje

1. Dodaj `.animate-on-scroll`
2. Działa automatycznie
3. Dostosuj w CSS

---

## 🆘 Wsparcie

Projekt nie korzysta z żadnych zależności zewnętrznych. Jeśli coś nie działa:

1. Sprawdź konsolę w przeglądarce
2. Upewnij się, że wszystkie pliki są na miejscu
3. Serwer musi obsługiwać pliki statyczne

---

## 📄 Licencja

Projekt stworzony jako **Frontend Static Master** – darmowy do użytku i modyfikacji.

---

**Stworzone z ❤️ dla Teatru Miejskiego**  
*Scena Pełna Emocji od 1925 roku*
