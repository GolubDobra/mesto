let popupContainer = document.querySelector('.popup');
let popup = popupContainer.querySelector('.popup__container');
let popupInput = popup.querySelector('.popup__input');

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
   
   popupContainer.classList.remove('popup__dark');
   popup.classList.remove('popup__open');
   root.removeAttribute('style');
}); 

let editBtn = document.querySelector('.profile__edit-button');

function openpopup() {
   popup.classList.add('popup__open');
   popupContainer.classList.add('popup__dark');

   root.setAttribute('style', 'overflow: hidden');

   inputName.value = profileName.textContent;
   inputDescriptions.value = profileDescriptions.textContent;
};

editBtn.addEventListener('click', openpopup);


let closeBtn = document.querySelector('.popup__hidden-btn');

function closepopup() {   
   popupContainer.classList.toggle('popup__dark');
   popup.classList.remove('popup__open');

   root.removeAttribute('style');
}

closeBtn.addEventListener('click', closepopup);




// let saveBtn = document.querySelector('.popup__save-btn');

// function saveChanges(evt) {
//    evt.preventDefault();
  
//    profileName.textContent = inputName.value;
//    profileDescriptions.textContent = inputDescriptions.value;
   
//    // popupContainer.classList.toggle('popup');
//    popupContainer.classList.remove('popup__dark');
//    popup.classList.remove('popup__open');
//    // popup.classList.add('popup__container');
   
   
//    console.log(profileName.textContent);
// }

// saveBtn.addEventListener('submit', saveChanges, true);