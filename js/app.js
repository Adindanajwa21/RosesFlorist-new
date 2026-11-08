// ====================================================================
// Roses Florist — Website Katalog (tanpa database / tanpa sistem akun)
//
// Data produk disimpan sebagai array JavaScript biasa di bawah (LOCAL_PRODUCTS).
// Untuk menambah / mengedit produk, cukup ubah data pada array ini —
// tidak perlu database atau dashboard admin.
//
// Nomor WhatsApp Admin (format internasional tanpa tanda +, contoh: 6281234567890)
// ====================================================================
const WHATSAPP_ADMIN_NUMBER = '6282238782947';
const ADMIN_LOGIN_EMAIL = 'admin@rosesflorist.com';
const ADMIN_SESSION_KEY = 'roses-florist-admin-session';
const ADMIN_PRODUCT_IMAGES_KEY = 'roses-florist-product-images';
const ADMIN_PRODUCT_DETAILS_KEY = 'roses-florist-product-details';
const ADMIN_ORDERS_KEY = 'roses-florist-whatsapp-orders';
const ADMIN_ADDED_PRODUCTS_KEY = 'roses-florist-added-products';

// ====================================================================
// DATA PRODUK KATALOG (13 produk)
// ====================================================================
const LOCAL_PRODUCTS = [
    {
        id: 1,
        code: 'RF-DK01',
        name: 'Papan Bunga Duka Cita Putih Bersih',
        category: 'Karangan Bunga Duka Cita',
        price: 350000,
        size: '200 x 120 cm',
        image_url: 'assets/ucapan%20duka%20200x120cm1.jpeg',
        description: 'Karangan papan bunga duka cita bernuansa putih bersih dan khidmat, rangkaian rapi untuk menyampaikan simpati mendalam keluarga yang berduka.',
        materials: 'Mawar, Pikok, Bunga Lili Putih, Baby\'s Breath, Daun Sage Eucalyptus',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 2,
        code: 'RF-DK02',
        name: 'Papan Bunga Duka Cita Tenang Damai',
        category: 'Karangan Bunga Duka Cita',
        price: 500000,
        size: '200 x 120 cm',
        image_url: 'assets/ucapan%20duka%20200x120cm%202.jpeg',
        description: 'Rangkaian papan bunga belasungkawa dengan paduan warna lembut menenangkan, cocok untuk mengiringi doa dan penghormatan terakhir.',
        materials: 'Mawar, Pikok, Krisan Putih, Gerbera Lembut, Daun Ruscus',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 3,
        code: 'RF-DK03',
        name: 'Papan Bunga Duka Cita Simpati Lestari',
        category: 'Karangan Bunga Duka Cita',
        price: 500000,
        size: '200 x 120 cm',
        image_url: 'assets/ucapan%20duka%20200x120%20cm%203.jpeg',
        description: 'Papan duka cita premium dengan susunan bunga penuh dan simetris, menghadirkan kesan tenang sekaligus berkesan mendalam bagi keluarga yang ditinggalkan.',
        materials: 'Mawar, Pikok, Lili Putih, Krisan Sage, Daun Eucalyptus, Pita Kain Halus',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 4,
        code: 'RF-DK04',
        name: 'Papan Bunga Duka Cita Megah Khidmat',
        category: 'Karangan Bunga Duka Cita',
        price: 700000,
        size: '200 x 120 cm',
        image_url: 'assets/ucapan%20duka%20200x120cm%204.jpeg',
        description: 'Karangan bunga duka cita ukuran penuh dengan rangkaian bunga lebat dan detail rapi, mewakili rasa hormat serta simpati yang mendalam.',
        materials: 'Mawar, Pikok, Bunga Lili Premium, Krisan Putih, Gerbera, Daun Leather Leaf',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 5,
        code: 'RF-HW01',
        name: 'Papan Bunga Happy Wedding Cinta Abadi',
        category: 'Karangan Bunga Happy Wedding',
        price: 700000,
        size: '200 x 120 cm',
        image_url: 'assets/happywdding%20200x120cm%201.jpeg',
        description: 'Papan bunga pernikahan megah dan romantis untuk menghiasi pintu masuk resepsi, dengan rangkaian mawar dan pikok yang elegan.',
        materials: 'Mawar, Pikok, Mawar Dusty Rose Premium, Peony Putih, Daun Monstera, Renda Emas Tipis',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 6,
        code: 'RF-HW02',
        name: 'Papan Bunga Happy Wedding Manis Penuh Cinta',
        category: 'Karangan Bunga Happy Wedding',
        price: 325000,
        size: '85 x 85 cm',
        image_url: 'assets/happywdding%2085x%2085cm%201.jpeg',
        description: 'Papan bunga pernikahan kompak 85 x 85 cm yang manis dan romantis, cocok untuk meja hantaran, kursi pengantin, atau sudut foto.',
        materials: 'Mawar, Pikok, Mawar Pink, Baby\'s Breath, Daun Ruscus',
        height_estimate: 'Tinggi: ± 1,3 meter'
    },
    {
        id: 7,
        code: 'RF-US01',
        name: 'Papan Bunga Ucapan Selamat Sukses Bersemi',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 350000,
        size: '200 x 120 cm',
        image_url: 'assets/selamat%20200x120cm%201.jpeg',
        description: 'Karangan papan bunga ucapan selamat yang cerah dan penuh makna, ideal untuk ucapan sukses usaha, kenaikan jabatan, atau prestasi.',
        materials: 'Mawar, Pikok, Bunga Aster Premium, Gerbera Pink, Daun Sage Eucalyptus',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 8,
        code: 'RF-US02',
        name: 'Papan Bunga Ucapan Selamat Selamat Sejahtera',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 350000,
        size: '200 x 120 cm',
        image_url: 'assets/selamat%20200x120cm%202.jpeg',
        description: 'Rangkaian papan bunga ucapan selamat dengan paduan warna hangat dan menyenangkan, tepat untuk merayakan momen penuh sukacita.',
        materials: 'Mawar, Pikok, Gerbera Kuning, Krisan Sage, Daun Eucalyptus',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 9,
        code: 'RF-US03',
        name: 'Papan Bunga Ucapan Selamat Pembukaan Gemilang',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 500000,
        size: '200 x 120 cm',
        image_url: 'assets/selamat%20200x120cm%203.jpeg',
        description: 'Karangan papan bunga formal untuk perayaan grand opening usaha atau kantor baru, dengan desain rapi dan elegan.',
        materials: 'Mawar, Pikok, Bunga Krisan Sage, Mawar Dusty Rose, Daun Monstera, Kain Satin Dasar Putih',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 10,
        code: 'RF-US04',
        name: 'Papan Bunga Ucapan Selamat Elegance Primadona',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 500000,
        size: '200 x 120 cm',
        image_url: 'assets/selamat%20200x120cm%204.jpeg',
        description: 'Papan bunga ucapan selamat premium dengan rangkaian bunga lebat dan warna lembut, memberikan kesan mewah di setiap acara.',
        materials: 'Mawar, Pikok, Mawar Dusty Rose, Krisan Putih, Rumbai Pita Sage & Dusty Rose',
        height_estimate: 'Tinggi: ± 2 meter'
    },
    {
        id: 11,
        code: 'RF-US05',
        name: 'Papan Bunga Ucapan Selamat Kompak Istimewa',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 250000,
        size: '80 x 120 cm',
        image_url: 'assets/selamat%2080x120cm%205.jpeg',
        description: 'Papan bunga ucapan selamat kompak 80 x 120 cm, ringkas dan tetap menarik untuk ucapan selamat di kantor atau rumah sakit.',
        materials: 'Mawar, Pikok, Bunga Aster, Gerbera, Daun Ruscus',
        height_estimate: 'Tinggi: ± 1,6 meter'
    },
    {
        id: 12,
        code: 'RF-US06',
        name: 'Papan Bunga Ucapan Selamat Ceria Berkah',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 350000,
        size: '80 x 120 cm',
        image_url: 'assets/selamat%2080x120cm%206.jpeg',
        description: 'Rangkaian papan bunga ukuran kompak yang ceria dan menyejukkan, cocok untuk menyampaikan ucapan selamat secara personal.',
        materials: 'Mawar, Pikok, Krisan Sage, Gerbera Pink, Daun Eucalyptus',
        height_estimate: 'Tinggi: ± 1,6 meter'
    },
    {
        id: 13,
        code: 'RF-US07',
        name: 'Papan Bunga Ucapan Selamat Indah Selaksa',
        category: 'Karangan Bunga Ucapan Selamat',
        price: 350000,
        size: '80 x 120 cm',
        image_url: 'assets/selamat%2080x120cm%207.jpeg',
        description: 'Papan bunga ucapan selamat kompak dengan susunan bunga penuh warna, menambah semarak ucapan kebahagiaan Anda.',
        materials: 'Mawar, Pikok, Gerbera Kuning & Pink, Baby\'s Breath, Daun Leather Leaf',
        height_estimate: 'Tinggi: ± 1,6 meter'
    }
];

// ====================================================================
// Area pengiriman (dipakai untuk memperkirakan ongkos kirim saat
// request custom melalui WhatsApp)
// ====================================================================
const SHIPPING_AREAS = [
    { value: 'pandaan', label: 'Pandaan & sekitarnya (radius ±5km)', cost: 0, radius: 5 },
    { value: 'sukorejo', label: 'Sukorejo, Purwosari, Prigen (radius ±10km)', cost: 20000, radius: 10 },
    { value: 'pasuruan', label: 'Pasuruan Kota, Gempol (radius ±15km)', cost: 35000, radius: 15 },
    { value: 'daerah_lain', label: 'Daerah lain (di luar area di atas)', cost: null, radius: 0 }
];

function getAreaInfo(val) {
    return SHIPPING_AREAS.find(a => a.value === val) || SHIPPING_AREAS[0];
}

function getAreaLabel(val) {
    const area = getAreaInfo(val);
    return area ? area.label : '';
}

// ====================================================================
// State
// ====================================================================
let currentProducts = [...LOCAL_PRODUCTS];
let selectedProductId = 1;
let katalogActiveCategory = 'Semua';
let katalogPendingCategory = null;
let usingSupabase = false;

// ====================================================================
// Router
// ====================================================================
const routes = {
    '#/': { viewId: 'view-home', init: initHomeView },
    '#/katalog': { viewId: 'view-katalog', init: initKatalogView },
    '#/detail': { viewId: 'view-detail', init: initDetailView },
    '#/tentang': { viewId: 'view-tentang', init: () => {} },
    '#/login': { viewId: 'view-login', init: initAdminLoginView },
    '#/admin': { viewId: 'view-admin', init: initAdminView }
};

function router() {
    const hash = window.location.hash || '#/';
    const route = routes[hash];

    if (!route) {
        window.location.hash = '#/';
        return;
    }

    if (hash === '#/admin' && !isAdminLoggedIn()) {
        window.location.hash = '#/login';
        return;
    }

    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    const activeView = document.getElementById(route.viewId);
    if (activeView) {
        activeView.classList.add('active');
    }

    route.init();

    window.scrollTo({ top: 0, behavior: 'instant' });
    updateNavbarState();
}

document.addEventListener('DOMContentLoaded', async () => {
    if (supabaseClient) await initializeSupabase();
    else {
        loadAddedProducts();
        loadSavedProductImages();
    }
    window.addEventListener('hashchange', router);
    setupGlobalEventListeners();
    setupFlowerCursorTrail();
    router();
});

async function initializeSupabase() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    setAdminSession(Boolean(session));
    supabaseClient.auth.onAuthStateChange((_event, nextSession) => setAdminSession(Boolean(nextSession)));
    await loadProductsFromSupabase();
    usingSupabase = true;
}

function setAdminSession(isLoggedIn) {
    if (isLoggedIn) sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
    else sessionStorage.removeItem(ADMIN_SESSION_KEY);
}

async function loadProductsFromSupabase() {
    if (!supabaseClient) return false;
    const { data, error } = await supabaseClient.from('products').select('*').order('id');
    if (error) {
        console.warn('Produk Supabase tidak dapat dimuat.', error.message);
        return false;
    }
    currentProducts = data || [];
    return true;
}

// ====================================================================
// Admin lokal (khusus versi statis tanpa server)
// ====================================================================
function isAdminLoggedIn() {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
}

function initAdminLoginView() {
    if (isAdminLoggedIn()) {
        window.location.hash = '#/admin';
        return;
    }

    const form = document.getElementById('admin-login-form');
    if (form && !form.dataset.bound) {
        form.addEventListener('submit', handleAdminLogin);
        form.dataset.bound = 'true';
    }
}

async function handleAdminLogin(event) {
    event.preventDefault();
    const email = document.getElementById('admin-email').value.trim().toLowerCase();
    const password = document.getElementById('admin-password').value;
    const error = document.getElementById('admin-login-error');

    if (!supabaseClient) {
        error.textContent = 'Koneksi Supabase belum tersedia.';
        return;
    }
    const { error: loginError } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (loginError) {
        error.textContent = 'Email atau kata sandi tidak sesuai.';
        return;
    }

    setAdminSession(true);
    error.textContent = '';
    window.location.hash = '#/admin';
}

function toggleAdminPasswordVisibility() {
    const input = document.getElementById('admin-password');
    const button = document.getElementById('admin-password-toggle');
    if (!input || !button) return;

    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    button.setAttribute('aria-pressed', String(isHidden));
    button.setAttribute('aria-label', isHidden ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi');
    button.title = isHidden ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi';
    button.innerHTML = isHidden
        ? '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 3 18 18"></path><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"></path><path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c6.5 0 10 8 10 8a18 18 0 0 1-3 4.2"></path><path d="M6.6 6.6C3.8 8.5 2 12 2 12s3.5 8 10 8a9.7 9.7 0 0 0 3.4-.6"></path></svg>'
        : '<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
}

async function initAdminView() {
    if (usingSupabase) await loadProductsFromSupabase();
    renderAdminProducts();
    renderAdminOrders();
}

async function adminLogout() {
    if (supabaseClient) await supabaseClient.auth.signOut();
    setAdminSession(false);
    window.location.hash = '#/login';
}

function loadSavedProductImages() {
    try {
        const savedDetails = JSON.parse(localStorage.getItem(ADMIN_PRODUCT_DETAILS_KEY) || '{}');
        const savedImages = JSON.parse(localStorage.getItem(ADMIN_PRODUCT_IMAGES_KEY) || '{}');
        LOCAL_PRODUCTS.forEach(product => {
            if (savedDetails[product.id]) {
                product.name = savedDetails[product.id].name || product.name;
                product.price = savedDetails[product.id].price;
                product.description = savedDetails[product.id].description;
            }
            if (savedImages[product.id]) product.image_url = savedImages[product.id];
        });
    } catch (error) {
        console.warn('Foto katalog tersimpan tidak dapat dimuat.', error);
    }
}

function loadAddedProducts() {
    try {
        const addedProducts = JSON.parse(localStorage.getItem(ADMIN_ADDED_PRODUCTS_KEY) || '[]');
        if (!Array.isArray(addedProducts)) return;
        addedProducts.forEach(product => {
            if (product && product.id && !LOCAL_PRODUCTS.some(item => item.id === product.id)) {
                LOCAL_PRODUCTS.push(product);
            }
        });
    } catch (error) {
        console.warn('Produk tambahan tidak dapat dimuat.', error);
    }
}

function renderAdminProducts() {
    const grid = document.getElementById('admin-product-grid');
    if (!grid) return;

    grid.innerHTML = currentProducts.map(product => `
        <article class="admin-product-card">
            <div class="admin-product-media">
                <img src="${product.image_url}" alt="${escapeHtml(product.name)}" class="admin-product-image" id="admin-product-image-${product.id}">
                <span class="admin-product-category">${escapeHtml(product.category)}</span>
            </div>
            <div class="admin-product-info">
                <div class="admin-product-heading-row">
                    <div class="admin-product-title"><span class="admin-product-code">${escapeHtml(product.code)}</span><h3>${escapeHtml(product.name)}</h3><span class="admin-product-size">${escapeHtml(product.size)}</span></div>
                    <label class="admin-upload-label" for="admin-image-input-${product.id}">Ganti Foto</label>
                    <input id="admin-image-input-${product.id}" class="admin-image-input" type="file" accept="image/*" onchange="updateProductImage('${product.id}', this)">
                </div>
                <div class="admin-edit-field admin-edit-field-name">
                    <label for="admin-product-name-${product.id}">Nama produk</label>
                    <input id="admin-product-name-${product.id}" class="form-input admin-product-field" type="text" value="${escapeHtml(product.name)}" required>
                </div>
                <div class="admin-edit-fields">
                    <div class="admin-edit-field">
                        <label for="admin-product-price-${product.id}">Harga (Rp)</label>
                        <input id="admin-product-price-${product.id}" class="form-input admin-product-field" type="text" inputmode="numeric" autocomplete="off" value="${formatRupiah(product.price)}" oninput="formatPriceInput(this)">
                    </div>
                    <div class="admin-edit-field admin-edit-field-wide">
                        <label for="admin-product-description-${product.id}">Deskripsi produk</label>
                        <textarea id="admin-product-description-${product.id}" class="form-input admin-product-field admin-description-field" rows="4">${escapeHtml(product.description)}</textarea>
                    </div>
                </div>
                <div class="admin-product-actions">
                    <button type="button" class="admin-save-button" onclick="saveProductDetails('${product.id}')">Simpan Perubahan</button>
                    <button type="button" class="admin-delete-product-button" onclick="deleteCatalogProduct('${product.id}')">Hapus Produk</button>
                </div>
            </div>
        </article>
    `).join('');
}

async function getAdminOrders() {
    if (usingSupabase) {
        const { data, error } = await supabaseClient.from('orders').select('*').order('created_at', { ascending: false });
        if (!error) return (data || []).map(order => ({
            type: order.order_type, customerName: order.customer_name, phone: order.phone,
            productName: order.product_name, details: order.details, createdAt: order.created_at
        }));
        console.warn('Pesanan Supabase tidak dapat dimuat.', error.message);
    }
    try {
        const orders = JSON.parse(localStorage.getItem(ADMIN_ORDERS_KEY) || '[]');
        return Array.isArray(orders) ? orders : [];
    } catch (error) {
        return [];
    }
}

async function saveAdminOrder(order) {
    if (usingSupabase) {
        const product = currentProducts.find(item => item.name === order.productName);
        const { error } = await supabaseClient.from('orders').insert({
            product_id: product?.id || null,
            order_type: order.type || 'Pesanan',
            product_name: order.productName || 'Pesanan',
            customer_name: order.customerName || null,
            phone: order.phone || null,
            details: order.details || null
        });
        if (!error) return;
        console.warn('Pesanan Supabase tidak dapat disimpan.', error.message);
    }
    try {
        const orders = await getAdminOrders();
        orders.unshift(order);
        localStorage.setItem(ADMIN_ORDERS_KEY, JSON.stringify(orders.slice(0, 100)));
    } catch (error) {
        console.warn('Pesanan tidak dapat dicatat di browser.', error);
    }
}

async function renderAdminOrders() {
    const orders = await getAdminOrders();
    const list = document.getElementById('admin-orders-list');
    const orderCount = document.getElementById('admin-order-count');
    const productCount = document.getElementById('admin-product-count');
    if (orderCount) orderCount.textContent = orders.length;
    if (productCount) productCount.textContent = currentProducts.length;
    if (!list) return;

    if (!orders.length) {
        list.innerHTML = '<div class="admin-orders-empty">Belum ada pesanan dari website. Pesanan akan muncul di sini setelah pelanggan mengirimkannya ke WhatsApp.</div>';
        return;
    }

    list.innerHTML = orders.map(order => {
        const phoneDigits = String(order.phone || '').replace(/\D/g, '');
        const whatsappNumber = phoneDigits.startsWith('0') ? `62${phoneDigits.slice(1)}` : phoneDigits;
        const customer = escapeHtml(order.customerName || 'Pelanggan');
        const title = escapeHtml(order.productName || 'Pesanan');
        const details = escapeHtml(order.details || '');
        const time = new Date(order.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
        return `<article class="admin-order-item">
            <div class="admin-order-main">
                <span class="admin-order-type">${escapeHtml(order.type || 'Pesanan')}</span>
                <h4>${title}</h4>
                <p>${details}</p>
            </div>
            <div class="admin-order-customer">
                <strong>${customer}</strong>
                ${phoneDigits ? `<a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener">${escapeHtml(order.phone)}</a>` : '<span>Nomor WhatsApp tidak tersedia</span>'}
                <small>${time}</small>
            </div>
            <span class="admin-order-status">Terkirim ke WhatsApp</span>
        </article>`;
    }).join('');
}

async function clearAdminOrders() {
    if (!confirm('Hapus seluruh riwayat pesanan di perangkat ini?')) return;
    if (usingSupabase) {
        const { error } = await supabaseClient.from('orders').delete().gt('id', 0);
        if (error) {
            showToast('Riwayat pesanan tidak dapat dihapus dari Supabase.');
            return;
        }
    }
    localStorage.removeItem(ADMIN_ORDERS_KEY);
    await renderAdminOrders();
    showToast('Riwayat pesanan dihapus.');
}

function openAddProductModal() {
    const modal = document.getElementById('admin-product-modal');
    const form = document.getElementById('admin-add-product-form');
    if (!modal || !form) return;
    form.reset();
    document.getElementById('admin-product-form-error').textContent = '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.getElementById('new-product-code').focus();
}

function closeAddProductModal() {
    const modal = document.getElementById('admin-product-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}

async function addCatalogProduct(event) {
    event.preventDefault();
    const error = document.getElementById('admin-product-form-error');
    const code = document.getElementById('new-product-code').value.trim().toUpperCase();
    const name = document.getElementById('new-product-name').value.trim();
    const category = document.getElementById('new-product-category').value;
    const price = getPriceInputValue(document.getElementById('new-product-price'));
    const size = document.getElementById('new-product-size').value.trim();
    const imageFile = document.getElementById('new-product-image-file').files[0];
    const description = document.getElementById('new-product-description').value.trim();

    if (!code || !name || !size || !description || !imageFile || !Number.isFinite(price) || price <= 0) {
        error.textContent = 'Lengkapi semua data produk dengan benar.';
        return;
    }
    if (!imageFile.type.startsWith('image/') || imageFile.size > 5 * 1024 * 1024) {
        error.textContent = 'Pilih foto gambar dengan ukuran maksimal 5 MB.';
        return;
    }
    if (currentProducts.some(product => String(product.code).toLowerCase() === code.toLowerCase())) {
        error.textContent = 'Kode produk sudah digunakan. Gunakan kode lain.';
        return;
    }

    const product = {
        code, name, category, price, size, image_url: 'assets/hero-board.png', description,
        materials: 'Bunga segar pilihan Roses Florist', height_estimate: 'Sesuai ukuran produk'
    };
    try {
        if (usingSupabase) {
            const { data, error: insertError } = await supabaseClient.from('products').insert(product).select().single();
            if (insertError) throw insertError;
            const imageUrl = await uploadNewProductImage(data.id, imageFile);
            if (!imageUrl) {
                await supabaseClient.from('products').delete().eq('id', data.id);
                throw new Error('Foto produk tidak dapat diunggah.');
            }
            data.image_url = imageUrl;
            currentProducts.push(data);
        } else {
        const imageUrl = await readImageFile(imageFile);
        product.id = Date.now();
        product.image_url = imageUrl;
        const addedProducts = JSON.parse(localStorage.getItem(ADMIN_ADDED_PRODUCTS_KEY) || '[]');
        addedProducts.push(product);
        localStorage.setItem(ADMIN_ADDED_PRODUCTS_KEY, JSON.stringify(addedProducts));
        currentProducts.push(product);
        }
        closeAddProductModal();
        renderAdminProducts();
        renderAdminOrders();
        showToast('Produk baru berhasil ditambahkan ke katalog.');
    } catch (storageError) {
        console.warn('Produk tidak dapat ditambahkan.', storageError);
        error.textContent = storageError.message || 'Produk tidak dapat disimpan. Coba lagi.';
    }
}

async function uploadNewProductImage(productId, imageFile) {
    const extension = imageFile.name.split('.').pop() || 'jpg';
    const filePath = `${productId}/${Date.now()}.${extension}`;
    const { error: uploadError } = await supabaseClient.storage
        .from('product-images')
        .upload(filePath, imageFile, { upsert: false });
    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabaseClient.storage.from('product-images').getPublicUrl(filePath);
    const imageUrl = publicUrlData.publicUrl;
    const { error: updateError } = await supabaseClient.from('products').update({ image_url: imageUrl }).eq('id', productId);
    if (updateError) throw updateError;
    return imageUrl;
}

function readImageFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = event => resolve(event.target.result);
        reader.onerror = () => reject(new Error('Foto tidak dapat dibaca.'));
        reader.readAsDataURL(file);
    });
}

async function importDefaultCatalog() {
    if (!usingSupabase) {
        showToast('Impor katalog hanya tersedia saat Supabase aktif.');
        return;
    }

    const existingCodes = new Set(currentProducts.map(product => String(product.code || '').toLowerCase()));
    const productsToImport = LOCAL_PRODUCTS
        .filter(product => !existingCodes.has(String(product.code).toLowerCase()))
        .map(({ id, ...product }) => product);

    if (!productsToImport.length) {
        showToast('Semua produk katalog awal sudah ada di Supabase.');
        return;
    }
    if (!confirm(`Impor ${productsToImport.length} produk katalog awal ke Supabase? Produk yang sudah ada tidak akan diubah.`)) return;

    const { error } = await supabaseClient.from('products').insert(productsToImport);
    if (error) {
        console.warn('Impor katalog gagal.', error.message);
        showToast('Impor katalog gagal. Pastikan akun Anda adalah admin Supabase.');
        return;
    }

    await loadProductsFromSupabase();
    renderAdminProducts();
    await renderAdminOrders();
    showToast(`${productsToImport.length} produk berhasil diimpor ke Supabase.`);
}

async function saveProductDetails(productId) {
    const nameInput = document.getElementById(`admin-product-name-${productId}`);
    const priceInput = document.getElementById(`admin-product-price-${productId}`);
    const descriptionInput = document.getElementById(`admin-product-description-${productId}`);
    const name = nameInput.value.trim();
    const price = getPriceInputValue(priceInput);
    const description = descriptionInput.value.trim();
    const product = currentProducts.find(item => item.id === productId);

    if (!product || !name || !Number.isFinite(price) || price <= 0 || !description) {
        showToast('Isi nama, harga, dan deskripsi produk terlebih dahulu.');
        return;
    }

    product.name = name;
    product.price = price;
    product.description = description;
    try {
        if (usingSupabase) {
            const { error: updateError } = await supabaseClient.from('products').update({ name, price, description }).eq('id', productId);
            if (updateError) throw updateError;
        }
        const savedDetails = JSON.parse(localStorage.getItem(ADMIN_PRODUCT_DETAILS_KEY) || '{}');
        savedDetails[productId] = { name, price, description };
        localStorage.setItem(ADMIN_PRODUCT_DETAILS_KEY, JSON.stringify(savedDetails));
        renderAdminProducts();
        showToast('Perubahan produk tersimpan.');
    } catch (error) {
        showToast('Data produk tidak dapat disimpan di browser.');
    }
}

async function deleteCatalogProduct(productId) {
    const product = currentProducts.find(item => String(item.id) === String(productId));
    if (!product) return;
    if (!confirm(`Hapus produk "${product.name}" dari katalog?`)) return;

    try {
        if (usingSupabase) {
            const { error } = await supabaseClient.from('products').delete().eq('id', productId);
            if (error) throw error;
        } else {
            const savedProducts = JSON.parse(localStorage.getItem(ADMIN_ADDED_PRODUCTS_KEY) || '[]')
                .filter(item => String(item.id) !== String(productId));
            localStorage.setItem(ADMIN_ADDED_PRODUCTS_KEY, JSON.stringify(savedProducts));
        }
        currentProducts = currentProducts.filter(item => String(item.id) !== String(productId));
        renderAdminProducts();
        await renderAdminOrders();
        showToast('Produk berhasil dihapus dari katalog.');
    } catch (error) {
        console.warn('Produk tidak dapat dihapus.', error);
        showToast('Produk tidak dapat dihapus. Pastikan akun Anda memiliki akses admin.');
    }
}

function getPriceInputValue(input) {
    return Number(String(input?.value || '').replace(/\D/g, ''));
}

function formatPriceInput(input) {
    const digits = String(input.value || '').replace(/\D/g, '');
    input.value = digits ? new Intl.NumberFormat('id-ID').format(Number(digits)) : '';
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[character]));
}

async function updateProductImage(productId, input) {
    const file = input.files && input.files[0];
    if (!file) return;

    if (usingSupabase) {
        const extension = file.name.split('.').pop() || 'jpg';
        const filePath = `${productId}/${Date.now()}.${extension}`;
        const { error: uploadError } = await supabaseClient.storage.from('product-images').upload(filePath, file);
        if (uploadError) {
            showToast('Foto tidak dapat diunggah ke Supabase.');
            return;
        }
        const { data: publicUrlData } = supabaseClient.storage.from('product-images').getPublicUrl(filePath);
        const imageUrl = publicUrlData.publicUrl;
        const { error: updateError } = await supabaseClient.from('products').update({ image_url: imageUrl }).eq('id', productId);
        const product = currentProducts.find(item => item.id === productId);
        if (updateError || !product) {
            showToast('URL foto tidak dapat disimpan ke katalog.');
            return;
        }
        product.image_url = imageUrl;
        const preview = document.getElementById(`admin-product-image-${productId}`);
        if (preview) preview.src = imageUrl;
        showToast('Foto produk tersimpan di Supabase.');
        return;
    }

    const reader = new FileReader();
    reader.onload = event => {
        const imageData = event.target.result;
        const product = currentProducts.find(item => item.id === productId);
        const preview = document.getElementById(`admin-product-image-${productId}`);
        if (!product || !preview) return;

        product.image_url = imageData;
        preview.src = imageData;
        try {
            const savedImages = JSON.parse(localStorage.getItem(ADMIN_PRODUCT_IMAGES_KEY) || '{}');
            savedImages[productId] = imageData;
            localStorage.setItem(ADMIN_PRODUCT_IMAGES_KEY, JSON.stringify(savedImages));
            showToast('Foto produk tersimpan di perangkat ini.');
        } catch (error) {
            showToast('Foto terlalu besar untuk disimpan di browser. Gunakan foto berukuran lebih kecil.');
        }
    };
    reader.readAsDataURL(file);
}

function updateNavbarState() {
    const currentHash = window.location.hash || '#/';
    document.querySelectorAll('.main-nav-link[href]').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === currentHash);
    });

    const adminLink = document.getElementById('admin-profile-link');
    if (!adminLink) return;

    const loggedIn = isAdminLoggedIn();
    const adminViewOpen = currentHash === '#/admin' || currentHash === '#/login';
    adminLink.href = loggedIn ? '#/admin' : '#/login';
    adminLink.classList.toggle('active', adminViewOpen);
    adminLink.setAttribute('aria-label', loggedIn ? 'Buka dashboard admin' : 'Masuk sebagai admin');
    adminLink.title = loggedIn ? 'Dashboard Admin' : 'Masuk Admin';
    const label = adminLink.querySelector('.admin-profile-label');
    if (label) label.textContent = loggedIn ? 'Dashboard' : 'Admin';
}

// ====================================================================
// Halaman Beranda
// ====================================================================
const HOME_FEATURED_LIMIT = 6;

function initHomeView() {
    renderProductsGrid();
}

function buildProductCardHTML(product) {
    const price = product.price || 550000;
    return `
        <div class="product-image-container">
            <img src="${product.image_url}" alt="${product.name}" class="product-image" loading="lazy" onerror="this.src='assets/hero-board.jpg'">
            <span class="product-category-tag">${product.category}</span>
            <span class="product-code-badge">${product.code || ''}</span>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-meta-desc">Ukuran: ${product.size || '200 x 120 cm'}</p>
            <div class="product-footer">
                <div class="price-stack">
                    <span class="product-price">Rp ${formatRupiah(price)}</span>
                </div>
                <button class="order-action-btn" onclick="goToDetail(${product.id})">Pesan</button>
            </div>
        </div>
    `;
}

function renderProductsGrid() {
    const grid = document.getElementById('main-products-grid');
    if (!grid) return;

    const featured = currentProducts.slice(0, HOME_FEATURED_LIMIT);

    if (featured.length === 0) {
        grid.innerHTML = `<div class="empty-state"><p>Belum ada papan bunga tersedia.</p></div>`;
        return;
    }

    grid.innerHTML = '';
    featured.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = buildProductCardHTML(product);
        grid.appendChild(card);
    });
}

function goToDetail(productId) {
    selectedProductId = productId;
    window.location.hash = '#/detail';
}

// ====================================================================
// Pesan via WhatsApp
// ====================================================================
function orderProductViaWhatsApp(productId) {
    const pid = productId != null ? productId : selectedProductId;
    const product = currentProducts.find(p => p.id == pid);
    if (!product) return;

    const customerName = document.getElementById('order-customer-name')?.value.trim();
    const customerPhone = document.getElementById('order-customer-phone')?.value.trim();
    if (!customerName || !customerPhone) {
        showToast('Mohon isi nama dan nomor WhatsApp terlebih dahulu.');
        document.getElementById(!customerName ? 'order-customer-name' : 'order-customer-phone')?.focus();
        return;
    }

    const productCode = product.code || '-';
    const productName = product.name || 'Papan Bunga';
    const productSize = product.size || '200 x 120 cm';
    const productPrice = product.price || 550000;

    const message =
        'Halo Admin Roses Florist, saya ingin memesan:\n' +
        'Kode Produk: ' + productCode + '\n' +
        'Nama: ' + productName + '\n' +
        'Ukuran: ' + productSize + '\n' +
        'Harga: Rp ' + formatRupiah(productPrice) + '\n\n' +
        'Data Pemesan:\n' +
        'Nama: ' + customerName + '\n' +
        'WhatsApp: ' + customerPhone + '\n\n' +
        'Mohon informasi selanjutnya untuk detail pesanan. Terima kasih!';

    saveAdminOrder({
        id: Date.now(),
        type: 'Produk katalog',
        customerName,
        phone: customerPhone,
        productName,
        details: `${productCode} · ${productSize} · Rp ${formatRupiah(productPrice)}`,
        createdAt: new Date().toISOString()
    });
    const waUrl = 'https://wa.me/' + WHATSAPP_ADMIN_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(waUrl, '_blank', 'noopener');
}

// ====================================================================
// Halaman Katalog
// ====================================================================
function initKatalogView() {
    katalogActiveCategory = katalogPendingCategory || 'Semua';
    katalogPendingCategory = null;
    const searchInput = document.getElementById('katalog-search-input');
    if (searchInput) {
        searchInput.value = '';
        searchInput.oninput = () => renderKatalogGrid();
    }
    setupKatalogCategoryChips();
    renderKatalogGrid();
}

function katalogFilterByCategory(category) {
    katalogPendingCategory = category;
    window.location.hash = '#/katalog';
}

function setupKatalogCategoryChips() {
    const container = document.getElementById('katalog-category-list');
    if (!container) return;

    const categories = ['Semua', ...new Set(currentProducts.map(p => p.category))];
    container.innerHTML = categories.map(cat =>
        `<button type="button" class="katalog-category-item${cat === katalogActiveCategory ? ' active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    container.querySelectorAll('.katalog-category-item').forEach(item => {
        item.onclick = () => {
            katalogActiveCategory = item.getAttribute('data-category');
            container.querySelectorAll('.katalog-category-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            renderKatalogGrid();
        };
    });
}

function renderKatalogGrid() {
    const grid = document.getElementById('katalog-products-grid');
    if (!grid) return;

    const searchInput = document.getElementById('katalog-search-input');
    const searchTerm = (searchInput ? searchInput.value : '').trim().toLowerCase();

    let filtered = currentProducts;
    if (katalogActiveCategory !== 'Semua') {
        filtered = filtered.filter(p => p.category === katalogActiveCategory);
    }
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm) || p.category.toLowerCase().includes(searchTerm));
    }

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><p>Tidak ditemukan papan bunga yang cocok. Coba kata kunci atau kategori lain.</p></div>`;
        return;
    }

    grid.innerHTML = '';
    filtered.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = buildProductCardHTML(product);
        grid.appendChild(card);
    });
}

// ====================================================================
// Halaman Detail Produk
// ====================================================================
function initDetailView() {
    const product = currentProducts.find(p => p.id == selectedProductId) || currentProducts[0];
    if (!product) return;

    selectedProductId = product.id;

    const basePrice = parseFloat(product.price) || 550000;
    const priceText = `Rp ${formatRupiah(basePrice)}`;

    document.getElementById('detail-product-name').textContent = product.name;
    const detailCode = document.getElementById('detail-product-code');
    if (detailCode) detailCode.textContent = product.code || '';
    document.getElementById('detail-product-category').textContent = product.category;
    document.getElementById('detail-product-size').textContent = product.size || '200 x 120 cm';
    document.getElementById('detail-product-price').textContent = priceText;
    document.getElementById('sticky-total-price').textContent = priceText;
    document.getElementById('detail-product-description').textContent = product.description || 'Karangan papan bunga premium hasil rangkaian tim florist Roses Florist.';
    document.getElementById('detail-product-materials').innerHTML = `<strong>Bahan:</strong> ${product.materials || 'Bunga mawar dan pikok segar premium.'}`;
    document.getElementById('detail-product-height').innerHTML = `<strong>Tinggi Papan:</strong> ${product.height_estimate || 'Sekitar 2 meter'}`;

    const mainImg = document.getElementById('detail-board-image');
    if (mainImg) {
        mainImg.src = product.image_url;
        mainImg.onerror = function() { this.src = 'assets/hero-board.jpg'; };
    }
}

// ====================================================================
// Halaman Custom Order (dikirim langsung ke WhatsApp)
// ====================================================================
function initCustomView() {
    const form = document.getElementById('custom-request-form');
    if (form) form.reset();
    const preview = document.getElementById('custom-ref-preview');
    const uploadText = document.getElementById('custom-upload-text');
    if (preview) preview.style.display = 'none';
    if (uploadText) uploadText.style.display = 'flex';

    const dateInput = document.getElementById('custom-delivery-date');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split('T')[0];
    }
}

function previewCustomRef(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('custom-ref-preview');
    const placeholder = document.getElementById('custom-upload-text');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
            if (placeholder) placeholder.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

function submitCustomRequest(event) {
    event.preventDefault();

    const customerName = document.getElementById('custom-customer-name').value.trim();
    const customerPhone = document.getElementById('custom-customer-phone').value.trim();
    const eventType = document.getElementById('custom-event-type').value;
    const customSize = document.getElementById('custom-size').value;
    const budget = document.getElementById('custom-budget-range').value;
    const deliveryDate = document.getElementById('custom-delivery-date').value;
    const location = document.getElementById('custom-location').value.trim();
    const shippingArea = document.getElementById('custom-shipping-area').value;

    const areaInfo = getAreaInfo(shippingArea);
    const areaLabel = areaInfo ? areaInfo.label : '';
    const shippingCostVal = areaInfo && areaInfo.cost !== null ? areaInfo.cost : 0;
    const isDaerahLain = shippingArea === 'daerah_lain';
    const ongkirText = isDaerahLain
        ? 'Perlu konfirmasi admin'
        : 'Rp ' + formatRupiah(shippingCostVal) + ' (' + areaLabel + ')';

    const message =
        'Halo Admin Roses Florist, saya ingin request papan bunga custom:\n' +
        '- Nama Pemesan: ' + customerName + '\n' +
        '- WhatsApp: ' + customerPhone + '\n' +
        '- Kategori: ' + eventType + '\n' +
        '- Ukuran Papan: ' + customSize + '\n' +
        '- Estimasi Budget: ' + budget + '\n' +
        '- Tanggal Dibutuhkan: ' + formatDate(deliveryDate) + '\n' +
        '- Lokasi Pengiriman: ' + location + '\n' +
        '- Area Pengiriman: ' + ongkirText + '\n\n' +
        'Foto referensi (jika ada) akan saya kirimkan via chat WhatsApp ini. ' +
        'Mohon informasi selanjutnya untuk detail desain banner & tulisan ucapan. Terima kasih!';

    saveAdminOrder({
        id: Date.now(),
        type: 'Request custom',
        customerName,
        phone: customerPhone,
        productName: eventType,
        details: `${customSize} · ${budget} · Dibutuhkan ${formatDate(deliveryDate)} · ${location}`,
        createdAt: new Date().toISOString()
    });
    const waUrl = 'https://wa.me/' + WHATSAPP_ADMIN_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(waUrl, '_blank', 'noopener');
    showToast('Permintaan custom terkirim ke WhatsApp admin.');
}

// ====================================================================
// Utilitas
// ====================================================================
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID').format(number);
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function showToast(message) {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification visible';
    toast.innerHTML = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function setupGlobalEventListeners() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.getElementById('main-navigation');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
        });

        mainNav.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                mainNav.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
            }
        });
    }
}

function setupFlowerCursorTrail() {
    const canUseCursorEffects = window.matchMedia('(pointer: fine)').matches &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canUseCursorEffects) return;

    let lastFlowerAt = 0;
    document.addEventListener('mousemove', (event) => {
        const now = Date.now();
        if (now - lastFlowerAt < 85) return;
        lastFlowerAt = now;

        const flower = document.createElement('span');
        flower.className = 'cursor-flower';
        flower.textContent = '\u273f';
        flower.style.left = `${event.clientX}px`;
        flower.style.top = `${event.clientY}px`;
        document.body.appendChild(flower);
        flower.addEventListener('animationend', () => flower.remove(), { once: true });
    });
}
