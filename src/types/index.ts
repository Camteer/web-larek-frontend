// Определенные типы товаров
type Category = 'другое' | 'софт-скил' | 'дополнительное' | 'кнопка' | 'хард-скил'

// интерфейс, описываюзий входящие данные товара
export interface IProduct {
  // Индификатор товара
  id: string; 
  // Полное описание товара
  description?: string;
  // Картинка товара
  image?: string;
  // Загаловок товара
  title: string;
  // Категория товара
  category?: Category;
  // цена
  price: number;

}

// Интерфес, описывающий модалку со способами оплаты и доставки товара
export interface IOrderAdress {
  // Способ оплаты
  payment: string;
  // Адресс
  adress: string;
}

// Интерфес, описывающий модалку с контактными данными
export interface IOrderData {
  // Емаил
  email: string;
  // Телефон
  phone: string;
}

// Интерфейс, который объединяет данные и также описывает выбранные товары 
export interface IOrder extends IOrderData, IOrderAdress {
  // Выбранные товары
  items: IProduct[];
}

// Интерфес, для получения результата заказа
export interface IOrderResult {
  id: string;
}

// Интерфес API 
export interface ILarekApi {
  // Получение всех итемов
  getList: () => Promise<IProduct[]>;
  // Получение итема по id
  getItem: (id: string) => Promise<IProduct>;
  order: (order: IOrder) => Promise<IOrderResult>;
}

// Интерйфес формы
export interface IForm {
  // Значение валидации
  valid: boolean;
  // Список ошибок
  error: string[];
}

// Интерфес модального окна
export interface IModal {
  // Элемент расположения контента в модальном окне
  content: HTMLElement
}

// Итерфес формы с успешным заказом
export interface ISuccess {
  // Общая сумма товара
  total: number;
}

// Интерфес, описывающий главную страницу
export interface IPage {
  // Счетчик выбранных товаров на иконке корзины
  counter: number;
  // Каталог, для расположения товаров на странице
  catalog: HTMLElement[];
  // Блокировка страницы при откртом модальном окне
  locked: boolean;
}

// Интерфейс, описывающий корзину товара 
export interface IBasketView {
  // Итемы выбранного товара
  items: HTMLElement[];
  // Сумма товара
  total: number;
}

// интерфейс, описываюзий входящие данные товара
export interface ICard {
  // Полное описание товара
  description: string;
  // Картинка товара
  image: string;
  // Загаловок товара
  title: string;
  // Категория товара
  category: Category;
  // цена
  price: number;
}
