import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-сards.js';

// 4 проектная работа
// Элементы для редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupContainer = popupEditProfile.querySelector('.popup__container');
const popupForm = popupContainer.querySelector('.popup__form');

const root = document.querySelector('.root');
const profileContainer = document.querySelector('.profile');
const profileDescriptions = profileContainer.querySelector('.profile__description');
const profileName = profileContainer.querySelector('.profile__name');

const inputName = popupForm.querySelector('.popup__input_type_name');
const inputDescriptions = popupForm.querySelector('.popup__input_type_descriptions');

// Элементы для манипуляций с карточками
const popupAddCard = document.querySelector('.popup_add-card');

const popupCntnr = popupAddCard.querySelector('.popup__container');
const popupFormAddCard = popupCntnr.querySelector('.popup__form_add-card');

const inputTitle = popupFormAddCard.querySelector('.popup__input_type_card-title');
const inputUrl = popupFormAddCard.querySelector('.popup__input_type_card-url');

// Открытие формы для добавления карточки
const addBtn = document.querySelector('.profile__add-button');

// Открытие формы для редактирования профиля
const editBtn = document.querySelector('.profile__edit-button');

// Закрытие формы для редактирования профиля
const closeBtnForEditProfile = document.querySelector('.popup__hidden-btn_edit-profile');

// Элементы для добавления карточек
const elements = document.querySelector('.elements');
const elementsTemplate = document.querySelector('.elements__template').content;

// Закрытие формы для добавления карточки
const closeBtnForAddCard = document.querySelector('.popup__hidden-btn_add-card');

// Закрытие картинки, развернутой на полный экран
const openFullImage = document.querySelector('.popup_open-image');
const closeBtnForFullImage = document.querySelector('.popup__hidden-btn_image');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

// 7 проектная работа
let validationEditCard;
Array.from(document.querySelectorAll(validationConfig.formSelector)).forEach((formElement) => {
  validationEditCard = new FormValidator(validationConfig, formElement);
  validationEditCard.enableValidation();
});

// Кнопка "Сохранить" для редактирования профиля
popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescriptions.textContent = inputDescriptions.value;
  closePopupEditor();
});

const openPopupEditor = () => {
  validationEditCard.ableSubmitButton();
  validationEditCard.clearValidation();
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputDescriptions.value = profileDescriptions.textContent;
};

editBtn.addEventListener('click', openPopupEditor);

const closePopupEditor = () => {
  closePopup(popupEditProfile);
};

closeBtnForEditProfile.addEventListener('click', closePopupEditor);

// 5 проектная работа
export const openPopup = (element) => {
  document.addEventListener('keydown', closePopupByEsc);
  element.addEventListener('click', closePopupByOverlay);
  element.classList.add('popup_opened');
  root.setAttribute('style', 'overflow: hidden');
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  root.removeAttribute('style');
  document.removeEventListener('keydown', closePopupByEsc);
  element.removeEventListener('click', closePopupByOverlay);
};

// Добавление карточек, реализация функциональности для лайков,
// удаления определенной карточки и раскрытия картинки на полный экран
const renderInitialCards = (initialCards) => {
  initialCards.forEach((element) => {
    const cardElement = createCard(element);

    // Добавляем в DOM
    addCard(true, cardElement);
  });
};
const createCard = (element) => {
  const card = new Card(element, '.elements__template');
  return card.generateCard();
};

const addCard = (isAppend, element) => {
  if (!isAppend) {
    elements.prepend(element);
  } else {
    elements.append(element);
  }
};

const openPopupForAddCard = () => {
  inputTitle.value = '';
  inputUrl.value = '';
  validationEditCard.disableSubmitButton();
  validationEditCard.clearValidation();
  openPopup(popupAddCard);
};

addBtn.addEventListener('click', openPopupForAddCard);

const closePopupForAddCard = () => {
  closePopup(popupAddCard);
};

closeBtnForAddCard.addEventListener('click', closePopupForAddCard);

// Добавление в массив элемент новой карточки
popupFormAddCard.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const elemCard = {
    name: inputTitle.value,
    link: inputUrl.value,
  };

  const cardElement = createCard(elemCard);

  closePopupForAddCard();
  addCard(false, cardElement);
});

renderInitialCards(initialCards);

const closePopupForFullImage = () => {
  closePopup(openFullImage);
};

closeBtnForFullImage.addEventListener('click', closePopupForFullImage);

// 6 проектная работа
// const artistInput = document.querySelector('.input__text_type_artist');
// const titleInput = document.querySelector('.input__text_type_title');

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closeOpenedPopup(openedPopup);
  }
};

const closePopupByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
};

const closeOpenedPopup = (elem) => {
  closePopup(elem);
};
