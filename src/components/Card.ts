import { Component } from './base/Component';
import { IProduct, IProductBasket, CategoryStyle } from '../types';
import { ensureElement } from '../utils/utils';

interface IProductActions {
	onClick: (event: MouseEvent) => void;
}

export class Product extends Component<IProduct> {
	protected _title: HTMLElement;
	protected _image?: HTMLImageElement;
	protected _description?: HTMLElement;
	protected _category?: HTMLElement;
	protected _price?: HTMLElement;
	button?: HTMLButtonElement;

	constructor(container: HTMLElement, actions?: IProductActions) {
		super(container);

		this._title = ensureElement<HTMLElement>(`.card__title`, container);
		this._image = ensureElement<HTMLImageElement>(`.card__image`, container);
		this.button = container.querySelector(`.card__button`);
		this._description = container.querySelector(`.card__text`);
		this._category = container.querySelector(`.card__category`);
		this._price = container.querySelector(`.card__price`);

		if (actions?.onClick) {
			if (this.button) {
				this.button.addEventListener('click', actions.onClick);
			} else {
				container.addEventListener('click', actions.onClick);
			}
		}
	}

	set id(value: string) {
		this.container.dataset.id = value;
	}

	get id(): string {
		return this.container.dataset.id || '';
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	get title(): string {
		return this._title.textContent || '';
	}

	set image(value: string) {
		this.setImage(this._image, value, this.title);
	}

	set description(value: string | string[]) {
		if (Array.isArray(value)) {
			this._description.replaceWith(
				...value.map((str) => {
					const descTemplate = this._description.cloneNode() as HTMLElement;
					this.setText(descTemplate, str);
					return descTemplate;
				})
			);
		} else {
			this.setText(this._description, value);
		}
	}

	set category(value: string) {
		const categoryClass = value;

		this._category.classList.add(`card__category_${CategoryStyle[value]}`);

		this.setText(this._category, value);
	}

	get category(): string {
		return this._category.textContent || '';
	}

	set price(value: string | null) {
		const text = value === null ? 'Бесценно' : `${value} синапсов`;
		this.setText(this._price, text);
	}

	get price(): string {
		return this._price.textContent || '';
	}

	buttonValue(value: string) {
		this.setText(this.button, value);
	}
}

export class ProductBasket extends Component<IProductBasket> {
	protected _title: HTMLElement;
	protected _index: HTMLImageElement;
	protected _price: HTMLElement;
	protected button: HTMLButtonElement;

	constructor(container: HTMLElement, actions?: IProductActions) {
		super(container);

		this._title = ensureElement<HTMLElement>(`.card__title`, container);
		this._index = container.querySelector(`.basket__item-index`);
		this._price = container.querySelector(`.card__price`);

		if (actions?.onClick) {
			if (this.button) {
				this.button.addEventListener('click', actions.onClick);
			} else {
				container.addEventListener('click', actions.onClick);
			}
		}
	}

	set price(value: string | null) {
		const text = value === null ? 'Бесценно' : `${value} синапсов`;
		this.setText(this._price, text);
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	set index(value: number) {
		this.setText(this._index, value);
	}
}
