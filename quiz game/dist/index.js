import { quizQuestions } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelector(".questions");
    const showScore = document.querySelector(".showScore");
    const boxes = document.querySelectorAll(".box button");
    let q;
    let score = 0;
    let oldQuestions = [];
    function randomQuestionsAndAnswers() {
        const randomNum = Math.floor(Math.random() * quizQuestions.length);
        q = quizQuestions[randomNum]; // Update the 'q' variable
        if (questions && (q === null || q === void 0 ? void 0 : q.question)) {
            if (!oldQuestions.includes(q.question)) {
                questions.textContent = q.question;
                oldQuestions.push(q.question);
                if (boxes && (q === null || q === void 0 ? void 0 : q.answers)) {
                    boxes.forEach((btn, index) => {
                        // Ensure index is within bounds of answers array
                        btn.textContent = q.answers[index];
                    });
                }
            }
            else {
                randomQuestionsAndAnswers();
            }
        }
    }
    randomQuestionsAndAnswers();
    boxes.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.textContent === (q === null || q === void 0 ? void 0 : q.valid_choice)) {
                alert("This is correct!!");
                score += 1;
                if (showScore)
                    showScore.textContent = `The scores are ${score}`;
            }
            else {
                alert("You are wrong!");
            }
            randomQuestionsAndAnswers();
        });
    });
});
//# sourceMappingURL=index.js.map