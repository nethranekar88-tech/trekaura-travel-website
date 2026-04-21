const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isVisible = answer.style.display === "block";

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.style.display = "none";
    });

    answer.style.display = isVisible ? "none" : "block";
  });
});

const popup = document.getElementById("tripPopup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupPrice = document.getElementById("popupPrice");
const popupDuration = document.getElementById("popupDuration");
const popupLocation = document.getElementById("popupLocation");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".open-popup").forEach((button) => {
  button.addEventListener("click", () => {
    popupImage.src = button.dataset.image;
    popupTitle.textContent = button.dataset.title;
    popupDescription.textContent = button.dataset.description;
    popupPrice.textContent = button.dataset.price;
    popupDuration.textContent = button.dataset.duration;
    popupLocation.textContent = button.dataset.location;
    popup.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});