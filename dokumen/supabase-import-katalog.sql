-- Jalankan file ini di Supabase Dashboard > SQL Editor > New query.
-- Aman dijalankan ulang: produk dengan kode yang sama diperbarui, bukan diduplikasi.
-- Produk lain (misalnya PAPAN BUNGA TST) tidak dihapus.

-- Menambahkan kolom pelengkap bila tabel products dibuat tanpa kolom ini.
alter table public.products add column if not exists code text;
alter table public.products add column if not exists size text;
alter table public.products add column if not exists image_url text;
alter table public.products add column if not exists description text;
alter table public.products add column if not exists materials text;
alter table public.products add column if not exists height_estimate text;
alter table public.products add column if not exists is_active boolean not null default true;

create unique index if not exists products_code_unique on public.products (code);

insert into public.products
    (code, name, category, price, size, image_url, description, materials, height_estimate, is_active)
values
    ('RF-DK01', 'Papan Bunga Duka Cita Putih Bersih', 'Karangan Bunga Duka Cita', 350000, '200 x 120 cm', 'assets/ucapan%20duka%20200x120cm1.jpeg', 'Karangan papan bunga duka cita bernuansa putih bersih dan khidmat, rangkaian rapi untuk menyampaikan simpati mendalam keluarga yang berduka.', 'Mawar, Pikok, Bunga Lili Putih, Baby''s Breath, Daun Sage Eucalyptus', 'Tinggi: ± 2 meter', true),
    ('RF-DK02', 'Papan Bunga Duka Cita Tenang Damai', 'Karangan Bunga Duka Cita', 500000, '200 x 120 cm', 'assets/ucapan%20duka%20200x120cm%202.jpeg', 'Rangkaian papan bunga belasungkawa dengan paduan warna lembut menenangkan, cocok untuk mengiringi doa dan penghormatan terakhir.', 'Mawar, Pikok, Krisan Putih, Gerbera Lembut, Daun Ruscus', 'Tinggi: ± 2 meter', true),
    ('RF-DK03', 'Papan Bunga Duka Cita Simpati Lestari', 'Karangan Bunga Duka Cita', 500000, '200 x 120 cm', 'assets/ucapan%20duka%20200x120%20cm%203.jpeg', 'Papan duka cita premium dengan susunan bunga penuh dan simetris, menghadirkan kesan tenang sekaligus berkesan mendalam bagi keluarga yang ditinggalkan.', 'Mawar, Pikok, Lili Putih, Krisan Sage, Daun Eucalyptus, Pita Kain Halus', 'Tinggi: ± 2 meter', true),
    ('RF-DK04', 'Papan Bunga Duka Cita Megah Khidmat', 'Karangan Bunga Duka Cita', 700000, '200 x 120 cm', 'assets/ucapan%20duka%20200x120cm%204.jpeg', 'Karangan bunga duka cita ukuran penuh dengan rangkaian bunga lebat dan detail rapi, mewakili rasa hormat serta simpati yang mendalam.', 'Mawar, Pikok, Bunga Lili Premium, Krisan Putih, Gerbera, Daun Leather Leaf', 'Tinggi: ± 2 meter', true),
    ('RF-HW01', 'Papan Bunga Happy Wedding Cinta Abadi', 'Karangan Bunga Happy Wedding', 700000, '200 x 120 cm', 'assets/happywdding%20200x120cm%201.jpeg', 'Papan bunga pernikahan megah dan romantis untuk menghiasi pintu masuk resepsi, dengan rangkaian mawar dan pikok yang elegan.', 'Mawar, Pikok, Mawar Dusty Rose Premium, Peony Putih, Daun Monstera, Renda Emas Tipis', 'Tinggi: ± 2 meter', true),
    ('RF-HW02', 'Papan Bunga Happy Wedding Manis Penuh Cinta', 'Karangan Bunga Happy Wedding', 325000, '85 x 85 cm', 'assets/happywdding%2085x%2085cm%201.jpeg', 'Papan bunga pernikahan kompak 85 x 85 cm yang manis dan romantis, cocok untuk meja hantaran, kursi pengantin, atau sudut foto.', 'Mawar, Pikok, Mawar Pink, Baby''s Breath, Daun Ruscus', 'Tinggi: ± 1,3 meter', true),
    ('RF-US01', 'Papan Bunga Ucapan Selamat Sukses Bersemi', 'Karangan Bunga Ucapan Selamat', 350000, '200 x 120 cm', 'assets/selamat%20200x120cm%201.jpeg', 'Karangan papan bunga ucapan selamat yang cerah dan penuh makna, ideal untuk ucapan sukses usaha, kenaikan jabatan, atau prestasi.', 'Mawar, Pikok, Bunga Aster Premium, Gerbera Pink, Daun Sage Eucalyptus', 'Tinggi: ± 2 meter', true),
    ('RF-US02', 'Papan Bunga Ucapan Selamat Selamat Sejahtera', 'Karangan Bunga Ucapan Selamat', 350000, '200 x 120 cm', 'assets/selamat%20200x120cm%202.jpeg', 'Rangkaian papan bunga ucapan selamat dengan paduan warna hangat dan menyenangkan, tepat untuk merayakan momen penuh sukacita.', 'Mawar, Pikok, Gerbera Kuning, Krisan Sage, Daun Eucalyptus', 'Tinggi: ± 2 meter', true),
    ('RF-US03', 'Papan Bunga Ucapan Selamat Pembukaan Gemilang', 'Karangan Bunga Ucapan Selamat', 500000, '200 x 120 cm', 'assets/selamat%20200x120cm%203.jpeg', 'Karangan papan bunga formal untuk perayaan grand opening usaha atau kantor baru, dengan desain rapi dan elegan.', 'Mawar, Pikok, Bunga Krisan Sage, Mawar Dusty Rose, Daun Monstera, Kain Satin Dasar Putih', 'Tinggi: ± 2 meter', true),
    ('RF-US04', 'Papan Bunga Ucapan Selamat Elegance Primadona', 'Karangan Bunga Ucapan Selamat', 500000, '200 x 120 cm', 'assets/selamat%20200x120cm%204.jpeg', 'Papan bunga ucapan selamat premium dengan rangkaian bunga lebat dan warna lembut, memberikan kesan mewah di setiap acara.', 'Mawar, Pikok, Mawar Dusty Rose, Krisan Putih, Rumbai Pita Sage & Dusty Rose', 'Tinggi: ± 2 meter', true),
    ('RF-US05', 'Papan Bunga Ucapan Selamat Kompak Istimewa', 'Karangan Bunga Ucapan Selamat', 250000, '80 x 120 cm', 'assets/selamat%2080x120cm%205.jpeg', 'Papan bunga ucapan selamat kompak 80 x 120 cm, ringkas dan tetap menarik untuk ucapan selamat di kantor atau rumah sakit.', 'Mawar, Pikok, Bunga Aster, Gerbera, Daun Ruscus', 'Tinggi: ± 1,6 meter', true),
    ('RF-US06', 'Papan Bunga Ucapan Selamat Ceria Berkah', 'Karangan Bunga Ucapan Selamat', 350000, '80 x 120 cm', 'assets/selamat%2080x120cm%206.jpeg', 'Rangkaian papan bunga ukuran kompak yang ceria dan menyejukkan, cocok untuk menyampaikan ucapan selamat secara personal.', 'Mawar, Pikok, Krisan Sage, Gerbera Pink, Daun Eucalyptus', 'Tinggi: ± 1,6 meter', true),
    ('RF-US07', 'Papan Bunga Ucapan Selamat Indah Selaksa', 'Karangan Bunga Ucapan Selamat', 350000, '80 x 120 cm', 'assets/selamat%2080x120cm%207.jpeg', 'Papan bunga ucapan selamat kompak dengan susunan bunga penuh warna, menambah semarak ucapan kebahagiaan Anda.', 'Mawar, Pikok, Gerbera Kuning & Pink, Baby''s Breath, Daun Leather Leaf', 'Tinggi: ± 1,6 meter', true)
on conflict (code) do update set
    name = excluded.name,
    category = excluded.category,
    price = excluded.price,
    size = excluded.size,
    image_url = excluded.image_url,
    description = excluded.description,
    materials = excluded.materials,
    height_estimate = excluded.height_estimate,
    is_active = excluded.is_active;

select code, name, category, price from public.products order by code;
