export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  updateProfile({ name, status }) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: status,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  saveNewCard({ name, url }) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: url,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  newPhotoAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  delCardLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      return this._getResponseData(res);
    });
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`error: ${res.status}`);
  }
}
