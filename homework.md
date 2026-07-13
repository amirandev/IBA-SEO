# **საშინაო სამუშაო (Classwork / Homework) — ლექცია #4**
## **Meta Tags & React Helmet-async პრაქტიკული ამოცანები**

> ეს ფაილი ავსებს `4.Lecture React SEO Classwork.md`-ს. აქ არის **დამატებითი საშინაო სამუშაო** — კონკრეტული ამოცანები, რომლებიც აფიქსირებს, როგორ მართოთ Meta თეგები `react-helmet-async`-ით.
> წინაპირობა: გაქვთ Vite + React პროექტი (იხ. ქლასვორკი, სლაიდი 3), დაინსტალირებულია `react-router-dom` (სლაიდი 4) და `react-helmet-async` (სლაიდი 6).

---

## **ამოცანა #1 — Reusable Seo კომპონენტის შექმნა**

**მიზანი:** ყველა გვერდს ჰქონდეს ერთიანი, გამეორებადი Meta თეგების კომპონენტი, რათა არ მოხდეს კოდის დუბლირება.

**ნაბიჯი 1:** შექმენით `src/components/Seo.jsx`:

```jsx
// src/components/Seo.jsx
import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, keywords, path, image, type }) {
  const siteUrl = 'https://yourdomain.com';
  const siteName = 'MyShop';
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type || 'website'} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default Seo;
```

**ნაბიჯი 2:** გამოიყენეთ მინიმუმ 3 გვერდზე:

```jsx
// src/pages/Home.jsx
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo title="მთავარი" description="კეთილი იყოს თქვენი მობრძანება" path="/" />
      <h1>მთავარი გვერდი</h1>
    </>
  );
}
```

**✅ შეფასება:** ბრაუზერში გადადით `/`, `/about`, `/contact` — თითოეულს უნდა ჰქონდეს განსხვავებული Tab-ის სათაური და `<meta description>`.

---

## **ამოცანა #2 — დინამიური Meta თეგები პროდუქტის გვერდზე**

**მიზანი:** პროდუქტის გვერდის სათაური, canonical და og:url **ავტომატურად** შეივსოს URL-დან (`useParams` / `useLocation`).

**რაუტი:** `/products/:category/:productId`

```jsx
// src/pages/ProductDetail.jsx
import { Helmet } from 'react-helmet-async';
import { useParams, useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const { category, productId } = useParams();
  const location = useLocation();

  // productId: "steel-pipe-fitting-925872" → "Steel Pipe Fitting 925872"
  const productName = productId
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  const fullUrl = `https://yourdomain.com${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>{productName} | MyShop</title>
        <meta name="description" content={`იყიდე ${productName} ონლაინ. საუკეთესო ფასი.`} />
        <link rel="canonical" href={fullUrl} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="product" />
      </Helmet>
      <h1>{productName}</h1>
    </>
  );
}
```

**✅ შეფასება:** გადადით `/products/water-supply/steel-pipe-fitting-925872` → Tab-ის სათაური უნდა იყოს "Steel Pipe Fitting 925872 | MyShop", ხოლო canonical — სრული URL.

---

## **ამოცანა #3 — Open Graph + Twitter Card ყველა გვერდზე**

**მიზანი:** სოციალურ ქსელებში (Facebook, LinkedIn, Twitter/X) გაზიარებისას სწორი ბარათი გამოჩნდეს.

გამოიყენეთ ამოცანა #1-ის `Seo.jsx` (ის უკვე შეიცავს `og:*` და `twitter:*`). დაამატეთ `image` პროპი პროდუქტის გვერდებზე:

```jsx
<Seo
  title={productName}
  description={product.description}
  path={`/products/${category}/${productId}`}
  image="https://yourdomain.com/images/product-hero.webp"
  type="product"
/>
```

**✅ შეფასება:**
1. ჩასვით გვერდის URL **Open Graph Debugger**-ში (Chrome Extension)
2. შეამოწმეთ: og:title, og:description, og:image, og:url ჩანს?

---

## **ამოცანა #4 — hreflang + x-default მრავალენოვან საიტში**

**მიზანი:** თუ გაქვთ ქართული და ინგლისური ვერსია, Helmet-ით დაამატოთ `hreflang` თეგები.

```jsx
// src/components/Seo.jsx — დაამატეთ props: lang, alternateUrls
import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, path, lang = 'ka', alternate = {} }) {
  const siteUrl = 'https://yourdomain.com';

  return (
    <Helmet>
      <title>{title} | MyShop</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />

      {/* hreflang ალტერნატივები */}
      <link rel="alternate" hreflang="ka" href={`${siteUrl}/ka${path}`} />
      <link rel="alternate" hreflang="en" href={`${siteUrl}/en${path}`} />
      <link rel="alternate" hreflang="x-default" href={`${siteUrl}/ka${path}`} />
    </Helmet>
  );
}
```

**⚠️ წესი:** hreflang თეგები უნდა იყოს **ო�რმხრივი** (ქართული მიუთითებს ინგლისურზე და პირიქით) და canonical-თან არ უნდა ეწინააღმდეგებოდეს.

---

## **ამოცანა #5 — Meta თეგების აუდიტი (Lighthouse + SEO Meta in 1 Click)**

**მიზანი:** შეამოწმოთ, რომ ყველა გვერდს ჰქონდეს სწორი Meta თეგები.

**ნაბიჯები:**
1. დააინსტალირეთ **SEO Meta in 1 Click** (Chrome Extension)
2. გაუშვით თითოეულ გვერდზე → შეამოწმეთ Title, Description, OG, Canonical
3. გაუშვით **Lighthouse → SEO**:
   - 🟢 `<title>` არსებობს?
   - 🟢 `meta description` არსებობს?
   - 🟢 `<h1>` არსებობს?
   - 🟢 სურათებს აქვს `alt`?
4. გამოასწორეთ ყველა შეცდომა

**✅ შეფასება:** Lighthouse SEO Score ≥ **90**.

---

## **ამოცანა #6 (Bonus → ლექცია #5) — Seo.jsx + JSON-LD**

**მიზანი:** `Seo.jsx`-ში დაამატოთ JSON-LD სტრუქტურირებული მონაცემები (Product/Organization/Breadcrumb Schema).

> 📚 სრული ინსტრუქცია და მაგალითები — **ლექცია #5** (`5.Structured Data & JSON-LD.md`, სლაიდი 10).

მოკლა ფორმა:
```jsx
// src/components/Seo.jsx
export default function Seo({ title, description, path, jsonLd }) {
  const siteUrl = 'https://yourdomain.com';
  const fullUrl = `${siteUrl}${path}`;
  return (
    <Helmet>
      <title>{title} | MyShop</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
```

---

## **📋 ჩასაბარებელი სია (Submission Checklist)**

სტუდენტმა უნდა წარმოადგინოს:

- [ ] **ამოცანა #1:** `Seo.jsx` კომპონენტი (title, description, canonical, og:*, twitter:*) + გამოყენება ≥3 გვერდზე
- [ ] **ამოცანა #2:** დინამიური Meta `useParams`/`useLocation`-ით პროდუქტის გვერდზე
- [ ] **ამოცანა #3:** Open Graph + Twitter Card `image`-ით, შემოწმებული Open Graph Debugger-ით
- [ ] **ამოცანა #4:** `hreflang` + `x-default` Helmet-ით (მრავალენოვანი საიტისთვის)
- [ ] **ამოცანა #5:** Lighthouse SEO Score ≥ 90, ყველა გვერდზე სწორი Meta თეგები
- [ ] **ამოცანა #6 (Bonus):** `Seo.jsx` + JSON-LD (ლექცია #5)

**Key Takeaway:**
> "კარგი React დეველოპერი ქმნის აპლიკაციას, **SEO-aware** დეველოპერი კი `react-helmet-async`-ით თითოეულ გვერდს აძლევს სწორ `<title>`, აღწერას და Canonical-ს — და Google პოულობს მას."
