import { quizQuestions } from "./data.js"; // TS file in same folder

const questions =
  typeof document !== "undefined"
    ? (document.querySelector(".questions") as HTMLElement | null)
    : null;

const boxes = document.querySelectorAll(
  ".box button"
) as NodeListOf<HTMLButtonElement>;

const showScore =
  typeof document !== "undefined"
    ? (document.querySelector(".showScore") as HTMLElement | null)
    : null;

document.addEventListener("DOMContentLoaded", () => {
  quizQuestions.forEach((q, index) => {
    if (questions) questions.textContent = q.question;

    q.answers.forEach((answer, i) => {
      if (boxes[i]) boxes[i].textContent = answer;
    });
  });
});

console.log("Everything alright");

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn?.textContent == "answer 1") {
      console.log("This is correct!!");
    } else {
      console.log("You are fucking wrong!");
    }
  });
});
