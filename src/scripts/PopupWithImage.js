import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    super.setEventListeners();
    this._bigFoto = this._popup.querySelector('.popup__image');
    this._bigCaption = this._popup.querySelector('.popup__img-title');
  }

  open(link, name) {
    super.open();
    this._bigFoto.src = link;
    this._bigCaption.textContent = name;
    this._bigFoto.alt = name;
  }
}
