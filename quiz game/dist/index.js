import { quizQuestions } from "./data.js"; // TS file in same folder
const questions = typeof document !== "undefined"
    ? document.querySelector(".questions")
    : null;
const boxes = document.querySelectorAll(".box button");
const showScore = typeof document !== "undefined"
    ? document.querySelector(".showScore")
    : null;
document.addEventListener("DOMContentLoaded", () => {
    quizQuestions.forEach((q, index) => {
        if (questions)
            questions.textContent = q.question;
        q.answers.forEach((answer, i) => {
            if (boxes[i])
                boxes[i].textContent = answer;
        });
    });
});
console.log("Everything alright");
boxes.forEach((btn) => {
    btn.addEventListener("click", () => {
        if ((btn === null || btn === void 0 ? void 0 : btn.textContent) == "answer 1") {
            console.log("This is correct!!");
        }
        else {
            console.log("You are fucking wrong!");
        }
    });
});
//# sourceMappingURL=index.js.map