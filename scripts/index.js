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

// Кнопка "Сохранить" для редактирования профиля
popupForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
   profileName.textContent = inputName.value;
   profileDescriptions.textContent = inputDescriptions.value;
   
   closePopupEditor();
}); 

// Открытие формы для редактирования профиля
const editBtn = document.querySelector('.profile__edit-button');

const openPopupEditor = () => {
   addOpenClass(popupEditProfile);
   // popupEditProfile.classList.add('popup_opened');

   // root.setAttribute('style', 'overflow: hidden');

   inputName.value = profileName.textContent;
   inputDescriptions.value = profileDescriptions.textContent;
};

editBtn.addEventListener('click', openPopupEditor);

// Закрытие формы для редактирования профиля
const closeBtnForEditProfile = document.querySelector('.popup__hidden-btn_edit-profile');

const closePopupEditor = () => {   
   removeOpenClass(popupEditProfile);
}

closeBtnForEditProfile.addEventListener('click', closePopupEditor);

// 5 проектная работа

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

 const addOpenClass = (element) => {
   element.classList.add('popup_opened');
   root.setAttribute('style', 'overflow: hidden');
 }

 const removeOpenClass = (element) => {
   element.classList.remove('popup_opened');
   root.removeAttribute('style');
 }

 // Удаление карточек
 const removeCards = () => {
   const cardsForRemove = elements.querySelectorAll('.elements__card');
   if(cardsForRemove.length !== 0) {
      cardsForRemove.forEach((elem) => {
         elem.remove();
      })
   }
 }

 // Добавление карточек, реализация функциональности для лайков, 
 // удаления определенной карточки и раскрытия картинки на полный экран
 const initialCardsFunc = (initialCards) => {
   removeCards();

   initialCards.forEach(function (element, index, arr) {
      const cloneElemsTemplate = elementsTemplate.cloneNode(true);
      
      // Добавление карточки
      cloneElemsTemplate.querySelector('.elements__card-name').textContent = element.name;
      cloneElemsTemplate.querySelector('.elements__card-name').alt = element.name;
      cloneElemsTemplate.querySelector('.elements__card-image').src = element.link;

      // Добавление/удаление лайка карточке
      cloneElemsTemplate.querySelector('.elements__card-like').addEventListener('click', function (evt) {
         evt.target.classList.toggle('elements__card-like_active');
      });

      // Удаление карточки пользователем
      cloneElemsTemplate.querySelector('.elements__trash-button').addEventListener('click', function (evt) {
         delete arr[index]; //arr.splice(index, 1);
         evt.target.parentElement.remove();
      });

      // Раскрытие картинки на весь экран
      cloneElemsTemplate.querySelector('.elements__card-image').addEventListener('click', function (evt) {
         addOpenClass(openFullImage);
         openFullImage.querySelector('.popup__image').src = element.link;
         openFullImage.querySelector('.popup__name').textContent = element.name;
      });
      elements.append(cloneElemsTemplate);
   })
   initialCards.filter((e) => e !== undefined);   
}

// Элементы для манипуляций с карточками
const popupAddCard = document.querySelector('.popup_add-card');
const popupCntnr = popupAddCard.querySelector('.popup__container');
const popupFormAddCard = popupCntnr.querySelector('.popup__form_add-card');

const inputTitle = popupFormAddCard.querySelector('.popup__input_type_card-title');
const inputUrl = popupFormAddCard.querySelector('.popup__input_type_card-url');

// Открытие формы для добавления карточки
const addBtn = document.querySelector('.profile__add-button');

function openPopupForAddCard() {
   addOpenClass(popupAddCard);
};

addBtn.addEventListener('click', openPopupForAddCard);

// Закрытие формы для добавления карточки
const closeBtnForAddCard = document.querySelector('.popup__hidden-btn_add-card');

function closePopupForAddCard() {   
   removeOpenClass(popupAddCard)
}

closeBtnForAddCard.addEventListener('click', closePopupForAddCard);

// Добавление в массив элемент новой карточки
popupFormAddCard.addEventListener('submit', function (evt) {
   evt.preventDefault();
   initialCards.unshift({
      name: inputTitle.value,
      link: inputUrl.value,
    });
   closePopupForAddCard();
   initialCardsFunc(initialCards);
}); 

initialCardsFunc(initialCards);

// Закрытие картинки, развернутой на полный экран
const openFullImage = document.querySelector('.popup_open-image');
const closeBtnForFullImage = document.querySelector('.popup__hidden-btn_image');

function closePopupForFullImage() {   
   removeOpenClass(openFullImage);
}

closeBtnForFullImage.addEventListener('click', closePopupForFullImage);


