let likesContainer = document.querySelector('.elements');
let likes = likesContainer.querySelectorAll('.elements__card-like');
let formContainer = document.querySelector('.form__dark-background');
let form = formContainer.querySelector('.form');
let root = document.querySelector('.root');
let profileContainer = document.querySelector('.profile');
let inputName = form.querySelector('.form-enable__input-name');
let inputDescriptions = form.querySelector('.form-enable__input-descriptions');
let profileName = profileContainer.querySelector('.profile__name');
let profileDescriptions = profileContainer.querySelector('.profile__description');
console.log(likes);

document.addEventListener('click', function(event) {
  let id = event.target.dataset.id;
   if (!id) return;
   console.log(id);

   let like = document.getElementById(id);

   like.classList.toggle('elements__card_like-enable');
   like.classList.toggle('elements__card-like');
});


let editBtn = document.querySelector('.profile__edit-button');

function openForm() {
   form.classList.toggle('form');
   form.classList.toggle('form-enable');
   formContainer.classList.toggle('form__dark-background');
   formContainer.classList.toggle('form-enable__dark-background');

   root.setAttribute('style', 'overflow: hidden');

   inputName.value = profileName.textContent;
   inputDescriptions.value = profileDescriptions.textContent;
};

editBtn.addEventListener('click', openForm);


let saveBtn = document.querySelector('.form-enable__save-btn');

function saveChanges() {
   profileName.textContent = inputName.value;
   profileDescriptions.textContent = inputDescriptions.value;

   formContainer.classList.toggle('form__dark-background');
   formContainer.classList.toggle('form-enable__dark-background');
   form.classList.remove('form-enable');
   form.classList.add('form');
   
   root.removeAttribute('style');
}

saveBtn.addEventListener('click', saveChanges);


let closeBtn = document.querySelector('.form-enable__hidden-btn');

function closeForm() {
   profileName.textContent = profileName.textContent;
   profileDescriptions.textContent = profileDescriptions.textContent;
   
   formContainer.classList.toggle('form__dark-background');
   formContainer.classList.toggle('form-enable__dark-background');
   form.classList.remove('form-enable');
   form.classList.add('form');

   root.removeAttribute('style');
}

closeBtn.addEventListener('click', closeForm);


