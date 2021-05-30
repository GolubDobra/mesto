export class FormValidator {
  constructor(validateConfig, formElement) {
    this._form = formElement;
    this._inputSelector = validateConfig.inputSelector;
    this._submitButtonSelector = validateConfig.submitButtonSelector;
    this._inactiveButtonClass = validateConfig.inactiveButtonClass;
    this._inputErrorClass = validateConfig.inputErrorClass;
    this._errorClass = validateConfig.errorClass;
    this._openButton = validateConfig.openButton;
  }

  _showInputError(inputElement, errorMessage) {
    // показать ошибку
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    // скрыть ошибку
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    inputElement.classList.remove(this._errorClass);
    errorElement.textContent = null;
  }

  _checkInputValidity(inputElement) {
    // функция проверяет корректность введеных данных
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  enableValidation() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();

    this._openButton.forEach((button) => {
      button.addEventListener('click', () => {
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
        this._toggleButtonState();
      });
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }
}
