# Layout Widgets in React

Bu proje, React uygulamalarında Flutter'dan ilham alan düzen (layout) bileşenlerini kullanarak hızlı ve esnek UI geliştirmeyi gösteren bir demo uygulamasıdır. 
`Col`, `Row`, `Wrap`, `Box`, `Expanded`, `Scaffold` gibi bileşenlerle, karmaşık arayüzleri kolayca oluşturabilir ve yönetebilirsiniz.

## Özellikler

*   **Düzen Bileşenleri**: `Col`, `Row`, `Wrap`, `Box`, `Expanded`, `Scaffold`, `AppBar`, `BottomAppBar`, `Fab`, `Container`, `Scroll`, `SafeArea`, `ListView`, `GridView` gibi bileşenlerle sezgisel UI düzeni.
*   **Hazır UI Bileşenleri**: `Button`, `Badge`, `Chip`, `Card`, `ListTile`, `GridTile`, `DataTable` gibi yeniden kullanılabilir UI elemanları.
*   **Tamamen Duyarlı**: Tüm düzen bileşenleri ve UI elemanları, farklı ekran boyutlarına sorunsuz bir şekilde uyum sağlar.
*   **TypeScript Desteği**: Güvenli ve ölçeklenebilir kod tabanı için TypeScript kullanılmıştır.
*   **Tailwind CSS**: Hızlı ve esnek stil oluşturma için utility-first CSS framework'ü.
*   **React Router**: Uygulama içi navigasyon için.
*   **Toast Bildirimleri**: Kullanıcıya geri bildirim sağlamak için özelleştirilebilir toast bildirim sistemi.
*   **Örnek Sayfalar**: Düzen bileşenlerinin gerçek dünya senaryolarında nasıl kullanılabileceğini gösteren ana sayfa ve satış sayfası örnekleri.

## Teknoloji Yığını

*   **React**: Kullanıcı arayüzleri oluşturmak için JavaScript kütüphanesi.
*   **TypeScript**: Tip güvenliği sağlayan JavaScript süper kümesi.
*   **React Router**: Deklaratif yönlendirme için.
*   **Tailwind CSS**: Hızlı UI geliştirme için utility-first CSS framework'ü.
*   **Lucide React**: Hafif ve özelleştirilebilir ikonlar için.
*   **Vite**: Hızlı geliştirme deneyimi için yeni nesil frontend aracı.

## Kurulum

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın**:
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```
    ( `<repository-url>` ve `<repository-name>` yerine kendi GitHub depo URL'nizi ve adınızı yazın.)

2.  **Bağımlılıkları Yükleyin**:
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Uygulamayı Başlatın**:
    ```bash
    npm run dev
    # veya
    yarn dev
    ```

Uygulama genellikle `http://localhost:8080` adresinde çalışacaktır.

## Kullanım

Uygulama başlatıldıktan sonra, ana sayfada çeşitli düzen bileşenlerinin ve UI elemanlarının örneklerini göreceksiniz. `/sales` rotasına giderek ürün listeleme sayfasının nasıl oluşturulduğunu inceleyebilirsiniz.

### Temel Düzen Bileşenleri

*   **`Scaffold`**: Uygulamanız için temel bir görsel yapı sağlar (AppBar, Body, FloatingActionButton, BottomAppBar).
*   **`Col` (Column)**: Çocuklarını dikey olarak düzenler.
*   **`Row`**: Çocuklarını yatay olarak düzenler.
*   **`Wrap`**: Çocuklarını mevcut alana sığacak şekilde sarar (wrap).
*   **`Box`**: Genişlik, yükseklik, hizalama ve kenarlık gibi temel stil özelliklerini uygulayan genel bir kapsayıcı.
*   **`Expanded`**: Bir `Col` veya `Row` içindeki çocukların mevcut alanı orantılı olarak doldurmasını sağlar.

### UI Bileşenleri

*   **`Button`**: Çeşitli varyant ve boyutlarda düğmeler.
*   **`Badge`**: Küçük, bilgilendirici etiketler.
*   **`Chip`**: Etiketler veya filtreler için küçük, etkileşimli elemanlar.
*   **`Card`**: İçeriği gruplamak için kullanılan yükseltilmiş bir yüzey.
*   **`ListTile`**: Bir listedeki tek bir öğeyi temsil eden bir satır.
*   **`GridTile`**: Bir ızgara düzenindeki tek bir öğeyi temsil eden bir kutu.
*   **`DataTable`**: Yapılandırılmış verileri görüntülemek için basit bir tablo.

## Proje Yapısı

```
src/
├── App.tsx             # Ana uygulama bileşeni ve React Router rotaları
├── components/         # Yeniden kullanılabilir UI bileşenleri
│   ├── layout/         # Flutter-like düzen bileşenleri (Col, Row, Scaffold vb.)
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Chip.tsx
│   ├── DataTable.tsx
│   ├── GridTile.tsx
│   ├── ListTile.tsx
│   ├── ProductCard.tsx
│   └── ToastProvider.tsx # Toast bildirim sistemi
├── hooks/
│   ├── use-mobile.tsx  # Mobil cihaz tespiti için hook
│   └── use-toast.ts    # Toast bildirimleri için hook
├── lib/
│   └── utils.ts        # Yardımcı fonksiyonlar (cn)
├── pages/
│   ├── Index.tsx       # Ana sayfa (bileşen demoları)
│   ├── NotFound.tsx    # 404 hata sayfası
│   └── SalesPage.tsx   # Ürün listeleme sayfası örneği
├── globals.css         # Tailwind CSS ve global stiller
├── main.tsx            # Uygulamanın giriş noktası
└── vite-env.d.ts
```

## Katkıda Bulunma

Katkılarınızı memnuniyetle karşılarız! Lütfen bir pull request göndermeden önce sorunları (issues) kontrol edin veya yeni bir sorun açın.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Isteyen istedğini yapabilir/feel free to do anything.
