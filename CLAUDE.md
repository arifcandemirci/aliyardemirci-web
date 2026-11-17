# Proje: Prof. Dr. H. Aliyar Demirci akademik web sitesi

## Amaç
Pamukkale Üniversitesi Hukuk Fakültesi Dekanı Prof. Dr. H. Aliyar Demirci için ücretsiz, profesyonel, Türkçe, statik (HTML + CSS) akademik web sitesi. GitHub Pages'te yayınlanır; sonra kendi alan adı bağlanır.

## Kişiler ve kullanıcı
- Siteyi güncelleyecek kişi: **Arif** (Mekatronik Mühendisliği öğrencisi). Hoca siteyi kendisi güncellemeyecek.
- Arif'in teknik seviyesi: ROS/robotik bilir ama **web ve GitHub'da yeni başlayan**. Adımları basit, tek tek, nereye tıklanacağını söyleyerek anlat. Teknik terimi ilk geçtiği yerde açıkla. Türkçe yaz.

## Kesin kurallar
1. Siteye YALNIZCA `kaynak/ozgecmis-kaynak.pdf` (hocanın özgeçmişi) içindeki bilgi girer. Yayın, tarih, başlık, iletişim bilgisi **uydurma**. Eksik bilgi varsa Arif'e sor.
2. Kişisel cep telefonu ve ev adresi yayınlanmaz. Onaylı iletişim: Dekanlık telefonu `258 296 28 08` ve `ademirci@pau.edu.tr`.
3. Duyurular sayfası YOK.
4. Hoca bölüm başkanlığı dahil görevlerine devam ediyor.
5. Fotoğraf: `images/haliyar-demirci.png` (ana sayfada).
6. Sayfa yapısı değişmeyecek (aşağıya bak). Yeni sayfa eklemeden önce Arif'e sor.

## Sayfa yapısı (dosya adları)
- `index.html` Ana Sayfa (onaylı tanıtım yazısı + fotoğraf + kartlar)
- `ozgecmis.html` Özgeçmiş (eğitim, görevler, ödüller, çalışma alanları)
- `akademik-calismalar.html` (alt sayfalara kartlar)
  - `kitaplar.html`
  - `makaleler-ve-kitap-bolumleri.html` ("Diğer Dergiler" bu sayfada ayrı başlık)
  - `bildiriler.html`
  - `katildigi-bilimsel-toplantilar.html`
  - `davetli-konusmalar.html`
  - `editorluk.html`
  - `juri-uyelikleri-ve-organizasyonlar.html` (2015: organizasyon + jüri, 2016: yalnızca organizasyon)
- `dersler.html`
- `iletisim.html`
- `404.html`
- `css/style.css`, `js/menu.js` (telefonda menü düğmesi)

## Tasarım
- Renkler: zemin `#FAF8F3`, metin `#2B2B2B`, ana lacivert `#1F3A5F`, vurgu bordo `#8B2E2E` (CSS değişkenleri `:root` içinde).
- Yazı tipleri: başlıklar **Lora**, metin **Source Sans 3** (Google Fonts, her HTML dosyasının `<head>` kısmında).
- Dil: Türkçe (`<html lang="tr">`). İngilizce sürüm sadece istenirse, sonra.
- Telefonda ve bilgisayarda düzgün görünmeli (CSS'in sonundaki `@media (max-width:760px)`).

## Özgeçmişe uygulanan düzeltmeler (yapıldı, bozma)
- "Takdim" (Mustafa Çalık, MHP Hareketi Kaynakları ve Gelişimi, 2024) kitap bölümü olarak gösteriliyor.
- "Meşrutiyet Dönemi" (Yakın Dönem Türk Politik Tarihi, 2005) sayfa: ss. 11-23.
- "Endülüs'ün Aynasında…" hem kitap bölümlerinde hem bildirilerde duruyor.
- "31 Mart 2024 Mahallî Seçimleri" makalesi bir kez gösteriliyor (özgeçmişte iki kez geçiyordu).
- Yazım: Gelişimi, sayı, Osmanlı-Türk, Meşrutiyet.

## Özgeçmişte çelişkili/belirsiz olup Arif'e sorulacaklar (kendin karar verme)
- "Endülüs'ün Aynasında…": kitap bölümü satırında tarih 27-30 Aralık 2016, toplantılar satırında 27-30 Nisan 2017 (Barcelona). Şu an özgeçmişteki gibi iki ayrı yerde duruyor.
- "Ali Fuad Başgil" maddesi (İletişim Yayınları, 2005): özgeçmişte ss. 282-299 yazıyor; bu aralık "Meşrutiyet Dönemi" için de yazılıydı ve o ss. 11-23 olarak düzeltildi. Başgil maddesinin sayfa aralığını hocadan teyit ettir.
- "Kamusal Alanda Medenîleşme…" ve "Bir Biyografinin İzinde…" gibi satırlarda editör/baskı bilgileri özgeçmişteki gibi bırakıldı.

## Yayın akışı
1. GitHub hesabı + depo (repository) → Settings → Pages → kaynak: `main` dalı, `/ (root)`.
2. Site önce `https://KULLANICI.github.io/DEPO/` adresinde yayına girer.
3. Alan adı (.com / .com.tr) alınır, hoca adına kayıtlı olması önerildi. Alan adı henüz seçilmedi. Önce GitHub Pages ayarına yazılır, sonra DNS kayıtları girilir, HTTPS açılır. Alan adı hazır olunca kök dizine `CNAME` dosyası eklenir (içinde sadece alan adı). **Alan adı seçilmeden CNAME oluşturma.**

## "Friday check" (Cuma kontrolü)
Arif "Friday check" dediğinde: canlı siteyi aç, tüm sayfaların yüklendiğini, menü ve iç bağlantıların çalıştığını, fotoğrafın göründüğünü, telefon ve bilgisayar görünümünde bozukluk olmadığını kontrol et ve kısa, sade bir rapor ver. Canlı adres henüz yoksa bunu söyle.

## Çalışma şekli
- Değişiklik yapmadan önce ne yapacağını bir cümleyle söyle; bitince ne değiştiğini kısaca özetle.
- Her değişiklikten sonra: iç bağlantıları (`href`, `src`) tara, yazım hatalarına bak, telefon genişliğinde (390 px) ve masaüstünde (1280 px) kontrol et.
- Git kullanıyorsan: küçük, açık Türkçe/İngilizce commit mesajları. `git push` öncesi Arif'e sor.
