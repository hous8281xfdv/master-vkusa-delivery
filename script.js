// === НАСТРОЙКИ ===
const MAX_USER_ID = '79880000109';

// ===== ПОЛНОЕ МЕНЮ =====
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
    { category: "ВЕГАН МЕНЮ", name: "Шаурма стандарт", price: 270 },
    { category: "ВЕГАН МЕНЮ", name: "Шаурма большая", price: 320 },
    { category: "ВЕГАН МЕНЮ", name: "Сырная стандарт", price: 300 },
    { category: "ВЕГАН МЕНЮ", name: "Сырная большая", price: 350 },
    { category: "ВЕГАН МЕНЮ", name: "Пита Greek", price: 290 },
    { category: "ВЕГАН МЕНЮ", name: "Гирос", price: 350 },
    { category: "ВЕГАН МЕНЮ", name: "Гирос на тарелке", price: 400 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Картофель фри (порц. / 200 р)", price: 200 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Картофель по-деревенски (порц. / 200 р)", price: 200 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Луковые кольца (10 шт / 250 р)", price: 250 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Сырные палочки (5 шт / 250 р)", price: 250 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Сыр чеддер (добавка)", price: 40 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Фри (добавка)", price: 40 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Перец Холопеньо (добавка)", price: 40 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Сырные палочки (добавка)", price: 50 },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Овощи гриль (добавка)", price: 40 }
];

let cart = [];

// Функции корзины
function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    const cartCountSpan = document.getElementById('cartCount');
    if (cartCountSpan) cartCountSpan.innerText = totalItems;
    localStorage.setItem('savedCart', JSON.stringify(cart));
    
    const cartDiv = document.getElementById('cartItems');
    if (!cartDiv) return;
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p style="text-align:center; padding:20px;">Корзина пуста. Добавьте что-нибудь вкусное! 🍔</p>';
        const totalSpan = document.getElementById('cartTotalPrice');
        if (totalSpan) totalSpan.innerText = '0';
        return;
    }
    
    let total = 0;
    let html = '';
    cart.forEach((item, idx) => {
        const sum = item.price * item.quantity;
        total += sum;
        html += `
            <div class="cart-item">
                <span><strong>${item.name}</strong> x${item.quantity}</span>
                <span>${sum} ₽</span>
                <button class="cart-item-remove" data-index="${idx}">✕</button>
            </div>
        `;
    });
    cartDiv.innerHTML = html;
    const totalSpan = document.getElementById('cartTotalPrice');
    if (totalSpan) totalSpan.innerText = total;
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.index);
            cart.splice(idx, 1);
            updateCartUI();
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
    updateCartUI();
    alert(`✅ ${name} добавлен в корзину!`);
}

// Рендер меню
function renderMenu() {
    const container = document.getElementById('menuGrid');
    if (!container) return;
    
    const cats = [...new Map(menuData.map(i => [i.category, i.category])).values()];
    container.innerHTML = '';
    
    cats.forEach(cat => {
        const block = document.createElement('div');
        block.className = 'category-block';
        block.innerHTML = `<h3 class="category-title">${cat}</h3><div class="menu-grid" id="grid-${cat.replace(/\s/g, '')}"></div>`;
        container.appendChild(block);
        
        const subgrid = block.querySelector('.menu-grid');
        const items = menuData.filter(i => i.category === cat);
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <div class="card-title">
                        <span class="item-name">${escapeHtml(item.name)}</span>
                        <span class="item-price">${item.price} ₽</span>
                    </div>
                </div>
                <button class="btn-add" data-name="${escapeHtml(item.name)}" data-price="${item.price}">
                    <i class="fas fa-cart-plus"></i> В корзину
                </button>
            `;
            subgrid.appendChild(card);
        });
    });
    
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart(btn.dataset.name, parseInt(btn.dataset.price));
        });
    });
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Отправка в Max
const orderForm = document.getElementById('orderForm');
if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('customerName').value.trim();
        const address = document.getElementById('customerAddress').value.trim();
        const payment = document.getElementById('paymentMethod').value;
        
        if (!name || !address) {
            alert('Пожалуйста, заполните имя и адрес доставки!');
            return;
        }
        
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }
        
        let itemsText = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            itemsText += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
        });
        
        const message = `🍔 НОВЫЙ ЗАКАЗ МАСТЕР ВКУСА 🍔\n\n👤 Клиент: ${name}\n📍 Адрес: ${address}\n💳 Оплата: ${payment}\n\n📋 ЗАКАЗ:\n${itemsText}\n💰 ИТОГО: ${total} ₽\n\n🚀 Доставка 10:00–22:00. Позвоните клиенту для подтверждения.`;
        
        const encodedMessage = encodeURIComponent(message);
        const maxUrl = `https://max.ru/u/${MAX_USER_ID}?text=${encodedMessage}`;
        window.open(maxUrl, '_blank');
        
        if (confirm('Заказ отправлен! Очистить корзину?')) {
            cart = [];
            updateCartUI();
        }
        document.getElementById('orderModal').style.display = 'none';
    });
}

// Модалки
const cartIcon = document.getElementById('cartIcon');
if (cartIcon) {
    cartIcon.addEventListener('click', () => {
        document.getElementById('cartModal').style.display = 'block';
    });
}

const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Корзина пуста!');
            return;
        }
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('orderModal').style.display = 'block';
    });
}

document.querySelectorAll('.close, .close-order').forEach(btn => {
    btn.onclick = function() {
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('orderModal').style.display = 'none';
    };
});

window.onclick = (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
};

// Загрузка сохранённой корзины
const saved = localStorage.getItem('savedCart');
if (saved) {
    try {
        cart = JSON.parse(saved);
        if (!Array.isArray(cart)) cart = [];
    } catch(e) {
        cart = [];
    }
}

// Запуск
renderMenu();
updateCartUI();
