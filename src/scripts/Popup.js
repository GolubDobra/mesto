export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);
    this._popupHiddenBtn = this._popup.querySelector('.popup__hidden-btn');
    this._root = document.querySelector('.root');
  }

  // закрытие по Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  // закрытие по оверлею
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
    this._root.setAttribute('style', 'overflow: hidden');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._root.removeAttribute('style');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleOverlayClose);
  }

  // закрытие по крестику
  setEventListeners() {
    this._popupHiddenBtn.addEventListener('click', () => {
      this.close();
    });
  }
}
