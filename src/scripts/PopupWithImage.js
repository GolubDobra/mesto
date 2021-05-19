import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullImage = this._popup.querySelector('.popup__image');
    this._fullImageTitle = this._popup.querySelector('.popup__name');
  }

  open(cardUrl, cardName) {
    super.open();

    this._fullImageTitle.alt = cardName;
    this._fullImageTitle.textContent = cardName;
    this._fullImage.src = cardUrl;

    super.setEventListeners();
  }
}
