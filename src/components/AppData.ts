import _ from 'lodash';
import { Model } from './base/Model';
import {
	FormErrors,
	IAppData,
	IOrder,
	IProduct,
	IOrderData,
	IOrderAdress,
} from '../types';

export type CatalogChangeEvent = {
	catalog: IProduct[];
};

export class AppData extends Model<IAppData> {
	basket: IProduct[] = [];
	catalog: IProduct[];
	loading: boolean;
	order: IOrder = {
		email: '',
		phone: '',
		items: [],
		payment: '',
		address: '',
		total: 0,
	};
	preview: string | null;
	formErrors: FormErrors = {};

	toggleOrderedProduct(id: string, isIncluded: boolean) {
		if (isIncluded) {
			this.order.items = _.uniq([...this.order.items, id]);
		} else {
			this.order.items = _.without(this.order.items, id);
		}
	}

	clearBasket() {
		this.basket = [];
		this.order.items = [];
	}

	getTotal() {
		return this.order.items.reduce(
			(a, c) => a + this.catalog.find((it) => it.id === c).price,
			0
		);
	}

	setCatalog(items: IProduct[]) {
		this.catalog = items;
		this.emitChanges('items:changed', { catalog: this.catalog });
	}

	setPreview(item: IProduct) {
		this.preview = item.id;
		this.emitChanges('preview:changed', item);
	}

	setOrderFieldData(field: keyof IOrderData, value: string) {
		this.order[field] = value;

		if (this.validateOrderData()) {
			this.events.emit('order:ready', this.order);
		}
	}

	validateOrderData() {
		const errors: typeof this.formErrors = {};
		if (!this.order.email) {
			errors.email = 'Необходимо указать email';
		}
		if (!this.order.phone) {
			errors.phone = 'Необходимо указать телефон';
		}
		this.formErrors = errors;
		this.events.emit('contactsFormErrors:change', this.formErrors);
		return Object.keys(errors).length === 0;
	}

	setOrderFieldAdress(field: keyof IOrderAdress, value: string) {
		this.order[field] = value;

		if (this.validateOrderAdress()) {
			this.events.emit('order:ready', this.order);
		}
	}

	validateOrderAdress() {
		const errors: typeof this.formErrors = {};
		if (!this.order.address) {
			errors.address = 'Необходимо указать адресс';
		}
		if (!this.order.payment) {
			errors.payment = 'Необходимо указать способ оплаты';
		}
		this.formErrors = errors;
		this.events.emit('paymentFormErrors:change', this.formErrors);
		return Object.keys(errors).length === 0;
	}

	removeFromOrder(item: IProduct) {
		const basketIndex = this.basket.findIndex(
			(basketItem) => basketItem.id === item.id
		);
		const orderIndex = this.order.items.indexOf(item.id);

		if (basketIndex !== -1) {
			this.basket.splice(basketIndex, 1);
		}

		if (orderIndex !== -1) {
			this.order.items.splice(orderIndex, 1);
		}
	}

	addToOrder(item: IProduct) {
		if (!this.basket.includes(item)) {
			this.basket.push(item);
		}
		if (!this.order.items.includes(item.id)) {
			this.order.items.push(item.id);
		}
	}
}
