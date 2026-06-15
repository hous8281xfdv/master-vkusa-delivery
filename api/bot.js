// bot.js - Telegram-бот для МАСТЕР ВКУСА (с полноценной корзиной, инлайн-кнопками, способами получения)
const token = '8979308670:AAFgcmQN6lmmEOJcf1E0N41OfxVXldNt8k8';
const TELEGRAM_API = `https://api.telegram.org/bot${token}`;

const categories = [
    { id: 1, name: '🍔 ГОВЯДИНА', items: [
        { name: 'Big-Бургер', price: 450 },
        { name: 'Big-Бургер с двойной котлетой', price: 600 },
        { name: 'Шаурма стандарт', price: 450 },
        { name: 'Шаурма большая', price: 550 },
        { name: 'Сырная стандарт', price: 470 },
        { name: 'Сырная большая', price: 550 },
        { name: 'Сэндвич', price: 450 },
        { name: 'Пита', price: 400 },
        { name: 'Гирос', price: 500 },
        { name: 'Гирос на тарелке', price: 600 }
    ]},
    { id: 2, name: '🍗 КУРИЦА', items: [
        { name: 'Big-Бургер', price: 370 },
        { name: 'Big-Бургер с двойной котлетой', price: 600 },
        { name: 'Шаурма стандарт', price: 270 },
        { name: 'Шаурма большая', price: 320 },
        { name: 'Сырная стандарт', price: 290 },
        { name: 'Сырная большая', price: 340 },
        { name: 'Сэндвич', price: 350 },
        { name: 'Пита Greek', price: 400 },
        { name: 'Люля-кебаб в лаваше', price: 350 }
    ]},
    { id: 3, name: '🦐 КРЕВЕТКИ', items: [
        { name: 'Шаурма стандарт', price: 390 },
        { name: 'Шаурма большая', price: 530 },
        { name: 'Сырная стандарт', price: 420 },
        { name: 'Сырная большая', price: 550 },
        { name: 'Пита Greek', price: 400 },
        { name: 'Сэндвич', price: 400 },
        { name: 'Гирос на тарелке', price: 600 }
    ]},
    { id: 4, name: '🐷 СВИНИНА', items: [
        { name: 'Шаурма стандарт', price: 270 },
        { name: 'Шаурма большая', price: 320 },
        { name: 'Сырная стандарт', price: 290 },
        { name: 'Сырная большая', price: 340 },
        { name: 'Сэндвич', price: 350 },
        { name: 'Пита Greek', price: 400 },
        { name: 'Гирос на тарелке', price: 600 }
    ]},
    { id: 5, name: '🌱 ВЕГАН', items: [
        { name: 'Шаурма стандарт', price: 270 },
        { name: 'Шаурма большая', price: 320 },
        { name: 'Сырная стандарт', price: 300 },
        { name: 'Сырная большая', price: 350 },
        { name: 'Пита Greek', price: 290 },
        { name: 'Гирос на тарелке', price: 400 }
    ]},
    { id: 6, name: '🍟 ГАРНИРЫ И СНЕКИ', items: [
        { name: 'Картофель фри', price: 200 },
        { name: 'Картофель по-деревенски', price: 200 },
        { name: 'Луковые кольца (10 шт)', price: 250 },
        { name: 'Сырные палочки (5 шт)', price: 250 }
    ]},
    { id: 7, name: '➕ ДОБАВКИ', items: [
        { name: 'Сыр чеддер', price: 40 },
        { name: 'Фри', price: 40 },
        { name: 'Перец Холопеньо', price: 50 },
        { name: 'Сырные палочки', price: 40 },
        { name: 'Овощи гриль', price: 40 }
    ]},
    { id: 8, name: '🥩 МАНГАЛ (за 100г)', items: [
        { name: 'Свиная Мякоть', price: 140 },
        { name: 'Свиная Шея', price: 180 },
        { name: 'Свиные Ребра', price: 170 },
        { name: 'Куриные крылышки', price: 120 },
        { name: 'Куриные Бедра', price: 170 },
        { name: 'Куриное Филе', price: 140 },
        { name: 'Цыпленок жареный целиком', price: 1000 },
        { name: 'Индейка филе', price: 200 },
        { name: 'Баранина мякоть', price: 350 },
        { name: 'Баранина карз', price: 500 },
        { name: 'Говяжья вырезка', price: 500 },
        { name: 'Печень говяжья', price: 200 }
    ]},
    { id: 9, name: '🥬 ОВОЩИ НА УГЛЯХ (за 100г)', items: [
        { name: 'Овощи гриль микс', price: 130 },
        { name: 'Шампиньоны гриль', price: 130 },
        { name: 'Картофель запеченный на углях', price: 80 },
        { name: 'Овощи запеченные целиком', price: 120 }
    ]},
    { id: 10, name: '🐟 РЫБА И МОРЕПРОДУКТЫ', items: [
        { name: 'Креветки тигровые (10 шт)', price: 700 },
        { name: 'Стейк из семги', price: 480 },
        { name: 'Форель речная', price: 300 }
    ]},
    { id: 11, name: '🥗 САЛАТЫ', items: [
        { name: 'Овощной', price: 350 },
        { name: 'Греческий с Фетой', price: 500 },
        { name: 'Цезарь с курицей', price: 500 },
        { name: 'Цезарь с креветками', price: 600 }
    ]},
    { id: 12, name: '🍢 ЛЮЛЯ-КЕБАБ (за 100г)', items: [
        { name: 'Куриный', price: 140 },
        { name: 'Говяжий', price: 200 }
    ]}
];

const adminIds = [7878666092, 616565825];
let userStates = {};

async function sendMessage(chatId, text, keyboard = null) {
    const body = { chat_id: chatId, text: text, parse_mode: 'HTML' };
    if (keyboard) body.reply_markup = JSON.stringify(keyboard);
    await fetch(`${TELEGRAM_API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

const mainKeyboard = {
    keyboard: [
        [{ text: '🍔 Меню' }, { text: '🛒 Моя корзина' }],
        [{ text: '📍 Адрес и контакты' }, { text: '❌ Отмена' }]
    ],
    resize_keyboard: true
};

async function handleStart(chatId) {
    const welcomeText = `🔥 <b>Добро пожаловать в МАСТЕР ВКУСА!</b> 🔥\n\n🍖 Гриль-бар на Анапском шоссе\n🥩 Мясо на углях, шаурма, бургеры, люля-кебаб\n🥤 Холодные напитки\n\n📍 Анапское шоссе 91а, Новороссийск\n🕒 Ежедневно с 10:00 до 22:00\n\n👇 <b>Сделайте заказ!</b> 👇`;
    await sendMessage(chatId, welcomeText, mainKeyboard);
}

async function handleMenu(chatId) {
    let text = '🍔 <b>МЕНЮ МАСТЕР ВКУСА</b> 🍔\n\n';
    categories.forEach(cat => {
        text += `<b>${cat.name}</b>\n`;
        cat.items.slice(0, 4).forEach(item => {
            text += `• ${item.name} — ${item.price} ₽\n`;
        });
        if (cat.items.length > 4) text += `• ...ещё ${cat.items.length - 4} позиций\n`;
        text += '\n';
    });
    text += '📌 Чтобы сделать заказ, нажмите «🛒 Моя корзина» → «➕ Добавить товар»';
    await sendMessage(chatId, text, mainKeyboard);
}

async function showCart(chatId, userId) {
    const state = userStates[chatId];
    const cart = state?.cart || [];
    
    if (cart.length === 0) {
        await sendMessage(chatId, '🛒 <b>Ваша корзина пуста</b>\n\nДобавьте товары через меню "Добавить товар"', {
            inline_keyboard: [
                [{ text: '➕ Добавить товар', callback_data: 'add_item' }],
                [{ text: '🔙 Назад в меню', callback_data: 'back_to_menu' }]
            ]
        });
        return;
    }
    
    let total = 0;
    let itemsText = '';
    cart.forEach((item, idx) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsText += `${idx+1}. ${item.name} x${item.quantity} = ${itemTotal} ₽\n`;
    });
    
    const cartText = `🛒 <b>ВАША КОРЗИНА</b>\n\n${itemsText}\n━━━━━━━━━━━━━━\n💰 <b>ИТОГО: ${total} ₽</b>`;
    
    await sendMessage(chatId, cartText, {
        inline_keyboard: [
            [{ text: '➕ Добавить товар', callback_data: 'add_item' }],
            [{ text: '🗑 Очистить корзину', callback_data: 'clear_cart' }],
            [{ text: '✅ Оформить заказ', callback_data: 'checkout' }],
            [{ text: '🔙 Назад в меню', callback_data: 'back_to_menu' }]
        ]
    });
}

async function handleAddItem(chatId) {
    userStates[chatId] = { step: 'select_category', cart: userStates[chatId]?.cart || [] };
    let text = '🍽️ <b>Выберите категорию</b>\n\n';
    categories.forEach(cat => {
        text += `<b>${cat.id}.</b> ${cat.name}\n`;
    });
    text += '\n🔢 Введите номер категории';
    await sendMessage(chatId, text);
}

async function handleClearCart(chatId) {
    if (userStates[chatId]) {
        userStates[chatId].cart = [];
    }
    await sendMessage(chatId, '🗑 Корзина очищена!', {
        inline_keyboard: [[{ text: '➕ Добавить товар', callback_data: 'add_item' }]]
    });
}

async function handleCheckout(chatId, userId, userName) {
    const cart = userStates[chatId]?.cart || [];
    if (cart.length === 0) {
        await sendMessage(chatId, '❌ Корзина пуста. Добавьте товары перед оформлением.');
        return;
    }
    userStates[chatId].step = 'select_delivery';
    await sendMessage(chatId, '🚚 <b>Выберите способ получения</b>', {
        inline_keyboard: [
            [{ text: '🚚 Доставка', callback_data: 'delivery_delivery' }],
            [{ text: '📦 Самовывоз', callback_data: 'delivery_pickup' }],
            [{ text: '🍽️ Поесть в заведении', callback_data: 'delivery_eat' }]
        ]
    });
}

async function handleDeliverySelection(chatId, deliveryType, userId, userName) {
    userStates[chatId].deliveryType = deliveryType;
    userStates[chatId].step = 'enter_phone';
    await sendMessage(chatId, `✅ Вы выбрали: <b>${deliveryType === 'delivery' ? 'Доставка' : deliveryType === 'pickup' ? 'Самовывоз' : 'Поесть в заведении'}</b>\n\n📞 Введите ваш номер телефона для связи:`);
}

async function handleEnterPhone(chatId, phone) {
    userStates[chatId].phone = phone;
    userStates[chatId].step = 'enter_address';
    await sendMessage(chatId, `📞 Телефон: ${phone}\n\n📍 Введите адрес доставки (или напишите "Самовывоз"):`);
}

async function handleEnterAddress(chatId, address, userId, userName) {
    userStates[chatId].address = address;
    const cart = userStates[chatId].cart;
    const phone = userStates[chatId].phone;
    const deliveryType = userStates[chatId].deliveryType;
    const deliveryText = deliveryType === 'delivery' ? '🚚 Доставка' : deliveryType === 'pickup' ? '📦 Самовывоз' : '🍽️ Поесть в заведении';
    
    let total = 0;
    let itemsText = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsText += `• ${item.name} x${item.quantity} = ${itemTotal} ₽\n`;
    });
    
    const confirmText = `🛒 <b>ПОДТВЕРДИТЕ ЗАКАЗ</b>\n\n${itemsText}\n━━━━━━━━━━━━━━\n💰 <b>ИТОГО: ${total} ₽</b>\n📞 Телефон: ${phone}\n📍 Адрес: ${address}\n🚚 ${deliveryText}\n\n✅ Подтвердить — нажмите кнопку ниже`;
    
    userStates[chatId].step = 'confirm';
    await sendMessage(chatId, confirmText, {
        inline_keyboard: [
            [{ text: '✅ Подтвердить заказ', callback_data: 'confirm_order' }],
            [{ text: '❌ Отменить', callback_data: 'cancel_order' }]
        ]
    });
}

async function handleConfirmOrder(chatId, userId, userName) {
    const cart = userStates[chatId].cart;
    const phone = userStates[chatId].phone;
    const address = userStates[chatId].address;
    const deliveryType = userStates[chatId].deliveryType;
    const deliveryText = deliveryType === 'delivery' ? '🚚 Доставка' : deliveryType === 'pickup' ? '📦 Самовывоз' : '🍽️ Поесть в заведении';
    
    let total = 0;
    let itemsText = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        itemsText += `• ${item.name} x${item.quantity} = ${itemTotal} ₽\n`;
    });
    
    await sendMessage(chatId, `✅ <b>ЗАКАЗ ПРИНЯТ!</b>\n\n${itemsText}\n━━━━━━━━━━━━━━\n💰 ИТОГО: ${total} ₽\n📞 Телефон: ${phone}\n📍 Адрес: ${address}\n🚚 ${deliveryText}\n\n🍔 Готовим ваш заказ! Ожидайте звонка от оператора.\n\nСпасибо, что выбрали МАСТЕР ВКУСА! 🔥`, mainKeyboard);
    
    // Уведомление админам
    for (const adminId of adminIds) {
        await fetch(`${TELEGRAM_API}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: adminId,
                text: `🆕 <b>НОВЫЙ ЗАКАЗ MASTER ВКУСА!</b>\n\n👤 Клиент: ${userName}\n🆔 ID: ${userId}\n📞 Телефон: ${phone}\n📍 Адрес: ${address}\n🚚 ${deliveryText}\n\n📋 <b>ЗАКАЗ:</b>\n${itemsText}\n💰 <b>ИТОГО: ${total} ₽</b>`,
                parse_mode: 'HTML',
                reply_markup: JSON.stringify({
                    inline_keyboard: [[{ text: '✅ Заказ готов', callback_data: `notify_${userId}` }]]
                })
            })
        });
    }
    
    delete userStates[chatId];
}

async function handleNotifyClient(adminId, userId, callbackQueryId) {
    await fetch(`${TELEGRAM_API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: userId,
            text: '✅ <b>Ваш заказ готов!</b>\n\nПриходите в Мастер Вкуса по адресу: Анапское шоссе 91а\n\nЖдём вас! 🔥',
            parse_mode: 'HTML'
        })
    });
    await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ callback_query_id: callbackQueryId, text: 'Уведомление отправлено!' })
    });
}

async function handleAddress(chatId) {
    const text = '📍 <b>Наш адрес</b>\n\n🏠 г. Новороссийск, ул. Анапское шоссе 91а\n🚗 вход с парковки KFC\n\n🕒 <b>Режим работы:</b>\nЕжедневно с 10:00 до 22:00\n\n📞 <b>Телефон:</b>\n+7 989 240-56-59\n+7 988 000-01-09\n\n🚀 Доставка | Самовывоз';
    await sendMessage(chatId, text, mainKeyboard);
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(200).send('OK');
    
    const { message, callback_query } = req.body;
    
    if (callback_query) {
        const chatId = callback_query.message.chat.id;
        const data = callback_query.data;
        const userId = callback_query.from.id;
        const userName = callback_query.from.first_name || callback_query.from.username || 'Клиент';
        
        if (data === 'add_item') {
            await handleAddItem(chatId);
        } else if (data === 'clear_cart') {
            await handleClearCart(chatId);
        } else if (data === 'checkout') {
            await handleCheckout(chatId, userId, userName);
        } else if (data === 'back_to_menu') {
            await sendMessage(chatId, 'Выберите действие:', mainKeyboard);
        } else if (data === 'delivery_delivery') {
            await handleDeliverySelection(chatId, 'delivery', userId, userName);
        } else if (data === 'delivery_pickup') {
            await handleDeliverySelection(chatId, 'pickup', userId, userName);
        } else if (data === 'delivery_eat') {
            await handleDeliverySelection(chatId, 'eat', userId, userName);
        } else if (data === 'confirm_order') {
            await handleConfirmOrder(chatId, userId, userName);
        } else if (data === 'cancel_order') {
            delete userStates[chatId];
            await sendMessage(chatId, '❌ Заказ отменён.', mainKeyboard);
        } else if (data.startsWith('notify_')) {
            const clientId = parseInt(data.split('_')[1]);
            await handleNotifyClient(chatId, clientId, callback_query.id);
        }
        
        await fetch(`${TELEGRAM_API}/answerCallbackQuery`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ callback_query_id: callback_query.id })
        });
        return res.status(200).send('OK');
    }
    
    if (!message) return res.status(200).send('OK');
    
    const chatId = message.chat.id;
    const text = message.text;
    const userId = message.from?.id;
    const userName = message.from?.first_name || message.from?.username || 'Клиент';
    
    try {
        if (text === '/start') {
            await handleStart(chatId);
        }
        else if (text === '🍔 Меню') {
            await handleMenu(chatId);
        }
        else if (text === '🛒 Моя корзина') {
            await showCart(chatId, userId);
        }
        else if (text === '📍 Адрес и контакты') {
            await handleAddress(chatId);
        }
        else if (text === '❌ Отмена') {
            delete userStates[chatId];
            await sendMessage(chatId, 'Действие отменено. Выберите действие:', mainKeyboard);
        }
        else if (userStates[chatId] && userStates[chatId].step === 'select_category') {
            const catId = parseInt(text);
            const category = categories.find(c => c.id === catId);
            if (category) {
                userStates[chatId].step = 'select_item';
                userStates[chatId].category = category;
                let itemText = `🍽️ <b>${category.name}</b>\n\nВыберите товар:\n`;
                category.items.forEach((item, idx) => {
                    itemText += `<b>${idx + 1}.</b> ${item.name} — ${item.price} ₽\n`;
                });
                itemText += '\n🔢 Введите номер товара (или 0 чтобы завершить)';
                await sendMessage(chatId, itemText);
            } else {
                await sendMessage(chatId, '❌ Неверная категория. Введите номер из списка:');
            }
        }
        else if (userStates[chatId] && userStates[chatId].step === 'select_item') {
            const itemIndex = parseInt(text) - 1;
            const category = userStates[chatId].category;
            if (itemIndex >= 0 && itemIndex < category.items.length) {
                const selectedItem = category.items[itemIndex];
                userStates[chatId].selectedItem = selectedItem;
                userStates[chatId].step = 'select_quantity';
                await sendMessage(chatId, `✅ Вы выбрали: <b>${selectedItem.name}</b> (${selectedItem.price} ₽)\n\n🔢 Введите количество (1-99):`);
            } else if (text === '0') {
                userStates[chatId].step = 'select_category';
                await sendMessage(chatId, 'Можете продолжить добавление товаров или нажмите "Моя корзина" для оформления.');
            } else {
                await sendMessage(chatId, '❌ Неверный номер. Введите номер товара из списка:');
            }
        }
        else if (userStates[chatId] && userStates[chatId].step === 'select_quantity') {
            const quantity = parseInt(text);
            if (quantity >= 1 && quantity <= 99) {
                const selectedItem = userStates[chatId].selectedItem;
                if (!userStates[chatId].cart) userStates[chatId].cart = [];
                userStates[chatId].cart.push({
                    name: selectedItem.name,
                    price: selectedItem.price,
                    quantity: quantity
                });
                userStates[chatId].step = 'select_category';
                await sendMessage(chatId, `✅ <b>${selectedItem.name}</b> x${quantity} добавлен в корзину!\n\nМожете продолжить добавление товаров или нажмите 0 чтобы завершить.`);
            } else {
                await sendMessage(chatId, '❌ Введите количество от 1 до 99:');
            }
        }
        else if (userStates[chatId] && userStates[chatId].step === 'enter_phone') {
            await handleEnterPhone(chatId, text);
        }
        else if (userStates[chatId] && userStates[chatId].step === 'enter_address') {
            await handleEnterAddress(chatId, text, userId, userName);
        }
        else {
            await sendMessage(chatId, 'Используйте кнопки меню 👇', mainKeyboard);
        }
    } catch (error) {
        console.error('Ошибка:', error);
        await sendMessage(chatId, '❌ Произошла ошибка. Попробуйте позже.');
    }
    
    res.status(200).send('OK');
}
