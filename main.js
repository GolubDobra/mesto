(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o,i,u=this,a=r.handleClickOnCard,c=r.handleClickToDel,s=r.counterLikes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=function(e){e.classList.toggle("element__like_active"),u._counterLikes()},(o="_likesCounterForCard")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._card=e,this._cardTemplate=n,this._newCardElement=this._cardTemplate.querySelector(".element"),this._handleClickOnCard=a,this._handleClickToDel=c,this._counterLikes=s}var n,r;return n=t,(r=[{key:"deleteCard",value:function(e){e.remove()}},{key:"_getTemplate",value:function(){return this._newCardElement.cloneNode(!0)}},{key:"generateCard",value:function(e){var t=this;return this._element=this._getTemplate(),this._placeWithImage=this._element.querySelector(".element__image"),this._placeWithCaption=this._element.querySelector(".element__name"),this._placeLikeSymbol=this._element.querySelector(".element__like"),this._placeBasketSymbol=this._element.querySelector(".card__del-button"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._likeCounter.textContent=this._card.likes.length,this._setEventListeners(),this._placeWithImage.src=this._card.link,this._placeWithCaption.textContent=this._card.name,this._placeWithImage.alt=this._card.name,this._card.likes.forEach((function(n){n._id===e&&t._placeLikeSymbol.classList.add("element__like_active")})),this._card.owner._id!==e&&this._placeBasketSymbol.remove(),this._element}},{key:"likeCards",value:function(e,t,n){e.querySelector(t).textContent=n}},{key:"_setEventListeners",value:function(){var e=this;this._placeWithImage.addEventListener("click",(function(){e._handleClickOnCard()})),this._placeLikeSymbol.addEventListener("click",(function(){e._likesCounterForCard(e._placeLikeSymbol)})),this._placeBasketSymbol&&this._placeBasketSymbol.addEventListener("click",(function(t){e._handleClickToDel(t)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._openButton=t.openButton}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),t.textContent=null}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"enableValidation",value:function(){var e=this;this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._openButton.forEach((function(t){t.addEventListener("click",(function(){e._inputList.forEach((function(t){e._hideInputError(t)})),e._toggleButtonState()}))})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._popupActiveSelector="popup_opened",this._buttonClosePopup=this._popup.querySelector(".popup__close-btn")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupActiveSelector),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._popupActiveSelector),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._buttonClosePopup.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&u(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),h((t=f(n=i.call(this,e)),_(u.prototype)),"setEventListeners",t).call(t),n._bigFoto=n._popup.querySelector(".popup__image"),n._bigCaption=n._popup.querySelector(".popup__img-title"),n}return t=u,(n=[{key:"open",value:function(e,t){h(_(u.prototype),"open",this).call(this),this._bigFoto.src=e,this._bigCaption.textContent=t,this._bigFoto.alt=t}}])&&s(t.prototype,n),u}(a);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return(m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t,n=e.popupSelector,r=e.popupSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._popupSelector=n,t._popupSubmit=r,t._popup=document.querySelector(t._popupSelector),t._popupForm=t._popup.querySelector(".popup__form"),t._inputsList=t._popup.querySelectorAll(".popup__input"),t._saveButton=t._popup.querySelector(".popup__save-btn"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputsList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;m(g(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault();var n=e._saveButton.textContent;e._popupSubmit(e._getInputValues(),e._saveButton,n)}))}},{key:"close",value:function(){m(g(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&v(t.prototype,n),u}(a);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._popup=document.querySelector(e),n._popupForm=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"open",value:function(e){w(P(u.prototype),"open",this).call(this),this._handleApi=e}},{key:"setEventListeners",value:function(){var e=this;w(P(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleApi()}))}}])&&E(t.prototype,n),u}(a);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.nameUserSelector,r=t.statusUserSelector,o=t.avatarUserSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._status=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._name.textContent,e.status=this._status.textContent,e}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._status.textContent=t}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}}])&&j(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I,T=function(){function e(t){var n=t.url,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUser",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._getResponseData(t)}))}},{key:"updateProfile",value:function(e){var t=this,n=e.name,r=e.status;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._getResponseData(e)}))}},{key:"saveNewCard",value:function(e){var t=this,n=e.name,r=e.url;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._getResponseData(e)}))}},{key:"newPhotoAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"delCardLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("error: ".concat(e.status))}}])&&B(t.prototype,n),e}(),D=".element__like-counter",A=(document.querySelector(".popup__save-btn_confirm"),document.querySelector(".profile__avatar"),document.querySelector(".profile__info-edit-button")),x=document.querySelector(".popup__edit-form"),U=x.querySelector(".popup__input-name"),V=x.querySelector(".popup__input-status"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".popup__add-form"),W=document.querySelector(".popup__avatar-form"),J=document.querySelector(".profile__avatar-edit"),H=document.querySelector("#card-template").content,z={inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_disable",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible",openButton:Array.from(document.querySelectorAll(".profile__click"))},M=document.querySelector(".popup_type_submit").querySelector(".popup__form"),G=new y(".popup_type_photo"),K=new q(".popup_type_submit",M),Q=new R({nameUserSelector:".profile__info-name",statusUserSelector:".profile__info-status",avatarUserSelector:".profile__avatar"}),X=new r(z,N),Y=new r(z,x),Z=new r(z,W),$=new i({renderer:function(e){var t=te(e);$.addItem(t)}},".elements"),ee=new T({url:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"0a7c4926-ca88-44b6-9ff4-20890c743148","Content-Type":"application/json"}});Promise.all([ee.getUser(),ee.getCards()]).then((function(e){I=e[0]._id,Q.setUserInfo(e[0].name,e[0].about),Q.setUserAvatar(e[0].avatar),$.renderItems(e[1])})).catch((function(e){return console.log(e)}));var te=function(e){var n=new t(e,H,{handleClickOnCard:function(){G.open(e.link,e.name)},handleClickToDel:function(){K.open((function(){ee.deleteCard(n._card._id).then((function(){n.deleteCard(n._element,K),K.close()})).catch((function(e){return console.log(e)}))}))},counterLikes:function(){r.querySelector(".element__like_active")?ee.likeCard(e._id).then((function(e){n.likeCards(n._element,D,e.likes.length)})).catch((function(e){return console.log(e)})):ee.delCardLike(e._id).then((function(e){n.likeCards(n._element,D,e.likes.length)})).catch((function(e){return console.log(e)}))}}),r=n.generateCard(I);return r};function ne(e,t,n){t.textContent=e?"Сохранение...":n}var re=new S({popupSelector:".popup_type_add",popupSubmit:function(e,t,n){ne(!0,t,n),ee.saveNewCard({name:e.name,url:e.link}).then((function(e){$.renderItems([e]),re.close()})).finally((function(){ne(!1,t,n)})).catch((function(e){return console.log(e)}))}}),oe=new S({popupSelector:".popup_type_user",popupSubmit:function(e,t,n){ne(!0,t,n),ee.updateProfile({name:e.name,status:e.status}).then((function(e){Q.setUserInfo(e.name,e.about),oe.close()})).finally((function(){ne(!1,t,n)})).catch((function(e){return console.log(e)}))}}),ie=new S({popupSelector:".popup_type_avatar",popupSubmit:function(e,t,n){ne(!0,t,n),ee.newPhotoAvatar(e.link).then((function(e){Q.setUserAvatar(e.avatar),ie.close()})).finally((function(){ne(!1,t,n)})).catch((function(e){return console.log(e)}))}});F.addEventListener("click",(function(){re.open()})),A.addEventListener("click",(function(){U.value=Q.getUserInfo().name,V.value=Q.getUserInfo().status,oe.open()})),J.addEventListener("click",(function(){ie.open()})),K.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),Z.enableValidation(),Y.enableValidation(),X.enableValidation()})();