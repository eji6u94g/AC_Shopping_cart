const previousBtn = document.getElementById('previous-btn')
// const previousBtnMobile = document.querySelector('#previous-btn--mobile')
const nextBtn = document.getElementById('next-btn')
// const nextBtnMobile = document.querySelector('#next-btn--mobile')
const btnControl = document.querySelector('.main__customer__button')
const btnControlForMobile = document.querySelector('#main_customer_button--mobile')
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
  const currentStepTitle = steps[step].querySelectorAll('span')[1]

  if (event.target.matches('#next-btn')) {
    const nextStep = steps[step + 1].querySelector('span')
    const nextStepTitle = steps[step + 1].querySelectorAll('span')[1]
    currentStep.classList.remove('active')
    currentStep.classList.add('checked')
    nextStep.classList.add('active')
    nextStepTitle.classList.add('title_active')
    formparts[step].classList.toggle('d-none')
    formparts[step + 1].classList.toggle('d-none')
    step += 1
  }
  if (event.target.matches('#previous-btn')) {
    const previousStep = steps[step - 1].querySelector('span')
    const previousStepTitle = steps[step - 1].querySelectorAll('span')[1]
    currentStep.classList.remove('active')
    currentStepTitle.classList.remove('title_active')
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
    // previousBtn.querySelector('span').classList.remove('d-none')
    previousBtn.innerHTML = '<span>&#8592;</span>上一步'
    btnControlForMobile.querySelector('#previous-btn').classList.remove('d-none')
    btnControlForMobile.querySelector('#previous-btn').innerHTML = '<span>&#8592;</span>上一步'
    btnControlForMobile.querySelector('#next-btn').style.width = "156px"
    // previousBtnMobile.classList.remove('d-none')
  } else {
    // previousBtn.classList.add('d-none')
    // previousBtn.querySelector('span').classList.add('d-none')
    previousBtn.innerText = ''
    btnControlForMobile.querySelector('#previous-btn').classList.add('d-none')
    btnControlForMobile.querySelector('#previous-btn').innerText = ''
    btnControlForMobile.querySelector('#next-btn').style.width = "100%"
    // previousBtnMobile.classList.add('d-none')
  }
  if (step === 2) {
    nextBtn.innerText = '確認下單'
    btnControlForMobile.querySelector('#next-btn').innerText = '確認下單'
    // nextBtnMobile.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步<span>&#8594;</span>'
    btnControlForMobile.querySelector('#next-btn').innerHTML = '下一步<span>&#8594;</span>'
    // nextBtnMobile.innerHTML = '下一步<span>&#8594;</span>'
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



