# الفارس للأعمال - AlFaris Business Website

موقع الفارس للأعمال - شركة رائدة في تقديم الخدمات القانونية والإدارية في المملكة العربية السعودية.

## الميزات الجديدة (2025)

### تحسينات تحسين محركات البحث (SEO)
- ✅ عناوين صفحات فريدة ووصفية لكل صفحة
- ✅ أوصاف Meta مخصصة لكل صفحة
- ✅ بيانات منظمة (JSON-LD) للشركة والخدمات
- ✅ علامات Open Graph للمشاركة الاجتماعية
- ✅ علامات Twitter Card
- ✅ روابط canonical للصفحات
- ✅ تحسينات الأداء (preconnect, dns-prefetch)

### تحسينات الأداء
- ✅ Service Worker للتخزين المؤقت للملفات الثابتة
- ✅ تحميل الخطوط المحسن مع font-display: swap
- ✅ إمكانية ضغط ملفات CSS و JavaScript

### أدوات البناء (اختيارية)
- ✅ npm scripts للتطوير والبناء
- ✅ ضغط CSS باستخدام clean-css-cli
- ✅ ضغط JavaScript باستخدام terser
- ✅ خادم تطوير محلي
- ✅ فحص HTML باستخدام htmlhint

## التطوير المحلي

### متطلبات
- Python 3.x (للخادم المحلي)
- Node.js 16+ (للأدوات الاختيارية)

### تشغيل الخادم المحلي
```bash
# الطريقة الأساسية (Python)
python3 -m http.server 8080

# أو باستخدام npm
npm start
```

### أدوات التطوير (اختيارية)
```bash
# تثبيت أدوات التطوير
npm install

# فحص HTML
npm run validate

# ضغط الملفات
npm run minify

# بناء شامل (فحص + ضغط)
npm run build
```

## البنية

### الملفات الأساسية
- `index.html` - الصفحة الرئيسية
- `css/common.css` - الأنماط المشتركة
- `js/common.js` - JavaScript المشترك
- `sw.js` - Service Worker للتخزين المؤقت

### الصفحات
- `our-services-page.html` - صفحة الخدمات
- `legal-services-page.html` - الخدمات القانونية
- `government-transactions-page.html` - المعاملات الحكومية
- `packages-page.html` - الباقات
- `faq-page.html` - الأسئلة الشائعة
- `vision-page.html` - الرؤية والرسالة
- `licenses-page.html` - التراخيص
- `zakat-tax-page.html` - الإقرارات الزكوية
- `privacy-policy-page.html` - سياسة الخصوصية
- `terms-of-service-page.html` - الشروط والأحكام

## النشر

النشر تلقائي عبر GitHub Actions إلى GitHub Pages عند الدفع إلى الفرع الرئيسي.

### سير العمل
1. دفع التغييرات إلى `main`
2. GitHub Actions يبني ويرفع الموقع
3. الموقع متاح على GitHub Pages

## التقنيات المستخدمة

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Fonts**: Google Fonts - Noto Kufi Arabic
- **Icons**: Font Awesome 6.x
- **Build Tools**: clean-css-cli, terser, htmlhint
- **Deployment**: GitHub Pages + GitHub Actions

## الميزات التقنية

- ✅ تخطيط RTL للغة العربية
- ✅ تصميم متجاوب (Responsive)
- ✅ تحسين محركات البحث (SEO)
- ✅ Service Worker للأداء
- ✅ بيانات منظمة لمحركات البحث
- ✅ أمان وحماية البيانات
- ✅ توافق مع جميع المتصفحات الحديثة

---

جميع الحقوق محفوظة © الفارس للأعمال 2025