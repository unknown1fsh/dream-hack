# 🎓 Dream Hack - Online Eğitim ve Uzmanlık Platformu

Modern, ölçeklenebilir ve Türkiye pazarına uygun bir online eğitim platformu. Bireylerin ve kurumların uzmanlardan canlı veya video tabanlı eğitimler alabileceği, eğitmenlerin ise kendi eğitimlerini satabileceği bir pazar yeri.

## ✨ Özellikler

- 📚 **Eğitim Katalogu**: Geniş eğitim kütüphanesi ile arama ve filtreleme
- 👥 **Kullanıcı Yönetimi**: Güvenli kayıt, giriş ve profil yönetimi
- 💳 **Ödeme Entegrasyonu**: iyzico/PayTR ile güvenli ödeme altyapısı
- 🎥 **Canlı ve Video Dersler**: Hem canlı hem de kayıtlı ders desteği
- 🌍 **Çoklu Dil Desteği**: Türkçe ve İngilizce dil desteği
- 👨‍💼 **Yönetim Paneli**: Kapsamlı admin paneli ile içerik yönetimi
- 📊 **Eğitmen Paneli**: Eğitmenler için özel panel ve istatistikler
- ⭐ **Değerlendirme Sistemi**: Kurs ve eğitmen puanlama sistemi

## 🛠️ Teknolojiler

### Frontend
- **Next.js 14** - React tabanlı modern web framework
- **React 18** - Kullanıcı arayüzü kütüphanesi
- Responsive tasarım ve modern UI/UX

### Backend
- **Node.js** - Server-side runtime
- **Express.js** - Web framework
- **PostgreSQL** - İlişkisel veritabanı

### Özellikler
- RESTful API mimarisi
- Güvenli kimlik doğrulama
- Ödeme gateway entegrasyonu
- Çoklu dil desteği

## 📁 Proje Yapısı

```
dream-hack/
├── apps/
│   ├── frontend/          # Next.js frontend uygulaması
│   │   ├── components/    # React bileşenleri
│   │   ├── pages/         # Next.js sayfaları
│   │   ├── styles/        # CSS stilleri
│   │   └── public/        # Statik dosyalar
│   │
│   └── backend/           # Express.js backend uygulaması
│       ├── modules/       # İş mantığı modülleri
│       │   ├── admin/     # Admin işlemleri
│       │   ├── users/     # Kullanıcı yönetimi
│       │   ├── payments/  # Ödeme işlemleri
│       │   └── localization.js  # Dil yönetimi
│       ├── routes.js      # API route tanımları
│       └── db.js          # Veritabanı bağlantısı
│
├── database/              # Veritabanı şemaları
│   └── init.sql          # Başlangıç SQL dosyası
│
└── packages/
    └── common/           # Ortak kod ve tipler
```

## 🚀 Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- PostgreSQL (v12 veya üzeri)
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/unknown1fsh/dream-hack.git
   cd dream-hack
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm run install:all
   ```

3. **Veritabanını kurun**
   - PostgreSQL veritabanı oluşturun
   - `database/init.sql` dosyasını çalıştırarak şemayı oluşturun
   ```bash
   psql -U postgres -d dream_hack -f database/init.sql
   ```

4. **Environment değişkenlerini ayarlayın**
   
   Backend için (`apps/backend/.env`):
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=dream_hack
   DB_USER=postgres
   DB_PASSWORD=your_password
   PORT=3001
   JWT_SECRET=your_secret_key
   ```
   
   Frontend için (`apps/frontend/.env.local`):
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

5. **Uygulamayı başlatın**
   ```bash
   # Frontend ve backend'i birlikte çalıştır
   npm run dev
   
   # Veya ayrı ayrı:
   npm run dev:frontend  # http://localhost:3000
   npm run dev:backend   # http://localhost:3001
   ```

## 📝 Kullanım

### Frontend
- Ana sayfa: `http://localhost:3000`
- Kurs listesi: `http://localhost:3000/courses`
- Kullanıcı profili: `http://localhost:3000/profile`
- Admin paneli: `http://localhost:3000/admin`

### Backend API
- API endpoint: `http://localhost:3001/api`
- Kullanıcı işlemleri: `/api/users`
- Ödeme işlemleri: `/api/payments`
- Admin işlemleri: `/api/admin`

## 🎯 Özellikler ve Modüller

### Kullanıcı Yönetimi
- Kullanıcı kaydı ve girişi
- Profil yönetimi
- Şifre sıfırlama
- Rol tabanlı erişim kontrolü

### Ödeme Sistemi
- iyzico entegrasyonu
- PayTR entegrasyonu
- Güvenli ödeme işlemleri
- Ödeme geçmişi takibi

### Admin Paneli
- Kullanıcı yönetimi
- Kurs yönetimi
- İstatistikler ve raporlama
- Sistem ayarları

### Çoklu Dil Desteği
- Türkçe (varsayılan)
- İngilizce
- Kolay genişletilebilir yapı

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje özel lisans altındadır.

## 👨‍💻 Geliştiriciler

- [unknown1fsh](https://github.com/unknown1fsh)

## 📞 İletişim

Sorularınız veya önerileriniz için issue açabilirsiniz.

## 🗺️ Yol Haritası

- [ ] Canlı ders özellikleri
- [ ] Video streaming altyapısı
- [ ] Mobil uygulama desteği
- [ ] Gelişmiş analitikler
- [ ] Sertifika sistemi
- [ ] Topluluk özellikleri

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
