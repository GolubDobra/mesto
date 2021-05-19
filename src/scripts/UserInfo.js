export class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._descriptions = document.querySelector(descriptionSelector);
  }

  // получаем имя и описание профиля
  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._name.textContent;
    userInfo.descriptions = this._descriptions.textContent;

    return userInfo;
  }

  // заполняем имя и описание профиля
  setUserInfo(userNameInput, userStatusInput) {
    this._name.textContent = userNameInput;
    this._descriptions.textContent = userStatusInput;
  }
}
