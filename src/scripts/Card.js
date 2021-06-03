// класс для создания карточек
import { myId } from '../pages/index';
export class Card {
  constructor(element, cardTemplate, { handleClickOnCard, handleClickToDel, counterLikes }) {
    this._card = element;
    this._cardTemplate = cardTemplate;
    this._newCardElement = this._cardTemplate.querySelector('.element');
    this._handleClickOnCard = handleClickOnCard;
    this._handleClickToDel = handleClickToDel;
    this._counterLikes = counterLikes;
  }

  deleteCard(elementForDel, popupWithSubmit) {
    elementForDel.remove();
    popupWithSubmit.close();
  }

  _getTemplate() {
    if (this._card.owner._id !== myId) {
      const cardElement = this._newCardElement.cloneNode(true);
      // cardElement.querySelector('.card__del-button').remove();
      return cardElement;
    } else {
      const cardElement = this._newCardElement.cloneNode(true);

      return cardElement;
    }
  }

  //
  _likesCounterForCard = (likeBtn) => {
    likeBtn.classList.toggle('element__like_active');
    this._counterLikes();
  };

  generateCard() {
    this._element = this._getTemplate();
    this._placeWithImage = this._element.querySelector('.element__image');
    this._placeWithCaption = this._element.querySelector('.element__name');

    this._placeLikeSymbol = this._element.querySelector('.element__like');
    this._placeBasketSymbol = this._element.querySelector('.card__del-button');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._likeCounter.textContent = this._card.likes.length;

    this._setEventListeners();

    this._placeWithImage.src = this._card.link;
    this._placeWithCaption.textContent = this._card.name;
    this._placeWithImage.alt = this._card.name;

    this._card.likes.forEach((user) => {
      if (user._id === myId) {
        this._placeLikeSymbol.classList.add('element__like_active');
      }
      this._placeBasketSymbol.remove();
    });

    return this._element;
  }
  // showLikes(likesNumber, likeCounter) {
  //   this._counterLikeElement.textContent = likesNumber;
  // }

  likeCards(cardElement, likeCounterSelector, resultCount) {
    cardElement.querySelector(likeCounterSelector).textContent = resultCount;
  }

  // Добавление/удаление лайка карточке
  _setEventListeners() {
    this._placeWithImage.addEventListener('click', () => {
      this._handleClickOnCard();
    });

    this._placeLikeSymbol.addEventListener('click', () => {
      this._likesCounterForCard(this._placeLikeSymbol);
    });

    if (this._placeBasketSymbol) {
      this._placeBasketSymbol.addEventListener('click', (evt) => {
        this._handleClickToDel(evt);
      });
    }
  }
}
