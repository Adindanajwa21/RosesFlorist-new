-- Jalankan di Supabase Dashboard > SQL Editor.
-- Ganti email berikut dengan email Gmail/admin yang benar-benar dipakai login.

create or replace function public.is_store_admin()
returns boolean
language sql
stable
as $$
    select coalesce(auth.jwt() ->> 'email', '') = 'GANTI_DENGAN_EMAIL_ADMIN_ANDA@gmail.com';
$$;

-- Pastikan struktur tabel orders cocok dengan website.
alter table public.orders add column if not exists product_id uuid;
alter table public.orders add column if not exists order_type text not null default 'Produk katalog';
alter table public.orders add column if not exists product_name text not null default 'Pesanan';
alter table public.orders add column if not exists customer_name text;
alter table public.orders add column if not exists phone text;
alter table public.orders add column if not exists details text;
alter table public.orders add column if not exists created_at timestamptz not null default now();

alter table public.orders enable row level security;

drop policy if exists "Public can create orders" on public.orders;
create policy "Public can create orders"
on public.orders for insert
with check (true);

drop policy if exists "Admin reads orders" on public.orders;
create policy "Admin reads orders"
on public.orders for select
using (public.is_store_admin());

drop policy if exists "Admin deletes orders" on public.orders;
create policy "Admin deletes orders"
on public.orders for delete
using (public.is_store_admin());

-- Sesudah menjalankan skrip: logout lalu login ulang di website,
-- agar token Supabase memakai hak akses admin terbaru.
