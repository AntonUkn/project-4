const btnBurger = document.querySelector('.btn--icon-burger')
const btnClose = document.querySelector('.btn--icon-hide')
const popUp = document.getElementById('pop-up')
const blur = document.getElementById('blur')


const btnCall = document.querySelectorAll('.btn--icon-phone')
const modalFeedback = document.getElementById('feedback')
const modalBtnClose = document.querySelector('.modal-feedback__btn-hide')

const btnMessage = document.querySelectorAll('.btn--icon-chat')
const modalCall = document.getElementById('modal-call')
const modalCallBtnClose = document.querySelector('.modal-call__btn-hide')


function openPopUp() {
  popUp.classList.remove('pop-up--hidden') 
   blur.classList.add('blur')
   modalFeedback.classList.add('modal-feedback--hidden')
   modalCall.classList.add('modal-feedback--hidden')
}

function closePopUp() {
  popUp.classList.add('pop-up--hidden');
  blur.classList.remove('blur')
  
  
}


btnBurger.addEventListener('click', openPopUp)
btnClose.addEventListener('click', closePopUp)
document.addEventListener('keydown', function (event) {
  
    if (event.code === 'Escape') {
      popUp.classList.add('pop-up--hidden')
      modalFeedback.classList.add('modal-feedback--hidden')
      modalCall.classList.add('modal-feedback--hidden')
      popUp.style.opacity = 1;

      blur.classList.remove('blur')
    }
 
})

function openModalCall() {
  modalCall.classList.remove('modal-feedback--hidden')
  popUp.classList.add('pop-up--hidden')
  blur.classList.add('blur')
  modalFeedback.classList.add('modal-feedback--hidden')
  if (innerWidth > 1119) {
    popUp.style.opacity = 0.1
  }
}

function closeModalCall() {
  modalCall.classList.add('modal-feedback--hidden')
  blur.classList.remove('blur')
  if (innerWidth > 1119) {
    popUp.style.opacity = 1
  }
}

function openModalFeedback() {
  modalFeedback.classList.remove('modal-feedback--hidden')
  popUp.classList.add('pop-up--hidden')
  blur.classList.add('blur')
  modalCall.classList.add('modal-feedback--hidden')
  if (innerWidth > 1119) {
    popUp.style.opacity = 0.1
  }
}

function closeModalFeedback() {
  modalFeedback.classList.add('modal-feedback--hidden')
  blur.classList.remove('blur')
  if (innerWidth > 1119) {
    popUp.style.opacity = 1
  }
}

btnMessage[0].addEventListener('click', openModalCall)
btnMessage[1].addEventListener('click', openModalCall)
modalCallBtnClose.addEventListener('click', closeModalCall)

btnCall[0].addEventListener('click', openModalFeedback)
btnCall[1].addEventListener('click', openModalFeedback)
modalBtnClose.addEventListener('click', closeModalFeedback)







