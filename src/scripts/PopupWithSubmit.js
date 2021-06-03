import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, saveButton) {
    super(popupSelector);
    this._saveButton = saveButton;
  }
  open(handleApi) {
    super.open();
    this._handleApi = handleApi;
    this._saveButton.addEventListener('click', this._handleApi);
    // document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    super.close();
    this._saveButton.removeEventListener('click', this._handleApi);
  }
}
