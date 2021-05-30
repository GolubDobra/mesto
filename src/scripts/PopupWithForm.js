import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor({ popupSelector, popupSubmit }) {
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._popupSubmit = popupSubmit;
    this._popup = document.querySelector(this._popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputsList = this._popup.querySelectorAll('.popup__input');
    this._saveButton = this._popup.querySelector('.popup__save-btn');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputsList.forEach((input) => (this._formValues[input.name] = input.value));
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const initialText = this._saveButton.textContent;
      this._popupSubmit(this._getInputValues(), this._saveButton, initialText);
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
