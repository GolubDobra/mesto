import { Card } from './scripts/Card.js';
import { FormValidator } from './scripts/FormValidator.js';
import { initialCards } from './scripts/initial-сards.js';

import { Section } from './scripts/Section.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { UserInfo } from './scripts/UserInfo.js';
import './pages/index.css';

// 4 проектная работа
// Элементы для редактирования профиля
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupContainer = popupEditProfile.querySelector('.popup__container');
const popupForm = popupContainer.querySelector('.popup__form');

// Элементы для манипуляций с карточками
const popupAddCard = document.querySelector('.popup_add-card');

const popupCntnr = popupAddCard.querySelector('.popup__container');
const popupFormAddCard = popupCntnr.querySelector('.popup__form_add-card');
const popupFormEditProfile = document.querySelector('.popup__form_edit-profile');

// Открытие формы для добавления карточки
const addBtn = document.querySelector('.profile__add-button');

// Открытие формы для редактирования профиля
const editBtn = document.querySelector('.profile__edit-button');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

// 8 проектная работа
const inputName = popupForm.querySelector('.popup__input_type_name');
const inputDescriptions = popupForm.querySelector('.popup__input_type_descriptions');

const validationAddCard = new FormValidator(validationConfig, popupFormAddCard);
validationAddCard.enableValidation();
const validationEditCard = new FormValidator(validationConfig, popupFormEditProfile);
validationEditCard.enableValidation();

const popupWithImage = new PopupWithImage('.popup_open-image');

const createCard = (element) => {
  const card = new Card(element, '.elements__template', {
    handleCardClick() {
      popupWithImage.open(element.cardUrl, element.cardName);
    },
  });
  return card.generateCard();
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (itemWithData) => {
      const cardElement = createCard(itemWithData);
      cardSection.addItem(cardElement);
    },
  },
  '.elements',
);

const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_add-card',
  popupSubmit: (item) => {
    cardSection.addItem(createCard(item));
    popupWithFormAdd.close();
  },
});

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  descriptionSelector: '.profile__description',
});

const popupWithFormUser = new PopupWithForm({
  popupSelector: '.popup_edit-profile',
  popupSubmit: (item) => {
    userInfo.setUserInfo(item.name, item.descriptions);
    popupWithFormUser.close();
  },
});

editBtn.addEventListener('click', () => {
  validationEditCard.clearValidation();
  inputName.value = userInfo.getUserInfo().name;
  inputDescriptions.value = userInfo.getUserInfo().descriptions;
  popupWithFormUser.open();
});

addBtn.addEventListener('click', () => {
  validationAddCard.clearValidation();
  popupWithFormAdd.open();
});

cardSection.renderItems();
popupWithFormAdd.setEventListeners();
popupWithFormUser.setEventListeners();
