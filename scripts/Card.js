// import { openPopup } from './index.js';

// класс для создания карточек
const openFullImage = document.querySelector('.popup_open-image');
const fullImage = openFullImage.querySelector('.popup__image');
const fullImageName = openFullImage.querySelector('.popup__name');
export class Card {
  constructor(element, templateSelector, { handleCardClick }) {
    this._name = element.cardName;
    this._templateSelector = templateSelector;
    this._link = element.cardUrl;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners(this._element);
    this._element.querySelector('.elements__card-name').textContent = this._name;
    this._element.querySelector('.elements__card-name').alt = this._name;
    this._element.querySelector('.elements__card-image').src = this._link;

    return this._element;
  }

  // Добавление/удаление лайка карточке
  _setEventListeners(elem) {
    this._element.querySelector('.elements__card-image').addEventListener('click', () => {
      this._handleCardClick();
    });

    elem.querySelector('.elements__card-like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__card-like_active');
    });

    elem.querySelector('.elements__trash-button').addEventListener('click', (evt) => {
      evt.target.parentElement.remove();
    });

    // elem.querySelector('.elements__card-image').addEventListener('click', (evt) => {
    //   // openPopup(openFullImage);
    //   // document.addEventListener('keydown', closePopupByEsc);
    //   // openFullImage.addEventListener('click', closePopupByOverlay);
    //   // openFullImage.classList.add('popup_opened');
    //   // document.querySelector('.root').setAttribute('style', 'overflow: hidden');
    //   // fullImage.src = this._link;
    //   // fullImageName.textContent = this._name;
    //   // fullImageName.alt = this._name;
    // });
  }
}
