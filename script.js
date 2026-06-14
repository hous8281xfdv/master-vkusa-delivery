// === НАСТРОЙКИ ===
const ADMIN_PASSWORD = 'Aram-Gril';

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

const extrasOptions = [
    { name: "Сыр чеддер", price: 40 },
    { name: "Фри (добавка)", price: 40 },
    { name: "Перец Холопеньо", price: 40 },
    { name: "Сырные палочки", price: 50 },
    { name: "Овощи гриль", price: 40 }
];

let cart = [];
let currentFilter = 'all';
let currentExtrasItemIndex = null;
let orders = [];

// Push-уведомления
let notificationPermission = false;

async function initNotifications() {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        notificationPermission = permission === 'granted';
        if (notificationPermission) {
            console.log('Уведомления разрешены');
            showToast('🔔 Уведомления включены');
        }
    }
}

function sendNotificationToClient(title, body, orderId = null) {
    if (notificationPermission) {
        new Notification(title, {
            body: body,
            icon: 'https://master-vkusa-delivery.vercel.app/logo.jpg',
            badge: 'https://master-vkusa-delivery.vercel.app/logo.jpg',
            tag: orderId ? `order_${orderId}` : 'general',
            renotify: true
        });
        return true;
    }
    return false;
}

// Корзина
function loadCart() {
    const saved = localStorage.getItem('masterVkusaCart');
    if (saved) cart = JSON.parse(saved);
    const savedOrders = localStorage.getItem('masterVkusaOrders');
    if (savedOrders) orders = JSON.parse(savedOrders);
    updateCartUI();
    renderAdminOrders();
}

function saveCart() {
    localStorage.setItem('masterVkusaCart', JSON.stringify(cart));
}

function saveOrders() {
    localStorage.setItem('masterVkusaOrders', JSON.stringify(orders));
}

function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.style.background = isError ? '#e63946' : '#ff7e33';
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
        let itemTotal = item.price * item.quantity;
        if (item.extras && item.extras.length > 0) {
            item.extras.forEach(extra => { itemTotal += extra.price * item.quantity; });
        }
        total += itemTotal;
        let extrasHtml = '';
        if (item.extras && item.extras.length > 0) {
            extrasHtml = `<div style="font-size:0.7rem; color:#b45f2b; margin-top:4px;">+ ${item.extras.map(e => e.name).join(', ')}</div>`;
        }
        html += `
            <div class="cart-item" data-index="${idx}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${escapeHtml(item.name)}</div>
                    ${extrasHtml}
                </div>
                <div class="cart-item-controls">
                    <button class="cart-item-dec" data-index="${idx}">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-item-inc" data-index="${idx}">+</button>
                    <button class="cart-item-extras" data-index="${idx}" style="background:#fff0e3; border:none; padding:5px 10px; border-radius:30px;">➕</button>
                    <button class="cart-item-remove" data-index="${idx}">✕</button>
                </div>
            </div>
        `;
    });
    cartDiv.innerHTML = html;
    document.getElementById('cartTotalPrice').innerText = total;
    
    document.querySelectorAll('.cart-item-dec').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            if (cart[idx].quantity > 1) {
                cart[idx].quantity--;
            } else {
                cart.splice(idx, 1);
            }
            saveCart();
            updateCartUI();
            showToast('Количество обновлено');
        });
    });
    document.querySelectorAll('.cart-item-inc').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            cart[idx].quantity++;
            saveCart();
            updateCartUI();
            showToast('Количество обновлено');
        });
    });
    document.querySelectorAll('.cart-item-extras').forEach(btn => {
        btn.addEventListener('click', () => {
            currentExtrasItemIndex = parseInt(btn.dataset.index);
            openExtrasModal();
        });
    });
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index);
            cart.splice(idx, 1);
            saveCart();
            updateCartUI();
            showToast('Товар удалён');
        });
    });
}

function openExtrasModal() {
    const item = cart[currentExtrasItemIndex];
    document.getElementById('extrasItemName').innerText = item.name;
    const container = document.getElementById('extrasList');
    container.innerHTML = extrasOptions.map(extra => `
        <div class="extras-item">
            <label>
                <input type="checkbox" value="${extra.name}" data-price="${extra.price}" ${item.extras && item.extras.some(e => e.name === extra.name) ? 'checked' : ''}>
                ${extra.name} (+${extra.price} ₽)
            </label>
        </div>
    `).join('');
    document.getElementById('extrasModal').style.display = 'block';
}

document.getElementById('extrasSaveBtn')?.addEventListener('click', () => {
    const item = cart[currentExtrasItemIndex];
    const selectedExtras = [];
    document.querySelectorAll('#extrasList input:checked').forEach(cb => {
        selectedExtras.push({
            name: cb.value,
            price: parseInt(cb.dataset.price)
        });
    });
    item.extras = selectedExtras;
    saveCart();
    updateCartUI();
    document.getElementById('extrasModal').style.display = 'none';
    showToast('Добавки сохранены');
});

function addToCart(name, price) {
    const exist = cart.find(i => i.name === name);
    if (exist) {
        exist.quantity++;
    } else {
        cart.push({ name, price, quantity: 1, extras: [] });
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
                <div style="font-size:0.7rem; color:#b45f2b; margin-top:5px;">${escapeHtml(item.category)}</div>
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

function addOrder(order) {
    orders.unshift(order);
    saveOrders();
    renderAdminOrders();
    // Отправляем уведомление конкретному клиенту
    sendNotificationToClient(
        'Мастер Вкуса', 
        `${order.name}, ваш заказ принят! Сумма: ${order.total} ₽. Ожидайте подтверждения.`,
        order.id
    );
}

function renderAdminOrders() {
    const container = document.getElementById('ordersList');
    if (!container) return;
    if (orders.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px;">Нет заказов</p>';
        return;
    }
    container.innerHTML = orders.map(order => `
        <div class="admin-order-item" data-order-id="${order.id}">
            <div class="admin-order-header">
                <span class="admin-order-customer">👤 ${escapeHtml(order.name)}</span>
                <span class="admin-order-total">💰 ${order.total} ₽</span>
                <span style="font-size:0.7rem;">${new Date(order.date).toLocaleString()}</span>
            </div>
            <div class="admin-order-address">📍 ${escapeHtml(order.address)}</div>
            <div class="admin-order-payment">💳 Оплата: ${order.payment}</div>
            <div class="admin-order-items">📋 ${order.items.map(i => `${escapeHtml(i.name)} x${i.quantity}${i.extras && i.extras.length ? ' + ' + i.extras.map(e => e.name).join(', ') : ''}`).join(', ')}</div>
            <div class="admin-order-actions" style="margin-top:12px; display:flex; gap:10px;">
                <button class="notify-client-btn" data-order-id="${order.id}" data-client-name="${escapeHtml(order.name)}" style="background:#ff7e33; border:none; padding:6px 16px; border-radius:40px; color:white; cursor:pointer;">
                    <i class="fas fa-bell"></i> Отправить уведомление "${order.name}"
                </button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.notify-client-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const clientName = btn.dataset.clientName;
            const orderId = btn.dataset.orderId;
            const order = orders.find(o => o.id == orderId);
            if (order) {
                sendNotificationToClient(
                    'Мастер Вкуса',
                    `${clientName}, ваш заказ готов! Можете прийти или ожидайте курьера 🔥`,
                    orderId
                );
                showToast(`✅ Уведомление отправлено ${clientName}`);
            }
        });
    });
}

document.getElementById('orderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    
    if (!name || !address) {
        showToast('❌ Заполните имя и адрес', true);
        return;
    }
    if (cart.length === 0) {
        showToast('❌ Корзина пуста', true);
        return;
    }
    
    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        if (item.extras) {
            item.extras.forEach(extra => {
                itemTotal += extra.price * item.quantity;
            });
        }
        total += itemTotal;
    });
    
    addOrder({
        id: Date.now(),
        name,
        address,
        payment,
        items: cart.map(i => ({ name: i.name, quantity: i.quantity, extras: i.extras })),
        total,
        date: new Date().toISOString()
    });
    
    cart = [];
    saveCart();
    updateCartUI();
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('orderForm').reset();
    showToast('✅ Заказ отправлен!');
});

// Модалки
const cartModal = document.getElementById('cartModal');
const orderModal = document.getElementById('orderModal');
const adminModal = document.getElementById('adminModal');

document.getElementById('cartIcon')?.addEventListener('click', () => cartModal.style.display = 'block');
document.getElementById('mobileCartLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    cartModal.style.display = 'block';
    document.getElementById('mobileNav')?.classList.remove('active');
});
document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('❌ Корзина пуста', true);
        return;
    }
    cartModal.style.display = 'none';
    orderModal.style.display = 'block';
});
document.querySelectorAll('.close, .close-order, .close-admin, .close-extras').forEach(btn => {
    btn.onclick = () => {
        cartModal.style.display = 'none';
        orderModal.style.display = 'none';
        adminModal.style.display = 'none';
        document.getElementById('extrasModal').style.display = 'none';
    };
});
window.onclick = (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === orderModal) orderModal.style.display = 'none';
    if (e.target === adminModal) adminModal.style.display = 'none';
    if (e.target === document.getElementById('extrasModal')) document.getElementById('extrasModal').style.display = 'none';
};

// Админ панель
document.getElementById('adminPanelBtn')?.addEventListener('click', () => adminModal.style.display = 'block');
document.getElementById('mobileAdminLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    adminModal.style.display = 'block';
    document.getElementById('mobileNav')?.classList.remove('active');
});
document.getElementById('adminLoginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = document.getElementById('adminPassword').value;
    if (pwd === ADMIN_PASSWORD) {
        document.getElementById('adminLoginForm').style.display = 'none';
        document.getElementById('adminContent').style.display = 'block';
        renderAdminOrders();
        showToast('Добро пожаловать в админ панель');
    } else {
        showToast('❌ Неверный пароль', true);
    }
});

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

// Запрос уведомлений при загрузке
initNotifications();

loadCart();
renderMenu();
initFilters();
initMaps();
