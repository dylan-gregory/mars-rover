var jQuery = require('jquery');

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


    RoverOneMovement.map((value) => {

      if (value == 'L') {
        if (RoverOneInit[2] == 'N') {
          return RoverOneInit[2] = 'W';

        }

        if (RoverOneInit[2] == 'E') {
          return RoverOneInit[2] = 'N';

        }

        if (RoverOneInit[2] == 'S') {
          return RoverOneInit[2] = 'E';

        }

        if (RoverOneInit[2] == 'W') {
          return RoverOneInit[2] = 'S';

        }

      }
      else if (value == 'R') {

        if (RoverOneInit[2] == 'N') {
          return RoverOneInit[2] = 'E';

        }

        if (RoverOneInit[2] == 'E') {
          return RoverOneInit[2] = 'S';

        }

        if (RoverOneInit[2] === 'S') {
          return RoverOneInit[2] = 'W';

        }

        if (RoverOneInit[2] == 'W') {
          return RoverOneInit[2] = 'N';

        }

      }

      else if (value == 'M') {

        if (RoverOneInit[2] == 'N') {
          return RoverOneInit[1] += 1;

        }

        if (RoverOneInit[2] == 'E') {
          return RoverOneInit[0] += 1;

        }

        if (RoverOneInit[2] == 'S') {
          return RoverOneInit[1] -= 1;

        }

        if (RoverOneInit[2] == 'W') {
          return RoverOneInit[0] -= 1;

        }

      }



    });


      console.log('final', RoverOneInit);





// Second Rover //
      RoverTwoMovement.map((value) => {

        if (value == 'L') {

          if (RoverTwoInit[2] == 'N') {
            return RoverTwoInit[2] = 'W';
          }

          if (RoverTwoInit[2] == 'E') {
            return RoverTwoInit[2] = 'N';

          }

          if (RoverTwoInit[2] == 'S') {
            return RoverTwoInit[2] = 'E';

          }

          if (RoverTwoInit[2] == 'W') {
            return RoverTwoInit[2] = 'S';

          }

        }
        else if (value == 'R') {

          if (RoverTwoInit[2] == 'N') {
            return RoverTwoInit[2] = 'E';

          }

          if (RoverTwoInit[2] == 'E') {
            return RoverTwoInit[2] = 'S';

          }

          if (RoverTwoInit[2] == 'S') {
            return RoverTwoInit[2] = 'W';

          }

          if (RoverTwoInit[2] == 'W') {
            return RoverTwoInit[2] = 'N';

          }

        }

        else if (value == 'M') {

          if (RoverTwoInit[2] == 'N') {
            return RoverTwoInit[1] += 1;

          }

          if (RoverTwoInit[2] == 'E') {
            return RoverTwoInit[0] += 1;

          }

          if (RoverTwoInit[2] == 'S') {
            return RoverTwoInit[1] -= 1;

          }

          if (RoverTwoInit[2] == 'W') {
            return RoverTwoInit[0] -= 1;

          }

        }


      });
      console.log('final 2', RoverTwoInit);


  });
})(jQuery);
