import { quizQuestions } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelector(".questions") as HTMLElement | null;
  const showScore = document.querySelector(".showScore") as HTMLElement | null;
  const boxes = document.querySelectorAll(
    ".box button"
  ) as NodeListOf<HTMLButtonElement>;

  let q: (typeof quizQuestions)[0] | undefined;
  function randomQuestionsAndAnswers() {
    const randomNum = Math.floor(Math.random() * quizQuestions.length);
    q = quizQuestions[randomNum]; // Update the 'q' variable

    if (questions && q?.question) questions.textContent = q.question;

    if (boxes && q?.answers) {
      boxes.forEach((btn, index) => {
        // Ensure index is within bounds of answers array
        btn.textContent = q!.answers[index] as string;
      });
    }
  }
  randomQuestionsAndAnswers();

  boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === q?.valid_choice) {
        alert("This is correct!!");
      } else {
        alert("You are wrong!");
      }
      randomQuestionsAndAnswers();
    });
  });
});
