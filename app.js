//this is a 5x5 array containing the question at the first index and the answers at the following indices 
//ie [0][0] = question
//[0][1] = first answer of first question
//questions taken from various ase practice test questions
//may use this in real life
var quizQuestions = {
    questions: [
        [
            'After performing a cylinder pressure test on a four cylinder engine, the #1 cylinder is 30 psi below specifications. '+
            'All the other cylinders have passed. The pressure in the #1 cylinder increased after injecting engine oil. '+
            'Technician A says excessive carbon buildup on the piston head has caused these test results. '+
            'Technician B says these results indicate a faulty intake or exhaust valve. Who is correct?', 
            'Technician A',
            'Technician B', 
            'Both Technician A and B',
            'Neither Technician A or B'
        ],
        [
            'A vehicle with a vacuum brake booster has a hard pedal with little stopping power.'+
            'Technician A says a kink in the check valve\'s hose will result in this condition. '+
            'Technician B says a vacuum booster needs at least 12 Hg of vacuum to operate properly. Who is correct?',
            'Technician A',
            'Technician B',
            'Both Technician A and B',
            'Neither Technician A or B'
        ],
        [
            'A vehicle has a low spongy brake pedal. Which of these is LEAST likely to result in this condition?',
            'Loose wheel bearing',
            'Contaminated brake fluid',
            'Worn brake pads',
            'Air in the hydraulic system'
        ],
        [
            'A vehicle\'s air conditioner blower motor will only work if the selector is in the high position. '+
            'Technician A says to check the blower motor resistor. Technician B says this is most likely a loose ground connection. '+
            'Who is correct?',
            'Technician A',
            'Technician B',
            'Both Technician A and B',
            'Neither Technician A or B'
        ],
        [
            'A pedal mounted brake switch is being tested with a voltmeter. '+
            'The pedal is depressed, and there is power at the switch, but no power coming out. '+
            'Technician A says with the brake pedal depressed, there should be power present at both ends of the brake switch. '+
            'Technician B says this condition indicates that there is an open in this brake switch. Who is correct?',
            'Technician A',
            'Technician B',
            'Both Technician A and B',
            'Neither Technician A or B'
        ]
    ]
}

//this object tracks the number of questions the user has answered and how answered correctly
var userSubmission = {
    questionCount: 0,
    answeredCorrectly: 0
}

//the answer key
var correctAnswers = {
    answers: [
        'Neither Technician A or B',
        'Technician A',
        'Worn brake pads',
        'Technician B',
        'Both Technician A and B'
    ]
}

//creates the html with the questions and answers, returns the template
function htmlTemplate(quizQuestions, userSubmission){
     var questionNumber = userSubmission.questionCount;

    if(userSubmission.questionCount < quizQuestions.questions.length){
        var html = '<p class="js-added-element">'+quizQuestions.questions[questionNumber][0]+'</p>'+
                    '<ol class="js-answer-list js-added-element">'+
                        '<a class="js-answer" href="#">'+
                            '<li>'+quizQuestions.questions[questionNumber][1]+'</li>'+
                        '</a>'+
                        '<a class="js-answer" href="#">'+
                            '<li>'+quizQuestions.questions[questionNumber][2]+'</li>'+
                        '</a>'+
                        '<a class="js-answer" href="#">'+
                            '<li>'+quizQuestions.questions[questionNumber][3]+'</li>'+
                        '</a>'+
                        '<a class="js-answer" href="#">'+
                            '<li>'+quizQuestions.questions[questionNumber][4]+'</li>'+
                        '</a>'+
                    '</ol>';
    }
        return html;
}

//renders html to the page, but first removes any existing html
function createHtmlQuestionAndAnswer(quizQuestions, userSubmission){
        var html = htmlTemplate(quizQuestions, userSubmission);
        $('.js-added-element').remove();
        $('.container').append(html);
}

//determines if the user entered the correct answer by comparing two strings
function determineIfCorrect(correctAnswers, userSubmission, user){
    // console.log(userSubmission.questionCount)
// console.log(user + " or " + correctAnswers.answers[userSubmission.questionCount]);
    if(user === correctAnswers.answers[userSubmission.questionCount]){
        console.log("correct");
        userSubmission.answeredCorrectly++;
    } else {
        console.log("incorrect");
    }
}

//updates the ui for question counter and answered correctly counter
function updateUiCounters(userSubmission){
    //updates the question numbers found in top left corner
    $('.current-question-box').find('h4').text((userSubmission.questionCount + 1) + ' of ' + quizQuestions.questions.length);
    //updates the number answered correctly vs total questions answered
    $('.percent-correct-box').find('h4').text(userSubmission.answeredCorrectly + ' of '+ userSubmission.questionCount);
}

//page load and listeners
$(function(){
    userSubmission.questionCount = 0;
    createHtmlQuestionAndAnswer(quizQuestions, userSubmission);
    updateUiCounters(userSubmission);

    //attach listener to container for event delagation
    $('.container').on('click', 'li', function(e){
    
        // console.log('event' + userSubmission.questionCount)
        // console.log($(this).text());
        var user = $(this).text();
        determineIfCorrect(correctAnswers, userSubmission, user);
        userSubmission.questionCount++;
        createHtmlQuestionAndAnswer(quizQuestions, userSubmission);
        updateUiCounters(userSubmission);
    });
})