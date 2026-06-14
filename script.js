const PHONE_NUMBER = '79880000109';

const menuData = [
    { category: "ГОВЯДИНА", name: "Big-Бургер", price: 450 },
    { category: "ГОВЯДИНА", name: "Шаурма стандарт", price: 450 },
    { category: "ГОВЯДИНА", name: "Шаурма большая", price: 550 },
    { category: "ГОВЯДИНА", name: "Сырная стандарт", price: 470 },
    { category: "ГОВЯДИНА", name: "Сырная большая", price: 550 },
    { category: "ГОВЯДИНА", name: "Сэндвич", price: 450 },
    { category: "ГОВЯДИНА", name: "Пита", price: 400 },
    { category: "ГОВЯДИНА", name: "Гирос", price: 500 },
    { category: "ГОВЯДИНА", name: "Гирос на тарелке", price: 600 },
    { category: "ГОВЯДИНА", name: "Люля-кебаб в лаваше", price: 400 },
    { category: "СВИНИНА", name: "Шаурма стандарт", price: 270 },
    { category: "СВИНИНА", name: "Шаурма большая", price: 320 },
    { category: "СВИНИНА", name: "Сырная стандарт", price: 290 },
    { category: "СВИНИНА", name: "Сырная большая", price: 340 },
    { category: "СВИНИНА", name: "Сэндвич", price: 350 },
    { category: "СВИНИНА", name: "Пита Greek", price: 290 },
    { category: "СВИНИНА", name: "Гирос", price: 350 },
    { category: "СВИНИНА", name: "Гирос на тарелке", price: 400 },
    { category: "КУРИЦА", name: "Big-Бургер", price: 370 },
    { category: "КУРИЦА", name: "Шаурма стандарт", price: 270 },
    { category: "КУРИЦА", name: "Шаурма большая", price: 320 },
    { category: "КУРИЦА", name: "Сырная ст.", price: 290 },
    { category: "КУРИЦА", name: "Сырная большая", price: 340 },
    { category: "КУРИЦА", name: "Сэндвич", price: 350 },
    { category: "КУРИЦА", name: "Пита Greek", price: 290 },
    { category: "КУРИЦА", name: "Гирос", price: 350 },
    { category: "КУРИЦА", name: "Гирос на тарелке", price: 400 },
    { category: "КУРИЦА", name: "Люля-кебаб в лаваше", price: 350 },
    { category: "КРЕВЕТКИ", name: "Шаурма стандарт", price: 390 },
    { category: "КРЕВЕТКИ", name: "Шаурма большая", price: 530 },
    { category: "КРЕВЕТКИ", name: "Сырная стандарт", price: 420 },
    { category: "КРЕВЕТКИ", name: "Сырная большая", price: 550 },
    { category: "КРЕВЕТКИ", name: "Пита Greek", price: 400 },
    { category: "КРЕВЕТКИ", name: "Сэндвич", price: 400 },
    { category: "КРЕВЕТКИ", name: "Гирос", price: 500 },
    { category: "КРЕВЕТКИ", name: "Гирос на тарелке", price: 600 },
    { category: "ВЕГАН", name: "Шаурма стандарт", price: 270 },
    { category: "ВЕГАН", name: "Шаурма большая", price: 320 },
    { category: "ВЕГАН", name: "Сырная стандарт", price: 300 },
    { category: "ВЕГАН", name: "Сырная большая", price: 350 },
    { category: "ВЕГАН", name: "Пита Greek", price: 290 },
    { category: "ВЕГАН", name: "Гирос", price: 350 },
    { category: "ВЕГАН", name: "Гирос на тарелке", price: 400 },
    { category: "ГАРНИРЫ", name: "Картофель фри", price: 200 },
    { category: "ГАРНИРЫ", name: "Картофель по-деревенски", price: 200 },
    { category: "ГАРНИРЫ", name: "Луковые кольца (10 шт)", price: 250 },
    { category: "ГАРНИРЫ", name: "Сырные палочки (5 шт)", price: 250 },
    { category: "ГАРНИРЫ", name: "Сыр чеддер (добавка)", price: 40 },
    { category: "ГАРНИРЫ", name: "Фри (добавка)", price: 40 },
    { category: "ГАРНИРЫ", name: "Перец Холопеньо", price: 40 },
    { category: "ГАРНИРЫ", name: "Сырные палочки (добавка)", price: 50 },
    { category: "ГАРНИРЫ", name: "Овощи гриль (добавка)", price: 40 },
    { category: "НАПИТКИ", name: "Кола 0.5", price: 100 },
    { category: "НАПИТКИ", name: "Спрайт 0.5", price: 100 },
    { category: "НАПИТКИ", name: "Фанта 0.5", price: 100 },
    { category: "НАПИТКИ", name: "Лимонад домашний", price: 150 },
    { category: "НАПИТКИ", name: "Морс клюквенный", price: 150 },
    { category: "НАПИТКИ", name: "Сок в ассортименте", price: 120 },
    { category: "НАПИТКИ", name: "Вода газированная", price: 80 },
    { category: "НАПИТКИ", name: "Вода негазированная", price: 80 }
];

let cart = [];
let currentFilter = 'all';

function loadCart() {
    const saved = localStorage.getItem('masterVkusaCart');
    if (saved) cart = JSON.parse(saved);
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('masterVkusaCart', JSON.stringify(cart));
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    const cartCount = document.getElementById('cartCount');
    const mobileCartCount = document.getElementById('mobileCartCount');
    if (cartCount) cartCount.innerText = totalItems;
    if (mobileCartCount) mobileCartCount.innerText = totalItems;
    
    const cartDiv = document.getElementById('cartItems');
    if (!cartDiv) return;
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p style="text-align:center; padding:20px;">Корзина пуста 🍔</p>';
        document.getElementById('cartTotalPrice').innerText = '0';
        return;
    }
    
    let total = 0;
    let html = '';
    cart.forEach((item, idx) => {
        const sum = item.price * item.quantity;
        total += sum;
        html += `
            <div class="cart-item">
                <span><strong>${escapeHtml(item.name)}</strong> x${item.quantity}</span>
                <span>${sum} ₽</span>
                <button class="cart-item-remove" data-index="${idx}">✕</button>
            </div>
        `;
    });
    cartDiv.innerHTML = html;
    document.getElementById('cartTotalPrice').innerText = total;
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.index);
            cart.splice(idx, 1);
            saveCart();
            updateCartUI();
            showToast('Товар удалён');
        });
    });
}

function addToCart(name, price) {
    const exist = cart.find(i => i.name === name);
    if (exist) {
        exist.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    showToast(`✅ ${name} добавлен в корзину`);
}

function renderMenu() {
    const container = document.getElementById('menuGrid');
    if (!container) return;
    
    let filtered = menuData;
    if (currentFilter !== 'all') {
        filtered = menuData.filter(item => item.category === currentFilter);
    }
    
    container.innerHTML = filtered.map(item => `
        <div class="menu-card">
            <div class="card-content">
                <div class="card-title">
                    <span class="item-name">${escapeHtml(item.name)}</span>
                    <span class="item-price">${item.price} ₽</span>
                </div>
                <div class="card-category" style="font-size:0.7rem; color:#aa8a6a; margin-top:5px;">${escapeHtml(item.category)}</div>
            </div>
            <button class="btn-add" data-name="${escapeHtml(item.name)}" data-price="${item.price}">
                <i class="fas fa-cart-plus"></i> В корзину
            </button>
        </div>
    `).join('');
    
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart(btn.dataset.name, parseInt(btn.dataset.price));
        });
    });
}

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.cat;
            renderMenu();
        });
    });
}

function initMaps() {
    document.querySelectorAll('.map-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.map-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            document.querySelectorAll('.map-container').forEach(container => container.classList.remove('active'));
            const mapId = tab.dataset.map === 'yandex' ? 'yandexMap' : 'dgisMap';
            document.getElementById(mapId).classList.add('active');
        });
    });
}

function sendToMax(message) {
    const url = `https://max.ru/u/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

document.getElementById('orderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    
    if (!name || !address) {
        showToast('❌ Заполните имя и адрес');
        return;
    }
    if (cart.length === 0) {
        showToast('❌ Корзина пуста');
        return;
    }
    
    let itemsText = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        itemsText += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
    });
    
    const message = `🍔 НОВЫЙ ЗАКАЗ MASTER ВКУСА 🍔\n\n👤 Клиент: ${name}\n📍 Адрес: ${address}\n💳 Оплата: ${payment}\n\n📋 ЗАКАЗ:\n${itemsText}\n💰 ИТОГО: ${total} ₽\n\n🚀 Доставка 10:00–22:00. Позвоните клиенту.`;
    sendToMax(message);
    
    if (confirm('Заказ отправлен! Очистить корзину?')) {
        cart = [];
        saveCart();
        updateCartUI();
    }
    document.getElementById('orderModal').style.display = 'none';
});

// Модалки
const cartModal = document.getElementById('cartModal');
const orderModal = document.getElementById('orderModal');

document.getElementById('cartIcon')?.addEventListener('click', () => cartModal.style.display = 'block');
document.getElementById('mobileCartLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    document.getElementById('mobileNav')?.classList.remove('active');
});
document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('❌ Корзина пуста');
        return;
    }
    cartModal.style.display = 'none';
    orderModal.style.display = 'block';
});
document.querySelectorAll('.close, .close-order').forEach(btn => {
    btn.onclick = () => {
        cartModal.style.display = 'none';
        orderModal.style.display = 'none';
    };
});
window.onclick = (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === orderModal) orderModal.style.display = 'none';
};

// Бургер
const burger = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
if (burger && mobileNav) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
}

loadCart();
renderMenu();
initFilters();
initMaps();
