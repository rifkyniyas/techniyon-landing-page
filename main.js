//FAQ Toggle 
const faqButtons = document.getElementsByClassName("faq_button");

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener("click", (event) => {
    const plusIcon = event.target.children[0]
    const minusIcon = event.target.children[1]
    const faqAnswer = event.target.nextElementSibling;
    if (faqAnswer.style.display === "block") {
      plusIcon.style.display = "block"
      minusIcon.style.display = "none"
      return faqAnswer.style.display = "none"
    }
    plusIcon.style.display = "none"
    minusIcon.style.display = "block"
    faqAnswer.style.display = "block"
  });
}

//Dropdown Toggle
document.querySelector('#dropdownBtn').addEventListener('click', () => {
  document.querySelector('#dropdownContent').classList.toggle('hidden')
})

//Toggle Navbar
const navbar = document.querySelector('#navbar')
document.querySelector('#toggleNavBtn').addEventListener('click', () => {
  console.log('here')
  const isNavHidden  = navbar.classList.contains('hidden')
  navbar.classList.toggle('hidden')
  // if (isNavHidden) return toggleBtn.src = "./images/icon-close.svg"
  // //Else
  // return toggleBtn.src = "./images/icon-hamburger.svg"
})
console.log(document.querySelector('#toggleNavBtn'))
