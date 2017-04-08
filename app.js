//this is a 2x2 array containing the question at the first index and the answers at the following indices 
//ie [0][0] = question
//[0][1] = first answer of first question
//questions taken from various ase pratice test questions
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

// var answerKey = {
//     answer = [
//         [

//         ]
//     ]
// }

function createHtmlQuestionAndAnswer(quizQuestions){
    var html = '<p class="js-question">'+quizQuestions.questions[0][0]+'</p>'+
                '<ol>'+
                    '<a class="js-answer" href="#">'+
                        '<li>'+quizQuestions.questions[0][1]+'</li>'+
                    '</a>'+
                    '<a class="js-answer" href="#">'+
                        '<li>'+quizQuestions.questions[0][2]+'</li>'+
                    '</a>'+
                    '<a class="js-answer" href="#">'+
                        '<li>'+quizQuestions.questions[0][3]+'</li>'+
                    '</a>'+
                    '<a class="js-answer" href="#">'+
                        '<li>'+quizQuestions.questions[0][4]+'</li>'+
                    '</a>'+
                '</ol>';
    $('.js-question').append(html);
    console.log(quizQuestions.questions[0][2]);
}

// alert("linked");
// alert(quizQuestions.questions[0][0]);

$(function(){
    createHtmlQuestionAndAnswer(quizQuestions);
   
})