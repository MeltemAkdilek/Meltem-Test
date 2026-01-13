# Claude Code Yapılandırması

Bu dosya Claude'un projenizi nasıl anlaması ve kod yazması gerektiğini belirler.

## Kod Stili

### JavaScript/Node.js
- Modern ES6+ syntax kullan
- Arrow function'ları tercih et
- Async/await kullan (Promise.then yerine)
- Açıklayıcı değişken isimleri kullan

### Kod Kalitesi
- Her fonksiyon tek bir iş yapmalı
- Karmaşık mantığı basit fonksiyonlara böl
- Magic number'lar yerine const kullan

## Güvenlik

- Asla şifre veya API key'leri hardcode etme
- Kullanıcı girdilerini her zaman validate et
- SQL injection'a karşı korunma sağla
- XSS saldırılarına karşı dikkatli ol

## Pull Request Kriterleri

- Testler geçmeli
- Kod açık ve okunabilir olmalı
- Değişiklikler küçük ve anlaşılır olmalı
- Commit mesajları açıklayıcı olmalı

## Test Stratejisi

- Yeni özellikler için test yaz
- Edge case'leri kontrol et
- Hata durumlarını test et

## Dokümantasyon

- Karmaşık fonksiyonlar için yorum ekle
- README'yi güncel tut
- API değişikliklerini dokümante et
