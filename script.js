'use strict';

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function start() {
  let doGame = true;
  let count = 10;

  doGame = confirm('Угадай число от 1 до 100. Сыграем?');
  if (!doGame) {
    alert('Может быть в другой раз...');
    return;
  }

  let question = Math.ceil(Math.random() * 100);
  // console.log(question);
  
  let game = (moreGame)=> {
    // console.log(moreGame);

    const getNumber = (number)=> {
      if (count == 10) return prompt('Введи число от 1 до 100');
      if (!isNumber(number) || +number <= 0 || +number > 100) return prompt('Введите число от 1 до 100, осталось попыток ' + count);
      if (question > +number) return prompt('Загаданное число больше, осталось попыток ' + count);
      return prompt('Загаданное число меньше, осталось попыток ' + count);
    }

    let play = (number)=> {
      if (!doGame) return;
      let num = getNumber(number);
      // console.log(num);
      if (isNumber(num)) {
        if (question == num) {
          doGame = false;
          let letsGo = confirm('Поздравляю, Вы угадали!!! Хотите сыграть ещё?');
          if (letsGo) {
            start();
          } else {
            moreGame = false;
          }
        } else if (isNumber(num) && num > 0 && num <= 100) {
          count--;
        }
      }
      if (num === null) doGame = false;
      play(num);
    };
    play(0);

    if (!doGame && !moreGame) {
      alert('Игра окончена');
      return;
    }    
    if (count <= 0) {
      let letsGo = confirm('Попытки закончились ,хотите сыграть ещё?');
      if (letsGo) {
        start();
        return;
      } else {
        return;
      }
    }

    game(true);
  };

  game(true);
};

start();