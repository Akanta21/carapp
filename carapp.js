angular.module('carApp', [])
  .controller('CarController', function() {
    var carList = this;
    carList.cars = [
      {type:'Mazda', price: 20000, sold:false, display:false},
      {type:'Ferrari', price: 35000, sold:false, display:false}];

    carList.goCars = false;

    carList.addCar = function() {
      carList.cars.push(
        {type:carList.carType,
          price:carList.carPrice,
          sold:false});
      carList.carType = '';
      carList.carPrice = 0;
    };
    carList.updateCar = function(index) {
      carList.cars[index].type = carList.carUpdateType
      carList.cars[index].price = carList.carUpdatePrice
      carList.cars[index].display = false
    };
    carList.deleteCar = function(index) {
      carList.cars.splice(index, 1)
    }
    carList.remaining = function() {
      var count = 0;
      angular.forEach(carList.cars, function(car) {
        count += car.sold ? 0 : 1;
      });
      return count;
    };

    carList.archive = function() {
      var oldCars = carList.cars;
      carList.cars = [];
      angular.forEach(oldCars, function(car) {
        if (!car.sold) carList.cars.push(car);
      });
    };
  });
