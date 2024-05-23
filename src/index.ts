import './scss/styles.scss';

import { EventEmitter } from './components/base/events';
import { LarekApi } from './components/LarekApi';
import { API_URL, CDN_URL } from './utils/constants';
import { cloneTemplate, ensureElement } from './utils/utils';
import { AppData, CatalogChangeEvent } from './components/AppData';
import { Page } from './components/Page';
import { Modal } from './components/common/Modal';
import { Success } from './components/common/Success';
import { Basket } from './components/common/Basket';
import { OrderAdress, OrderData } from './components/Order';
import { Product, ProductBasket } from './components/Card';
import { IOrderAdress, IOrderData, IProduct } from './types';


const events = new EventEmitter();
const api = new LarekApi(CDN_URL, API_URL);

// Все шаблоны
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>('#card-preview');
const cardBasketTemplate = ensureElement<HTMLTemplateElement>('#card-basket');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const orderTemplate = ensureElement<HTMLTemplateElement>('#order');
const contactsTemplate = ensureElement<HTMLTemplateElement>('#contacts');
const successTemplate = ensureElement<HTMLTemplateElement>('#success');

// Модель данных приложения
const appData = new AppData({}, events);

// Глобальные контейнеры
const page = new Page(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);

// Переиспользуемые части интерфейса
const basket = new Basket(cloneTemplate(basketTemplate), events);
const order = new OrderAdress(cloneTemplate(orderTemplate), events);
const contacts = new OrderData(cloneTemplate(contactsTemplate), events);


// Дальше идет бизнес-логика
// Поймали событие, сделали что нужно

// Изменились элементы каталога
events.on<CatalogChangeEvent>('items:changed', () => {
	page.catalog = appData.catalog.map((item) => {
		const card = new Product(cloneTemplate(cardCatalogTemplate), {
			onClick: () => events.emit('card:select', item),
		});
		return card.render({
			title: item.title,
			image: item.image,
			category: item.category,
			price: item.price,
		});
	});
});

// Открыть товар
events.on('card:select', (item: IProduct) => {
	const inBasket = appData.basket.some(
		(basketItem) => basketItem.id === item.id
	);
	const priceNull = item.price === null;
	const card = new Product(cloneTemplate(cardPreviewTemplate), {
		onClick: () => events.emit('card:add', item),
	});

	if (inBasket) {
		card.setDisabled(card.button, inBasket);
		card.buttonValue('Уже в корзине');
	}

	if (priceNull) {
		card.setDisabled(card.button, priceNull);
		card.buttonValue('Нельзя купить');
	}

	modal.render({
		content: card.render({
			title: item.title,
			image: item.image,
			description: item.description,
			price: item.price,
			category: item.category,
		}),
	});
});

// Добавить в корзину
events.on('card:add', (item: IProduct) => {
	appData.addToOrder(item);
	page.counter = appData.basket.length;
	modal.close();
});

// Открыть корзину
events.on('basket:open', () => {
	const isBasketEmpty = appData.basket.length === 0;
	basket.setDisabled(basket.button, isBasketEmpty);
	basket.total = appData.getTotal();
	basket.items = appData.basket.map((item, index) => {
		const card = new ProductBasket(cloneTemplate(cardBasketTemplate), {
			onClick: () => events.emit('card:delete', item),
		});
		return card.render({
			title: item.title,
			price: item.price,
			index: index + 1,
		});
	});
	modal.render({
		content: basket.render(),
	});
});

// Удалить из корзины
events.on('card:delete', (item: IProduct) => {
	appData.removeFromOrder(item);
	page.counter = appData.basket.length;
	const isBasketEmpty = appData.basket.length === 0;
	basket.setDisabled(basket.button, isBasketEmpty);
	basket.total = appData.getTotal();
	basket.items = appData.basket.map((item, index) => {
		const card = new ProductBasket(cloneTemplate(cardBasketTemplate), {
			onClick: () => events.emit('card:delete', item),
		});
		return card.render({
			title: item.title,
			price: item.price,
			index: index + 1,
		});
	});
	modal.render({
		content: basket.render(),
	});
});

// Открыть форму заполнения адреса и метода 
events.on('order:open', () => {
	modal.render({
		content: order.render({
			address: '',
			valid: false,
			errors: [],
		}),
	});
});

// Открыть форму заполнения телефона и почты 
events.on('order:submit', () => {
	appData.order.total = appData.getTotal();
	modal.render({
		content: contacts.render({
			email: '',
			phone: '',
			valid: false,
			errors: [],
		}),
	});
});

// Отправка заказа
events.on('contacts:submit', () => {
	console.log(appData.order);
	api
		.order(appData.order)
		.then(() => {
			const success = new Success(cloneTemplate(successTemplate), {
				onClick: () => {
					modal.close();
				},
			});
			appData.clearBasket();
			page.counter = appData.basket.length;
			modal.render({
				content: success.render({
					total: appData.getTotal(),
				}),
			});
		})
		.catch((err) => {
			console.error(err);
		});
});

// Изменение состояния валидации формы оплаты
events.on('paymentFormErrors:change', (errors: Partial<IOrderAdress>) => {
	const { payment, address } = errors;
	order.valid = !payment && !address;
	order.errors = Object.values({ payment, address })
		.filter((i) => !!i)
		.join('; ');
});

// Изменение полей формы оплаты
events.on(
	/^order\..*:change/,
	(data: { field: keyof IOrderAdress; value: string }) => {
		appData.setOrderFieldAdress(data.field, data.value);
	}
);

// Изменение состояния валидации формы контактов
events.on('contactsFormErrors:change', (errors: Partial<IOrderData>) => {
	const { email, phone } = errors;
	contacts.valid = !email && !phone;
	contacts.errors = Object.values({ email, phone })
		.filter((i) => !!i)
		.join('; ');
});

// Изменение полей формы контактов
events.on(
	/^contacts\..*:change/,
	(data: { field: keyof IOrderData; value: string }) => {
		appData.setOrderFieldData(data.field, data.value);
	}
);

// Блокировка прокрутки страницы при открытии модального окна
events.on('modal:open', () => {
	page.locked = true;
});

// Разблокировка прокрутки страницы при закрытии модального окна
events.on('modal:close', () => {
	page.locked = false;
});

// Получение списка товаров с сервера
api
	.getList()
	.then(appData.setCatalog.bind(appData))
	.catch((err) => {
		console.error(err);
	});
