import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, saveButton) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
  }
  open(handleApi) {
    super.open();
    this._handleApi = handleApi;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleApi();
    });
  }
}
