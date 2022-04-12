
   /* var q1 = function(){
        console.log('1. what ur name');
        console.log(' 1. Aman');
        console.log(' 2. john');
        var a1 = parseInt(prompt('Please select the correct answer.'));
        if(a1 === 1){
            console.log('Correct!');
        }else{
            console.log('Incorrect');
        }
    }
    var q2 = function(){
        console.log('1. what ur hobby');
        console.log(' 1. reading');
        console.log(' 2. playing');
        var a1 = parseInt(prompt('Please select the correct answer.'));
        if(a1 === 2){
            console.log('Correct!');
        }else{
            console.log('Incorrect');
        }
    }
    var q3 = function(){
        console.log('1. what ur fav. color');
        console.log(' 1. Black');
        console.log(' 2. Red');
        var a1 = parseInt(prompt('Please select the correct answer.'));
        if(a1 === 1){
            console.log('Correct!');
        }else{
            console.log('Incorrect');
        }
    }

    var Q = {q1, q2, q3};

    var r = Math.floor(Math.random()*3);

    if(r === 0){
        q1();
    }
    else if(r === 2){
        q2();
    }
    else{
        q3();
    }
    */


/*console.log('what ur name');
console.log('1. Aman')
console.log('2. Adi')
var x = parseInt(prompt());
 if(x === 1){
     console.log('correct');
 }
 else{
     console.log('incorrect');
 }*/

var sc = 0;

 function Question (question, answers, correct){
     this.question = question;
     this.answers = answers;
     this.correct = correct;
 }

 
Question.prototype.display = function(){
    console.log(this.question);
    for(var r =0; r < this.answers.length; r++){
        console.log(r + ': ' + this.answers[r]);
    }

}

Question.prototype.check = function(x){
    if(x === this.correct){
        console.log('Correct answer');
    }
    else{
        console.log('Incorrect answer');
    }
}

Question.prototype.score = function(x){
    if(x === this.correct){
        sc+= 1;
        console.log('your score: ' + sc );
    }
    else{
        console.log('your score: ' + sc);
    }

    console.log('----------------------------------------------');
}



 var q1 = new Question('What\'s ur name', ['Ram', 'Shyam'], 1);
 var q2 = new Question('What\'s ur hobby', ['playing', 'reading'], 0);
 var q3 = new Question('What\'s ur rollno.', [3, 4], 1);

 var questions = [q1, q2, q3];


var ran = Math.floor(Math.random()*questions.length);
questions[ran].display();

var a = prompt('Please select the correct answer. ');
questions[ran].check(parseInt(a));
questions[ran].score(parseInt(a));

while(a !== 'exit'){
var ran = Math.floor(Math.random()*questions.length);
questions[ran].display();

var a = (prompt('Please select the correct answer. '));
questions[ran].check(parseInt(a));

questions[ran].score(parseInt(a));

}



