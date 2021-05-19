import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({ popupSelector, popupSubmit }) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._popupSubmit = popupSubmit;
    this._popup = document.querySelector(this._popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  // возвращение значений для заполнения карточки или профиля
  _getInputValues() {
    this._formValues = {};

    this._popup
      .querySelectorAll('.popup__input')
      .forEach((item) => (this._formValues[item.name] = item.value));
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._popupSubmit(this._getInputValues());
    });
  }

  // reset -- сбрасывает стандартные значения всем элементам формы
  close() {
    super.close();
    this._form.reset();
  }
}
