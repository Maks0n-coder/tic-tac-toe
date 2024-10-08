// Функция создания одного элемента
function createEl (element, classList)  {
  const el = document.createElement(element)
  el.classList.add(classList);
  return el
}

// Функция создания кнопки
function createBtn (classList, classList2, text) {
  const button = document.createElement('button')
  button.classList.add(classList, classList2)
  button.innerHTML = text;
  button.type = 'button'
  return button
}

// Плавное удаление модального окна из DOM
function modalRemove (el) {
  el.setAttribute('style', 'animation: removeBlock .5s forwards')
  setTimeout(() => el.remove(), 500);
}

export function modalWindow (text) {
  const modal = createEl('div', 'modal')
  const modalContainer = createEl('div', 'modal__container')
  const modalTitleBlock = createEl('div', 'modal__title-block')
  const modalTitle = createEl('h3', 'modal__title')
  const btnClose = createBtn('modal__btn', 'modal__btn_close', '&#10006')
  const modalContent = createEl('div', 'modal__content')
  const modalText = createEl('p', 'modal__text')
  const btnSuccess = createBtn('modal__btn','btn', 'ОК')

  modalTitle.textContent = 'Игра окончена';
  modalText.textContent = text

  document.body.append(modal)
  modal.append(modalContainer)
  modalContainer.append(btnClose, modalTitleBlock, modalTitle, modalContent, btnSuccess)
  modalTitleBlock.append(modalTitle)
  modalContent.append(modalText)

  // Закрытие модального окна
  btnSuccess.addEventListener('click', () => {
    modalRemove(modal)
  })

  // Закрыть на крестик
  btnClose.addEventListener('click', () => {
    modalRemove(modal)
  })
  // Закрыть на кнопкой esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalRemove(modal)
    }
  })
  // Закрыть на кликом вне модального окна
  document.querySelector('.modal .modal__container').addEventListener('click', (e) => {
    e._isClickWithInModal  = true;
  })
  modal.addEventListener('click', e => {
    if (e._isClickWithInModal) return;
    modalRemove(e.currentTarget)
  })

  return  modal

}
