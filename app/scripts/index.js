var jQuery = require('jquery');
var _ = require('underscore');

(function($){
  "use strict";


  $('.submit').click(function(event){
    event.preventDefault();

    var RoverOneInit = $('.rov1-coords').val().split(', ');
    RoverOneInit[0] = Number(RoverOneInit[0]);
    RoverOneInit[1] = Number(RoverOneInit[1]);
    var RoverOneMovement = $('.rov1-move').val().split('');


    var RoverTwoInit = $('.rov2-coords').val().split(', ');
    RoverTwoInit[0] = Number(RoverTwoInit[0]);
    RoverTwoInit[1] = Number(RoverTwoInit[1]);
    var RoverTwoMovement = $('.rov2-move').val().split('');

    var Plateau = $('.plateau-coords').val().split(', ');

    var LongestArrayLength;

    if (RoverOneMovement.length >= RoverTwoMovement.length) {
      LongestArrayLength = RoverOneMovement.length;
    }else {
      LongestArrayLength = RoverTwoMovement.length;
    }


    var moveRovers = function(){

      for (var i = 0; i < LongestArrayLength; i++) {

        if (RoverOneMovement[i] == 'L') {
          if (RoverOneInit[2] == 'N') {
            RoverOneInit[2] = 'W';
          }else if (RoverOneInit[2] == 'E') {
             RoverOneInit[2] = 'N';

          }else if (RoverOneInit[2] == 'S') {
             RoverOneInit[2] = 'E';

          }else if (RoverOneInit[2] == 'W') {
             RoverOneInit[2] = 'S';

          }

        }
        else if (RoverOneMovement[i] == 'R') {

          if (RoverOneInit[2] == 'N') {
             RoverOneInit[2] = 'E';

          }else if (RoverOneInit[2] == 'E') {
            return RoverOneInit[2] = 'S';

          }else if (RoverOneInit[2] === 'S') {
             RoverOneInit[2] = 'W';

          }else if (RoverOneInit[2] == 'W') {
             RoverOneInit[2] = 'N';

          }

        }

        else if (RoverOneMovement[i] == 'M') {

          if ((RoverOneInit[0] > Plateau[0]) || (RoverOneInit[1] > Plateau[1])) {
             console.log("Rover 1 fell off the plateau!");
          }

          if (RoverOneInit[2] == 'N') {
            RoverOneInit[1] += 1;

            if (RoverOneInit[1] == RoverTwoInit[1]) {
              console.log('The rovers almost crashed! Moving Rover 1 back...');
               RoverOneInit[1] -= 1;
            }

          }else if (RoverOneInit[2] == 'E') {
            RoverOneInit[0] += 1;

            if (RoverOneInit[0] == RoverTwoInit[0]) {
              console.log('The rovers almost crashed! Moving Rover 1 back...');
               RoverOneInit[0] -= 1;
            }

          }else if (RoverOneInit[2] == 'S') {
            RoverOneInit[1] -= 1;

            if (RoverOneInit[1] == RoverTwoInit[1]) {
              console.log('The rovers almost crashed! Moving Rover 1 back...');
               RoverOneInit[1] += 1;
            }

          }else if (RoverOneInit[2] == 'W') {
            RoverOneInit[0] -= 1;

            if (RoverOneInit[0] == RoverTwoInit[0]) {
              console.log('The rovers almost crashed! Moving Rover 1 back...');
               RoverOneInit[0] += 1;
            }

          }

        }

        if (RoverTwoMovement[i] == 'L') {

          if (RoverTwoInit[2] == 'N') {
             RoverTwoInit[2] = 'W';
          }else if (RoverTwoInit[2] == 'E') {
             RoverTwoInit[2] = 'N';

          }else if (RoverTwoInit[2] == 'S') {
             RoverTwoInit[2] = 'E';

          }else if (RoverTwoInit[2] == 'W') {
             RoverTwoInit[2] = 'S';

          }

        }
        else if (RoverTwoMovement[i] == 'R') {

          if (RoverTwoInit[2] == 'N') {
             RoverTwoInit[2] = 'E';

          }else if (RoverTwoInit[2] == 'E') {
             RoverTwoInit[2] = 'S';

          }else if (RoverTwoInit[2] == 'S') {
             RoverTwoInit[2] = 'W';

          }else if (RoverTwoInit[2] == 'W') {
             RoverTwoInit[2] = 'N';

          }

        }

        else if (RoverTwoMovement[i] == 'M') {

          if ((RoverTwoInit[0] > Plateau[0]) || (RoverOneInit[1] > Plateau[1])) {
             console.log("Rover 2 fell off the plateau!");
          }


          if (RoverTwoInit[2] == 'N') {
            RoverTwoInit[1] += 1;

            if (RoverTwoInit[1] == RoverOneInit[1]) {
              console.log('The rovers almost crashed! Moving Rover 2 back...');
              RoverOneInit[1] -= 1;
            }

          }

          if (RoverTwoInit[2] == 'E') {
            RoverTwoInit[0] += 1;

            if (RoverTwoInit[0] == RoverOneInit[0]) {
              console.log('The rovers almost crashed! Moving Rover 2 back...');
              RoverOneInit[0] -= 1;
            }

          }

          if (RoverTwoInit[2] == 'S') {
            RoverTwoInit[1] -= 1;


          }

          if (RoverTwoInit[2] == 'W') {
            RoverTwoInit[0] -= 1;

          }

        }

      }

  }

  moveRovers();


      console.log('Rover 1 ended at:', RoverOneInit);

      console.log('Rover 2 ended at:', RoverTwoInit);



  });
})(jQuery);
