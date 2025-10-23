import { quizQuestions } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelector(".questions") as HTMLElement | null;
  const showScore = document.querySelector(".showScore") as HTMLElement | null;
  const boxes = document.querySelectorAll(
    ".box button"
  ) as NodeListOf<HTMLButtonElement>;

  let q: (typeof quizQuestions)[0] | undefined;
  let score: number = 0;
  let oldQuestions: string[] = [];

  function randomQuestionsAndAnswers() {
    const randomNum = Math.floor(Math.random() * quizQuestions.length);
    q = quizQuestions[randomNum]; // Update the 'q' variable

    if (questions && q?.question) {
      if (!oldQuestions.includes(q.question)) {
        questions.textContent = q.question;
        oldQuestions.push(q.question);

        if (boxes && q?.answers) {
          boxes.forEach((btn: HTMLButtonElement, index: number) => {
            // Ensure index is within bounds of answers array
            btn.textContent = q!.answers[index] as string;
          });
        }
      } else {
        randomQuestionsAndAnswers();
      }
    }
  }
  randomQuestionsAndAnswers();

  boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === q?.valid_choice) {
        alert("This is correct!!");
        score += 1;
        if (showScore) showScore.textContent = `The scores are ${score}`;
      } else {
        alert("You are wrong!");
      }
      randomQuestionsAndAnswers();
    });
  });
});
