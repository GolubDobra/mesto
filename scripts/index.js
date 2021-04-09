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
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
     name: 'Челябинская область',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
     name: 'Иваново',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
     name: 'Камчатка',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
     name: 'Холмогорский район',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
     name: 'Байкал',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
 ];

 // Закрытие формы для добавления карточки
const closeBtnForAddCard = document.querySelector('.popup__hidden-btn_add-card');

// Закрытие картинки, развернутой на полный экран
const openFullImage = document.querySelector('.popup_open-image');
const closeBtnForFullImage = document.querySelector('.popup__hidden-btn_image');

const fullImage = openFullImage.querySelector('.popup__image');
const fullImageName = openFullImage.querySelector('.popup__name');

let cardsForRemove = elements.querySelectorAll('.elements__card');

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
}

closeBtnForEditProfile.addEventListener('click', closePopupEditor);

// 5 проектная работа

 const openPopup = (element) => {
   element.classList.add('popup_opened');
   root.setAttribute('style', 'overflow: hidden');
 }

 const closePopup = (element) => {
   element.classList.remove('popup_opened');
   root.removeAttribute('style');
 }

 // Добавление карточек, реализация функциональности для лайков, 
 // удаления определенной карточки и раскрытия картинки на полный экран
 const renderInitialCards = (initialCards) => {
   initialCards.forEach(function (element) {
      addCard(true, element);
   }) 
}

const createCard = (element) => {
      const cloneElemsTemplate = elementsTemplate.cloneNode(true);
      const cardName = cloneElemsTemplate.querySelector('.elements__card-name');
      const cardLike = cloneElemsTemplate.querySelector('.elements__card-like');
      const cardTrashBtn = cloneElemsTemplate.querySelector('.elements__trash-button');
      const cardImage  =  cloneElemsTemplate.querySelector('.elements__card-image');
      
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
}

const addCard = (isAppend, element) => {
   cardsForRemove = elements.querySelectorAll('.elements__card');
   if(!isAppend && cardsForRemove.length !== 0){
      cardsForRemove[0].before(createCard(element));
   } else {
      elements.append(createCard(element));
   }
   
}

function openPopupForAddCard() {
   inputTitle.value = '';
   inputUrl.value = '';
   openPopup(popupAddCard);
};

addBtn.addEventListener('click', openPopupForAddCard);

function closePopupForAddCard() {   
   closePopup(popupAddCard)
}

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

function closePopupForFullImage() {   
   closePopup(openFullImage);
}

closeBtnForFullImage.addEventListener('click', closePopupForFullImage);


