//this is a 5x5 array containing the question at the first index and the answers at the following indices 
//ie [0][0] = question
//[0][1] = first answer of first question
//questions taken from various ase practice test questions
//may use this in real life
var quizQuestions = [
    {
        question: 'After performing a cylinder pressure test on a four cylinder engine, the #1 cylinder is 30 psi below specifications. '+
                    'All the other cylinders have passed. The pressure in the #1 cylinder increased after injecting engine oil. '+
                    'Technician A says excessive carbon buildup on the piston head has caused these test results. '+
                    'Technician B says these results indicate a faulty intake or exhaust valve. Who is correct?', 
        answer: 3, //use the index here for the correct option in the array
        options: [
            'Technician A',
            'Technician B', 
            'Both Technician A and B',
            'Neither Technician A or B'
        ]
    },
    {
        question: 'A vehicle with a vacuum brake booster has a hard pedal with little stopping power.'+
                    'Technician A says a kink in the check valve\'s hose will result in this condition. '+
                    'Technician B says a vacuum booster needs at least 12 Hg of vacuum to operate properly. Who is correct?',
        answer: 0,
        options: [
            'Technician A',
            'Technician B',
            'Both Technician A and B',
            'Neither Technician A or B'
        ]
    },
    {
        question: 'A vehicle has a low spongy brake pedal. Which of these is LEAST likely to result in this condition?',
        answer: 2,
        options: [
            'Loose wheel bearing',
            'Contaminated brake fluid',
            'Worn brake pads',
            'Air in the hydraulic system'
        ]
    },
    {
        question: 'A vehicle\'s air conditioner blower motor will only work if the selector is in the high position. '+
            'Technician A says to check the blower motor resistor. Technician B says this is most likely a loose ground connection. '+
            'Who is correct?',
        answer: 1,
        options: [
            'Technician A',
            'Technician B',
            'Both Technician A and B',
            'Neither Technician A or B'
        ]
    },
    {
        question: 'A pedal mounted brake switch is being tested with a voltmeter. '+
            'The pedal is depressed, and there is power at the switch, but no power coming out. '+
            'Technician A says with the brake pedal depressed, there should be power present at both ends of the brake switch. '+
            'Technician B says this condition indicates that there is an open in this brake switch. Who is correct?',
        answer: 2,
        options: [
            'Technician A',
            'Technician B',
            'Both Technician A and B',
            'Neither Technician A or B'
        ]
    }
]

var quizManager = {
    questionNumber: 0,
    numberOfQuestions: quizQuestions.length,
    answeredCorrectly: 0
}

//this object tracks the number of questions the user has answered and how answered correctly
// var userSubmission = {
//     answerKey: 0,
//     questionCount: function(answerKey){
//         return answerKey + 1;
//     },
//     answeredCorrectly: 0
// }

//creates the html with the questions and answers, returns the template
function htmlTemplate(quizQuestions, questionNumber){
    //  var questionNumber = userSubmission.answerKey;

    //if(questionNumber < quizQuestions.questions.length){
        var html = '<p class="js-added-element">'+quizQuestions[questionNumber].question+'</p>' +
                    '<ol class="js-answer-list js-added-element">';
        //                 '<a class="js-answer" href="#">';
                         
         var html2 = quizQuestions[questionNumber].options.map(function(item){
                      return '<a class="js-answer" href="#">' +
                                    '<li>'+item+'</li>'+ 
                                '</a>';
                    
                    // console.log(item);
                    // console.log(quizQuestions[questionNumber].options[0]);

        // quizQuestions[questionNumber].options.forEach(function(item){
            
        //     //console.log(quizQuestions[questionNumber].options[item]);
        })
        html += html2.join('')          
        html += '</ol>';  

        // console.log(html);
        
                        // '<a class="js-answer" href="#">'+
                        //     '<li>'+quizQuestions+'</li>'+
                        // '</a>'+
                        // '<a class="js-answer" href="#">'+
                        //     '<li>'+quizQuestions+'</li>'+
                        // '</a>'+
                        // '<a class="js-answer" href="#">'+
                        //     '<li>'+quizQuestions+'</li>'+
                        // '</a>'+
                    
    //}
        $('.container').html(html);
}

// show quiz score at the end
function showQuizScore(quizManager){
    // var count = userSubmission.answerKey;

    var html = '<h3>You recieved a ' + quizManager.answeredCorrectly + ' out of ' + quizManager.numberOfQuestions + '</h3>';
    console.log(html);
    $('.container').html(html);
}

// function searchQuizQuestions(quizQuestions){
//     var rendering = 
// }

// renders html to the page, but first removes any existing html
// function renderHtmlQuestionAndAnswer(quizQuestions, userSubmission){



//     var renderedArray = quizQuestions.map

//         // var html = htmlTemplate(quizQuestions, userSubmission);
//         // $('.js-added-element').remove();
//         // $('.container').append(html);

//         // if(userSubmission.answerKey === correctAnswers.answers.length){
//         //     // userSubmission.questionCount;
//         //     updateUiCounters(userSubmission);
//         //     showQuizScore(userSubmission);
//         // }else{
//         //     updateUiCounters(userSubmission);
//         // }
        
//         // showQuizScore(userSubmission);
        
// }

// determines if the user entered the correct answer by comparing two strings
function determineIfCorrect(quizQuestions, user){
    quizQuestionArray =    quizQuestions[quizManager.questionNumber]; 
    var comparsionString = quizQuestionArray.options[quizQuestionArray.answer];
// console.log(user + " or " + correctAnswers.answers[userSubmission.questionCount]);
// console.log(user + " user");
// console.log(comparsionString);
    if(user === comparsionString){
        console.log("correct");
        quizManager.answeredCorrectly++;
    } else {
        console.log("incorrect");
    }
    quizManager.questionNumber++;
}

//updates the ui for question counter and answered correctly counter
// function updateUiCounters(userSubmission){
//     var count = userSubmission.questionCount(userSubmission.answerKey);
//     //added to decrement the count variable by one at the end of the quiz so the top left counter
//     //is accurate during the end results rendering
//     if(count > quizQuestions.questions.length){
//         count = quizQuestions.questions.length;
//         console.log(count);
//     }
//     //updates the question numbers found in top left corner
//     $('.current-question-box').find('h4').text(count + ' of ' + quizQuestions.questions.length);
//     //updates the number answered correctly vs total questions answered
//     $('.percent-correct-box').find('h4').text(userSubmission.answeredCorrectly + ' of '+ userSubmission.answerKey);
// }    

//page load and listeners
$(function(){
    htmlTemplate(quizQuestions, quizManager.questionNumber);
    // // userSubmission.questionCount = 0;
    // createHtmlQuestionAndAnswer(quizQuestions, userSubmission);

    //attach listener to container for event delagation
    $('.container').on('click', 'li', function(e){
        var user = $(this).text();
        determineIfCorrect(quizQuestions, user);
        if(quizManager.questionNumber < quizManager.numberOfQuestions){
            // determineIfCorrect(quizQuestions, user);
            htmlTemplate(quizQuestions, quizManager.questionNumber);
        } else {
            // determineIfCorrect(quizQuestions, user);
            showQuizScore(quizManager);
        }
        
        // console.log('event' + userSubmission.questionCount)
        // console.log($(this).text());
        // console.log($(this).index()  );
        //try to use index here 
        
        // userSubmission.answerKey++;
        // createHtmlQuestionAndAnswer(quizQuestions, userSubmission);
        // // updateUiCounters(userSubmission);
        // console.log(quizManager.questionNumber);
    });
    
})