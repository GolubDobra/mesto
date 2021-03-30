let popupContainer = document.querySelector('.popup');
let popup = popupContainer.querySelector('.popup__container');

let root = document.querySelector('.root');
let profileContainer = document.querySelector('.profile');
let profileDescriptions = profileContainer.querySelector('.profile__description');
let profileName = profileContainer.querySelector('.profile__name');

let inputName = popup.querySelector('.popup__input_type_name');
let inputDescriptions = popup.querySelector('.popup__input_type_descriptions');


popup.addEventListener('submit', function (evt) {
   evt.preventDefault();
   profileName.textContent = inputName.value;
   profileDescriptions.textContent = inputDescriptions.value;
   
   closepopup();
}); 

let editBtn = document.querySelector('.profile__edit-button');

function openpopup() {
   popupContainer.classList.add('popup_opened');

   root.setAttribute('style', 'overflow: hidden');

   inputName.value = profileName.textContent;
   inputDescriptions.value = profileDescriptions.textContent;
};

editBtn.addEventListener('click', openpopup);


let closeBtn = document.querySelector('.popup__hidden-btn');

function closepopup() {   
   popupContainer.classList.remove('popup_opened');

   root.removeAttribute('style');
}

closeBtn.addEventListener('click', closepopup);
