# Widyara Property — Starter MVP

Portal listing properti statis + dashboard admin menggunakan Supabase. Dirancang agar bisa dikelola dari Chrome Android.

## Isi project
- `index.html`, `styles.css`, `app.js`: website publik, pencarian sederhana, detail listing, tombol WhatsApp.
- `admin.html`, `admin.js`: login dan CRUD listing.
- `config.js`: konfigurasi Supabase dan nomor WhatsApp.
- `supabase/schema.sql`: tabel dan kebijakan keamanan RLS.

## 1. Buat repository GitHub dari Android
1. Buka https://github.com dan login.
2. Tekan `+` > New repository.
3. Nama repository: `widyara-property`, pilih Public, lalu Create repository.
4. Upload seluruh isi folder project ini ke repository (jangan upload file ZIP-nya saja; ekstrak dahulu).
5. Alternatif: gunakan Add file > Create new file untuk tiap file, lalu paste isinya.

## 2. Buat project Supabase
1. Buka https://supabase.com dan buat project.
2. Buka SQL Editor > New query.
3. Copy seluruh isi `supabase/schema.sql`, lalu Run.
4. Buka Project Settings > API. Salin Project URL dan anon/public key.
5. Isi dua nilai itu di `config.js`. Jangan pernah memasukkan `service_role` key ke frontend.
6. Di Authentication > Users, buat user admin dengan email dan password kuat.
7. Salin UUID user tersebut. Di SQL Editor jalankan:
   `insert into public.profiles (id,is_admin) values ('UUID_USER', true);`
8. Di Storage buat bucket `property-images`. Atur kebijakan upload hanya untuk admin sebelum membuka upload langsung dari website. Versi starter ini menerima URL foto yang sudah diunggah ke bucket.

## 3. Deploy Cloudflare Pages
1. Buat akun di https://dash.cloudflare.com
2. Workers & Pages > Create > Pages > Connect to Git.
3. Hubungkan GitHub, pilih repository `widyara-property`.
4. Framework preset: None. Build command: kosongkan. Build output directory: `/`.
5. Deploy. Cloudflare akan memberi alamat `*.pages.dev`.

## 4. Tambahkan listing pertama
Setelah Supabase dan admin siap:
1. Login di `https://ALAMAT-WEBSITE/admin.html`.
2. Tambahkan listing.
3. Untuk foto: upload dahulu di Supabase Storage bucket `property-images`, salin public URL, lalu masukkan URL foto ke kolom URL foto. Jika lebih dari satu, pisahkan dengan koma.
4. Status `Tayang` untuk muncul di website, `Draft` untuk disimpan tanpa tampil.

## 5. Meta Pixel
- Buat Pixel di Meta Events Manager: https://business.facebook.com/events_manager
- Isi ID Pixel pada baris `window.WIDYARA_PIXEL_ID = "PIXEL_ID_ANDA";` yang perlu ditambahkan di `config.js`.
- Tambahkan baris itu sebelum `app.js` dipanggil (di `index.html`). Kode starter mengirim `PageView` dan event `Contact` saat tautan WhatsApp diklik.
- Uji melalui Meta Pixel Helper / Test Events. Hormati persetujuan cookie dan kebijakan privasi yang berlaku sebelum mengaktifkan tracking.

## Catatan penting
- Listing Pandeglang pada versi demo hanya contoh tampilan lokal, belum otomatis tersimpan ke database sampai kamu menambahkannya melalui admin.
- Konfirmasi harga, status kepemilikan, sertifikat, akses jalan, batas tanah, luas bangunan, dan legalitas sebelum mempublikasikan listing.
- Jangan masukkan secret/service role key ke GitHub atau JavaScript browser.
- Starter ini belum punya pendaftaran agen mandiri, moderasi listing, upload foto langsung dari form, pembayaran, atau dashboard analitik. Fitur marketplace multi-pemasang perlu tahap lanjutan dengan verifikasi pemilik/agen dan moderasi admin.
