
//Car Object Challege
//Purpose: Create a Constructor that creates a car.
//Signature: Create a car, and then return the car.
function cars(make, model, year, color) {
    return {
      make: make,
      model: model,
      year: year,
      color: color,
      getCar:function() {return this.make + " " + this.model + " " + this.year + " " + this.color}
    };
  }
//Create a car
var car1 = cars("Ford", "Mustang", "1966", "Red");
//Return the car
car1.getCar();


//car speed
//Purpose: Create functions for speed, acceleration and deceleration.
//Sinature: Input accelerate or brake, and getSpeed.
function cars(make, model, year, color) {
  var speed = 55;
    return {
      make: make,
      model: model,
      year: year,
      color: color,
      getCar:function() {return this.make + " " + this.model + " " + this.year + " " + this.color},
      getSpeed: function() { return speed; },
      accelerate: function() { speed += 10; },
      brake: function() { speed -= 7; }
    };
  }

// Car speed loop up to 70mph.
function cars(make, model, year, color) {
  var speed = 0;
    return {
      make: make,
      model: model,
      year: year,
      color: color,
      getCar:function() {return this.make + " " + this.model + " " + this.year + " " + this.color},
      getSpeed: function() { return speed; },
      accelerate: function() { speed += 10; },
      brake: function() { speed -= 7; }
    };
  }

  var car1 = cars("Ford", "Mustang", "1966", "Red");
  while (car1.getSpeed() < 70){
    car1.accelerate()
    console.log(car1.getSpeed());
  }

  // Car speed loop decelerates to 0mph.
  function cars(make, model, year, color) {
    var speed = 70;
      return {
        make: make,
        model: model,
        year: year,
        color: color,
        getCar:function() {return this.make + " " + this.model + " " + this.year + " " + this.color},
        getSpeed: function() { return speed; },
        accelerate: function() { speed += 10; },//decelerates to 0mph. if you use 0 then it will give -10mph.
        brake: function() { speed -= 10; }
      };
    }

    var car1 = cars("Volkswagon", "Jetta", "1997", "Black");
    while (car1.getSpeed() > 0){
      car1.brake()
      console.log(car1.getSpeed());
    }

    // Car speed loop decelerates to 0mph, and brakes at 0pmh.
    function cars(make, model, year, color) {
      var speed = 70;
        return {
          make: make,
          model: model,
          year: year,
          color: color,
          getCar:function() {return this.make + " " + this.model + " " + this.year + " " + this.color},
          getSpeed: function() { return speed; },
          accelerate: function() { speed += 10; },
          brake: function() {
            if (speed >= 10) { //brakes at 0mph rather than at -10mph
              speed -= 10;
            }
          }
        };
      }

      var car1 = cars("Volkswagon", "Jetta", "1997", "Black");
      while (car1.getSpeed() > 0){
        car1.brake()
        console.log(car1.getSpeed());
      }

      // Limit car speed up to 85mph. Tries taking it to 80mph, and something happens...
      function cars(make, model, year, color) {
        var speed = 0;
          return {
            make: make,
            model: model,
            year: year,
            color: color,
            getCar:function() {return this.make + " " + this.model + " " + this.year + " " + this.color},
            getSpeed: function() { return speed; },
            accelerate: function() {
              if (speed < 75) {//Make the speed less than 85 because the increments will go to 90mph if you set it to 85mph.
                speed += 10;
              }
            },
            brake: function() { speed -= 7; }
          };
        }

        var car1 = cars("Ford", "Mustang", "1966", "Red");
        while (car1.getSpeed() < 80){
          car1.accelerate()
          console.log(car1.getSpeed());
        }
