export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupActiveSelector = 'popup_opened';
    this._buttonClosePopup = this._popup.querySelector('.popup__close-btn');
  }
  // закрытие по Esc
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  open() {
    this._popup.classList.add(this._popupActiveSelector);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._popupActiveSelector);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    // закрытие по крестику
    this._buttonClosePopup.addEventListener('click', () => {
      this.close();
    });

    // закрытие по оверлею
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
  }
}
