export class UserInfo {
  constructor({ nameUserSelector, statusUserSelector }) {
    this._name = document.querySelector(nameUserSelector);
    this._status = document.querySelector(statusUserSelector);
  }

  // получаем имя и описание профиля
  getUserInfo() {
    const userInfo = {};
    userInfo.name = this._name.textContent;
    userInfo.status = this._status.textContent;
    return userInfo;
  }

  // заполняем имя и описание профиля
  setUserInfo(userNameInInput, userStatusInInput) {
    this._name.textContent = userNameInInput;
    this._status.textContent = userStatusInInput;
  }
}
