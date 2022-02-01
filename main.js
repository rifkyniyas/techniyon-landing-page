console.log("SCRIPT LOADED SUCCESSFULLY")

const faqButtons = document.getElementsByClassName("faq_button");

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener("click", (this) => {
    this.classList.toggle("active");
    const faqAnswer = this.nextElementSibling;
    if (faqAnswer.style.display === "block") return faqAnswer.style.display = "none";
    faqAnswer.style.display = "block";
  });
}