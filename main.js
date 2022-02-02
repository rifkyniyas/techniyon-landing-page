console.log("SCRIPT LOADED SUCCESSFULLY")

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