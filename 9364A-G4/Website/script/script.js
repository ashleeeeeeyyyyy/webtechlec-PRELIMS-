function onSubmit() {
    var score = 0;
    var answer = ['b', 'b', 'c', 'a', 'a', 'e', 'g', 'h', 'f', 'c', 'a', 'b', 'd', 'a', 'c', 'b', 'b', 'd', 'e', 'c', 'a', 'a', 'a', 'b', 'b'];
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;
    var q11 = document.quiz.q11.value;
    var q12 = document.quiz.q12.value;
    var q13 = document.quiz.q13.value;
    var q14 = document.quiz.q14.value;
    var q15 = document.quiz.q15.value;
    var q16 = document.quiz.q16.value;
    var q17 = document.quiz.q17.value;
    var q18 = document.quiz.q18.value;
    var q19 = document.quiz.q19.value;
    var q20 = document.quiz.q20.value;
    var q21 = document.quiz.q21.value;
    var q22 = document.quiz.q22.value;
    var q23 = document.quiz.q23.value;
    var q24 = document.quiz.q24.value;
    var q25 = document.quiz.q25.value;
    for (var i = 1; i <= answer.length; i++) {
        if (eval('q' + i) == answer[i - 1]) {
            score++;
        }
    }
    var results = document.getElementById("results");
    results.innerHTML = "Score: " + score + "/" + answer.length;
    event.preventDefault();
}
