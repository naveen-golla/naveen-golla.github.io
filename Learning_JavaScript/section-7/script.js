'use strict';


// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function(message) {
//     document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);


//     if (!guess) {
//         displayMessage(' No number!');

//     } else if (guess === secretNumber) {

//         displayMessage('🎉 Correct Number!');
//         document.querySelector('.number').textContent = secretNumber;

//         document.querySelector('body').style.backgroundColor = '#60b347';
//         document.querySelector('.number').style.width = '30rem';

//         if (score > highscore) {
//             highscore = score;
//             document.querySelector('.highscore').textContent = highscore;
//         }

//         // When guess is wrong
//     } else if (guess !== secretNumber) {
//         if (score > 1) {

//             displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {

//             displayMessage('💥 You lost the game!');
//             document.querySelector('.score').textContent = 0;
//         }
//     }


// });

// document.querySelector('.again').addEventListener('click', function() {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     displayMessage('Start guessing...');
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';

//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').style.width = '15rem';
// });


$(function() {
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    let score = 20;
    let highscore = 0;
    const displayMessage = function(message) {
        $('.message').text(message);
    };

    $('.check').click(function() {
        const guess = Number($('.guess').val());
        console.log(guess, typeof guess)

        if (!guess) {
            displayMessage('No number!');
        } else if (guess === secretNumber) {
            displayMessage('Correct Number!');
            $('.number').text(secretNumber);

            $('body').css('background-color', '#e67e22');
            $('.number').css('width', '30rem');
            $('.check').css({
                'background-color': 'red',
                'color': 'blue'
            })

            if (score > highscore) {
                highscore = score;
                $('.highscore').text(highscore);
            };
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too High!' : ' Too Low!');
                score--;
                $('.score').text(score);
            } else {
                displayMessage('You lost thegame!')
                $('.score').text('0');
            };
        };
    });


    $('.again').click(function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start guessing...');
        $('.score').text(score);
        $('.number').text('?');
        $('.guess').val('1');
        $('body').css('background-color', '#222');
        $('.number').css('width', '15rem')

    });
});