function submitAnswers(){
    var total = 5;
    var score = 0;

    //get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    //validate that all questions have been answered
    for(i =1; i<=total ; i++){
        if(eval('q'+i) == null || eval('q'+i) ==''){
            alert('You missed Question '+i);
            return false;
        }
    }

    //set correct answers
    var answers = ['b','a','c','b','a'];

    //Check answers

    for(i =1; i<=total ; i++){
        if(eval('q'+i) == answers[i-1]){
            score++;
        }
    }

    //Display Results

    var results = document.getElementById('results');
    results.innerHTML = '<h3>You score <span>'+score+'</span> out of <span>'+total+'</span></h3>'
    alert("Total score is : "+score+" out of "+total+"!");

    return false;
}