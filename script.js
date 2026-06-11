// === НАСТРОЙКИ ===
const MAX_USER_ID = '79880000109';

// ===== ПОЛНОЕ МЕНЮ С ОПИСАНИЯМИ =====
const menuData = [
    { category: "ГОВЯДИНА", name: "Big-Бургер", price: 450, description: "Две сочные говяжьи котлеты, сыр чеддер, свежие овощи, соус BBQ" },
    { category: "ГОВЯДИНА", name: "Шаурма стандарт", price: 450, description: "Говядина, овощи, чесночный соус, лаваш" },
    { category: "ГОВЯДИНА", name: "Шаурма большая", price: 550, description: "Двойная порция говядины, больше овощей, острый соус" },
    { category: "ГОВЯДИНА", name: "Сырная стандарт", price: 470, description: "Говядина, сырный соус, маринованный лук" },
    { category: "ГОВЯДИНА", name: "Сырная большая", price: 550, description: "Двойная говядина, сырный соус, фирменные специи" },
    { category: "ГОВЯДИНА", name: "Сэндвич", price: 450, description: "Говядина, тостовый хлеб, салат, томаты, соус цезарь" },
    { category: "ГОВЯДИНА", name: "Пита", price: 400, description: "Говядина, пита, свежие овощи, соус тахини" },
    { category: "ГОВЯДИНА", name: "Гирос", price: 500, description: "Говядина, питка, картофель фри, томаты, соус цадзики" },
    { category: "ГОВЯДИНА", name: "Гирос на тарелке", price: 600, description: "Гирос с гарниром из картофеля и салатом" },
    { category: "ГОВЯДИНА", name: "Люля-кебаб в лаваше", price: 400, description: "Домашний люля из говядины, лаваш, лучок" },
    
    { category: "СВИНИНА", name: "Шаурма стандарт", price: 270, description: "Свинина, овощи, чесночный соус" },
    { category: "СВИНИНА", name: "Шаурма большая", price: 320, description: "Двойная свинина, овощи, острый соус" },
    { category: "СВИНИНА", name: "Сырная стандарт", price: 290, description: "Свинина, сырный соус, лук, зелень" },
    { category: "СВИНИНА", name: "Сырная большая", price: 340, description: "Двойная свинина, сырный соус, специи" },
    { category: "СВИНИНА", name: "Сэндвич", price: 350, description: "Свинина, тостовый хлеб, салат, соус ранч" },
    { category: "СВИНИНА", name: "Пита Greek", price: 290, description: "Свинина, пита, греческие овощи, соус" },
    { category: "СВИНИНА", name: "Гирос", price: 350, description: "Свинина, питка, картофель, томаты" },
    { category: "СВИНИНА", name: "Гирос на тарелке", price: 400, description: "Свинина, картофель фри, свежий салат" },
    
    { category: "КУРИЦА", name: "Big-Бургер", price: 370, description: "Куриная котлета гриль, сыр, овощи, соус барбекю" },
    { category: "КУРИЦА", name: "Шаурма стандарт", price: 270, description: "Курица, овощи, чесночный соус" },
    { category: "КУРИЦА", name: "Шаурма большая", price: 320, description: "Двойная курица, овощи, соус чили" },
    { category: "КУРИЦА", name: "Сырная ст.", price: 290, description: "Курица, сырный соус, маринованный лук" },
    { category: "КУРИЦА", name: "Сырная большая", price: 340, description: "Двойная курица, сырный соус, специи" },
    { category: "КУРИЦА", name: "Сэндвич", price: 350, description: "Курица, тостовый хлеб, салат, томаты" },
    { category: "КУРИЦА", name: "Пита Greek", price: 290, description: "Курица, пита, овощи по-гречески" },
    { category: "КУРИЦА", name: "Гирос", price: 350, description: "Курица, питка, картофель, соус цадзики" },
    { category: "КУРИЦА", name: "Гирос на тарелке", price: 400, description: "Курица, картофель, салат, соус" },
    { category: "КУРИЦА", name: "Люля-кебаб в лаваше", price: 350, description: "Куриный люля, лаваш, лук, зелень" },
    
    { category: "КРЕВЕТКИ", name: "Шаурма стандарт", price: 390, description: "Креветки гриль, овощи, соус терияки" },
    { category: "КРЕВЕТКИ", name: "Шаурма большая", price: 530, description: "Двойные креветки, овощи, острый соус" },
    { category: "КРЕВЕТКИ", name: "Сырная стандарт", price: 420, description: "Креветки, сырный соус, чеснок" },
    { category: "КРЕВЕТКИ", name: "Сырная большая", price: 550, description: "Двойные креветки, сырный соус" },
    { category: "КРЕВЕТКИ", name: "Пита Greek", price: 400, description: "Креветки, пита, греческий салат" },
    { category: "КРЕВЕТКИ", name: "Сэндвич", price: 400, description: "Креветки, тостовый хлеб, соус тартар" },
    { category: "КРЕВЕТКИ", name: "Гирос", price: 500, description: "Креветки, питка, картофель" },
    { category: "КРЕВЕТКИ", name: "Гирос на тарелке", price: 600, description: "Креветки, картофель, овощной салат" },
    
    { category: "ВЕГАН МЕНЮ", name: "Шаурма стандарт", price: 270, description: "Овощи гриль, тофу, веган соус" },
    { category: "ВЕГАН МЕНЮ", name: "Шаурма большая", price: 320, description: "Двойные овощи, тофу, острый веган соус" },
    { category: "ВЕГАН МЕНЮ", name: "Сырная стандарт", price: 300, description: "Овощи гриль, веган сырный соус" },
    { category: "ВЕГАН МЕНЮ", name: "Сырная большая", price: 350, description: "Двойные овощи, веган сырный соус" },
    { category: "ВЕГАН МЕНЮ", name: "Пита Greek", price: 290, description: "Овощи, пита, греческие специи" },
    { category: "ВЕГАН МЕНЮ", name: "Гирос", price: 350, description: "Овощи гриль, питка, соус" },
    { category: "ВЕГАН МЕНЮ", name: "Гирос на тарелке", price: 400, description: "Овощи гриль, картофель, салат" },
    
    { category: "ГАРНИРЫ И СНЕКИ", name: "Картофель фри", price: 200, description: "Хрустящий картофель фри, порция" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Картофель по-деревенски", price: 200, description: "Картофель со специями, запеченный" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Луковые кольца", price: 250, description: "10 шт, хрустящие луковые кольца" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Сырные палочки", price: 250, description: "5 шт, тянущийся сыр во фритюре" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Сыр чеддер (добавка)", price: 40, description: "Дополнительный сыр к блюду" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Фри (добавка)", price: 40, description: "Порция картофеля фри в подарок" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Перец Холопеньо", price: 40, description: "Острый перец, добавка" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Сырные палочки (добавка)", price: 50, description: "Одна сырная палочка в добавок" },
    { category: "ГАРНИРЫ И СНЕКИ", name: "Овощи гриль (добавка)", price: 40, description: "Свежие овощи на гриле" }
];

let cart = [];
let currentCategory = "ГОВЯДИНА";

// Корзина
function updateCartUI() {
    const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
    document.getElementById('cartCount').innerText = totalItems;
    document.getElementById('mobileCartCount').innerText = totalItems;
    localStorage.setItem('savedCart', JSON.stringify(cart));
    
    const cartDiv = document.getElementById('cartItems');
    if (!cartDiv) return;
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p style="text-align:center; padding:20px;">🍔 Корзина пуста. Добавьте блюдо!</p>';
        document.getElementById('cartTotalPrice').innerText = '0';
        return;
    }
    
    let total = 0;
    let html = '';
    cart.forEach((item, idx) => {
        const sum = item.price * item.quantity;
        total += sum;
        html += `<div class="cart-item">
                    <span><strong>${item.name}</strong> x${item.quantity}</span>
                    <span>${sum} ₽</span>
                    <button class="cart-item-remove" data-index="${idx}">✕</button>
                </div>`;
    });
    cartDiv.innerHTML = html;
    document.getElementById('cartTotalPrice').innerText = total;
    
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
    if (exist) exist.quantity++;
    else cart.push({ name, price, quantity: 1 });
    updateCartUI();
    alert(`✅ ${name} добавлен в корзину!`);
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function renderCategoryChips() {
    const cats = [...new Map(menuData.map(i => [i.category, i.category])).values()];
    const wrapper = document.getElementById('categoriesWrapper');
    wrapper.innerHTML = '';
    cats.forEach(cat => {
        const chip = document.createElement('div');
        chip.className = `category-chip ${cat === currentCategory ? 'active' : ''}`;
        chip.innerText = cat;
        chip.onclick = () => {
            currentCategory = cat;
            renderCategoryChips();
            renderMenuByCategory();
        };
        wrapper.appendChild(chip);
    });
}

function renderMenuByCategory() {
    const items = menuData.filter(i => i.category === currentCategory);
    const container = document.getElementById('menuGrid');
    const titleSpan = document.getElementById('activeCategoryTitle');
    titleSpan.innerHTML = currentCategory;
    
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="card-content">
                <div class="card-title">
                    <span class="item-name">${escapeHtml(item.name)}</span>
                    <span class="item-price">${item.price} ₽</span>
                </div>
                <div class="item-description">${escapeHtml(item.description)}</div>
            </div>
            <button class="btn-add" data-name="${escapeHtml(item.name)}" data-price="${item.price}">
                <i class="fas fa-cart-plus"></i> В корзину
            </button>
        `;
        container.appendChild(card);
    });
    
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart(btn.dataset.name, parseInt(btn.dataset.price));
        });
    });
}

// Отправка в Max
document.getElementById('orderForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    
    if (!name || !address) return alert('Заполните имя и адрес доставки!');
    if (cart.length === 0) return alert('Корзина пуста!');
    
    let itemsText = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        itemsText += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
    });
    
    const message = `🍔 НОВЫЙ ЗАКАЗ МАСТЕР ВКУСА 🍔\n\n👤 Клиент: ${name}\n📍 Адрес: ${address}\n💳 Оплата: ${payment}\n\n📋 ЗАКАЗ:\n${itemsText}\n💰 ИТОГО: ${total} ₽\n\n🚀 Доставка 10:00–22:00. Ждём вас!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://max.ru/u/${MAX_USER_ID}?text=${encoded}`, '_blank');
    
    if (confirm('Заказ отправлен! Очистить корзину?')) {
        cart = [];
        updateCartUI();
    }
    document.getElementById('orderModal').style.display = 'none';
});

// Модалки
document.getElementById('cartIcon')?.addEventListener('click', () => document.getElementById('cartModal').style.display = 'block');
document.getElementById('mobileCartLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cartModal').style.display = 'block';
    document.getElementById('mobileNav').classList.remove('active');
});
document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length === 0) return alert('Корзина пуста!');
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('orderModal').style.display = 'block';
});
document.querySelectorAll('.close, .close-order').forEach(btn => {
    btn.onclick = function() {
        document.getElementById('cartModal').style.display = 'none';
        document.getElementById('orderModal').style.display = 'none';
    };
});
window.onclick = (e) => {
    if (e.target.classList.contains('modal')) e.target.style.display = 'none';
};

// Бургер-меню
const burger = document.getElementById('burgerMenu');
const mobileNav = document.getElementById('mobileNav');
burger?.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Загрузка корзины
const saved = localStorage.getItem('savedCart');
if (saved) try { cart = JSON.parse(saved); if (!Array.isArray(cart)) cart = []; } catch(e) { cart = []; }

renderCategoryChips();
renderMenuByCategory();
updateCartUI();
