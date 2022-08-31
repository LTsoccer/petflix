const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach( button => {
    button.addEventListener('click', e => {
        answerDiv = e.target.parentElement.nextElementSibling;
        answerDiv.classList.toggle("closed");

        if (!("closed" in answerDiv.classList)) {
            answerDiv.previousElementSibling.classList.toggle("select");
            console.log(answerDiv.previousElementSibling.firstChild.firstChild.nextElementSibling);
            answerDiv.previousElementSibling.firstChild.firstChild.nextElementSibling.classList.toggle("plus");
        }
    });
});
