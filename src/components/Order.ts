import { Form } from './common/Form';
import { IOrderAdress, IOrderData } from '../types';
import { IEvents } from './base/events';

export class OrderAdress extends Form<IOrderAdress> {
	protected _buttonPayOnline: HTMLButtonElement;
	protected _buttonPayOffline: HTMLButtonElement;
	protected _adressInput: HTMLInputElement;

	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);

		this._buttonPayOnline = container.querySelector('button[name="card"]');
		this._buttonPayOffline = container.querySelector('button[name="cash"]');
		this._adressInput = container.elements.namedItem(
			'address'
		) as HTMLInputElement;

		if (this._buttonPayOnline && this._buttonPayOffline) {
			this._buttonPayOnline.addEventListener('click', () => {
				this.onClick('payment', 'online');
			});

			this._buttonPayOffline.addEventListener('click', () => {
				this.onClick('payment', 'offline');
			});
		}
	}

	set address(value: string) {
		this._adressInput.value = value;
	}

	set payment(value: string) {
		if (value === 'online') {
			this.toggleClass(this._buttonPayOnline, 'button_alt-active', true);
			this.toggleClass(this._buttonPayOffline, 'button_alt-active', false);
		} else if (value === 'offline') {
			this.toggleClass(this._buttonPayOffline, 'button_alt-active', true);
			this.toggleClass(this._buttonPayOnline, 'button_alt-active', false);
		}
	}

	protected onClick(field: 'payment', value: string) {
		this.events.emit(`${this.container.name}.${String(field)}:change`, {
			field,
			value,
		});
		this.payment = value;
	}
}

export class OrderData extends Form<IOrderData> {
	protected _emailInput: HTMLInputElement;
	protected _phoneInput: HTMLInputElement;

	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);

		this._emailInput = container.elements.namedItem(
			'email'
		) as HTMLInputElement;
		this._phoneInput = container.elements.namedItem(
			'phone'
		) as HTMLInputElement;
	}

	set email(value: string) {
		this._emailInput.value = value;
	}

	set phone(value: string) {
		this._phoneInput.value = value;
	}
}
