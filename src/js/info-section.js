const btnMoreText = document.querySelector('.info-section__btn');
const infoText = Array.from(document.querySelectorAll('.info-section__text-elem'));
const infoDesktop = document.querySelector('.info-section__text-desktop')
const infoSection = document.querySelector('.info-section');
console.log(infoText)
console.log(btnMoreText)
console.log(infoDesktop)

function openText() {
    infoText.forEach(item => {
        item.classList.toggle('info-section__hidden') 
     })
     infoDesktop.classList.toggle('info-section__desktop-hidden')
     btnText()
     
}



function btnText() {
    infoText.forEach((item) => {
        if (item.classList.contains("info-section__hidden")) {
          btnMoreText.innerHTML = "Показать все";
         
        } else {
            btnMoreText.innerHTML = "Скрыть";
          
        }
      });
}

btnMoreText.addEventListener('click', openText)