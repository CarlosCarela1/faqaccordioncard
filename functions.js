const question = document.getElementById("question");
const question_1 = document.getElementById("question_1");
const question_2_1 = document.getElementById("question_2_1");
const question_2 = document.getElementById("question_2");


question.addEventListener("click", ()=>{
    question_1.classList.toggle("add");
    question.classList.toggle("font-weight")
})

question_2.addEventListener("click", ()=>{
    question_2_1.classList.toggle("add");
})
