import { Card } from '../scripts/Card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { Section } from '../scripts/Section.js';
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { PopupWithSubmit } from '../scripts/PopupWithSubmit.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { Api } from '../scripts/Api.js';
import './index.css';

// 9 проектная работа
// токен и url для авторизации
const token = '0a7c4926-ca88-44b6-9ff4-20890c743148';
const url = 'https://mesto.nomoreparties.co/v1/cohort-24';
export const id = '60b2c20bf86a4f004c1c3820';
export const myId = '9815cdd06930a480b6ed7994';
const likeCounter = '.element__like-counter';
const buttonSubmit = document.querySelector('.popup__save-btn_confirm');
const userAvatar = document.querySelector('.profile__avatar');
// Открытие формы для редактирования профиля
const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const popupFormUser = document.querySelector('.popup__edit-form');
// 4 проектная работа
// Элементы для редактирования профиля
const nameInput = popupFormUser.querySelector('.popup__input-name');
const statusInput = popupFormUser.querySelector('.popup__input-status');

// Элементы для манипуляций с карточками
const addButton = document.querySelector('.profile__add-button');
// Открытие формы для добавления карточки
const addForm = document.querySelector('.popup__add-form');

const avatarForm = document.querySelector('.popup__avatar-form');
const avatarEdit = document.querySelector('.profile__avatar-edit');
const cardTemplate = document.querySelector('#card-template').content;

const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disable',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible',
  openButton: Array.from(document.querySelectorAll('.profile__click')),
};

const popupWithImage = new PopupWithImage('.popup_type_photo');
const popupWithSubmit = new PopupWithSubmit('.popup_type_submit', buttonSubmit);
const userInfo = new UserInfo({
  nameUserSelector: '.profile__info-name',
  statusUserSelector: '.profile__info-status',
  avatarUserSelector: '.profile__avatar',
});

const addCardFormValidator = new FormValidator(validationConfig, addForm);
const editProfileFormValidator = new FormValidator(validationConfig, popupFormUser);
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);

const section = new Section(
  {
    renderer: (itemWithData) => {
      const cardElement = createCard(itemWithData);
      section.addItem(cardElement);
    },
  },
  '.elements',
);
// const cardSection = new Section(
//   {
//     // items: initialCards,
//     renderer: (itemWithData) => {
//       const cardElement = createCard(itemWithData);
//       cardSection.addItem(cardElement);
//     },
//   },
//   '.elements',
// );

// new api
const api = new Api({
  url: url,
  headers: {
    authorization: token,
    'Content-Type': 'application/json',
  },
});

// api
//   .getUser() //получение информации о юзере
//   .then((res) => {
//     userInfo.setUserInfo(res.name, res.about, res.avatar);
//     // userAvatar.src = res.avatar;
//   })
//   .catch((err) => console.log(err));

Promise.all([api.getUser(), api.getCards()])
  .then((res) => {
    userInfo.setUserInfo(res[0].name, res[0].about);
    userInfo.setUserAvatar(res[0].avatar);
    section.renderItems(res[1]);
  })
  .catch((err) => console.log(err));

// api
//   .getCards() // рендер стартовых карточек
//   .then((dataCardList) => {
//     section.renderItems(dataCardList);
//   });

//создание карточки
const createCard = (dataCard) => {
  const card = new Card(dataCard, cardTemplate, {
    handleClickOnCard() {
      popupWithImage.open(dataCard.link, dataCard.name);
    },
    handleClickToDel() {
      const handleApi = () => {
        api
          .deleteCard(card._card._id)
          .then(() => {
            card.deleteCard(card._element, popupWithSubmit);
            // card._element.remove();
            // popupWithSubmit.close();
          })
          .catch((err) => console.log(err));
      };
      popupWithSubmit.open(handleApi);
      // popupWithSubmit.setEventListeners();
      // buttonSubmit.addEventListener('click', handleApi);
    },

    // подсчет кол-ва лайков
    counterLikes() {
      if (cardElement.querySelector('.element__like_active')) {
        api
          .likeCard(dataCard._id)
          .then((res) => {
            card.likeCards(card._element, likeCounter, res.likes.length);
            // card.showLikes(res.likes.length, likeCounter);
            // cardElement.querySelector(likeCounter).textContent = res.likes.length;
          })
          .catch((err) => console.log(err));
      } else {
        api
          .delCardLike(dataCard._id)
          .then((res) => {
            card.likeCards(card._element, likeCounter, res.likes.length);
            // card.showLikes(res.likes.length, likeCounter);
            // cardElement.querySelector(likeCounter).textContent = res.likes.length;
          })
          .catch((err) => console.log(err));
      }
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
};

// Имитация загрузки на сервер...
function loadingText(isLoading, saveButton, initialText) {
  /////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  if (isLoading) {
    saveButton.textContent = 'Сохранение...';
  } else {
    saveButton.textContent = initialText;
  }
}

// 8 проектная работа
const popupWithFormAdd = new PopupWithForm({
  popupSelector: '.popup_type_add',
  popupSubmit: (formValues, saveButton, initialText) => {
    loadingText(true, saveButton, initialText);
    api
      .saveNewCard({ name: formValues.name, url: formValues.link })
      .then((dataCard) => {
        section.renderItems([dataCard]);
        // loadingText(false, saveButton, initialText);
        popupWithFormAdd.close();
      })
      .finally(() => {
        loadingText(false, saveButton, initialText);
      })
      .catch((err) => console.log(err));
  },
});

const popupWithFormUser = new PopupWithForm({
  popupSelector: '.popup_type_user',
  popupSubmit: (formValues, saveButton, initialText) => {
    loadingText(true, saveButton, initialText);
    api
      .updateProfile({ name: formValues.name, status: formValues.status })
      .then((userData) => {
        userInfo.setUserInfo(userData.name, userData.about);
        // loadingText(false, saveButton, initialText);
        popupWithFormUser.close();
      })
      .finally(() => {
        loadingText(false, saveButton, initialText);
      })
      .catch((err) => console.log(err));
  },
});

const popupWithFormAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  popupSubmit: (formValues, saveButton, initialText) => {
    loadingText(true, saveButton, initialText);
    api
      .newPhotoAvatar(formValues.link)
      .then((res) => {
        userInfo.setUserAvatar(res.avatar);
        // userAvatar.src = res.avatar;
        // loadingText(false, saveButton, initialText);
        popupWithFormAvatar.close();
      })
      .finally(() => {
        loadingText(false, saveButton, initialText);
      })
      .catch((err) => console.log(err));
  },
});

addButton.addEventListener('click', () => {
  popupWithFormAdd.open();
});

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = userInfo.getUserInfo().name;
  statusInput.value = userInfo.getUserInfo().status;
  popupWithFormUser.open();
});

avatarEdit.addEventListener('click', () => {
  popupWithFormAvatar.open();
});

popupWithSubmit.setEventListeners();
popupWithFormAdd.setEventListeners();
popupWithFormUser.setEventListeners();
popupWithFormAvatar.setEventListeners();

avatarFormValidator.enableValidation();
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
