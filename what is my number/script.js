'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number :-)';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secretNum);

//////////////////////////////////////////////////////

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  console.log(secretNum);
  secretNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#556B2F';
  document.querySelector('.message').textContent =
    'Start guessing... what is my Number🤔';
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚨Not a Number🚨';
    displayMessage('🚨Not a Number🚨');

    //player wins
  } else if (guess === secretNum) {
    // document.querySelector('.message').textContent = '🔥!Correct Number!🌈';
    displayMessage('🔥!Correct Number!🌈');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '200rem';
    document.querySelector('.number').textContent = `🎉${secretNum}🎉`;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNum ? 'Your Number is to high 😛' : 'Too low 😛';
      displayMessage(
        guess > secretNum ? 'Your Number is to high 😛' : 'Too low 😛'
      );
      score--;
      document.querySelector('.score').textContent = score;
      //verloren
    } else {
      // document.querySelector('.message').textContent = 'Verloren 🎃';
      displayMessage('Verloren 🎃');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF6347';
      document.querySelector('.number').textContent = secretNum;
    }
  }
});

//   } else if (guess > secretNum) {
//     //guess too high
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         'Your Number is to high 😛';
//       score--;
//       document.querySelector('.score').textContent = score;
//       //verloren
//     } else {
//       document.querySelector('.message').textContent = 'Verloren 🎃';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = '#FF6347';
//       document.querySelector('.number').textContent = secretNum;
//     }
//   } else if (guess < secretNum) {
//     //guess too low
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low 😛';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       //verloren
//       document.querySelector('.message').textContent = 'Verloren 🎃';
//       document.querySelector('body').style.backgroundColor = '#FF6347';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.number').textContent = secretNum;
//     }
//   }
// });
