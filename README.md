# 🍽️ TRPEZA — Restoran Website Template
## Kompletna Dokumentacija

---

## 📁 STRUKTURA PROJEKTA

```
trpeza/
│
├── index.html          ← Glavna HTML stranica (jedini fajl koji posetioci vide)
├── css/
│   └── style.css       ← Svi stilovi (boje, layout, animacije, responsive)
├── js/
│   └── main.js         ← Sva JavaScript logika (GSAP, tabovi, lightbox, nav)
│
├── img/                ← KREIRATI RUČNO — sve fotografije idu ovde
│   ├── hero-jezero.jpg       Fotografija za Hero sekciju
│   ├── about-terasa.jpg      Fotografija za O nama sekciju
│   ├── og-image.jpg          Open Graph thumbnail (za deljenje na mrežama)
│   ├── hero-poster.jpg       Thumbnail za video (ako aktiviraš video loop)
│   └── gallery/
│       ├── gal-01.jpg        Galerija — fotografija 1 (PORTRETNA)
│       ├── gal-02.jpg        Galerija — fotografija 2
│       ├── gal-03.jpg        Galerija — fotografija 3
│       ├── gal-04.jpg        Galerija — fotografija 4 (PANORAMSKA)
│       ├── gal-05.jpg        Galerija — fotografija 5
│       └── gal-06.jpg        Galerija — fotografija 6
│
└── video/              ← KREIRATI ako imaš video snimak
    ├── hero-loop.mp4
    └── hero-loop.webm
```

---

## 🖼️ FOTOGRAFIJE — KOMPLETNO UPUTSTVO

### Preuzimanje sa Instagrama (@bellavista_restoran)

**Metoda 1 — Desktop browser:**
1. Otvori Instagram profil `@bellavista_restoran` u browser-u
2. Klikni na željenu fotografiju
3. Desni klik na sliku → "Sačuvaj sliku kao..."
4. Sačuvaj u odgovarajući folder

**Metoda 2 — Downloader alat:**
- Koristi `https://snapinsta.app` ili `https://igdownloader.app`
- Unesi URL Instagram objave → preuzmi u full HD

**Optimizacija pre dodavanja na sajt:**
- Alat: `https://squoosh.app` (Google) ili `https://tinypng.com`
- Format: WebP (manji fajl) ili JPEG (bolja kompatibilnost)
- Kvalitet: 80–85%

---

### 📐 DIMENZIJE FOTOGRAFIJA — TABELA

| Fajl | Sekcija | Dimenzije | Orijentacija | Maks. veličina | Sadržaj |
|------|---------|-----------|--------------|----------------|---------|
| `hero-jezero.jpg` | HERO | **1920 × 1080px** (min) | Landscape | 400KB | Panoramski pogled na jezero, terasa, zlatni sat |
| `hero-poster.jpg` | HERO (video) | **1920 × 1080px** | Landscape | 150KB | Isti kadar kao početni frame videa |
| `about-terasa.jpg` | O NAMA | **800 × 950px** | **PORTRET** | 250KB | Terasa, enterijer, detalj stola sa jezerom u pozadini |
| `og-image.jpg` | Open Graph | **1200 × 630px** | Landscape | 200KB | Reprezentativna fotografija za deljenje (Facebook, WhatsApp) |
| `gal-01.jpg` | GALERIJA #1 | **800 × 1100px** | **PORTRET (obavezno)** | 300KB | Terasa / enterijer u celini — stoji u 2 reda |
| `gal-02.jpg` | GALERIJA #2 | **700 × 500px** | Landscape | 200KB | Specijalitet kuhinje — serviran tanjir |
| `gal-03.jpg` | GALERIJA #3 | **700 × 500px** | Landscape | 200KB | Enterijer, detalj stola, sveće, dekoracija |
| `gal-04.jpg` | GALERIJA #4 | **1100 × 500px** | **PANORAMA (obavezno)** | 300KB | Pogled na jezero, panorama terase — stoji u 2 kolone |
| `gal-05.jpg` | GALERIJA #5 | **700 × 500px** | Landscape | 200KB | Detalj serviranja, vino, čaše |
| `gal-06.jpg` | GALERIJA #6 | **700 × 500px** | Landscape | 200KB | Večernji ambijent, terasa noću, sveće |

> **Napomena:** Dimenzije su minimalne preporučene. Veće fotografije su bolje za kvalitet,
> ali moraju biti optimizovane da ne usporavaju učitavanje sajta.

---

## ✏️ EDITABLE TAGOVI — VODIČ ZA IZMENE

Svi delovi koji se menjaju označeni su komentarima u obliku:
```html
<!-- [EDITABLE: naziv-taga] Opis šta treba promeniti -->
```

### 📌 BRZI PREGLED SVIH EDITABLES

#### index.html

| Tag | Gde se nalazi | Šta se menja |
|-----|---------------|--------------|
| `meta-title` | `<head>` | Naslov stranice u browser-u i Google rezultatima |
| `meta-description` | `<head>` | Kratki opis za Google (max 160 znakova) |
| `meta-keywords` | `<head>` | Ključne reči za pretragu |
| `og:image` | `<head>` | URL fotografije za deljenje na mrežama |
| `og:url` | `<head>` | Finalni URL sajta kada bude online |
| Schema podaci | `<head>` | Strukturirani podaci: adresa, telefon, koordinate |
| `nav-logo` | Navigacija | Naziv restorana u navigacionoj traci |
| `hero-img-src` | Hero sekcija | `src` atribut hero fotografije |
| `hero-video-*` | Hero sekcija | Putanje do video fajlova (kada aktiviraš) |
| `hero-eyebrow` | Hero sekcija | Mala labela ispod naziva ("Jezero Kudreč...") |
| `hero-title` | Hero sekcija | Veliki naziv restorana u hero-u |
| `hero-sub` | Hero sekcija | Tagline / podnaslov u hero-u |
| `hero-cta-tel` | Hero sekcija | `href="tel:+381..."` broj za rezervacije |
| `about-img-src` | O nama | `src` atribut fotografije u O nama sekciji |
| `about-badge` | O nama | Tekst zlatnog bedža (lokacija) |
| `about-title` | O nama | Naslov O nama sekcije |
| `about-body-sr` | O nama | Tekst opisa na srpskom (2 pasusa) |
| `about-body-en` | O nama | Tekst opisa na engleskom (2 pasusa) |
| `about-stats` | O nama | Statistike: Google ocena, broj recenzija |
| `chef-signature` | O nama | Ime i zvanje šefa kuhinje (kaligrafski potpis) |
| `tab-labels` | Meni | Nazivi kategorija u tabovima |
| `dish` | Meni | Svako jelo: naziv (SR+EN), opis (SR+EN) |
| `price` | Meni | Cena svakog jela u RSD |
| `menu-footnote` | Meni | Napomena na dnu meni panela |
| `gal-01` do `gal-06` | Galerija | `src` atribut svake fotografije u galeriji |
| `maps-embed` | Lokacija | `src` atribut Google Maps iframe-a |
| `address` | Lokacija | Ulica i grad restorana |
| `phone` | Lokacija | Broj telefona za rezervacije |
| `hours` | Lokacija | Radno vreme po danima |
| `reserve-tel` | Lokacija | `href="tel:+381..."` na Reserve dugmetu |
| `social-links` | Lokacija | Instagram i Facebook URL |
| `footer-logo` | Footer | Naziv u footer-u |
| `footer-tagline` | Footer | Tagline ispod naziva |
| `footer-ig` | Footer | Instagram link |
| `footer-fb` | Footer | Facebook link |
| `footer-tel` | Footer | Telefon u footer-u |
| `copyright` | Footer | Godina i naziv u copyright tekstu |

---

### 🎨 PROMENE U CSS (css/style.css)

#### Boje (`:root` blok, vrh fajla)
```css
:root {
  --bg:       #F4F0E8;  /* Pozadina stranice — boja papira */
  --bg-dark:  #1A2328;  /* Tamna pozadina (meni, footer) */
  --gold:     #B8956A;  /* Zlatna akcentna boja — CTA, labele */
  --water:    #5B8296;  /* Plava jezera — statistike, akcenti */
  --nature:   #7A9060;  /* Maslinasta zelena */
  --cream:    #FAF7F2;  /* Off-white za svetle sekcije */
}
```
Izmeni HEX vrednosti da prilagodiš paletu brandu.

#### Veličina navigacione trake
```css
--nav-h: 80px;  /* Povećaj/smanji prema potrebi */
```

---

### 🗺️ GOOGLE MAPS EMBED — KORAK PO KORAK

1. Otvori `https://maps.google.com` u Chrome/Firefox
2. U tražilicu upiši: **"Bellavista restoran Smederevska Palanka"**
3. Klikni na pin restorana na mapi
4. U bočnom panelu klikni dugme **"Podeli"** (ikona strelice)
5. Izaberi karticu **"Ugradi kartu"** (Embed a map)
6. Klikni **"KOPIRAJ HTML"**
7. Iz kopiranog koda izvadi vrednost `src="..."` atributa
8. U `index.html` pronađi `<iframe` u `#lokacija` sekciji
9. Zameni `src` atribut kopiranom URL adresom

**Primer finalnog src-a:**
```
src="https://www.google.com/maps/embed?pb=!1m18!1m12!..."
```

---

### 🎬 AKTIVACIJA VIDEO LOOP HERO-A

Kada dobiješ profesionalni video snimak restorana/terase:

**Korak 1 — Pripremi video fajlove:**
- Format: MP4 (H.264 codec) + WebM (VP9 codec)
- Dimenzije: 1920 × 1080px, 30fps
- Trajanje: 10–30 sekundi (loop)
- Veličina: max 8MB po fajlu (kompresuj na `handbrake.fr`)
- Sačuvaj kao: `video/hero-loop.mp4` i `video/hero-loop.webm`

**Korak 2 — U `index.html`:**
```html
<!-- Obriši ili zakomentiraj ovu img liniju: -->
<img class="hero-img" src="img/hero-jezero.jpg" ...>

<!-- Pronađi video blok (zakomentarisan) i uncommentuj ga:
     Ukloni "<!--" na početku i "-->" na kraju video bloka -->
```

**Korak 3 — U `css/style.css`:**
```css
/* Pronađi zakomentarisani blok i uncommentuj: */
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**Korak 4 — U `js/main.js`:**
```js
/* Pronađi i zameni '.hero-img' sa '.hero-video': */
gsap.from('.hero-video', { scale: 1.16, duration: 3.0, ease: 'power3.out' });
```

---

## 🌐 DODAVANJE NOVOG JELA U MENI

Kopiraj sledeći blok i nalepi unutar odgovarajućeg `.menu-grid` div-a:

```html
<!-- [EDITABLE: dish] Naziv jela — Novo jelo -->
<div class="menu-row">
  <div>
    <div class="dish-name">
      <span data-lang="sr">Naziv jela na srpskom</span>
      <span data-lang="en">Dish name in English</span>
    </div>
    <div class="dish-desc">
      <span data-lang="sr">Kratki opis sastojaka na srpskom</span>
      <span data-lang="en">Short ingredient description in English</span>
    </div>
  </div>
  <!-- [EDITABLE: price] Cena u RSD -->
  <div class="dish-price">1.200 <small>rsd</small></div>
</div>
```

---

## 🔧 DODAVANJE NOVE KATEGORIJE U MENI

### 1. Dodaj tab dugme (u `.tabs-row`):
```html
<button class="tab-btn" onclick="openTab('nova-kat',6)" role="tab" aria-selected="false" aria-controls="p-nova-kat">
  <span data-lang="sr">Nova Kategorija</span>
  <span data-lang="en">New Category</span>
</button>
```

### 2. Dodaj panel (u `.menu-panels`):
```html
<div class="menu-panel" id="p-nova-kat" role="tabpanel">
  <div class="menu-grid">
    <!-- Ovde idu menu-row blokovi -->
  </div>
</div>
```

> **Napomena:** Broj u `openTab('nova-kat', 6)` mora biti redni broj dugmeta (počev od 0).

---

## 📱 MOBILNI MENI — DODAVANJE LINKA

Ako dodaš novu sekciju, dodaj link i u mobilni overlay meni:
```html
<!-- U div.mobile-nav, dodaj: -->
<a href="#nova-sekcija" onclick="closeMob()">
  <span data-lang="sr">Naziv</span>
  <span data-lang="en">Name</span>
</a>
```

---

## 🚀 POSTAVLJANJE NA WEB (Deployment)

### Opcija A — Lokalno testiranje (bez interneta)
1. Preuzmi sve fajlove u jedan folder
2. Otvori `index.html` direktno u Chrome/Firefox
3. ⚠️ Google Maps embed možda neće raditi lokalno (to je normalno)

### Opcija B — Hostovanje (preporučeno)
**Besplatni hostinzi:**
- `https://netlify.com` — prevuci folder direktno na sajt (drag & drop deploy)
- `https://vercel.com` — isto kao Netlify
- `https://pages.github.com` — ako koristiš GitHub

**Plaćeni hostinzi za produkciju (Serbia):**
- `https://sbb.rs/hosting`
- `https://webhostingrs.rs`
- `https://superhosting.rs`

**Koraci za Netlify (najbrže):**
1. Registruj se na `netlify.com`
2. Klikni "Add new site" → "Deploy manually"
3. Prevuci celi `trpeza/` folder na upload zonu
4. Sajt je online za 30 sekundi na besplatnom URL-u

---

## 🎯 SEO CHECKLIST — Pre lansiranja

- [ ] Ažurirani `<title>` i `<meta name="description">` u index.html
- [ ] Postavljeni Schema.org podaci (adresa, telefon, koordinate)
- [ ] `og:image` postavljeno i slika je 1200×630px
- [ ] `og:url` postavljeno na stvarni URL sajta
- [ ] Google Maps embed sa pravom lokacijom
- [ ] Sve slike su optimizovane (max 400KB za hero, max 200KB za galeriju)
- [ ] `alt` atributi na svim fotografijama opisuju sadržaj
- [ ] Sajt je testiran na mobilnom uređaju
- [ ] Proveri Google PageSpeed: `https://pagespeed.web.dev`

---

## ♿ PRISTUPAČNOST (Accessibility)

Template je izgrađen sa WCAG 2.1 standardima:
- Sve interaktivne komponente imaju `aria-label` atribute
- Tabovi koriste `role="tab"` i `aria-selected` stanja
- Lightbox koristi `role="dialog"` i `aria-modal`
- Keyboard navigacija: `Tab` za kretanje, `Escape` za zatvaranje lightboxa/mobilnog menija
- Fokus trap u lightboxu i mobilnom meniju

---

## 🐛 ČESTI PROBLEMI I REŠENJA

| Problem | Uzrok | Rešenje |
|---------|-------|---------|
| Slike se ne učitavaju | Pogrešna putanja | Proveri `src` atribut — putanje su relativne od `index.html` |
| Google Maps ne radi lokalno | CORS restrikcija | Normalno — radi kada se sajt postavi online |
| Animacije ne rade | GSAP CDN blokiran | Proveri internet konekciju; za offline rad preuzmi GSAP lokalno |
| Tekst pada van okvira | Font nije učitan | Proveri internet konekciju (Google Fonts potreban za fontove) |
| Sticky tab ne lepuje | Z-index konflikt | Proveri da ni jedan roditeljski element nema `transform` CSS |
| Video ne se reprodukuje | Format nije podržan | Obezbedi oba formata: `.mp4` i `.webm` |

---

## 📞 KONTAKT PODACI KOJI SE MENJAJU

Svi kontakt podaci su centralizovani — **pronađi i zameni** sve instance:

```
tel:+381631110009  →  Zameni sa pravim brojem telefona
063 / 111 - 0009   →  Zameni sa formatiranim brojem za prikaz
```

**Brza zamena u VS Code:**
- Otvori `index.html` i `js/main.js`
- Pritisni `Ctrl+H` (Find & Replace)
- Pronađi: `+381631110009` → Zameni sa: `+381XXXXXXXXX`

---

*Template izrađen za Restoran Trpeza (Bellavista) · Jezero Kudreč, Smederevska Palanka*
*Verzija 1.0.0 · 2025*
