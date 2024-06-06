let MyswiperPrices
let MyswiperTechnique
let MyswiperBrands

const swiperBrands = document.querySelector('.swiper')
const swiperPrices = document.querySelector('.prices')
const swiperTechnique = document.querySelector('.swiper-technique')

const createSwiper = (element, width) => {
  return new Swiper(element, {
    width,
    spaceBetween: 16,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
if(window.innerWidth < 769) {
MyswiperPrices = createSwiper(swiperPrices, 260)
MyswiperTechnique = createSwiper(swiperTechnique, 240)
MyswiperBrands = createSwiper(swiperBrands, 240)
}

const swiperBreakpoints = (element) => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      element.destroy(false, true)
    }
  })
}

swiperBreakpoints(MyswiperPrices)
swiperBreakpoints(MyswiperTechnique)
swiperBreakpoints(MyswiperBrands)






//Кнопка показать/скрыть..............

const btnCardsBrand = document.querySelector('.cards-more')
const cardsBrand = Array.from(document.querySelectorAll('.card-brand'))
const cardsTechnique = Array.from(document.querySelectorAll('.card-technique'))
const arrCardsBrand = cardsBrand.slice(6)
const btnCardsTechnique = document.querySelector('.cards-technique')
const arrCardsTechnique = cardsTechnique.slice(3)

function openCardsBrands() {
  arrCardsBrand.forEach((item) => {
    item.classList.toggle('hidden')
  })
  btnText()
}

function btnText() {
  if (window.innerWidth > 768) {
    arrCardsBrand.forEach((item) => {
      if (item.classList.contains('hidden')) {
        btnCardsBrand.innerHTML = 'Показать все'
        btnCardsBrand.classList.remove('cards-more--close')
        btnCardsBrand.classList.remove('btn-hide')
      } else {
        btnCardsBrand.innerHTML = 'Скрыть'
        btnCardsBrand.classList.add('cards-more--close')
        btnCardsBrand.classList.add('btn-hide')
      }
    })
  }
}

window.addEventListener('resize', () => {
  arrCardsBrand.forEach((item) => {
    if (window.innerWidth < 769) {
      item.classList.add('hidden')
      btnCardsBrand.innerHTML = 'Показать все'
      btnCardsBrand.classList.remove('cards-more--close')
    }
  })
})

function openCardsTechnique() {
  arrCardsTechnique.forEach((item) => {
    item.classList.toggle('card-technique--hidden')
  })
  btnTextTechnique()
}

function btnTextTechnique() {
  if (window.innerWidth > 768) {
    arrCardsTechnique.forEach((item) => {
      if (item.classList.contains('card-technique--hidden')) {
        btnCardsTechnique.innerHTML = 'Показать все'
        btnCardsTechnique.classList.remove('cards-more--close')
        btnCardsTechnique.classList.remove('btn-hide')
      } else {
        btnCardsTechnique.innerHTML = 'Скрыть'
        btnCardsTechnique.classList.add('cards-more--close')
        btnCardsTechnique.classList.add('btn-hide')
      }
    })
  }
}

window.addEventListener('resize', () => {
  arrCardsTechnique.forEach((item) => {
    if (window.innerWidth < 769) {
      item.classList.add('card-technique--hidden')
      btnCardsTechnique.innerHTML = 'Показать все'
      btnCardsTechnique.classList.remove('cards-more--close')
    }
  })
})

btnCardsTechnique.addEventListener('click', openCardsTechnique)

btnCardsBrand.addEventListener('click', openCardsBrands)
