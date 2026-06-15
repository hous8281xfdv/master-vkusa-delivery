// bot.js - Telegram-бот для МАСТЕР ВКУСА (гриль-бар, полное меню)
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
let orders = [];

async function sendMessage(chatId, text, keyboard = null) {
    const body = { chat_id: chatId, text: text, parse_mode: 'HTML' };
    if (keyboard) body.reply_markup = JSON.stringify(keyboard);
    await fetch(`${TELEGRAM_API}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

async function sendPhoto(chatId, photoUrl, caption = '') {
    await fetch(`${TELEGRAM_API}/sendPhoto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, photo: photoUrl, caption: caption, parse_mode: 'HTML' })
    });
}

const mainKeyboard = {
    keyboard: [
        [{ text: '🍔 Меню' }, { text: '🛒 Корзина' }],
        [{ text: '📍 Адрес и контакты' }, { text: '📞 Связаться с нами' }]
    ],
    resize_keyboard: true
};

async function handleStart(chatId) {
    const welcomeText = `🔥 <b>Добро пожаловать в МАСТЕР ВКУСА!</b> 🔥\n\n🍖 Гриль-бар на Анапском шоссе\n🥩 Мясо на углях, шаурма, бургеры, люля-кебаб\n🥤 Холодные напитки\n\n📍 Анапское шоссе 91а, Новороссийск\n🕒 Ежедневно с 10:00 до 22:00\n\n👇 <b>Сделайте заказ!</b> 👇`;
    await sendPhoto(chatId, 'https://master-vkusa.vercel.app/logo.jpg', welcomeText);
    await sendMessage(chatId, 'Выберите действие:', mainKeyboard);
}

async function handleMenu(chatId) {
    let text = '🍔 <b>МЕНЮ МАСТЕР ВКУСА</b> 🍔\n\n';
    categories.forEach(cat => {
        text += `<b>${cat.name}</b>\n`;
        cat.items.slice(0, 5).forEach(item => {
            text += `• ${item.name} — ${item.price} ₽\n`;
        });
        if (cat.items.length > 5) text += `• ...ещё ${cat.items.length - 5} позиций\n`;
        text += '\n';
    });
    text += '📌 Чтобы заказать, нажмите «🛒 Корзина»';
    await sendMessage(chatId, text, mainKeyboard);
}

async function handleCartStart(chatId) {
    userStates[chatId] = { step: 'select_category', cart: [] };
    let text = '🛒 <b>Оформление заказа</b>\n\nВыберите категорию:\n';
    categories.forEach(cat => {
        text += `\n<b>${cat.id}.</b> ${cat.name}`;
    });
    text += '\n\n🔢 Введите номер категории';
    await sendMessage(chatId, text);
}

async function handleAddress(chatId) {
    const text = '📍 <b>Наш адрес</b>\n\n🏠 г. Новороссийск, ул. Анапское шоссе 91а\n🚗 вход с парковки KFC\n\n🕒 <b>Режим работы:</b>\nЕжедневно с 10:00 до 22:00\n\n📞 <b>Телефон:</b>\n+7 989 240-56-59\n+7 988 000-01-09\n\n<a href="https://yandex.ru/maps/970/novorossiysk/house/anapskoye_shosse_91a/">🗺️ Открыть карту</a>';
    await sendMessage(chatId, text, mainKeyboard);
}

async function handleContact(chatId) {
    const text = '📞 <b>Свяжитесь с нами</b>\n\n📱 <b>Telegram:</b> @Temur_Zohan\n💬 <b>Instagram:</b> @temur89180650655t\n📞 <b>Телефон:</b> +7 989 240-56-59\n\n📍 <b>Адрес:</b> Анапское шоссе 91а\n\n🚀 Доставка по Новороссийску | Самовывоз';
    await sendMessage(chatId, text, mainKeyboard);
}

async function notifyAdmins(order, userId, userName, phone, address) {
    let itemsText = '';
    order.forEach(item => {
        itemsText += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
    });
    const total = order.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    const text = `🆕 <b>НОВЫЙ ЗАКАЗ MASTER ВКУСА!</b>\n\n👤 Клиент: ${userName}\n🆔 ID: ${userId}\n📞 Телефон: ${phone}\n📍 Адрес: ${address}\n\n📋 <b>ЗАКАЗ:</b>\n${itemsText}\n💰 <b>ИТОГО: ${total} ₽</b>`;
    for (const adminId of adminIds) {
        await fetch(`${TELEGRAM_API}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: adminId, text: text, parse_mode: 'HTML' })
        });
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(200).send('OK');
    
    const { message } = req.body;
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
        else if (text === '🛒 Корзина') {
            await handleCartStart(chatId);
        }
        else if (text === '📍 Адрес и контакты') {
            await handleAddress(chatId);
        }
        else if (text === '📞 Связаться с нами') {
            await handleContact(chatId);
        }
        else if (text === '◀️ Отмена') {
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
                itemText += '\n🔢 Введите номер товара (или 0 чтобы завершить заказ)';
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
                const cart = userStates[chatId].cart || [];
                if (cart.length === 0) {
                    await sendMessage(chatId, '🛒 Корзина пуста. Добавьте товары.', mainKeyboard);
                    delete userStates[chatId];
                } else {
                    userStates[chatId].step = 'enter_phone';
                    let summary = '🛒 <b>Ваш заказ</b>\n\n';
                    let total = 0;
                    cart.forEach(item => {
                        summary += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
                        total += item.price * item.quantity;
                    });
                    summary += `\n💰 <b>ИТОГО: ${total} ₽</b>\n\n📞 Введите ваш номер телефона для связи:`;
                    await sendMessage(chatId, summary);
                }
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
                await sendMessage(chatId, `✅ <b>${selectedItem.name}</b> x${quantity} добавлен в корзину!\n\nМожете продолжить добавление товаров или нажмите 0 чтобы завершить заказ.`);
            } else {
                await sendMessage(chatId, '❌ Введите количество от 1 до 99:');
            }
        }
        else if (userStates[chatId] && userStates[chatId].step === 'enter_phone') {
            const phone = text;
            userStates[chatId].phone = phone;
            userStates[chatId].step = 'enter_address';
            await sendMessage(chatId, `📞 Телефон: ${phone}\n\n📍 Введите адрес доставки (или напишите "Самовывоз"):`);
        }
        else if (userStates[chatId] && userStates[chatId].step === 'enter_address') {
            const address = text;
            const cart = userStates[chatId].cart;
            const phone = userStates[chatId].phone;
            let summary = '🛒 <b>ПОДТВЕРДИТЕ ЗАКАЗ</b>\n\n';
            let total = 0;
            cart.forEach(item => {
                summary += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
                total += item.price * item.quantity;
            });
            summary += `\n💰 <b>ИТОГО: ${total} ₽</b>\n📞 Телефон: ${phone}\n📍 Адрес: ${address}\n\n✅ <b>Подтвердить</b> — напишите ДА\n❌ <b>Отменить</b> — напишите НЕТ`;
            userStates[chatId].step = 'confirm';
            userStates[chatId].address = address;
            await sendMessage(chatId, summary);
        }
        else if (userStates[chatId] && userStates[chatId].step === 'confirm') {
            if (text.toUpperCase() === 'ДА') {
                const cart = userStates[chatId].cart;
                const phone = userStates[chatId].phone;
                const address = userStates[chatId].address;
                let itemsText = '';
                let total = 0;
                cart.forEach(item => {
                    itemsText += `• ${item.name} x${item.quantity} = ${item.price * item.quantity} ₽\n`;
                    total += item.price * item.quantity;
                });
                await sendMessage(chatId, `✅ <b>ЗАКАЗ ПРИНЯТ!</b>\n\n${itemsText}\n💰 ИТОГО: ${total} ₽\n📞 Телефон: ${phone}\n📍 Адрес: ${address}\n\n🍔 Готовим ваш заказ! Ожидайте звонка от оператора.\n\nСпасибо, что выбрали МАСТЕР ВКУСА! 🔥`, mainKeyboard);
                await notifyAdmins(cart, userId, userName, phone, address);
                delete userStates[chatId];
            } else if (text.toUpperCase() === 'НЕТ') {
                await sendMessage(chatId, '❌ Заказ отменён. Если захотите сделать заказ — нажмите 🛒 Корзина', mainKeyboard);
                delete userStates[chatId];
            } else {
                await sendMessage(chatId, '❓ Напишите <b>ДА</b> для подтверждения или <b>НЕТ</b> для отмены');
            }
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
