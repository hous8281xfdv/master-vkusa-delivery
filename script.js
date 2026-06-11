// === НАСТРОЙКИ ===
// ВСТАВЬ СЮДА НОМЕР ТЕЛЕФОНА ВЛАДЕЛЬЦА (ДЯДЯ АРАМ)
const PHONE_NUMBER = '79123456789'; // Формат: 79123456789 (без + или с +, но лучше без пробелов)

// ---- ДАННЫЕ МЕНЮ (полный список) ----
const menuData = [
    // ГОВЯДИНА
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
    // СВИНИНА
    { category: "СВИНИНА", name: "Шаурма стандарт", price: 270 },
    { category: "СВИНИНА", name: "Шаурма большая", price: 320 },
    { category: "СВИНИНА", name: "Сырная стандарт", price: 290 },
    { category: "СВИНИНА", name: "Сырная большая", price: 340 },
    { category: "СВИНИНА", name: "Сэндвич", price: 350 },
    { category: "СВИНИНА", name: "Пита Greek", price: 290 },
    { category: "СВИНИНА", name: "Гирос", price: 350 },
    { category: "СВИНИНА", name: "Гирос на тарелке", price: 400 },
    // КУРИЦА
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
    // КРЕВЕТКИ
    { category: "КРЕВЕТКИ", name: "Шаурма стандарт", price: 390 },
    { category: "КРЕВЕТКИ", name: "Шаурма большая", price: 530 },
    { category: "КРЕВЕТКИ", name: "Сырная стандарт", price: 420 },
    { category: "КРЕВЕТКИ", name: "Сырная большая", price: 550 },
    { category: "КРЕВЕТКИ", name: "Пита Greek", price: 400 },
    { category: "КРЕВЕТКИ", name: "Сэндвич", price: 400 },
    { category: "КРЕВЕТКИ", name: "Гирос", price: 500 },
    { category: "КРЕВЕТКИ", name: "Гирос на тарелке", price: 600 },
    // ВЕГАН МЕНЮ
    { category: "ВЕГАН МЕНЮ", name: "Шаурма стандарт", price: 270 },
    { category: "ВЕГАН МЕНЮ", name: "Шаурма большая", price: 320 },
    { category: "ВЕГАН МЕНЮ", name: "Сырная стандарт", price: 300 },
    { category: "ВЕГАН МЕНЮ", name: "Сырная большая", price: 350 },
    { category: "ВЕГАН МЕНЮ", name: "Пита Greek", price: 290 },
    { category: "ВЕГАН МЕНЮ", name: "Гирос", price: 350 },
    { category: "ВЕГАН МЕНЮ", name: "Гирос на тарелке", price: 400 },
    // ГАРНИРЫ И СНЕКИ / ДОБАВКИ
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

// --- Глобальные переменные ---
let cart = []; // массив объектов { name, price, quantity }

// DOM элементы
const menuGrid = document.getElementById('menuGrid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const orderModal = document.getElementById('orderModal');
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalPriceSpan = document.getElementById('cartTotalPrice');
const cartCountSpan = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const orderForm = document.getElementById('orderForm');

// --- Вспомогательные функции корзины ---
function updateCartUI() {
    // обновить счетчик иконки
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.innerText = totalItems;
    // сохранить в localStorage
    localStorage.setItem('savedCart', JSON.stringify(cart));
    
    // перерисовать содержимое корзины в модалке
    if (!cartItemsDiv) return;
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align:center;">Корзина пуста. Добавьте что-нибудь вкусное!</p>';
        cartTotalPriceSpan.innerText = '0';
        return;
    }
    
    let totalPrice = 0;
    let html = '';
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        html += `
            <div class="cart-item">
                <div><strong>${item.name}</strong> x ${item.quantity}</div>
                <div>${itemTotal} ₽</div>
                <button class="cart-item-remove" data-index="${index}">Удалить</button>
            </div>
        `;
    });
    cartItemsDiv.innerHTML = html;
    cartTotalPriceSpan.innerText = totalPrice;
    
    // добавить обработчики удаления
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.getAttribute('data-index'));
            cart.splice(idx, 1);
            updateCartUI();
        });
    });
}

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
    // анимация или уведомление? можно короткое всплывающее сообщение
    alert(`✅ ${name} добавлен в корзину!`);
}

// --- Рендер меню по категориям ---
function renderMenu() {
    const categories = [...new Map(menuData.map(item => [item.category, item.category])).values()];
    menuGrid.innerHTML = '';
    categories.forEach(cat => {
        const catBlock = document.createElement('div');
        catBlock.className = 'category-block';
        const catTitle = document.createElement('h3');
        catTitle.className = 'category-title';
        // добавка эмодзи для веганов и тд
        if (cat === 'ВЕГАН МЕНЮ') catTitle.innerHTML = '🌱 ' + cat;
        else if (cat === 'КРЕВЕТКИ') catTitle.innerHTML = '🦐 ' + cat;
        else if (cat === 'ГАРНИРЫ И СНЕКИ') catTitle.innerHTML = '🍟 ' + cat;
        else catTitle.innerHTML = cat;
        catBlock.appendChild(catTitle);
        
        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'menu-grid';
        const itemsInCat = menuData.filter(item => item.category === cat);
        itemsInCat.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-content">
                    <div class="card-title">
                        <span class="item-name">${item.name}</span>
                        <span class="item-price">${item.price} ₽</span>
                    </div>
                    <div class="card-category">${item.category}</div>
                </div>
                <button class="btn-add" data-name="${item.name.replace(/"/g, '&quot;')}" data-price="${item.price}">
                    <i class="fas fa-cart-plus"></i> В корзину
                </button>
            `;
            itemsGrid.appendChild(card);
        });
        catBlock.appendChild(itemsGrid);
        menuGrid.appendChild(catBlock);
    });
    
    // добавить обработчики на кнопки "В корзину"
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'));
            addToCart(name, price);
        });
    });
}

// --- Инициализация корзины из localStorage ---
function loadCartFromStorage() {
    const saved = localStorage.getItem('savedCart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
            if (!Array.isArray(cart)) cart = [];
        } catch(e) { cart = []; }
    } else {
        cart = [];
    }
    updateCartUI();
}

// --- Модалки ---
cartIcon.onclick = () => {
    cartModal.style.display = 'block';
    updateCartUI();
};

// Закрытие модалок
document.querySelectorAll('.close, .close-order').forEach(closeBtn => {
    closeBtn.onclick = function() {
        cartModal.style.display = 'none';
        orderModal.style.display = 'none';
    };
});

window.onclick = (event) => {
    if (event.target === cartModal) cartModal.style.display = 'none';
    if (event.target === orderModal) orderModal.style.display = 'none';
};

checkoutBtn.onclick = () => {
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте блюда.');
        return;
    }
    cartModal.style.display = 'none';
    orderModal.style.display = 'block';
};

// --- Отправка заказа в WhatsApp ---
orderForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('customerName').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const payment = document.getElementById('paymentMethod').value;
    
    if (!name || !address) {
        alert('Пожалуйста, укажите имя и адрес доставки!');
        return;
    }
    
    // построить текстовое сообщение
    let itemsText = '';
    let totalSum = 0;
    cart.forEach(item => {
        const sum = item.price * item.quantity;
        totalSum += sum;
        itemsText += `• ${item.name} x${item.quantity} = ${sum} ₽\n`;
    });
    
    const message = `🍔 НОВЫЙ ЗАКАЗ В КАФЕ «МАСТЕР ВКУСА» 🍔\n\n` +
                    `👤 Клиент: ${name}\n` +
                    `📍 Адрес: ${address}\n` +
                    `💳 Оплата: ${payment}\n\n` +
                    `📋 ЗАКАЗ:\n${itemsText}\n` +
                    `💰 ИТОГО: ${totalSum} ₽\n\n` +
                    `🚀 Доставка в рабочее время: 10:00-22:00. Свяжитесь с клиентом для подтверждения.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
    
    // Открыть WhatsApp (web или приложение)
    window.open(whatsappUrl, '_blank');
    
    // Опционально: очистить корзину после заказа
    if (confirm('Заказ отправлен! Очистить корзину?')) {
        cart = [];
        updateCartUI();
    }
    orderModal.style.display = 'none';
};

// Старт приложения
renderMenu();
loadCartFromStorage();
