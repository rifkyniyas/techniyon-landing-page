console.log("SCRIPT LOADED SUCCESSFULLY")

const faqButtons = document.getElementsByClassName("faq_button");

for (let i = 0; i < faqButtons.length; i++) {
  faqButtons[i].addEventListener("click", (event) => {
    event.target.classList.toggle("active");
    const faqAnswer = event.target.nextElementSibling;
    if (faqAnswer.style.display === "block") return faqAnswer.style.display = "none";
    faqAnswer.style.display = "block";
  });
}