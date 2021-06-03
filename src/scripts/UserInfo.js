export class UserInfo {
  constructor({ nameUserSelector, statusUserSelector, avatarUserSelector }) {
    this._name = document.querySelector(nameUserSelector);
    this._status = document.querySelector(statusUserSelector);
    this._avatar = document.querySelector(avatarUserSelector);
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

  setUserAvatar(userAvatarInInput) {
    this._avatar.src = userAvatarInInput;
  }
}
