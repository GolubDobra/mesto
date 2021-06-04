import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, saveButton) {
    super(popupSelector);
    this._saveButton = saveButton;
  }
  open(handleApi) {
    super.open();
    this._handleApi = handleApi;
    this.setEventListenersForSaveBtn();
    // this._saveButton.addEventListener('click', this._handleApi);
  }

  setEventListenersForSaveBtn() {
    this._saveButton.addEventListener('submit', this._handleApi);
  }

  close() {
    super.close();
    // this._saveButton.removeEventListener('click', this._handleApi);
  }
}
