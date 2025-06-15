# 馃幁 Teatr Miejski - Strona Internetowa

Profesjonalna strona internetowa dla instytucji kultury stworzona z u偶yciem **tylko HTML, CSS i JavaScript** - bez framework贸w czy bibliotek zewn臋trznych.

## 馃搵 Spis Tre艣ci

- [Demo i Funkcjonalno艣ci](#demo-i-funkcjonalno艣ci)
- [Technologie](#technologie)
- [Struktura Projektu](#struktura-projektu)
- [Instalacja i Uruchomienie](#instalacja-i-uruchomienie)
- [Funkcjonalno艣ci](#funkcjonalno艣ci)
- [Personalizacja](#personalizacja)
- [Responsywno艣膰](#responsywno艣膰)
- [Dost臋pno艣膰](#dost臋pno艣膰)
- [Optymalizacja](#optymalizacja)

## 馃帾 Demo i Funkcjonalno艣ci

### G艂贸wne Sekcje Strony:
- **Header** - Logo teatru z tagline
- **Nawigacja** - Sticky menu z smooth scroll
- **Hero** - Spektakularna sekcja g艂贸wna z t艂em
- **O nas** - Historia teatru ze statystykami
- **Repertuar** - Aktualny program spektakli
- **Cennik** - Transparentne ceny bilet贸w
- **Galeria** - Zdj臋cia z przedstawie艅
- **Kontakt** - Pe艂ne dane kontaktowe
- **Newsletter** - Formularz zapisu z walidacj膮
- **Footer** - Social media i linki dodatkowe

## 馃洜 Technologie

- **HTML5** - Semantyczna struktura
- **CSS3** - Nowoczesne stylowanie
  - CSS Grid & Flexbox
  - Custom Properties (CSS Variables)
  - Animacje i transycje
  - Media Queries
- **Vanilla JavaScript** - Interakcje
  - ES6+ features
  - Intersection Observer API
  - Form validation
  - Smooth scrolling

## 馃搧 Struktura Projektu

```
teatr-miejski/
鈹溾攢鈹€ index.html          # Strona g艂贸wna
鈹溾攢鈹€ style.css           # Style CSS
鈹溾攢鈹€ script.js           # JavaScript
鈹溾攢鈹€ README.md           # Dokumentacja
鈹斺攢鈹€ images/             # Folder na obrazy
    鈹溾攢鈹€ logo.png        # Logo teatru
    鈹溾攢鈹€ wnetrze.png     # T艂o hero section
    鈹溾攢鈹€ galeria1.jpg    # Zdj臋cia galerii
    鈹溾攢鈹€ galeria2.jpg
    鈹斺攢鈹€ galeria3.jpg
```

## 馃殌 Instalacja i Uruchomienie

### Metoda 1: Bezpo艣rednie otwarcie
```bash
# Sklonuj lub pobierz pliki projektu
# Otw贸rz index.html w przegl膮darce
```

### Metoda 2: Serwer lokalny
```bash
# Python 3
python -m http.server 8000

# Python 2
python -SimpleHTTPServer 8000

# Node.js (z npx)
npx serve .

# PHP
php -S localhost:8000
```

Strona b臋dzie dost臋pna pod adresem: `http://localhost:8000`

## 鉁?Funkcjonalno艣ci

### 馃幆 Nawigacja
- **Smooth scroll** do sekcji
- **Sticky navbar** przy scrollowaniu
- **Aktywne linki** pokazuj膮ce bie偶膮c膮 sekcj臋
- **Mobile menu** z animowanym hamburgerem

### 馃摫 Responsywno艣膰
- **Desktop first** design
- **Tablet** optymalizacja (1024px)
- **Mobile** layout (768px i mniej)
- **Elastyczne** komponenty

### 馃帹 Animacje
- **Scroll animations** dla element贸w
- **Hover effects** na przyciskach
- **Loading animations** przy starcie
- **Ripple effects** na klikni臋cia

### 馃摟 Formularz Newsletter
- **Real-time validation** email
- **Error handling** z komunikatami
- **Success feedback** po wys艂aniu
- **Accessibility** labels i ARIA

## 馃帹 Personalizacja

### Kolorystyka (CSS Variables)
```css
:root {
    --primary-gold: #D4AF37;     /* G艂贸wny z艂oty */
    --gold-light: #F4E797;       /* Jasny z艂oty */
    --gold-dark: #B8941F;        /* Ciemny z艂oty */
    --black-primary: #0A0A0A;    /* G艂贸wny czarny */
    --black-secondary: #1A1A1A;  /* Pomocniczy czarny */
    --white-primary: #FFFFFF;    /* Bia艂y */
}
```

### Fonty
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Wymiary i Spacing
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

## 馃摫 Responsywno艣膰

### Desktop (1200px+)
- Pe艂ny layout z sidebarem
- Grid 3-kolumnowy dla sekcji
- Du偶e obrazy i typografia

### Tablet (768px - 1024px)
- Grid 2-kolumnowy
- Zredukowane spacing
- Przystosowane menu

### Mobile (do 768px)
- Layout jednkolumnowy
- Hamburger menu
- Touch-friendly przyciski
- Zoptymalizowane formularze

## 鈾?Dost臋pno艣膰

### WCAG 2.1 Compliance
- **Semantic HTML** structure
- **ARIA labels** i role
- **Keyboard navigation** support
- **Focus indicators** dla wszystkich element贸w
- **Skip links** dla screen readers
- **Alt texts** dla obraz贸w

### Keyboard Navigation
- `Tab` - Nawigacja mi臋dzy elementami
- `Enter/Space` - Aktywacja przycisk贸w
- `Escape` - Zamykanie menu mobile

## 馃殌 Optymalizacja

### Performance
- **Minimized reflows** z CSS
- **Intersection Observer** dla animacji
- **Throttled scroll** events
- **Optimized images** (WebP support)

### SEO
- **Semantic HTML5** tags
- **Meta descriptions**
- **Structured data** ready
- **Open Graph** tags

### Loading
- **Critical CSS** inline
- **Lazy loading** dla obraz贸w
- **Preload** dla font贸w
- **Minified** assets

## 馃敡 Dodatkowe Funkcje

### JavaScript API
```javascript
// Dost臋pne metody globalne
TeatrMiejski.smoothScrollTo('#section');
TeatrMiejski.showNotification('Message', 'success');
TeatrMiejski.toggleMobileMenu();
```

### Event Tracking
- **Button clicks** tracking
- **Form submissions** monitoring
- **Scroll depth** analytics
- **Time on page** measurement

## 馃搨 Dodawanie Obraz贸w

### Wymagane obrazy:
1. **logo.png** (120x120px) - Logo teatru
2. **wnetrze.png** (1920x1080px) - T艂o hero section
3. **galeria1.jpg** (800x600px) - Zdj臋cie spektaklu
4. **galeria2.jpg** (800x600px) - Wn臋trze teatru
5. **galeria3.jpg** (800x600px) - Zesp贸艂 aktorski

### Optymalne formaty:
- **Logo**: PNG z przezroczysto艣ci膮
- **Hero**: WebP lub JPG (optymalizowany)
- **Galeria**: WebP lub JPG (800x600px)

## 馃専 Wskaz贸wki Rozwoju

### Dodawanie Nowych Sekcji
1. Dodaj HTML section z `id`
2. Dodaj link w nawigacji
3. Dodaj style CSS
4. Zaktualizuj scroll observer

### Customizacja Kolor贸w
1. Zmie艅 CSS variables w `:root`
2. Kolory automatycznie propaguj膮 si臋
3. Sprawd藕 kontrast dla dost臋pno艣ci

### Dodawanie Animacji
1. Dodaj klas臋 `.animate-on-scroll`
2. Element automatycznie animuje si臋
3. Customizuj w CSS je艣li potrzeba

## 馃摓 Wsparcie

Strona jest w pe艂ni samodzielna i nie wymaga zewn臋trznych zale偶no艣ci. W przypadku problem贸w:

1. Sprawd藕 konsol臋 przegl膮darki
2. Upewnij si臋, 偶e pliki s膮 w odpowiednich lokalizacjach
3. Sprawd藕 czy serwer obs艂uguje wszystkie typy plik贸w

## 馃搫 Licencja

Projekt stworzony jako **Frontend Static Master** - wolny do u偶ytku i modyfikacji.

---

**Stworzone z 鉂わ笍 dla Teatru Miejskiego**

*Scena Pe艂na Emocji od 1925 roku* 
