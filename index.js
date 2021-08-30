const previousBtn = document.getElementById('previous-btn')
const previousBtnMobile = document.querySelector('#previous-btn--1010px')
const nextBtn = document.getElementById('next-btn')
const nextBtnMobile = document.querySelector('#next-btn--1010px')
const btnControl = document.querySelector('.main__customer__button')
const btnControlForMobile = document.querySelector('#main_customer_button--1010px')
const formparts = document.querySelectorAll('.main__customer__part')
const steps = document.querySelectorAll('.main__customer__step')
const shoppingCart = document.querySelector('.main__cart')
let step = 0

////// eventListener ////////
btnControl.addEventListener('click', ControlBtnClicked)
btnControlForMobile.addEventListener('click', ControlBtnClicked)
shoppingCart.addEventListener('click', shoppingCartNumberChange)

////// function ////////
function ControlBtnClicked(event) {
  event.preventDefault()
  const currentStep = steps[step].querySelector('span')

  if (event.target.matches('#next-btn') || event.target.matches('#next-btn--1010px')) {
    const nextStep = steps[step + 1].querySelector('span')
    currentStep.classList.remove('active')
    currentStep.classList.add('checked')
    nextStep.classList.add('active')
    formparts[step].classList.toggle('d-none')
    formparts[step + 1].classList.toggle('d-none')
    step += 1
  }
  if (event.target.matches('#previous-btn') || event.target.matches('#previous-btn--1010px')) {
    const previousStep = steps[step - 1].querySelector('span')
    currentStep.classList.remove('active')
    previousStep.classList.remove('checked')
    previousStep.classList.add('active')
    formparts[step].classList.toggle('d-none')
    formparts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  controlBtnChange()
}

function controlBtnChange() {
  if (step !== 0) {
    previousBtn.classList.remove('d-none')
    previousBtnMobile.classList.remove('d-none')
  } else {
    previousBtn.classList.add('d-none')
    previousBtnMobile.classList.add('d-none')
  }
  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
    nextBtnMobile.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步<span>&#8594;</span>'
    nextBtnMobile.innerHTML = '下一步<span>&#8594;</span>'
  }
}

function shoppingCartNumberChange(event) {
  const target = event.target
  const totalPrice = document.querySelector("#total-price")
  const itemPrices = document.querySelectorAll(".item-price")

  if (target.classList.contains('minus') || target.parentElement.classList.contains('minus')) {
    if (target.classList.contains('minus')) {
      let currentNumber = parseInt(target.parentElement.querySelectorAll("span")[1].innerText)
      let currentPrice = parseInt(target.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText)
      if (currentNumber === 1) { return }
      currentPrice = currentPrice / currentNumber
      currentNumber -= 1
      target.parentElement.querySelectorAll("span")[1].innerText = currentNumber
      target.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText = currentPrice
    }
    if (target.parentElement.classList.contains('minus')) {
      let currentNumber = parseInt(target.parentElement.parentElement.querySelectorAll("span")[1].innerText)
      let currentPrice = parseInt(target.parentElement.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText)
      if (currentNumber === 1) { return }
      currentPrice = currentPrice / currentNumber
      currentNumber -= 1
      target.parentElement.parentElement.querySelectorAll("span")[1].innerText = currentNumber
      target.parentElement.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText = currentPrice
    }
  }
  if (target.classList.contains('plus') || target.parentElement.classList.contains('plus')) {
    if (target.classList.contains('plus')) {
      let currentNumber = parseInt(target.parentElement.querySelectorAll("span")[1].innerText)
      let currentPrice = parseInt(target.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText)
      currentNumber += 1
      currentPrice = currentPrice * currentNumber
      target.parentElement.querySelectorAll("span")[1].innerText = currentNumber
      target.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText = currentPrice
    }
    if (target.parentElement.classList.contains('plus')) {
      let currentNumber = parseInt(target.parentElement.parentElement.querySelectorAll("span")[1].innerText)
      let currentPrice = parseInt(target.parentElement.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText)
      currentNumber += 1
      currentPrice = currentPrice * currentNumber
      target.parentElement.parentElement.querySelectorAll("span")[1].innerText = currentNumber
      target.parentElement.parentElement.parentElement.parentElement.querySelector(".main__cart__item__price").querySelectorAll("span")[1].innerText = currentPrice
    }
  }

  totalPrice.innerText = "0"
  itemPrices.forEach((item) => {
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(item.innerText)
  })
}



