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
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

// Закрытие формы для добавления карточки
const closeBtnForAddCard = document.querySelector('.popup__hidden-btn_add-card');

// Закрытие картинки, развернутой на полный экран
const openFullImage = document.querySelector('.popup_open-image');
const closeBtnForFullImage = document.querySelector('.popup__hidden-btn_image');

const fullImage = openFullImage.querySelector('.popup__image');
const fullImageName = openFullImage.querySelector('.popup__name');

const formList = Array.from(document.querySelectorAll('.popup__form'));

// Кнопка "Сохранить" для редактирования профиля
popupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescriptions.textContent = inputDescriptions.value;

  closePopupEditor();
});

const openPopupEditor = () => {
  openPopup(popupEditProfile);
  // popupEditProfile.classList.add('popup_opened');

  // root.setAttribute('style', 'overflow: hidden');

  inputName.value = profileName.textContent;
  inputDescriptions.value = profileDescriptions.textContent;
};

editBtn.addEventListener('click', openPopupEditor);

const closePopupEditor = () => {
  closePopup(popupEditProfile);
};

closeBtnForEditProfile.addEventListener('click', closePopupEditor);

// 5 проектная работа

const openPopup = (element) => {
  document.addEventListener('keydown', closePopupByEsc);
  element.addEventListener('click', closePopupByOverlay);
  element.classList.add('popup_opened');
  root.setAttribute('style', 'overflow: hidden');
};

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  root.removeAttribute('style');
};

// Добавление карточек, реализация функциональности для лайков,
// удаления определенной карточки и раскрытия картинки на полный экран
const renderInitialCards = (initialCards) => {
  initialCards.forEach(function (element) {
    addCard(true, element);
  });
};

const createCard = (element) => {
  const cloneElemsTemplate = elementsTemplate.cloneNode(true);
  const cardName = cloneElemsTemplate.querySelector('.elements__card-name');
  const cardLike = cloneElemsTemplate.querySelector('.elements__card-like');
  const cardTrashBtn = cloneElemsTemplate.querySelector('.elements__trash-button');
  const cardImage = cloneElemsTemplate.querySelector('.elements__card-image');

  // Добавление карточки
  cardName.textContent = element.name;
  cardName.alt = element.name;
  cardImage.src = element.link;

  // Добавление/удаление лайка карточке
  cardLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__card-like_active');
  });

  // Удаление карточки пользователем
  cardTrashBtn.addEventListener('click', function (evt) {
    evt.target.parentElement.remove();
  });

  // Раскрытие картинки на весь экран
  cardImage.addEventListener('click', function (evt) {
    openPopup(openFullImage);
    fullImage.src = element.link;
    fullImageName.textContent = element.name;
    fullImageName.alt = element.name;
  });
  return cloneElemsTemplate;
};

const addCard = (isAppend, element) => {
  if (!isAppend) {
    elements.prepend(createCard(element));
  } else {
    elements.append(createCard(element));
  }
};

const openPopupForAddCard = () => {
  inputTitle.value = '';
  inputUrl.value = '';
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
  const card = {
    name: inputTitle.value,
    link: inputUrl.value,
  };
  closePopupForAddCard();
  addCard(false, card);
});

renderInitialCards(initialCards);

const closePopupForFullImage = () => {
  closePopup(openFullImage);
};

closeBtnForFullImage.addEventListener('click', closePopupForFullImage);

// 6 проектная работа
const artistInput = document.querySelector('.input__text_type_artist');
const titleInput = document.querySelector('.input__text_type_title');

const closePopupByEsc = (evt) => {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closeOpenedPopup(openedPopup);
  }
};

const closePopupByOverlay = (evt) => {
  closePopup(evt.target);
};

const closeOpenedPopup = (elem) => {
  document.removeEventListener('keydown', closePopupByEsc);
  elem.removeEventListener('click', closePopupByOverlay);
  closePopup(elem);
};

// ошибки при создании карточки и при изменении пользовательских данных
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
//   const buttonElement = formElement.querySelector('.popup__save-btn');

//   toggleButtonState(inputList, buttonElement);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// const enableValidation = () => {
//   // const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', function (evt) {
//       evt.preventDefault();
//     });
//     setEventListeners(formElement);
//   });
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((item) => !item.validity.valid);
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add('popup__save-btn_inactive');
//   } else {
//     buttonElement.classList.remove('popup__save-btn_inactive');
//   }
// };
