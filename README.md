# Fast Food

Fast Food adalah aplikasi web yang dibangun dengan **React**, **Tailwind CSS**, dan **React Router**. Aplikasi ini memungkinkan pengguna untuk melihat menu makanan, menambahkan item ke keranjang belanja, melakukan pemesanan, dan menggunakan **navigator geolocation** untuk mendeteksi lokasi pengguna. Aplikasi ini juga memiliki sistem routing untuk navigasi antar halaman.

## Fitur

- **Halaman Menu**: Menampilkan daftar makanan yang dapat dipilih oleh pengguna.
- **Keranjang Belanja**: Menampilkan item yang telah ditambahkan ke keranjang belanja.
- **Manajemen Pesanan**: Memungkinkan pengguna untuk membuat pesanan baru dan mengelola pesanan yang ada.
- **Geolocation**: Menggunakan **navigator geolocation** untuk mendeteksi lokasi pengguna, memungkinkan pengalaman yang lebih personal.
- **Routing dengan React Router**: Mengelola navigasi antar halaman aplikasi.

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **React Router**: Untuk routing dan navigasi antar halaman.
- **Tailwind CSS**: Framework CSS untuk styling aplikasi dengan utility-first classes.
- **Geolocation API**: Untuk mendeteksi lokasi pengguna menggunakan browser.

## Struktur Aplikasi

Aplikasi ini menggunakan beberapa route utama yang dikelola dengan `React Router`:

- **`/`**: Halaman Utama, yang menampilkan rangkuman aplikasi dan arah ke halaman lainnya.
- **`/menu`**: Halaman Menu, yang dirender oleh komponen `Menu`. Menampilkan daftar makanan yang dapat ditambahkan ke keranjang.
- **`/cart`**: Halaman Keranjang, yang menunjukkan item yang ditambahkan dan memungkinkan pengguna untuk melakukan checkout.
- **`/order`**: Halaman untuk membuat dan mengelola pesanan.
- **`/order/:orderId`**: Halaman untuk melihat detail pesanan tertentu dan memperbarui pesanan yang ada.

## Fitur Geolocation

Aplikasi ini menggunakan **navigator.geolocation** untuk mendeteksi lokasi pengguna dan menyesuaikan layanan atau pengiriman berdasarkan lokasi tersebut.

## Cara Menjalankan Aplikasi

1. Clone repository:
   ```bash
   git clone <repository-url>
   ```
