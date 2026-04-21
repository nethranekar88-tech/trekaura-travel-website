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