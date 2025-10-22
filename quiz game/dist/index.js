import { quizQuestions } from "./data.js";
document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelector(".questions");
    const showScore = document.querySelector(".showScore");
    const boxes = document.querySelectorAll(".box button");
    let q;
    function randomQuestionsAndAnswers() {
        const randomNum = Math.floor(Math.random() * quizQuestions.length);
        q = quizQuestions[randomNum]; // Update the 'q' variable
        if (questions && (q === null || q === void 0 ? void 0 : q.question))
            questions.textContent = q.question;
        if (boxes && (q === null || q === void 0 ? void 0 : q.answers)) {
            boxes.forEach((btn, index) => {
                // Ensure index is within bounds of answers array
                btn.textContent = q.answers[index];
            });
        }
    }
    randomQuestionsAndAnswers();
    boxes.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Use the *current* 'q' to check the answer
            if (btn.textContent === (q === null || q === void 0 ? void 0 : q.valid_choice)) {
                alert("This is correct!!");
            }
            else {
                alert("You are wrong!");
            }
            // Run function to load the NEXT question after checking
            randomQuestionsAndAnswers();
        });
    });
});
//# sourceMappingURL=index.js.map